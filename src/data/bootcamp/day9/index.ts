import { DAY9_MCQS_ROUND_1 } from './day9McqsRound1';
import { DAY9_MCQS_ROUND_2 } from './day9McqsRound2';
import { DAY9_MCQS_ROUND_3 } from './day9McqsRound3';
import { DAY9_MCQS_ROUND_4 } from './day9McqsRound4';
import { DAY9_MCQS_ROUND_5 } from './day9McqsRound5';
import { DAY9_COMPREHENSION_CASE_STUDIES } from './day9CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY9_MCQS_ROUND_1,
  DAY9_MCQS_ROUND_2,
  DAY9_MCQS_ROUND_3,
  DAY9_MCQS_ROUND_4,
  DAY9_MCQS_ROUND_5,
  DAY9_COMPREHENSION_CASE_STUDIES
};

export const DAY9_MCQS_200: BootcampMCQ[] = [
  ...DAY9_MCQS_ROUND_1,
  ...DAY9_MCQS_ROUND_2,
  ...DAY9_MCQS_ROUND_3,
  ...DAY9_MCQS_ROUND_4,
  ...DAY9_MCQS_ROUND_5
];
