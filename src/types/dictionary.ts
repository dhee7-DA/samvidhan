export interface LegalTerm {
  term: string;
  aliases: string[];
  category: 'Criminal Law' | 'Constitutional Law' | 'Latin Maxims' | 'Parliamentary & Governance' | 'Judicial Procedure';
  phoneticOrLiteral?: string;
  detailedMeaning: string;
  easyExample: string;
  statutoryOrCaseRef?: string;
  relatedArticles?: string[];
}
