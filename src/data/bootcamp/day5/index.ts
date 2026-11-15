import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';
import { DAY5_MCQS_ROUND_1 } from './day5McqsRound1';
import { DAY5_MCQS_ROUND_2 } from './day5McqsRound2';
import { DAY5_MCQS_ROUND_3 } from './day5McqsRound3';
import { DAY5_MCQS_ROUND_4 } from './day5McqsRound4';
import { DAY5_MCQS_ROUND_5 } from './day5McqsRound5';
import { DAY5_COMPREHENSION_CASE_STUDIES } from './day5CaseStudies';

export {
  DAY5_MCQS_ROUND_1,
  DAY5_MCQS_ROUND_2,
  DAY5_MCQS_ROUND_3,
  DAY5_MCQS_ROUND_4,
  DAY5_MCQS_ROUND_5,
  DAY5_COMPREHENSION_CASE_STUDIES
};

export const DAY5_MCQS_200: BootcampMCQ[] = [
  ...DAY5_MCQS_ROUND_1,
  ...DAY5_MCQS_ROUND_2,
  ...DAY5_MCQS_ROUND_3,
  ...DAY5_MCQS_ROUND_4,
  ...DAY5_MCQS_ROUND_5
];
