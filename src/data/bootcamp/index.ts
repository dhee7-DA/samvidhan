import { BOOTCAMP_DAYS_1_TO_5 } from './days1to5';
import { BOOTCAMP_DAYS_6_TO_10 } from './days6to10';
import { BOOTCAMP_DAYS_11_TO_15 } from './days11to15';
import type { BootcampDay } from './bootcampTypes';

export * from './bootcampTypes';

export const FIFTEEN_DAY_BOOTCAMP_DATA: BootcampDay[] = [
  ...BOOTCAMP_DAYS_1_TO_5,
  ...BOOTCAMP_DAYS_6_TO_10,
  ...BOOTCAMP_DAYS_11_TO_15
];

export const TOTAL_BOOTCAMP_MCQS = FIFTEEN_DAY_BOOTCAMP_DATA.reduce(
  (total, day) => total + day.mcqs.length,
  0
);

export const TOTAL_BOOTCAMP_CASE_STUDIES = FIFTEEN_DAY_BOOTCAMP_DATA.length;
