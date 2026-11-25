import React from 'react';
import {
  Compass,
  BookOpen,
  Calendar,
  Scale,
  Award,
  Globe2,
  CheckSquare,
  GitCommit,
  Flame,
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
  Vote,
  ScrollText,
  Landmark,
  Network,
  Hourglass,
  Eye,
  BookMarked,
  Grid3x3,
  MessagesSquare,
  OctagonAlert,
  TrendingUp
} from 'lucide-react';

export type NavCategory = 'start' | 'study' | 'cases' | 'prelims' | 'mains';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  sub?: string;
  category: NavCategory;
}

export const NAV_CATEGORIES: { id: NavCategory; label: string; shortLabel: string }[] = [
  { id: 'start', label: 'Start & Core', shortLabel: 'Core' },
  { id: 'study', label: 'Bare Act & Law', shortLabel: 'Bare Act' },
  { id: 'cases', label: 'Cases & Reference', shortLabel: 'Cases' },
  { id: 'prelims', label: 'Prelims & Arcade', shortLabel: 'Prelims' },
  { id: 'mains', label: 'Mains & Print', shortLabel: 'Mains' }
];

export const NAV_ITEMS: NavItem[] = [
  // 1. Start, Daily Sprint & Readiness
  { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" />, sub: 'Workbench & Preamble', category: 'start' },
  { id: 'bootcamp', label: '15-Day Bootcamp', icon: <Flame className="w-4 h-4" />, badge: '3,000 MCQs', sub: 'Daily Study Sprint', category: 'start' },
  { id: 'readiness-index', label: 'Readiness Index', icon: <Target className="w-4 h-4" />, badge: 'Heatmap', sub: 'CRI, Risk & Weakest Link', category: 'start' },

  // 2. Bare Act & Structural Law (Articles -> Parts -> Schedules -> Amendments -> Doctrines -> Mechanisms)
  { id: 'articles-master', label: 'Articles 1–395', icon: <ScrollText className="w-4 h-4" />, badge: 'Bare Act', sub: 'Verbatim Clauses & Diffs', category: 'study' },
  { id: 'parts', label: '25 Parts', icon: <BookOpen className="w-4 h-4" />, badge: 'I–XXII', sub: 'Analytical Commentary', category: 'study' },
  { id: 'schedules', label: '12 Schedules', icon: <Calendar className="w-4 h-4" />, badge: 'Mnemonic', sub: 'TEARS OF OLD PM', category: 'study' },
  { id: 'amendments', label: 'Amendments', icon: <GitCommit className="w-4 h-4" />, badge: '1–106', sub: 'Constituent Shifts', category: 'study' },
  { id: 'doctrines', label: 'Doctrines Hub', icon: <Scale className="w-4 h-4" />, badge: '10 Tests', sub: 'Judicial Doctrines', category: 'study' },
  { id: 'constitutional-bodies', label: 'Bodies Matrix', icon: <Landmark className="w-4 h-4" />, badge: 'Bodies', sub: 'Constitutional Bodies: ECI, CAG, UPSC, NHRC', category: 'study' },
  { id: 'writs-emergency', label: 'Writs & Emergency', icon: <ShieldAlert className="w-4 h-4" />, badge: 'War Room', sub: '5 Writs & Art 352–360', category: 'study' },
  { id: 'federal-relations', label: '7th Schedule', icon: <Network className="w-4 h-4" />, badge: '245–255', sub: 'Centre-State Lists & Repugnancy', category: 'study' },
  { id: 'majorities-lab', label: 'Majorities Lab', icon: <Vote className="w-4 h-4" />, badge: '7 Types', sub: 'Majorities & Quorum Math', category: 'study' },
  { id: 'deadlines-matrix', label: 'Time Limits', icon: <Hourglass className="w-4 h-4" />, badge: 'Numbers', sub: 'Deadlines: 14D, 1M, 6W, 6M', category: 'study' },

  // 3. Jurisprudence, Visuals & Quick Reference
  { id: 'judgments', label: 'Landmark Cases', icon: <Award className="w-4 h-4" />, badge: '100', sub: 'Authoritative Ratios', category: 'cases' },
  { id: 'precedent-clash', label: 'Precedent Clash', icon: <Swords className="w-4 h-4" />, badge: '100 Battles', sub: 'Overruled vs Settled', category: 'cases' },
  { id: 'lineage', label: 'Knowledge Graphs', icon: <GitBranch className="w-4 h-4" />, badge: 'Trees', sub: '1950–2026 Case Lineages', category: 'cases' },
  { id: 'visual-lab', label: 'Visual Law Lab', icon: <Eye className="w-4 h-4" />, badge: '27 SVGs', sub: '27 Interactive Vector Blueprints', category: 'cases' },
  { id: 'audio-lab', label: 'Audio & Viva', icon: <Radio className="w-4 h-4" />, badge: 'Spoken', sub: 'Oral Advocacy Briefings', category: 'cases' },
  { id: 'fast-track', label: 'Speed Hacks', icon: <Zap className="w-4 h-4" />, badge: '+89/+90', sub: 'Shortcuts & Memory Palaces', category: 'cases' },
  { id: 'dictionary', label: 'Legal Dictionary', icon: <BookMarked className="w-4 h-4" />, badge: 'Lexicon', sub: 'Maxims & Definitions', category: 'cases' },
  { id: 'comparative', label: 'Global Matrix', icon: <Globe2 className="w-4 h-4" />, sub: 'Comparative Foreign Sources', category: 'cases' },

  // 4. Prelims Practice, Gamified Arcade & Error Audit
  { id: 'arcade', label: 'Arcade Hub', icon: <Gamepad2 className="w-4 h-4" />, badge: '13 Games', sub: 'Constitutional Memory, Blitz & Moot', category: 'prelims' },
  { id: 'flashcards', label: 'Flashcards (SRS)', icon: <BrainCircuit className="w-4 h-4" />, badge: '900+', sub: 'Leitner Spaced Repetition', category: 'prelims' },
  { id: 'article-mastery', label: '395 Mastery Wall', icon: <Grid3x3 className="w-4 h-4" />, badge: 'Recall', sub: 'Articles Matrix & +89/+90', category: 'prelims' },
  { id: 'quiz', label: 'Mastery Quiz', icon: <CheckSquare className="w-4 h-4" />, badge: 'Drill', sub: 'Topic Conceptual Drills', category: 'prelims' },
  { id: 'socratic-tutor', label: 'Socratic Examiner', icon: <MessagesSquare className="w-4 h-4" />, badge: 'Dialectic', sub: 'Cross-Examiner & Fallacies', category: 'prelims' },
  { id: 'mock-exam', label: 'Exam Simulator', icon: <Timer className="w-4 h-4" />, badge: 'Mock', sub: 'Timed Prelims Exam Hall', category: 'prelims' },
  { id: 'trap-simulator', label: 'Negative Marking', icon: <OctagonAlert className="w-4 h-4" />, badge: '+2/-0.66', sub: '50-Q Trap Simulator', category: 'prelims' },
  { id: 'mistakes-notebook', label: 'Mistakes Bank', icon: <AlertTriangle className="w-4 h-4" />, badge: 'Audit', sub: 'Re-Attempt Past Errors', category: 'prelims' },

  // 5. Mains Writing, Judgment Drafting, PYQs & Print
  { id: 'mains-lab', label: 'Mains Writing Lab', icon: <PenTool className="w-4 h-4" />, badge: '150 Cases', sub: 'Structured Answer Rubrics', category: 'mains' },
  { id: 'judgment-lab', label: 'Judgment Writing', icon: <Gavel className="w-4 h-4" />, badge: 'Bench', sub: 'Framing Issues & Orders', category: 'mains' },
  { id: 'mains-mock', label: 'Mains Mock Hall', icon: <Clock className="w-4 h-4" />, badge: '3-Hour', sub: 'Full Mains Paper Simulator', category: 'mains' },
  { id: 'pyqs', label: 'PYQs & Trends', icon: <TrendingUp className="w-4 h-4" />, badge: '10-Yr', sub: 'UPSC · DJS · UP · CLAT Vault', category: 'mains' },
  { id: 'revision-sheets', label: 'Revision Sheets', icon: <Printer className="w-4 h-4" />, badge: 'Print', sub: 'Printable High-Yield Kits', category: 'mains' }
];
