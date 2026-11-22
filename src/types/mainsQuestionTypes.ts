export type MarksTier = 5 | 10 | 15 | 20 | 25;

export type ExamCategory =
  | 'ALL'
  | 'DJS'          // Delhi Judicial Service
  | 'UP_PCSJ'       // Uttar Pradesh Judicial Service
  | 'MPJ'           // Madhya Pradesh Judicial Service
  | 'BJS'           // Bihar Judicial Service
  | 'RJS'           // Rajasthan Judicial Service
  | 'PROSECUTION'   // CBI Public Prosecutor / State APP/APO
  | 'UPSC_LAW'      // UPSC Civil Services Law Optional
  | 'UPSC_GS2';     // UPSC Civil Services GS-2 (Polity & Constitution)

export interface QuestionHoverIntel {
  topicName: string;
  topicPillar: string;
  examImportance: string;         // e.g. "⭐⭐⭐⭐⭐ Ultra High Yield (Guaranteed Core)"
  examFrequency: string;          // e.g. "Appeared 8 times in past 12 years across DJS, UP PCS-J, BJS, CBI APP"
  weightagePattern: string;       // e.g. "15 Marks | 250–300 Words (≈ 1.5 Exam Pages)"
  targetTimeMinutes: number;      // e.g. 12 minutes
  examinerTrapWarning: string;    // Common candidate trap/pitfall
  recentTrendAlert?: string;      // 2023–2024 update / landmark Constitution Bench ruling
  coreArticles: string[];         // e.g. ['Art. 20(3)', 'Art. 21', 'Sec. 349 BNSS']
  benchmarkCases: string[];       // Leading judgments to cite
}

export interface AnswerBlueprint {
  step1Intro: string;
  step2DoctrinalCore: string;
  step3PrecedentEvolution: string;
  step4Conclusion: string;
}

export interface ScoringRubricItem {
  criterion: string;
  marks: number;
}

export interface MainsMasterQuestion {
  id: string;
  title: string;
  topicId: string;
  marksCategory: MarksTier;
  examCategory: ExamCategory;
  examsAppeared: string[];
  typicalMarks: number;
  targetWordLimit: string;
  targetWordMin: number;
  targetWordMax: number;
  estimatedPages: string;
  targetTimeMinutes: number;
  questionText: string;
  coreIssues: string[];
  examinerExpectation: string;
  essentialCitations: string[];
  hoverIntel: QuestionHoverIntel;
  answerBlueprint: AnswerBlueprint;
  fullModelAnswer: string;
  scoringRubric: ScoringRubricItem[];
}

export interface EvaluationCitationCheck {
  citation: string;
  matched: boolean;
}

export interface EvaluationArticleCheck {
  article: string;
  matched: boolean;
}

export interface EvaluationRubricScore {
  criterion: string;
  maxMarks: number;
  awardedMarks: number;
  feedback: string;
}

export interface AnswerEvaluationResult {
  score: number;
  maxScore: number;
  percentage: number;
  gradeTier: 'Outstanding (Rank 1–10 Material)' | 'Judiciary Cutoff Cleared' | 'Average (Borderline Pass)' | 'Needs Substantial Authority';
  wordCount: number;
  wordCountCompliance: 'Optimal' | 'Under-Length' | 'Over-Length';
  wordCountFeedback: string;
  articlesChecked: EvaluationArticleCheck[];
  citationsChecked: EvaluationCitationCheck[];
  blueprintStepsDetected: {
    step1Intro: boolean;
    step2DoctrinalCore: boolean;
    step3Precedents: boolean;
    step4Conclusion: boolean;
  };
  trapAvoidanceFeedback: string;
  rubricBreakdown: EvaluationRubricScore[];
  strengths: string[];
  recommendations: string[];
}
