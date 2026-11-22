import { MAINS_BATCH_1 } from './mains/mainsBatch1';
import { MAINS_BATCH_2 } from './mains/mainsBatch2';
import { MAINS_BATCH_3 } from './mains/mainsBatch3';
import { MAINS_BATCH_4 } from './mains/mainsBatch4';
import { MAINS_BATCH_5 } from './mains/mainsBatch5';
import type { MainsMasterQuestion } from '../types/mainsQuestionTypes';

export const MAINS_MASTER_QUESTIONS: MainsMasterQuestion[] = [
  ...MAINS_BATCH_1,
  ...MAINS_BATCH_2,
  ...MAINS_BATCH_3,
  ...MAINS_BATCH_4,
  ...MAINS_BATCH_5,
];

export { MAINS_BATCH_1, MAINS_BATCH_2, MAINS_BATCH_3, MAINS_BATCH_4, MAINS_BATCH_5 };
