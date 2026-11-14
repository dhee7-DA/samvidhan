import { CONSTITUTION_PARTS } from '../partsData';
import { ARTICLES_MASTER_INDEX } from '../articlesMasterData';
import type { ArticleItem, ConstitutionPart } from '../../types/constitution';

export interface ResolvedArticleDetails {
  number: string;
  displayNumber: string;
  title: string;
  partId: string;
  partName: string;
  category: string;
  summary: string;
  verbatimSnippet: string;
  plainEnglish?: string;
  prosecutionNote?: string;
  clauses?: { clause: string; explanation: string; example?: string }[];
  exceptions?: string[];
  landmarkCases?: { caseName: string; year: number; bench?: string; summary: string; significance: string }[];
}

export function lookupBootcampArticle(artStr: string): ResolvedArticleDetails {
  // Normalize string: e.g. "Art. 1", "Art 21A", "Article 368", "14" -> "1", "21A", "368", "14"
  const clean = artStr.replace(/^art(\.|icle)?\s*/i, '').trim().toUpperCase();

  // 1. Search in CONSTITUTION_PARTS
  for (const part of CONSTITUTION_PARTS) {
    const found = part.articles.find(
      (a) => a.number.toUpperCase() === clean || a.number.toUpperCase().replace(/\s+/g, '') === clean
    );
    if (found) {
      return {
        number: found.number,
        displayNumber: `Article ${found.number}`,
        title: found.title,
        partId: part.id,
        partName: `${part.partNumber}: ${part.title}`,
        category: part.category,
        summary: found.summary,
        verbatimSnippet: found.textSnippet,
        plainEnglish: found.plainEnglish,
        prosecutionNote: found.prosecutionNote,
        clauses: found.clauses,
        exceptions: found.exceptions,
        landmarkCases: found.landmarkCases
      };
    }
  }

  // 2. Search in ARTICLES_MASTER_INDEX
  const master = ARTICLES_MASTER_INDEX.find(
    (a) => a.articleNumber.toUpperCase() === clean || a.articleNumber.toUpperCase().replace(/\s+/g, '') === clean
  );
  if (master) {
    // Map part string to partId
    const partMap: Record<string, string> = {
      'Part I': 'part-1',
      'Part II': 'part-2',
      'Part III': 'part-3',
      'Part IV': 'part-4',
      'Part IV-A': 'part-4a',
      'Part V': 'part-5',
      'Part VI': 'part-6',
      'Part VII': 'part-7',
      'Part VIII': 'part-8',
      'Part IX': 'part-9',
      'Part IX-A': 'part-9a',
      'Part IX-B': 'part-9b',
      'Part X': 'part-10',
      'Part XI': 'part-11',
      'Part XII': 'part-12',
      'Part XIII': 'part-13',
      'Part XIV': 'part-14',
      'Part XIV-A': 'part-14a',
      'Part XV': 'part-15',
      'Part XVI': 'part-16',
      'Part XVII': 'part-17',
      'Part XVIII': 'part-18',
      'Part XIX': 'part-19',
      'Part XX': 'part-20',
      'Part XXI': 'part-21',
      'Part XXII': 'part-22'
    };

    return {
      number: master.articleNumber,
      displayNumber: `Article ${master.articleNumber}`,
      title: master.title,
      partId: partMap[master.part] || 'part-1',
      partName: master.part,
      category: master.category,
      summary: master.conciseSummary,
      verbatimSnippet: master.conciseSummary,
      prosecutionNote: `Article ${master.articleNumber} is high-yield for constitutional definitions, jurisdictional boundaries, and statutory interpretation in the JKPSC Prosecuting Officer exam.`
    };
  }

  // 3. Fallback generic
  return {
    number: clean,
    displayNumber: `Article ${clean}`,
    title: `Provisions of Article ${clean}`,
    partId: 'part-3',
    partName: 'Constitution of India',
    category: 'Constitutional Law',
    summary: `Constitutional mandate and statutory provisions governing Article ${clean}.`,
    verbatimSnippet: `The constitutional provisions under Article ${clean} govern legal powers, obligations, and fundamental rights.`,
    prosecutionNote: `Review statutory applicability and leading judicial interpretations for Article ${clean}.`
  };
}
