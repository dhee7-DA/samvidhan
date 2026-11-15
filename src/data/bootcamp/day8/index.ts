import { DAY8_MCQS_ROUND_1 } from './day8McqsRound1';
import { DAY8_MCQS_ROUND_2 } from './day8McqsRound2';
import { DAY8_MCQS_ROUND_3 } from './day8McqsRound3';
import { DAY8_MCQS_ROUND_4 } from './day8McqsRound4';
import { DAY8_MCQS_ROUND_5 } from './day8McqsRound5';
import { DAY8_COMPREHENSION_CASE_STUDIES } from './day8CaseStudies';
import type { BootcampMCQ } from '../bootcampTypes';

export {
  DAY8_MCQS_ROUND_1,
  DAY8_MCQS_ROUND_2,
  DAY8_MCQS_ROUND_3,
  DAY8_MCQS_ROUND_4,
  DAY8_MCQS_ROUND_5,
  DAY8_COMPREHENSION_CASE_STUDIES
};

export const DAY8_MCQS_200: BootcampMCQ[] = [
  ...DAY8_MCQS_ROUND_1,
  ...DAY8_MCQS_ROUND_2,
  ...DAY8_MCQS_ROUND_3,
  ...DAY8_MCQS_ROUND_4,
  ...DAY8_MCQS_ROUND_5
];
