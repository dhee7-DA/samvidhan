import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';
import { DAY4_MCQS_ROUND_1 } from './day4McqsRound1';
import { DAY4_MCQS_ROUND_2 } from './day4McqsRound2';
import { DAY4_MCQS_ROUND_3 } from './day4McqsRound3';
import { DAY4_MCQS_ROUND_4 } from './day4McqsRound4';
import { DAY4_MCQS_ROUND_5 } from './day4McqsRound5';
import { DAY4_COMPREHENSION_CASE_STUDIES } from './day4CaseStudies';

export {
  DAY4_MCQS_ROUND_1,
  DAY4_MCQS_ROUND_2,
  DAY4_MCQS_ROUND_3,
  DAY4_MCQS_ROUND_4,
  DAY4_MCQS_ROUND_5,
  DAY4_COMPREHENSION_CASE_STUDIES
};

export const DAY4_MCQS_200: BootcampMCQ[] = [
  ...DAY4_MCQS_ROUND_1,
  ...DAY4_MCQS_ROUND_2,
  ...DAY4_MCQS_ROUND_3,
  ...DAY4_MCQS_ROUND_4,
  ...DAY4_MCQS_ROUND_5
];
