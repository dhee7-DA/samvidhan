export type BlueprintTrack =
  | 'Rights & Remedies'
  | 'Executive & Parliament'
  | 'Judiciary & Doctrines'
  | 'Federalism & Local Gov'
  | 'Bodies & Mechanics';

export type BlueprintTopology =
  | 'flowchart'
  | 'hub-spoke'
  | 'balance-beam'
  | 'pyramid-hierarchy'
  | 'matrix-split'
  | 'cycle-sequence';

export type BlueprintColorKey = 'sky' | 'emerald' | 'violet' | 'rose' | 'accent';

export interface BlueprintNodeSpec {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  tag: string;
  edgeLabel?: string;
  side?: 'left' | 'right';
  rule: string;
  callouts: string[];
  landmarkCase: string;
  examTrap: string;
  colorKey: BlueprintColorKey;
}

export interface VisualBlueprintSpec {
  id: string;
  title: string;
  category: string;
  track: BlueprintTrack;
  articles: string;
  summary: string;
  topology: BlueprintTopology;
  rootLabel: string;
  rootSub: string;
  edgeFlowTag: string;
  footerRule: string;
  nodes: BlueprintNodeSpec[];
}
