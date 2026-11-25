import React from 'react';
import {
  Compass,
  BookOpen,
  Eye,
  Calendar,
  Scale,
  Award,
  Globe2,
  CheckSquare,
  GitCommit,
  Layers,
  Flame,
  FileQuestion,
  Timer,
  AlertTriangle,
  PenTool,
  Printer,
  BrainCircuit,
  Radio,
  GitBranch,
  Gamepad2,
  Swords,
  Gavel,
  Clock,
  Target,
  Zap,
  ShieldAlert,
  Vote
} from 'lucide-react';

export type NavCategory = 'study' | 'cases' | 'practice' | 'bootcamp';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  sub?: string;
  category: NavCategory;
}

export const NAV_CATEGORIES: { id: NavCategory; label: string; shortLabel: string }[] = [
  { id: 'study', label: 'Core Study & Bare Act', shortLabel: 'Study' },
  { id: 'cases', label: 'Case Law & Trees', shortLabel: 'Cases' },
  { id: 'practice', label: 'Practice, Exams & Arcade', shortLabel: 'Practice' },
  { id: 'bootcamp', label: 'Intensive Sprint', shortLabel: 'Sprint' }
];

export const NAV_ITEMS: NavItem[] = [
  // 1. Foundational Study Material
  { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" />, sub: 'Workbench & Preamble', category: 'study' },
  { id: 'articles-master', label: 'Articles 1–395', icon: <Layers className="w-4 h-4" />, badge: 'Bare Act', sub: 'Clauses, Diffs & Lab', category: 'study' },
  { id: 'parts', label: '25 Parts', icon: <BookOpen className="w-4 h-4" />, badge: 'I–XXII', sub: 'Analytical Breakdown', category: 'study' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic', sub: 'TEARS OF OLD PM', category: 'study' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1–106', sub: 'Constituent Shifts', category: 'study' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Tests', sub: 'Judicial Doctrines', category: 'study' },
  { id: 'constitutional-bodies', label: 'Constitutional Bodies', icon: <ShieldAlert className="w-4 h-4" />, badge: 'Matrix', sub: 'ECI, CAG, UPSC, NHRC', category: 'study' },
  { id: 'writs-emergency', label: 'Writs & Emergency', icon: <ShieldAlert className="w-4 h-4" />, badge: 'War Room', sub: '5 Writs & Art 352–360', category: 'study' },
  { id: 'federal-relations', label: '7th Schedule & Relations', icon: <Layers className="w-4 h-4" />, badge: '245–255', sub: '3 Lists & Repugnancy', category: 'study' },
  { id: 'majorities-lab', label: 'Majorities & Quorum', icon: <Vote className="w-4 h-4" />, badge: '7 Types', sub: 'Voting Thresholds', category: 'study' },
  { id: 'deadlines-matrix', label: 'Time Limits & Deadlines', icon: <Timer className="w-4 h-4" />, badge: 'Numbers', sub: '14D, 1M, 6W, 6M Traps', category: 'study' },
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '17 SVGs', sub: 'Vector Blueprints', category: 'study' },
  { id: 'fast-track', label: 'Speed Hacks & Tricks', icon: <Zap className="w-4 h-4" />, badge: '+89/+90', sub: 'Memory Palaces', category: 'study' },
  { id: 'dictionary', label: 'Legal Dictionary', icon: <BookOpen className="w-4 h-4" />, badge: 'Lexicon', sub: 'Maxims & Definitions', category: 'study' },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" />, sub: 'Comparative Sources', category: 'study' },

  // 2. Landmark Cases & Precedents
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" />, badge: '100', sub: 'Authoritative Ratios', category: 'cases' },
  { id: 'precedent-clash', label: 'Precedent Clash', icon: <Swords className="w-4 h-4" />, badge: '100 Battles', sub: 'Overruled vs Settled', category: 'cases' },
  { id: 'lineage', label: 'Knowledge Graphs', icon: <GitBranch className="w-4 h-4" />, badge: 'Trees', sub: '1950–2026 Lineages', category: 'cases' },
  { id: 'audio-lab', label: 'Audio & Viva', icon: <Radio className="w-4 h-4" />, badge: 'Spoken', sub: 'Oral Advocacy', category: 'cases' },

  // 3. Practice, Drills & Exam Simulation
  { id: 'readiness-index', label: 'Readiness Index', icon: <Target className="w-4 h-4" />, badge: 'Heatmap', sub: 'CRI, Risk & Weakest Link', category: 'practice' },
  { id: 'arcade', label: 'Constitutional Arcade', icon: <Gamepad2 className="w-4 h-4" />, badge: '13 Games', sub: 'Memory, Blitz & Moot', category: 'practice' },
  { id: 'article-mastery', label: '395 Articles Mastery', icon: <BrainCircuit className="w-4 h-4" />, badge: 'Recall', sub: 'Matrix Wall & +89/+90', category: 'practice' },
  { id: 'flashcards', label: 'Flashcards (SRS)', icon: <BrainCircuit className="w-4 h-4" />, badge: '900+', sub: 'Leitner Repetition', category: 'practice' },
  { id: 'socratic-tutor', label: 'Socratic Cross-Examiner', icon: <BrainCircuit className="w-4 h-4" />, badge: 'Dialectic', sub: 'Paradoxes & Fallacies', category: 'practice' },
  { id: 'mock-exam', label: 'Exam Simulator', icon: <Timer className="w-4 h-4" />, badge: 'Mock', sub: 'Timed Prelims Engine', category: 'practice' },
  { id: 'trap-simulator', label: 'Negative Marking Hall', icon: <ShieldAlert className="w-4 h-4" />, badge: '+2/-0.66', sub: '50-Q Trap Assessment', category: 'practice' },
  { id: 'mistakes-notebook', label: 'Mistakes Bank', icon: <AlertTriangle className="w-4 h-4" />, badge: 'Audit', sub: 'Re-Attempt Errors', category: 'practice' },
  { id: 'mains-mock', label: 'Mains Mock Hall', icon: <Clock className="w-4 h-4" />, badge: '3-Hour', sub: 'Full Paper Simulator', category: 'practice' },
  { id: 'judgment-lab', label: 'Judgment Writing', icon: <Gavel className="w-4 h-4" />, badge: 'Bench', sub: 'Issues & Ratios', category: 'practice' },
  { id: 'mains-lab', label: 'Mains Writing Lab', icon: <PenTool className="w-4 h-4" />, badge: '150 Cases', sub: 'Answers & Rubrics', category: 'practice' },
  { id: 'pyqs', label: 'Exam Trends & PYQs', icon: <FileQuestion className="w-4 h-4" />, badge: '10-Yr', sub: 'UPSC · DJS · UP · CLAT', category: 'practice' },
  { id: 'revision-sheets', label: 'Revision Sheets', icon: <Printer className="w-4 h-4" />, badge: 'Print', sub: 'Rapid Cheat Sheets', category: 'practice' },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Drill', sub: 'Conceptual Drills', category: 'practice' },

  // 4. Capstone 15-Day Bootcamp
  { id: 'bootcamp', label: '15-Day Bootcamp', icon: <Flame className="w-4 h-4" />, badge: '3,000 MCQs', sub: 'Daily Study & Drill', category: 'bootcamp' }
];
