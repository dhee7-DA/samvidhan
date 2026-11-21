import catalogData from '../data/allConstitutionArticlesCatalog.json';
import { MATH_FORMULA_PAIRS, type MathFormulaPair, lookupSpeedHackForArticle } from '../data/fastTrackHacksData';

export type MasteryStatus = 'unattempted' | 'learning' | 'mastered' | 'needs_review';

export interface ArticleRecord {
  number: string;
  part: string;
  partTitle: string;
  title: string;
  summary: string;
  category: string;
  isAmended: boolean;
}

export interface ArticleMasteryState {
  status: MasteryStatus;
  correctCount: number;
  incorrectCount: number;
  lastAttempted?: number;
}

export interface MasterySummary {
  total: number;
  mastered: number;
  learning: number;
  needsReview: number;
  unattempted: number;
  accuracyRate: number;
}

export interface MasteryQuestion {
  id: string;
  type: 'article_to_subject' | 'subject_to_article' | 'plus_rule';
  prompt: string;
  subPrompt?: string;
  correctArticleNumber: string;
  correctAnswer: string;
  options: { label: string; value: string; isCorrect: boolean }[];
  explanation: string;
  mnemonicHook?: string;
  part: string;
}

const STORAGE_KEY = 'samvidhan_article_mastery_v2';

export const HIGH_YIELD_ARTICLES = new Set([
  '1', '2', '3', '5', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '21A', '22', '23', '24', '25', '26', '27', '28', '29', '30', '32',
  '38', '39', '39A', '40', '44', '45', '48A', '50', '51', '51A',
  '52', '53', '54', '61', '72', '74', '75', '76', '78',
  '79', '80', '81', '100', '102', '105', '108', '110', '111', '112', '123',
  '124', '129', '131', '136', '137', '141', '142', '143', '148',
  '153', '154', '161', '163', '164', '165', '167', '169', '170', '191', '194', '199', '200', '202', '213',
  '214', '215', '226', '227', '233',
  '239AA', '243', '243A', '243B', '243D', '243G', '243I', '243K', '243W', '243ZD',
  '246', '248', '249', '252', '254', '262', '263',
  '265', '266', '267', '279A', '280', '300A',
  '301', '311', '312', '315', '320',
  '324', '326',
  '330', '335', '338', '338A', '338B',
  '343', '350A', '350B', '351',
  '352', '356', '360', '365',
  '368', '370', '371A'
]);

export const CLUSTERS = [
  { id: 'all', label: 'All Articles (1–395)', parts: [] as string[] },
  { id: 'high-yield', label: 'Superstars (High-Yield 75+)', parts: [] as string[], highYieldOnly: true },
  { id: 'part3', label: 'Fundamental Rights (12–35)', parts: ['Part III'] },
  { id: 'part4', label: 'DPSPs & Duties (36–51A)', parts: ['Part IV', 'Part IV-A'] },
  { id: 'part5-exec', label: 'Union Executive & Council (52–78)', parts: ['Part V'], numRange: [52, 78] },
  { id: 'part5-leg', label: 'Parliament Machinery (79–123)', parts: ['Part V'], numRange: [79, 123] },
  { id: 'judiciary', label: 'Supreme Court & High Courts', parts: ['Part V', 'Part VI'], customFilter: (a: ArticleRecord) => {
    const n = parseInt(a.number, 10);
    return (n >= 124 && n <= 147) || (n >= 214 && n <= 237);
  }},
  { id: 'part6-state', label: 'State Executive & Assembly (152–213)', parts: ['Part VI'], numRange: [152, 213] },
  { id: 'local-bodies', label: 'Panchayats & Municipalities (243)', parts: ['Part IX', 'Part IX-A', 'Part IX-B'] },
  { id: 'federal-finance', label: 'Federal & Financial (245–300A)', parts: ['Part XI', 'Part XII'] },
  { id: 'services-elections', label: 'Services, Commissions & Elections', parts: ['Part XIV', 'Part XV', 'Part XVI'] },
  { id: 'emergency-amendment', label: 'Emergency & Amendment (352–368)', parts: ['Part XVIII', 'Part XX'] }
];

class ArticleMasteryService {
  private catalog: ArticleRecord[] = catalogData as ArticleRecord[];
  private masteryStore: Record<string, ArticleMasteryState> = {};

  constructor() {
    this.loadState();
  }

  private loadState(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.masteryStore = JSON.parse(raw);
      }
    } catch (e) {
      this.masteryStore = {};
    }
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.masteryStore));
    } catch (e) {
      // ignore
    }
  }

  public getAllArticles(): ArticleRecord[] {
    return this.catalog;
  }

  public getArticle(num: string): ArticleRecord | undefined {
    return this.catalog.find(a => a.number.toLowerCase() === num.toLowerCase());
  }

  public getMasteryState(num: string): ArticleMasteryState {
    return (
      this.masteryStore[num] || {
        status: 'unattempted',
        correctCount: 0,
        incorrectCount: 0
      }
    );
  }

  public recordAttempt(num: string, isCorrect: boolean): void {
    const current = this.getMasteryState(num);
    const correctCount = isCorrect ? current.correctCount + 1 : current.correctCount;
    const incorrectCount = isCorrect ? current.incorrectCount : current.incorrectCount + 1;

    let status: MasteryStatus = current.status;
    if (isCorrect) {
      if (correctCount >= 2 && incorrectCount === 0) {
        status = 'mastered';
      } else if (correctCount >= 3 && correctCount > incorrectCount) {
        status = 'mastered';
      } else {
        status = 'learning';
      }
    } else {
      status = 'needs_review';
    }

    this.masteryStore[num] = {
      status,
      correctCount,
      incorrectCount,
      lastAttempted: Date.now()
    };
    this.saveState();
  }

  public setManualStatus(num: string, status: MasteryStatus): void {
    const current = this.getMasteryState(num);
    this.masteryStore[num] = {
      ...current,
      status,
      lastAttempted: Date.now()
    };
    this.saveState();
  }

  public resetAllProgress(): void {
    this.masteryStore = {};
    this.saveState();
  }

  public getSummary(): MasterySummary {
    let mastered = 0;
    let learning = 0;
    let needsReview = 0;
    let unattempted = 0;
    let totalAttempts = 0;
    let totalCorrect = 0;

    for (const art of this.catalog) {
      const state = this.masteryStore[art.number];
      if (!state || state.status === 'unattempted') {
        unattempted++;
      } else if (state.status === 'mastered') {
        mastered++;
      } else if (state.status === 'learning') {
        learning++;
      } else if (state.status === 'needs_review') {
        needsReview++;
      }

      if (state) {
        totalAttempts += state.correctCount + state.incorrectCount;
        totalCorrect += state.correctCount;
      }
    }

    const accuracyRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
      total: this.catalog.length,
      mastered,
      learning,
      needsReview,
      unattempted,
      accuracyRate
    };
  }

  public getArticlesByCluster(clusterId: string): ArticleRecord[] {
    const cluster = CLUSTERS.find(c => c.id === clusterId) || CLUSTERS[0];

    if (cluster.id === 'all') return this.catalog;
    if (cluster.highYieldOnly) {
      return this.catalog.filter(a => HIGH_YIELD_ARTICLES.has(a.number));
    }
    if (cluster.customFilter) {
      return this.catalog.filter(cluster.customFilter);
    }

    return this.catalog.filter(a => {
      const matchesPart = cluster.parts.length === 0 || cluster.parts.includes(a.part);
      if (!matchesPart) return false;
      if (cluster.numRange) {
        const n = parseInt(a.number, 10);
        return !isNaN(n) && n >= cluster.numRange[0] && n <= cluster.numRange[1];
      }
      return true;
    });
  }

  // Generate dynamic questions for active recall
  public generateQuestion(
    type: 'article_to_subject' | 'subject_to_article' | 'plus_rule',
    clusterId: string = 'all'
  ): MasteryQuestion | null {
    if (type === 'plus_rule') {
      return this.generatePlusRuleQuestion();
    }

    const pool = this.getArticlesByCluster(clusterId);
    if (pool.length < 4) return null;

    // Favor articles that are 'needs_review' or 'unattempted' to maximize learning efficiency
    const weightedPool = pool.sort(() => Math.random() - 0.5);
    const prioritized = weightedPool.find(a => {
      const s = this.getMasteryState(a.number).status;
      return s === 'needs_review' || s === 'learning' || s === 'unattempted';
    }) || weightedPool[0];

    const distractors = this.catalog
      .filter(a => a.number !== prioritized.number)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const speedHack = lookupSpeedHackForArticle(prioritized.number);
    const hook = speedHack?.formula || speedHack?.quickNote || prioritized.summary;

    if (type === 'article_to_subject') {
      const options = [
        { label: prioritized.title, value: prioritized.number, isCorrect: true },
        ...distractors.map(d => ({ label: d.title, value: d.number, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        id: `q-art-${prioritized.number}-${Date.now()}`,
        type,
        prompt: `What is the constitutional subject matter of Article ${prioritized.number}?`,
        subPrompt: `${prioritized.part}: ${prioritized.partTitle}`,
        correctArticleNumber: prioritized.number,
        correctAnswer: prioritized.title,
        options,
        explanation: `Article ${prioritized.number} provides for: "${prioritized.title}". Key essence: ${prioritized.summary}`,
        mnemonicHook: hook,
        part: prioritized.part
      };
    } else {
      // subject_to_article
      const options = [
        { label: `Article ${prioritized.number}`, value: prioritized.number, isCorrect: true },
        ...distractors.map(d => ({ label: `Article ${d.number}`, value: d.number, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        id: `q-sub-${prioritized.number}-${Date.now()}`,
        type,
        prompt: `Under which Article is "${prioritized.title}" established in the Constitution?`,
        subPrompt: `Located in ${prioritized.part}`,
        correctArticleNumber: prioritized.number,
        correctAnswer: `Article ${prioritized.number}`,
        options,
        explanation: `Under ${prioritized.part}, Article ${prioritized.number} establishes "${prioritized.title}". ${prioritized.summary}`,
        mnemonicHook: hook,
        part: prioritized.part
      };
    }
  }

  private generatePlusRuleQuestion(): MasteryQuestion | null {
    if (!MATH_FORMULA_PAIRS || MATH_FORMULA_PAIRS.length === 0) return null;

    const pair: MathFormulaPair = MATH_FORMULA_PAIRS[Math.floor(Math.random() * MATH_FORMULA_PAIRS.length)];
    const isUnionToState = Math.random() > 0.4;

    if (isUnionToState) {
      // Given Union, find State
      const correctVal = `Article ${pair.stateArticle}`;
      const fakeVals = [
        `Article ${pair.stateArticle + 1}`,
        `Article ${pair.stateArticle - 1}`,
        `Article ${pair.stateArticle + 10}`
      ];

      const options = [
        { label: correctVal, value: String(pair.stateArticle), isCorrect: true },
        ...fakeVals.map(f => ({ label: f, value: f, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        id: `q-plus-${pair.unionArticle}-${Date.now()}`,
        type: 'plus_rule',
        prompt: `Union-State Symmetry (${pair.rule}): If ${pair.unionTitle} is Article ${pair.unionArticle}, which Article governs ${pair.stateTitle}?`,
        subPrompt: `Formula: Article ${pair.unionArticle} ${pair.rule} = ?`,
        correctArticleNumber: String(pair.stateArticle),
        correctAnswer: correctVal,
        options,
        explanation: `Magic Symmetry Rule (${pair.rule}): ${pair.unionTitle} (Article ${pair.unionArticle}) ${pair.rule} = ${pair.stateTitle} (Article ${pair.stateArticle}). ${pair.conceptualBridge}`,
        mnemonicHook: `Remember: Shift from Union Article ${pair.unionArticle} using ${pair.rule} to reach State Article ${pair.stateArticle}.`,
        part: 'Part V to Part VI'
      };
    } else {
      // Given State, find Union
      const correctVal = `Article ${pair.unionArticle}`;
      const fakeVals = [
        `Article ${pair.unionArticle + 1}`,
        `Article ${pair.unionArticle - 1}`,
        `Article ${pair.unionArticle - 8}`
      ];

      const options = [
        { label: correctVal, value: String(pair.unionArticle), isCorrect: true },
        ...fakeVals.map(f => ({ label: f, value: f, isCorrect: false }))
      ].sort(() => Math.random() - 0.5);

      return {
        id: `q-plus-rev-${pair.stateArticle}-${Date.now()}`,
        type: 'plus_rule',
        prompt: `Reverse Symmetry (${pair.rule}): If ${pair.stateTitle} is Article ${pair.stateArticle}, which Article governs the corresponding Union power (${pair.unionTitle})?`,
        subPrompt: `Formula: Article ${pair.stateArticle} - (${pair.rule.replace('+', '')}) = ?`,
        correctArticleNumber: String(pair.unionArticle),
        correctAnswer: correctVal,
        options,
        explanation: `Reverse Symmetry: ${pair.stateTitle} (Article ${pair.stateArticle}) corresponds to Union power ${pair.unionTitle} (Article ${pair.unionArticle}) via ${pair.rule}.`,
        mnemonicHook: `Subtract from State Article ${pair.stateArticle} to calculate Union Article ${pair.unionArticle}.`,
        part: 'Part VI to Part V'
      };
    }
  }

  public getMathPairs(): MathFormulaPair[] {
    return MATH_FORMULA_PAIRS;
  }
}

export const articleMasteryService = new ArticleMasteryService();
