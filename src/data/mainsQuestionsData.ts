import { MAINS_BATCH_1 } from './mains/mainsBatch1';
import { MAINS_BATCH_2 } from './mains/mainsBatch2';
import type { MainsMasterQuestion } from '../types/mainsQuestionTypes';

export const MAINS_MASTER_QUESTIONS: MainsMasterQuestion[] = [
  ...MAINS_BATCH_1,
  ...MAINS_BATCH_2,
];

export { MAINS_BATCH_1, MAINS_BATCH_2 };
