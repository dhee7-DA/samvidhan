export interface BootcampCoreConcept {
  heading: string;
  articleAnchor: string;
  synopsis: string;
  substantiveLaw: string[];
  prosecutionAngle: string;
}

export interface BootcampLandmarkEvolutionPair {
  subject: string;
  classicCase: {
    name: string;
    year: number;
    bench: string;
    ratio: string;
  };
  modernCase: {
    name: string;
    year: number;
    bench: string;
    ratio: string;
  };
  examApplicationNote: string;
}

export interface BootcampCaseStudy {
  title: string;
  factualMatrix: string;
  framingQuestions: string[];
  statutoryApplicability: string[];
  modelAnswer: string;
  markingRubric: {
    criterion: string;
    marks: number;
  }[];
}

export interface CaseStudySubMCQ {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  testedDimension: 'Article Threshold' | 'Legal Doctrine' | 'Landmark Ratio' | 'Judicial Remedy';
}

export interface BootcampComprehensionCaseStudy {
  id: string;
  caseNumber: number;
  title: string;
  legalTheme: string;
  factualMatrix: string;
  framingQuestions: string[];
  statutoryApplicability: string[];
  modelAnswer: string;
  markingRubric: {
    criterion: string;
    marks: number;
  }[];
  comprehensionMCQs: CaseStudySubMCQ[];
}

export type BootcampMCQRoundType =
  | 'Bare Act Nuance'
  | 'Landmark Precedents'
  | 'Assertion-Reasoning'
  | 'Negative Traps'
  | 'Applied Courtroom';

export interface BootcampMCQ {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  articleRef: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Case Law / Advanced';
  round?: BootcampMCQRoundType;
}

export interface BootcampDay {
  dayNumber: number;
  title: string;
  subtitle: string;
  phase: string;
  estimatedHours: number;
  targetArticles: string[];
  overview: string;
  coreConcepts: BootcampCoreConcept[];
  landmarkEvolutionPairs: BootcampLandmarkEvolutionPair[];
  dictionaryTerms: string[];
  svgConceptType: string;
  caseStudy: BootcampCaseStudy;
  comprehensionCaseStudies?: BootcampComprehensionCaseStudy[];
  mcqs: BootcampMCQ[];
}
