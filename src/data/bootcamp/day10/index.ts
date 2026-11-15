import { DAY10_MCQS_ROUND_1 } from './day10McqsRound1';
import { DAY10_MCQS_ROUND_2 } from './day10McqsRound2';
import { DAY10_MCQS_ROUND_3 } from './day10McqsRound3';
import { DAY10_MCQS_ROUND_4 } from './day10McqsRound4';
import { DAY10_MCQS_ROUND_5 } from './day10McqsRound5';
import { DAY10_COMPREHENSION_CASE_STUDIES } from './day10CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY10_MCQS_ROUND_1,
  DAY10_MCQS_ROUND_2,
  DAY10_MCQS_ROUND_3,
  DAY10_MCQS_ROUND_4,
  DAY10_MCQS_ROUND_5,
  DAY10_COMPREHENSION_CASE_STUDIES
};

export const DAY10_MCQS_200: BootcampMCQ[] = [
  ...DAY10_MCQS_ROUND_1,
  ...DAY10_MCQS_ROUND_2,
  ...DAY10_MCQS_ROUND_3,
  ...DAY10_MCQS_ROUND_4,
  ...DAY10_MCQS_ROUND_5
];
