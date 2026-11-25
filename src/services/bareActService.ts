import catalogJson from '../data/allConstitutionArticlesCatalog.json';
import { AMENDMENT_DIFFS_DATA, type ArticleDiffData } from '../data/amendmentDiffsData';
import { getHindiArticleMeaning } from '../data/hindiArticleMeanings';
import type { ArticleItem, ConstitutionalClause, LandmarkCaseReference } from '../types/constitution';
import { DOCTRINES_DATA } from '../data/doctrinesData';
import { LANDMARK_JUDGMENTS } from '../data/judgmentsData';
import type { LandmarkJudgment } from '../types/constitution';

// Import all expanded part datasets
import { PART_1_TERRITORY_EXPANDED } from '../data/part1TerritoryData';
import { PART_2_CITIZENSHIP_EXPANDED } from '../data/part2CitizenshipData';
import { PART_3_ARTICLES_EXPANDED } from '../data/part3FundamentalRightsData';
import { PART_4_DPSP_EXPANDED } from '../data/part4DPSPData';
import { PART_4A_DUTIES_EXPANDED } from '../data/part4aDutiesData';
import { PART_5_UNION_EXPANDED } from '../data/part5UnionData';
import { PART_6_STATES_EXPANDED } from '../data/part6StatesData';
import { PART_8_UTS_EXPANDED } from '../data/part8UTsData';
import { PART_9_PANCHAYATS_EXPANDED } from '../data/part9LocalGovernanceData';
import { PART_9A_MUNICIPALITIES_EXPANDED, PART_9B_COOPERATIVES_EXPANDED } from '../data/part9aMunicipalitiesData';
import { PART_10_TRIBAL_EXPANDED } from '../data/part10TribalData';
import { PART_11_FEDERAL_EXPANDED } from '../data/part11FederalData';
import { PART_12_FINANCE_EXPANDED } from '../data/part12FinanceData';
import { PART_13_TRADE_EXPANDED } from '../data/part13TradeData';
import { PART_14_SERVICES_EXPANDED } from '../data/part14ServicesData';
import { PART_14A_TRIBUNALS_EXPANDED } from '../data/part14aTribunalsData';
import { PART_15_ELECTIONS_EXPANDED } from '../data/part15ElectionsData';
import { PART_16_CLASSES_EXPANDED } from '../data/part16ClassesData';
import { PART_17_LANGUAGE_EXPANDED } from '../data/part17LanguageData';
import { PART_18_EMERGENCY_EXPANDED } from '../data/part18EmergencyData';
import { PART_19_MISC_EXPANDED } from '../data/part19MiscData';
import { PART_20_AMENDMENT_EXPANDED } from '../data/part20AmendmentData';
import { PART_21_SPECIAL_EXPANDED } from '../data/part21SpecialData';
import { PART_22_CLOSING_EXPANDED } from '../data/part22ClosingData';

export interface CatalogEntry {
  number: string;
  part: string;
  partTitle: string;
  chapter?: string;
  title: string;
  summary: string;
  category: string;
  isAmended?: boolean;
  isInserted?: boolean;
  isRepealed?: boolean;
}

export interface BareActArticle {
  number: string;
  part: string;
  partTitle: string;
  chapter?: string;
  title: string;
  summary: string;
  category: string;
  isAmended: boolean;
  isInserted: boolean;
  isRepealed: boolean;
  hasDiff: boolean;
  statutorySnippet: string;
  clauses: ConstitutionalClause[];
  plainEnglish?: string;
  titleHi?: string;
  meaningHi?: string;
  realWorldScenario?: string;
  prosecutionNote?: string;
  exceptions?: string[];
  landmarkCases?: LandmarkCaseReference[];
  doctrineLinks?: string[];
  diffData?: ArticleDiffData;
}

// Build map of all expanded articles
const expandedArticlesMap = new Map<string, ArticleItem>();

const allExpandedArrays: ArticleItem[][] = [
  PART_1_TERRITORY_EXPANDED,
  PART_2_CITIZENSHIP_EXPANDED,
  PART_3_ARTICLES_EXPANDED,
  PART_4_DPSP_EXPANDED,
  PART_4A_DUTIES_EXPANDED,
  PART_5_UNION_EXPANDED,
  PART_6_STATES_EXPANDED,
  PART_8_UTS_EXPANDED,
  PART_9_PANCHAYATS_EXPANDED,
  PART_9A_MUNICIPALITIES_EXPANDED,
  PART_9B_COOPERATIVES_EXPANDED,
  PART_10_TRIBAL_EXPANDED,
  PART_11_FEDERAL_EXPANDED,
  PART_12_FINANCE_EXPANDED,
  PART_13_TRADE_EXPANDED,
  PART_14_SERVICES_EXPANDED,
  PART_14A_TRIBUNALS_EXPANDED,
  PART_15_ELECTIONS_EXPANDED,
  PART_16_CLASSES_EXPANDED,
  PART_17_LANGUAGE_EXPANDED,
  PART_18_EMERGENCY_EXPANDED,
  PART_19_MISC_EXPANDED,
  PART_20_AMENDMENT_EXPANDED,
  PART_21_SPECIAL_EXPANDED,
  PART_22_CLOSING_EXPANDED
];

allExpandedArrays.forEach(arr => {
  arr.forEach(art => {
    expandedArticlesMap.set(art.number.trim().toUpperCase(), art);
  });
});

const rawCatalog: CatalogEntry[] = catalogJson as CatalogEntry[];

export const BARE_ACT_CATALOG: BareActArticle[] = rawCatalog.map(entry => {
  const numKey = entry.number.trim().toUpperCase();
  const expanded = expandedArticlesMap.get(numKey);
  const diffData = AMENDMENT_DIFFS_DATA[entry.number];
  const hindiData = getHindiArticleMeaning(entry.number);

  const plainEnglish = expanded?.plainEnglish || (
    entry.isRepealed
      ? `Article ${entry.number} was formally repealed by Parliament through a constitutional amendment and is no longer an active, enforceable statutory provision.`
      : `In plain language, Article ${entry.number} establishes the constitutional framework for "${entry.title}". It ensures that in matters of ${entry.partTitle.toLowerCase()}, the law guarantees that ${entry.summary.replace(/^Provides that /i, '').replace(/^States that /i, '').replace(/^Deals with /i, '')}`
  );

  const realWorldScenario = expanded?.realWorldScenario || (
    entry.isRepealed
      ? `Since Article ${entry.number} has been repealed, courts and executive bodies cannot issue directions or orders under this provision today.`
      : `In everyday governance and judicial proceedings concerning ${entry.partTitle}, whenever questions arise regarding "${entry.title}", public authorities, magistrates, and citizens are bound by the procedure set out in Article ${entry.number}.`
  );

  const prosecutionNote = expanded?.prosecutionNote || (
    `When evaluating official state actions, administrative orders, or statutory rules under ${entry.partTitle}, ensure compliance with the constitutional benchmarks of Article ${entry.number}.`
  );

  return {
    number: entry.number,
    part: entry.part,
    partTitle: entry.partTitle,
    chapter: entry.chapter,
    title: entry.title,
    summary: entry.summary,
    category: entry.category,
    isAmended: Boolean(entry.isAmended || diffData),
    isInserted: Boolean(entry.isInserted),
    isRepealed: Boolean(entry.isRepealed),
    hasDiff: Boolean(diffData),
    statutorySnippet: expanded?.textSnippet || entry.summary,
    clauses: expanded?.clauses || [
      {
        clause: `Article ${entry.number}`,
        explanation: entry.summary,
        example: `Statutory mandate of Article ${entry.number} in ${entry.partTitle}.`
      }
    ],
    plainEnglish,
    titleHi: hindiData?.titleHi,
    meaningHi: hindiData?.meaningHi,
    realWorldScenario,
    prosecutionNote,
    exceptions: expanded?.exceptions,
    landmarkCases: expanded?.landmarkCases,
    doctrineLinks: expanded?.doctrineLinks,
    diffData
  };
});

export const bareActService = {
  getAllArticles(): BareActArticle[] {
    return BARE_ACT_CATALOG;
  },

  getArticleByNumber(num: string): BareActArticle | undefined {
    const clean = num.trim().toUpperCase();
    return BARE_ACT_CATALOG.find(a => a.number.toUpperCase() === clean);
  },

  getAdjacentArticles(currentNum: string): { prev?: BareActArticle; next?: BareActArticle } {
    const clean = currentNum.trim().toUpperCase();
    const idx = BARE_ACT_CATALOG.findIndex(a => a.number.toUpperCase() === clean);
    if (idx === -1) return {};
    return {
      prev: idx > 0 ? BARE_ACT_CATALOG[idx - 1] : undefined,
      next: idx < BARE_ACT_CATALOG.length - 1 ? BARE_ACT_CATALOG[idx + 1] : undefined
    };
  },

  searchArticles(
    query: string,
    filterPart?: string,
    filterCategory?: string,
    onlyAmended?: boolean,
    onlyDiffs?: boolean
  ): BareActArticle[] {
    const q = query.trim().toLowerCase();

    return BARE_ACT_CATALOG.filter(art => {
      if (filterPart && filterPart !== 'All' && art.part !== filterPart) {
        return false;
      }
      if (filterCategory && filterCategory !== 'All' && art.category !== filterCategory) {
        return false;
      }
      if (onlyAmended && !art.isAmended) {
        return false;
      }
      if (onlyDiffs && !art.hasDiff) {
        return false;
      }

      if (!q) return true;

      // Match article number exactly or partially
      if (art.number.toLowerCase() === q) return true;
      if (art.number.toLowerCase().includes(q)) return true;
      if (`article ${art.number}`.toLowerCase().includes(q)) return true;
      if (`art ${art.number}`.toLowerCase().includes(q)) return true;

      // Match title and summary (including Hindi titles/meanings)
      if (art.title.toLowerCase().includes(q)) return true;
      if (art.summary.toLowerCase().includes(q)) return true;
      if (art.titleHi && art.titleHi.toLowerCase().includes(q)) return true;
      if (art.meaningHi && art.meaningHi.toLowerCase().includes(q)) return true;
      if (art.statutorySnippet.toLowerCase().includes(q)) return true;
      if (art.partTitle.toLowerCase().includes(q)) return true;

      // Match clauses text
      const matchesClause = art.clauses.some(
        c => c.clause.toLowerCase().includes(q) || c.explanation.toLowerCase().includes(q)
      );
      if (matchesClause) return true;

      // Match doctrine links
      if (art.doctrineLinks && art.doctrineLinks.some(d => d.toLowerCase().includes(q))) {
        return true;
      }

      // Match landmark cases
      if (art.landmarkCases && art.landmarkCases.some(c => c.caseName.toLowerCase().includes(q))) {
        return true;
      }

      return false;
    });
  },

  getPartsList(): { id: string; label: string; count: number }[] {
    const partMap = new Map<string, number>();
    BARE_ACT_CATALOG.forEach(a => {
      const p = a.part;
      partMap.set(p, (partMap.get(p) || 0) + 1);
    });

    return Array.from(partMap.entries()).map(([part, count]) => ({
      id: part,
      label: part,
      count
    }));
  },

  getCategoriesList(): string[] {
    return Array.from(new Set(BARE_ACT_CATALOG.map(a => a.category))).sort();
  },

  getRelatedDoctrines(articleNum: string) {
    const art = this.getArticleByNumber(articleNum);
    if (!art) return [];
    const directLinks = art.doctrineLinks || [];

    // Find doctrines that reference this article
    const targetLabel = `Article ${art.number}`;
    const matchingDoctrines = DOCTRINES_DATA.filter(
      d =>
        directLinks.includes(d.name) ||
        d.constitutionalArticles.some(a => a.includes(art.number) || a === targetLabel)
    );

    return matchingDoctrines;
  },

  getRelatedLandmarkJudgments(articleNum: string): LandmarkJudgment[] {
    const art = this.getArticleByNumber(articleNum);
    if (!art) return [];

    const targetNum = art.number.toLowerCase();
    const targetPatterns = [
      `art ${targetNum}`,
      `article ${targetNum}`,
      `art. ${targetNum}`,
      `articles ${targetNum}`
    ];

    return LANDMARK_JUDGMENTS.filter((j: LandmarkJudgment) => {
      const text = `${j.coreIssue} ${j.ratioDecidendi} ${j.lastingImpact} ${j.verdict}`.toLowerCase();
      return targetPatterns.some(pat => text.includes(pat));
    });
  }
};
