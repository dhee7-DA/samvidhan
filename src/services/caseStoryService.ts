// Service for Querying and Retrieving Authentic Case Law Stories for Constitutional Articles
import { REAL_CASE_STORIES, type RealArticleStory } from '../data/realCaseStoriesData';

class CaseStoryService {
  private storyMap: Map<string, RealArticleStory> = new Map();
  private multiStoryMap: Map<string, RealArticleStory[]> = new Map();

  constructor() {
    for (const story of REAL_CASE_STORIES) {
      const cleanNum = story.articleNumber.toUpperCase().trim();
      
      // Store exact match
      if (!this.storyMap.has(cleanNum)) {
        this.storyMap.set(cleanNum, story);
      }
      const list = this.multiStoryMap.get(cleanNum) || [];
      list.push(story);
      this.multiStoryMap.set(cleanNum, list);

      // Also extract base article number (e.g. "19(1)(A)" -> "19", "39(B)" -> "39")
      const baseMatch = cleanNum.match(/^([0-9]+[A-Z]?)/);
      if (baseMatch && baseMatch[1] !== cleanNum) {
        const baseNum = baseMatch[1];
        if (!this.storyMap.has(baseNum)) {
          this.storyMap.set(baseNum, story);
        }
        const baseList = this.multiStoryMap.get(baseNum) || [];
        if (!baseList.includes(story)) {
          baseList.push(story);
        }
        this.multiStoryMap.set(baseNum, baseList);
      }
    }
  }

  /**
   * Retrieves all authentic case law stories for a specific constitutional article number.
   * Handles clauses and base numbers (e.g., "19" returns both Shreya Singhal and Romesh Thappar).
   */
  public getStoriesForArticle(articleNumber: string): RealArticleStory[] {
    const clean = articleNumber.replace(/^(Article|Art|\s)+/i, '').toUpperCase().trim();
    if (this.multiStoryMap.has(clean)) {
      return this.multiStoryMap.get(clean) || [];
    }
    // Try base number extraction
    const baseMatch = clean.match(/^([0-9]+[A-Z]?)/);
    if (baseMatch && this.multiStoryMap.has(baseMatch[1])) {
      return this.multiStoryMap.get(baseMatch[1]) || [];
    }
    return [];
  }

  /**
   * Retrieves the primary authentic case law story for a specific constitutional article number.
   * Handles variations like "21", "Art 21", "21A", "Article 21A".
   */
  public getStoryForArticle(articleNumber: string): RealArticleStory | undefined {
    const stories = this.getStoriesForArticle(articleNumber);
    return stories.length > 0 ? stories[0] : undefined;
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
    return this.getStoriesForArticle(articleNumber).length > 0;
  }
}

export const caseStoryService = new CaseStoryService();
