import { DAY1_MCQS_ROUND_1 } from './day1McqsRound1';
import { DAY1_MCQS_ROUND_2 } from './day1McqsRound2';
import { DAY1_MCQS_ROUND_3 } from './day1McqsRound3';
import { DAY1_MCQS_ROUND_4 } from './day1McqsRound4';
import { DAY1_MCQS_ROUND_5 } from './day1McqsRound5';
import { DAY1_COMPREHENSION_CASE_STUDIES } from './day1CaseStudies';
import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';

export {
  DAY1_MCQS_ROUND_1,
  DAY1_MCQS_ROUND_2,
  DAY1_MCQS_ROUND_3,
  DAY1_MCQS_ROUND_4,
  DAY1_MCQS_ROUND_5,
  DAY1_COMPREHENSION_CASE_STUDIES
};

export const DAY1_MCQS_200: BootcampMCQ[] = [
  ...DAY1_MCQS_ROUND_1,
  ...DAY1_MCQS_ROUND_2,
  ...DAY1_MCQS_ROUND_3,
  ...DAY1_MCQS_ROUND_4,
  ...DAY1_MCQS_ROUND_5
];
