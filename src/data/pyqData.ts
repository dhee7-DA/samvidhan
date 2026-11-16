export interface PyqQuestion {
  id: string;
  year: string;
  exam: string;
  paper: string;
  part: 'Part A' | 'Part B';
  marks: number;
  questionNumber: number;
  title: string;
  questionText: string;
  topic: 'Fundamental Rights' | 'Criminal Due Process' | 'Judiciary & Writs' | 'Executive & Legislature' | 'Federalism & Emergency' | 'Amendments & Basic Structure' | 'Administrative Law';
  relevantArticles: string[];
  bootcampDay: number;
  coreIssues: string[];
  landmarkPrecedents: {
    classic: string;
    modern2024: string;
  };
  modelAnswer: string;
  scoringRubric: {
    criterion: string;
    marks: number;
  }[];
}

import { PYQ_2023_DATA } from './pyqs/pyq2023';
import { PYQ_2022_DATA } from './pyqs/pyq2022';
import { PYQ_2018_DATA } from './pyqs/pyq2018';
import { PYQ_2014_DATA } from './pyqs/pyq2014';

export { PYQ_2023_DATA, PYQ_2022_DATA, PYQ_2018_DATA, PYQ_2014_DATA };

export const JKPSC_MAINS_PYQ_DATA: PyqQuestion[] = [
  ...PYQ_2023_DATA,
  ...PYQ_2022_DATA,
  ...PYQ_2018_DATA,
  ...PYQ_2014_DATA,
];
