import { DAY2_MCQS_ROUND_1 } from './day2McqsRound1';
import { DAY2_MCQS_ROUND_2 } from './day2McqsRound2';
import { DAY2_MCQS_ROUND_3 } from './day2McqsRound3';
import { DAY2_MCQS_ROUND_4 } from './day2McqsRound4';
import { DAY2_MCQS_ROUND_5 } from './day2McqsRound5';
import { DAY2_COMPREHENSION_CASE_STUDIES } from './day2CaseStudies';
import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';

export {
  DAY2_MCQS_ROUND_1,
  DAY2_MCQS_ROUND_2,
  DAY2_MCQS_ROUND_3,
  DAY2_MCQS_ROUND_4,
  DAY2_MCQS_ROUND_5,
  DAY2_COMPREHENSION_CASE_STUDIES
};

export const DAY2_MCQS_200: BootcampMCQ[] = [
  ...DAY2_MCQS_ROUND_1,
  ...DAY2_MCQS_ROUND_2,
  ...DAY2_MCQS_ROUND_3,
  ...DAY2_MCQS_ROUND_4,
  ...DAY2_MCQS_ROUND_5
];
