import { DAY11_MCQS_ROUND_1 } from './day11McqsRound1';
import { DAY11_MCQS_ROUND_2 } from './day11McqsRound2';
import { DAY11_MCQS_ROUND_3 } from './day11McqsRound3';
import { DAY11_MCQS_ROUND_4 } from './day11McqsRound4';
import { DAY11_MCQS_ROUND_5 } from './day11McqsRound5';
import { DAY11_COMPREHENSION_CASE_STUDIES } from './day11CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY11_MCQS_ROUND_1,
  DAY11_MCQS_ROUND_2,
  DAY11_MCQS_ROUND_3,
  DAY11_MCQS_ROUND_4,
  DAY11_MCQS_ROUND_5,
  DAY11_COMPREHENSION_CASE_STUDIES
};

export const DAY11_MCQS_200: BootcampMCQ[] = [
  ...DAY11_MCQS_ROUND_1,
  ...DAY11_MCQS_ROUND_2,
  ...DAY11_MCQS_ROUND_3,
  ...DAY11_MCQS_ROUND_4,
  ...DAY11_MCQS_ROUND_5
];
