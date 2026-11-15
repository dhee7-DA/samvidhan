import type { BootcampMCQ, BootcampComprehensionCaseStudy } from '../bootcampTypes';
import { DAY6_MCQS_ROUND_1 } from './day6McqsRound1';
import { DAY6_MCQS_ROUND_2 } from './day6McqsRound2';
import { DAY6_MCQS_ROUND_3 } from './day6McqsRound3';
import { DAY6_MCQS_ROUND_4 } from './day6McqsRound4';
import { DAY6_MCQS_ROUND_5 } from './day6McqsRound5';
import { DAY6_COMPREHENSION_CASE_STUDIES } from './day6CaseStudies';

export {
  DAY6_MCQS_ROUND_1,
  DAY6_MCQS_ROUND_2,
  DAY6_MCQS_ROUND_3,
  DAY6_MCQS_ROUND_4,
  DAY6_MCQS_ROUND_5,
  DAY6_COMPREHENSION_CASE_STUDIES
};

export const DAY6_MCQS_200: BootcampMCQ[] = [
  ...DAY6_MCQS_ROUND_1,
  ...DAY6_MCQS_ROUND_2,
  ...DAY6_MCQS_ROUND_3,
  ...DAY6_MCQS_ROUND_4,
  ...DAY6_MCQS_ROUND_5
];
