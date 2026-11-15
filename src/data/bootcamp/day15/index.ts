import { DAY15_MCQS_ROUND_1 } from './day15McqsRound1';
import { DAY15_MCQS_ROUND_2 } from './day15McqsRound2';
import { DAY15_MCQS_ROUND_3 } from './day15McqsRound3';
import { DAY15_MCQS_ROUND_4 } from './day15McqsRound4';
import { DAY15_MCQS_ROUND_5 } from './day15McqsRound5';
import { DAY15_COMPREHENSION_CASE_STUDIES } from './day15CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY15_MCQS_ROUND_1,
  DAY15_MCQS_ROUND_2,
  DAY15_MCQS_ROUND_3,
  DAY15_MCQS_ROUND_4,
  DAY15_MCQS_ROUND_5,
  DAY15_COMPREHENSION_CASE_STUDIES
};

export const DAY15_MCQS_200: BootcampMCQ[] = [
  ...DAY15_MCQS_ROUND_1,
  ...DAY15_MCQS_ROUND_2,
  ...DAY15_MCQS_ROUND_3,
  ...DAY15_MCQS_ROUND_4,
  ...DAY15_MCQS_ROUND_5
];
