import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';
import { DAY7_MCQS_ROUND_1 } from './day7McqsRound1';
import { DAY7_MCQS_ROUND_2 } from './day7McqsRound2';
import { DAY7_MCQS_ROUND_3 } from './day7McqsRound3';
import { DAY7_MCQS_ROUND_4 } from './day7McqsRound4';
import { DAY7_MCQS_ROUND_5 } from './day7McqsRound5';
import { DAY7_COMPREHENSION_CASE_STUDIES } from './day7CaseStudies';

export {
  DAY7_MCQS_ROUND_1,
  DAY7_MCQS_ROUND_2,
  DAY7_MCQS_ROUND_3,
  DAY7_MCQS_ROUND_4,
  DAY7_MCQS_ROUND_5,
  DAY7_COMPREHENSION_CASE_STUDIES
};

export const DAY7_MCQS_200: BootcampMCQ[] = [
  ...DAY7_MCQS_ROUND_1,
  ...DAY7_MCQS_ROUND_2,
  ...DAY7_MCQS_ROUND_3,
  ...DAY7_MCQS_ROUND_4,
  ...DAY7_MCQS_ROUND_5
];
