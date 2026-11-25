import { HINDI_BATCH_1, type HindiArticleMeaning } from './hindiMeanings/batch1';
import { HINDI_BATCH_2 } from './hindiMeanings/batch2';
import { HINDI_BATCH_3 } from './hindiMeanings/batch3';
import { HINDI_BATCH_4 } from './hindiMeanings/batch4';

export type { HindiArticleMeaning };

export const HINDI_ARTICLE_MEANINGS: Record<string, HindiArticleMeaning> = {
  ...HINDI_BATCH_1,
  ...HINDI_BATCH_2,
  ...HINDI_BATCH_3,
  ...HINDI_BATCH_4
};

export function getHindiArticleMeaning(articleNumber: string): HindiArticleMeaning | undefined {
  const key = articleNumber.trim().toUpperCase();
  return HINDI_ARTICLE_MEANINGS[key] || HINDI_ARTICLE_MEANINGS[articleNumber.trim()];
}
