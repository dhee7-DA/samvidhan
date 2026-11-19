import type {
  MainsMasterQuestion,
  AnswerEvaluationResult,
  EvaluationArticleCheck,
  EvaluationCitationCheck,
  EvaluationRubricScore
} from '../types/mainsQuestionTypes';
import type { PyqQuestion } from '../data/pyqData';

/**
 * Intelligent client-side Mains Answer Evaluation Service.
 * Evaluates candidate draft answers against bare act anchors, mandatory precedents,
 * structural blueprints, word limit tolerances, and scoring rubrics.
 */

// Helper to extract word count
export function countWords(text: string): number {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Clean case names for robust matching (e.g. "Maneka Gandhi v. Union of India (1978)" -> ["Maneka Gandhi", "Maneka"])
function extractCaseKeywords(fullCitation: string): string[] {
  const clean = fullCitation.replace(/\([^\)]*\)/g, '').trim();
  const vSplit = clean.split(/\s+(?:v\.|vs\.|versus)\s+/i);
  const keywords: string[] = [];

  if (vSplit[0]) {
    const petitioner = vSplit[0].replace(/^(State of\s+|Union of\s+|In Re:\s+)/i, '').trim();
    if (petitioner.length > 3) keywords.push(petitioner);
    // Also take first distinctive word if > 4 chars
    const firstWord = petitioner.split(/\s+/)[0];
    if (firstWord && firstWord.length > 4 && !keywords.includes(firstWord)) {
      keywords.push(firstWord);
    }
  }

  // Also include the raw short name if available
  const matchParen = fullCitation.match(/^([A-Za-z\s\.\&]+)/);
  if (matchParen && matchParen[1]) {
    const raw = matchParen[1].trim();
    if (!keywords.includes(raw) && raw.length > 3) {
      keywords.push(raw);
    }
  }

  return keywords.length > 0 ? keywords : [fullCitation.slice(0, 15)];
}

// Check if an article/statute reference exists in the text
function matchesArticle(text: string, articleName: string): boolean {
  // Normalize e.g. "Article 21" or "Art 21" or "Section 152 BNS"
  const digitsMatch = articleName.match(/\d+[A-Z]?/i);
  if (!digitsMatch) {
    // Non-numbered article like "Preamble"
    const regex = new RegExp(`\\b${articleName}\\b`, 'i');
    return regex.test(text);
  }

  const numberPart = digitsMatch[0];
  const isSection = /section|sec/i.test(articleName);

  if (isSection) {
    const secRegex = new RegExp(`(?:section|sec\\.?|s\\.?)\\s*${numberPart}\\b`, 'i');
    return secRegex.test(text) || new RegExp(`\\b${numberPart}\\b.*?(?:BNS|IPC|CrPC|BNSS)`, 'i').test(text);
  }

  // Articles
  const artRegex = new RegExp(`(?:article|art\\.?)\\s*${numberPart}\\b`, 'i');
  return artRegex.test(text) || new RegExp(`\\bArt\\.?\\s*${numberPart}\\b`, 'i').test(text);
}

export function evaluateMainsDraft(
  draftText: string,
  question: MainsMasterQuestion | (PyqQuestion & { hoverIntel?: any; targetWordMin?: number; targetWordMax?: number })
): AnswerEvaluationResult {
  const wordCount = countWords(draftText);
  const lowerText = (draftText || '').toLowerCase();

  // 1. Target limits
  const baseMarks = 'typicalMarks' in question ? question.typicalMarks : ('marks' in question ? question.marks : 10);
  const targetMin = ('targetWordMin' in question && question.targetWordMin) ? question.targetWordMin : Math.round(baseMarks * 20 * 0.85);
  const targetMax = ('targetWordMax' in question && question.targetWordMax) ? question.targetWordMax : Math.round(baseMarks * 20 * 1.15);
  const maxScore = baseMarks;

  // If empty draft
  if (wordCount === 0) {
    return {
      score: 0,
      maxScore,
      percentage: 0,
      gradeTier: 'Needs Substantial Authority',
      wordCount: 0,
      wordCountCompliance: 'Under-Length',
      wordCountFeedback: 'Scratchpad is empty. Begin typing your answer following the 4-step blueprint.',
      articlesChecked: [],
      citationsChecked: [],
      blueprintStepsDetected: {
        step1Intro: false,
        step2DoctrinalCore: false,
        step3Precedents: false,
        step4Conclusion: false
      },
      trapAvoidanceFeedback: 'No draft detected.',
      rubricBreakdown: (question.scoringRubric || []).map((r) => ({
        criterion: r.criterion,
        maxMarks: r.marks,
        awardedMarks: 0,
        feedback: 'No content submitted for this dimension.'
      })),
      strengths: [],
      recommendations: ['Draft an answer using the provided 4-step blueprint to receive automated diagnostic feedback.']
    };
  }

  // 2. Word Count Compliance
  let wordCountCompliance: 'Optimal' | 'Under-Length' | 'Over-Length' = 'Optimal';
  let wordComplianceFactor = 1.0;
  let wordCountFeedback = '';

  if (wordCount < targetMin * 0.7) {
    wordCountCompliance = 'Under-Length';
    wordComplianceFactor = Math.max(0.4, wordCount / targetMin);
    wordCountFeedback = `Significant under-length penalty: Your draft has ${wordCount} words, which is under the minimum recommended benchmark (${targetMin} words). Expand on doctrinal reasoning and case analysis.`;
  } else if (wordCount < targetMin) {
    wordCountCompliance = 'Under-Length';
    wordComplianceFactor = 0.85;
    wordCountFeedback = `Mildly brief: ${wordCount} words (Target: ${targetMin}–${targetMax} words). Sufficient for passing, but adding an extra sub-principle or ratio will boost your score.`;
  } else if (wordCount > targetMax * 1.25) {
    wordCountCompliance = 'Over-Length';
    wordComplianceFactor = 0.85;
    wordCountFeedback = `Over-length warning: ${wordCount} words exceeds the exam maximum (${targetMax} words). In real exams, exceeding space incurs strict time and presentation penalties. Prune non-essential introductory remarks.`;
  } else {
    wordCountCompliance = 'Optimal';
    wordComplianceFactor = 1.0;
    wordCountFeedback = `Optimal length: ${wordCount} words falls perfectly within the sweet-spot range (${targetMin}–${targetMax} words ≈ ${(wordCount / 200).toFixed(1)} exam pages).`;
  }

  // 3. Articles & Statutory Anchors Check
  const expectedArticles: string[] =
    ('hoverIntel' in question && question.hoverIntel?.coreArticles)
      ? question.hoverIntel.coreArticles
      : ('relevantArticles' in question && question.relevantArticles)
      ? question.relevantArticles
      : [];

  const articlesChecked: EvaluationArticleCheck[] = expectedArticles.map((art) => ({
    article: art,
    matched: matchesArticle(draftText, art)
  }));

  const matchedArticlesCount = articlesChecked.filter((a) => a.matched).length;
  const articlesRatio = expectedArticles.length > 0 ? matchedArticlesCount / expectedArticles.length : 0.8;

  // 4. Precedents & Citations Check
  const expectedCitations: string[] =
    ('essentialCitations' in question && question.essentialCitations)
      ? question.essentialCitations
      : ('hoverIntel' in question && question.hoverIntel?.benchmarkCases)
      ? question.hoverIntel.benchmarkCases
      : [];

  const citationsChecked: EvaluationCitationCheck[] = expectedCitations.map((cite) => {
    const keywords = extractCaseKeywords(cite);
    const matched = keywords.some((kw) => lowerText.includes(kw.toLowerCase()));
    return {
      citation: cite,
      matched
    };
  });

  const matchedCitationsCount = citationsChecked.filter((c) => c.matched).length;
  const citationsRatio = expectedCitations.length > 0 ? matchedCitationsCount / expectedCitations.length : 0.8;

  // 5. Blueprint Anatomy Detection
  const step1Intro =
    lowerText.includes('article') ||
    lowerText.includes('preamble') ||
    lowerText.includes('constitution') ||
    lowerText.includes('guarantee') ||
    lowerText.includes('enacted') ||
    lowerText.includes('statutory') ||
    lowerText.includes('embodies') ||
    lowerText.includes('definition');

  const step2DoctrinalCore =
    lowerText.includes('doctrine') ||
    lowerText.includes('test') ||
    lowerText.includes('principle') ||
    lowerText.includes('scope') ||
    lowerText.includes('ingredient') ||
    lowerText.includes('classification') ||
    lowerText.includes('arbitrary') ||
    lowerText.includes('due process') ||
    lowerText.includes('nexus') ||
    lowerText.includes('substantive') ||
    lowerText.includes('competence');

  const step3Precedents =
    lowerText.includes('held') ||
    lowerText.includes('ruled') ||
    lowerText.includes('bench') ||
    lowerText.includes('supreme court') ||
    lowerText.includes('judgement') ||
    lowerText.includes('judgment') ||
    lowerText.includes('overruled') ||
    lowerText.includes('v.') ||
    lowerText.includes('vs.') ||
    lowerText.includes('observed');

  const step4Conclusion =
    lowerText.includes('conclude') ||
    lowerText.includes('conclusion') ||
    lowerText.includes('therefore') ||
    lowerText.includes('thus') ||
    lowerText.includes('in fine') ||
    lowerText.includes('consequently') ||
    lowerText.includes('held accordingly') ||
    lowerText.includes('balance') ||
    lowerText.includes('rule of law') ||
    lowerText.includes('synthesis');

  const blueprintStepsDetected = {
    step1Intro,
    step2DoctrinalCore,
    step3Precedents,
    step4Conclusion
  };

  const blueprintCount = Object.values(blueprintStepsDetected).filter(Boolean).length;
  const blueprintFactor = 0.5 + (blueprintCount / 4) * 0.5; // range: 0.5 to 1.0

  // 6. Trap Avoidance Check
  let trapAvoidanceFeedback = 'Examiner Trap Check: Passed. Answer maintains appropriate doctrinal caution.';
  if ('hoverIntel' in question && question.hoverIntel?.examinerTrapWarning) {
    const trapText = question.hoverIntel.examinerTrapWarning.toLowerCase();
    // Example traps: waiver allowed, active euthanasia, pocket veto exists
    if (trapText.includes('waiver') && lowerText.includes('waiver') && !lowerText.includes('cannot be waived') && !lowerText.includes('no waiver')) {
      trapAvoidanceFeedback = '⚠️ Examiner Trap Caution: Verify you did not state that fundamental rights can be waived. Emphasize Basheshar Nath holding that Part III rights cannot be waived in India!';
    } else if (trapText.includes('pocket veto') && lowerText.includes('pocket veto') && !lowerText.includes('no pocket veto') && !lowerText.includes('cannot sit')) {
      trapAvoidanceFeedback = '⚠️ Examiner Trap Caution: State clearly that the Governor has NO pocket veto under Article 200 (State of Punjab 2023)!';
    } else if (trapText.includes('compensatory tax') && lowerText.includes('compensatory tax') && !lowerText.includes('overruled') && !lowerText.includes('abolished')) {
      trapAvoidanceFeedback = '⚠️ Examiner Trap Caution: The compensatory tax doctrine was decisively OVERRULED in Jindal Stainless (2016)! Highlight this overruling explicitly.';
    }
  }

  // 7. Rubric Item Scoring
  const rubricBreakdown: EvaluationRubricScore[] = (question.scoringRubric || []).map((item) => {
    // Base score for this rubric element
    let qualityMultiplier = 0.5; // baseline attempt

    const itemLower = item.criterion.toLowerCase();

    // Check if the student mentioned key terms in the criterion
    const words = itemLower.split(/[\s,]+/i).filter((w) => w.length > 3);
    const matchedKeywords = words.filter((w) => lowerText.includes(w));
    const matchRatio = words.length > 0 ? matchedKeywords.length / words.length : 0.5;

    if (matchRatio > 0.4) qualityMultiplier += 0.3;
    if (matchRatio > 0.7) qualityMultiplier += 0.2;

    // Scale by citation and article presence if applicable
    if (itemLower.includes('case') || itemLower.includes('ratio') || itemLower.includes('precedent')) {
      qualityMultiplier = Math.min(1.0, qualityMultiplier * 0.4 + citationsRatio * 0.6);
    } else if (itemLower.includes('article') || itemLower.includes('provision') || itemLower.includes('amendment')) {
      qualityMultiplier = Math.min(1.0, qualityMultiplier * 0.4 + articlesRatio * 0.6);
    }

    // Apply global length penalty if severely truncated
    qualityMultiplier *= wordComplianceFactor;

    // Calculate marks rounded to nearest 0.5
    const awardedMarks = Math.min(item.marks, Math.max(0.5, Math.round(item.marks * qualityMultiplier * 2) / 2));

    let feedback = 'Sound legal discussion matching rubric criteria.';
    if (awardedMarks === item.marks) {
      feedback = 'Full marks: Complete doctrinal precision, accurate terminology, and authority cited.';
    } else if (awardedMarks >= item.marks * 0.7) {
      feedback = 'Competent presentation. Expand slightly on the reasoning or specific sub-test for maximum marks.';
    } else {
      feedback = 'Room for improvement: Explicitly address the specific legal formula mentioned in this criterion.';
    }

    return {
      criterion: item.criterion,
      maxMarks: item.marks,
      awardedMarks,
      feedback
    };
  });

  // Calculate Raw Total
  let rawTotal = rubricBreakdown.reduce((sum, r) => sum + r.awardedMarks, 0);

  // Bonus/Deduction adjustments
  if (matchedCitationsCount === expectedCitations.length && expectedCitations.length > 0) {
    rawTotal += 0.5; // bonus for all benchmark cases cited
  }

  // Final score clamping
  const finalScore = Math.min(maxScore, Math.max(0.5, Math.round(rawTotal * 2) / 2));
  const percentage = Math.round((finalScore / maxScore) * 100);

  // 8. Grade Tier
  let gradeTier: AnswerEvaluationResult['gradeTier'] = 'Average (Borderline Pass)';
  if (percentage >= 80) {
    gradeTier = 'Outstanding (Rank 1–10 Material)';
  } else if (percentage >= 65) {
    gradeTier = 'Judiciary Cutoff Cleared';
  } else if (percentage >= 45) {
    gradeTier = 'Average (Borderline Pass)';
  } else {
    gradeTier = 'Needs Substantial Authority';
  }

  // 9. Strengths & Recommendations
  const strengths: string[] = [];
  const recommendations: string[] = [];

  if (wordCountCompliance === 'Optimal') {
    strengths.push(`Strict Word & Page Discipline: Crafted within ideal ${targetMin}–${targetMax} words (~${(wordCount / 200).toFixed(1)} exam pages).`);
  }
  if (matchedCitationsCount > 0) {
    strengths.push(`Precedent Backing: Successfully integrated key authorities (${matchedCitationsCount} benchmark citations identified).`);
  }
  if (matchedArticlesCount === expectedArticles.length && expectedArticles.length > 0) {
    strengths.push(`Constitutional Precision: All target Bare Act statutory provisions cited.`);
  }
  if (blueprintCount >= 3) {
    strengths.push(`Structured Flow: Follows professional 4-step Mains answer blueprint structure.`);
  }

  // Recommendations for improvement
  const missingCitations = citationsChecked.filter((c) => !c.matched);
  if (missingCitations.length > 0) {
    recommendations.push(
      `Cite Missing Authorities: Integrate ${missingCitations.slice(0, 2).map((c) => c.citation).join(' and ')} to elevate doctrinal authority.`
    );
  }

  const missingArticles = articlesChecked.filter((a) => !a.matched);
  if (missingArticles.length > 0) {
    recommendations.push(
      `Anchor Bare Act Text: Mention ${missingArticles.join(', ')} explicitly in your introductory framing.`
    );
  }

  if (!step4Conclusion) {
    recommendations.push(
      'Add a dedicated Concluding Synthesis paragraph linking the legal doctrine with democratic accountability or constitutionalism.'
    );
  }

  if (recommendations.length === 0) {
    recommendations.push('Superb draft. Practice reproducing this answer within the target time pacing under exam conditions.');
  }

  return {
    score: finalScore,
    maxScore,
    percentage,
    gradeTier,
    wordCount,
    wordCountCompliance,
    wordCountFeedback,
    articlesChecked,
    citationsChecked,
    blueprintStepsDetected,
    trapAvoidanceFeedback,
    rubricBreakdown,
    strengths,
    recommendations
  };
}
