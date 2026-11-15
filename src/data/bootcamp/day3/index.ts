import { DAY3_MCQS_ROUND_1 } from './day3McqsRound1';
import { DAY3_MCQS_ROUND_2 } from './day3McqsRound2';
import { DAY3_MCQS_ROUND_3 } from './day3McqsRound3';
import { DAY3_MCQS_ROUND_4 } from './day3McqsRound4';
import { DAY3_MCQS_ROUND_5 } from './day3McqsRound5';
import { DAY3_COMPREHENSION_CASE_STUDIES } from './day3CaseStudies';
import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';

export {
  DAY3_MCQS_ROUND_1,
  DAY3_MCQS_ROUND_2,
  DAY3_MCQS_ROUND_3,
  DAY3_MCQS_ROUND_4,
  DAY3_MCQS_ROUND_5,
  DAY3_COMPREHENSION_CASE_STUDIES
};

export const DAY3_MCQS_200: BootcampMCQ[] = [
  ...DAY3_MCQS_ROUND_1,
  ...DAY3_MCQS_ROUND_2,
  ...DAY3_MCQS_ROUND_3,
  ...DAY3_MCQS_ROUND_4,
  ...DAY3_MCQS_ROUND_5
];
