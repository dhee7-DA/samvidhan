import { DAY12_MCQS_ROUND_1 } from './day12McqsRound1';
import { DAY12_MCQS_ROUND_2 } from './day12McqsRound2';
import { DAY12_MCQS_ROUND_3 } from './day12McqsRound3';
import { DAY12_MCQS_ROUND_4 } from './day12McqsRound4';
import { DAY12_MCQS_ROUND_5 } from './day12McqsRound5';
import { DAY12_COMPREHENSION_CASE_STUDIES } from './day12CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY12_MCQS_ROUND_1,
  DAY12_MCQS_ROUND_2,
  DAY12_MCQS_ROUND_3,
  DAY12_MCQS_ROUND_4,
  DAY12_MCQS_ROUND_5,
  DAY12_COMPREHENSION_CASE_STUDIES
};

export const DAY12_MCQS_200: BootcampMCQ[] = [
  ...DAY12_MCQS_ROUND_1,
  ...DAY12_MCQS_ROUND_2,
  ...DAY12_MCQS_ROUND_3,
  ...DAY12_MCQS_ROUND_4,
  ...DAY12_MCQS_ROUND_5
];
