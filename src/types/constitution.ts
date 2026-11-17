export type ThemeMode = 'monochrome' | 'ink' | 'carbon' | 'paper' | 'chalk' | 'pink';
export type FontMode = 'geist' | 'geist-mono' | 'jetbrains';

export interface ConstitutionalClause {
  clause: string;
  explanation: string;
  example?: string;
}

export interface LandmarkCaseReference {
  caseName: string;
  year: number;
  bench?: string;
  summary: string;
  significance: string;
}

export interface ArticleItem {
  number: string;
  title: string;
  summary: string;
  textSnippet: string;
  plainEnglish?: string;
  realWorldScenario?: string;
  prosecutionNote?: string;
  clauses?: ConstitutionalClause[];
  exceptions?: string[];
  landmarkCases?: LandmarkCaseReference[];
  doctrineLinks?: string[];
}

export interface ConstitutionPart {
  id: string;
  partNumber: string;
  title: string;
  articlesRange: string;
  category: 'Foundation' | 'Rights & Duties' | 'Governance' | 'Federalism' | 'Special & Emergency';
  description: string;
  historicalBackground: string;
  keyPrinciples: string[];
  articles: ArticleItem[];
  landmarkCases: LandmarkCaseReference[];
  svgDiagramId?: string;
  mnemonics?: string[];
}

export interface ScheduleItem {
  number: number;
  roman: string;
  title: string;
  subject: string;
  articlesCovered: string;
  details: string[];
  historicalEvolution: string;
  mnemonicLetter: string;
  mnemonicKeyword: string;
}

export interface ConstitutionalDoctrine {
  id: string;
  name: string;
  latinTerm?: string;
  origin: string;
  leadCase: string;
  essence: string;
  plainEnglish?: string;
  analogy?: string;
  realWorldScenario?: string;
  simpleJudgeQuestions?: string[];
  testMechanism: string[];
  applicabilityInIndia: string;
  constitutionalArticles: string[];
  exceptions: string[];
}

export interface LandmarkJudgment {
  id: string;
  caseName: string;
  citation: string;
  year: number;
  benchStrength: number;
  chiefJusticeOrJudges: string;
  coreIssue: string;
  verdict: string;
  ratioDecidendi: string;
  dissent?: string;
  lastingImpact: string;
  category: 'Fundamental Rights' | 'Basic Structure' | 'Federalism' | 'Judicial Independence' | 'Social Justice';
}

export interface ComparativeCountry {
  country: string;
  code: string;
  flagEmoji: string;
  borrowedFeatures: {
    feature: string;
    constitutionalArticles: string;
    indianAdaptation: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  articleRef: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Judiciary/UPSC Level';
  topic: string;
}
