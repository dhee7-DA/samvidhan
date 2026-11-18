// Service for Querying and Retrieving Authentic Case Law Stories for Constitutional Articles
import { REAL_CASE_STORIES, type RealArticleStory } from '../data/realCaseStoriesData';

class CaseStoryService {
  private storyMap: Map<string, RealArticleStory> = new Map();

  constructor() {
    for (const story of REAL_CASE_STORIES) {
      // Normalize number, e.g. "21", "21A", "19(1)(a)" -> key "21", "21a", etc.
      const cleanNum = story.articleNumber.toUpperCase().trim();
      this.storyMap.set(cleanNum, story);
    }
  }

  /**
   * Retrieves the authentic case law story for a specific constitutional article number.
   * Handles variations like "21", "Art 21", "21A", "Article 21A".
   */
  public getStoryForArticle(articleNumber: string): RealArticleStory | undefined {
    const clean = articleNumber.replace(/^(Article|Art|\s)+/i, '').toUpperCase().trim();
    return this.storyMap.get(clean);
  }

  /**
   * Returns all authenticated case stories.
   */
  public getAllStories(): RealArticleStory[] {
    return REAL_CASE_STORIES;
  }

  /**
   * Searches stories across article number, case name, citizen, or keywords.
   */
  public searchStories(query: string): RealArticleStory[] {
    const q = query.toLowerCase().trim();
    if (!q) return REAL_CASE_STORIES;

    return REAL_CASE_STORIES.filter((s) => {
      return (
        s.articleNumber.toLowerCase().includes(q) ||
        s.caseName.toLowerCase().includes(q) ||
        s.headline.toLowerCase().includes(q) ||
        s.theRealCitizen.toLowerCase().includes(q) ||
        s.theGroundFacts.toLowerCase().includes(q) ||
        s.thematicTags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }

  /**
   * Checks if an article has an authentic courtroom story available.
   */
  public hasStory(articleNumber: string): boolean {
    const clean = articleNumber.replace(/^(Article|Art|\s)+/i, '').toUpperCase().trim();
    return this.storyMap.has(clean);
  }
}

export const caseStoryService = new CaseStoryService();
