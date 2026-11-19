import React, { useState, useEffect, useMemo } from 'react';
import {
  Timer,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Play,
  Pause,
  Printer,
  FileText,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BookOpen,
  Send,
  Download,
  ShieldAlert,
  HelpCircle,
  Sliders,
  Flame,
  Zap,
  Filter,
  Check
} from 'lucide-react';
import { MAINS_MASTER_QUESTIONS } from '../../data/mainsQuestionsData';
import type { MainsMasterQuestion, MarksTier, ExamCategory } from '../../types/mainsQuestionTypes';
import { useTheme } from '../../context/ThemeContext';

export type DrillType = '3hr-full' | '1hr-sprint' | '30min-rapid' | 'custom';

export interface MockPaperTemplate {
  id: string;
  drillType: DrillType;
  title: string;
  subtitle: string;
  badge: string;
  totalMarks: number;
  durationMinutes: number;
  questionIds: string[];
}

export const PRESET_MOCK_PAPERS: MockPaperTemplate[] = [
  // =========================================================================
  // 1. FULL 3-HOUR EXAMINATION PAPERS (100 MARKS • 180 MINS)
  // =========================================================================
  {
    id: 'djs-mains-paper-1',
    drillType: '3hr-full',
    title: 'Delhi Judicial Service (DJS) — Constitutional Law Benchmark Paper',
    subtitle: 'High Court standard testing criminal due process, marital autonomy, personal liberty, and privacy',
    badge: '100 Marks • 3 Hours',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-bulldozer-justice-demolitions', // 20M
      'mains-20m-parliamentary-privilege-sita-soren', // 20M
      'mains-15m-marital-rape-exception', // 15M
      'mains-15m-same-sex-marriage-supriyo', // 15M
      'mains-10m-living-wills-passive-euthanasia', // 10M
      'mains-10m-self-incrimination-narco-dna', // 10M
      'mains-5m-right-to-travel-abroad', // 5M
      'mains-5m-curative-petition-art-142' // 5M
    ]
  },
  {
    id: 'up-pcsj-mains-paper-1',
    drillType: '3hr-full',
    title: 'UP PCS-J (Mains) — Constitutional & Administrative Law Paper',
    subtitle: 'State judiciary standard focusing on equality, affirmative action, federal accountability, and doctrines',
    badge: '100 Marks • 3 Hours',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-basic-structure-evolution', // 20M
      'mains-20m-indian-federalism-accountability', // 20M
      'mains-15m-interstate-trade-part-xiii', // 15M
      'mains-15m-golden-triangle-maneka', // 15M
      'mains-10m-sc-subclassification-davinder-singh', // 10M
      'mains-10m-governor-assent-art-200', // 10M
      'mains-5m-nemo-judex-bias', // 5M
      'mains-5m-doctrine-of-eclipse' // 5M
    ]
  },
  {
    id: 'bjs-mains-paper-1',
    drillType: '3hr-full',
    title: 'Bihar Judicial Service (BJS) — Constitutional Law & Writs Paper',
    subtitle: 'High-scoring state judiciary pattern testing writ jurisprudence, severability, and equal pay',
    badge: '100 Marks • 3 Hours',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-secularism-indian-vs-western', // 20M
      'mains-20m-art-142-complete-justice', // 20M
      'mains-15m-writs-habeas-corpus-detention', // 15M
      'mains-15m-tribunals-judicial-review-chandra-kumar', // 15M
      'mains-10m-equal-pay-equal-work', // 10M
      'mains-10m-anti-defection-tenth-schedule', // 10M
      'mains-5m-doctrine-of-severability', // 5M
      'mains-5m-res-judicata-writs-daryao' // 5M
    ]
  },
  {
    id: 'upsc-law-paper-1',
    drillType: '3hr-full',
    title: 'UPSC Civil Services (Law Optional) — Constitutional Synthesis Paper',
    subtitle: 'Advanced conceptual paper on fiscal federalism, climate justice, and institutional integrity',
    badge: '100 Marks • 3 Hours',
    totalMarks: 100,
    durationMinutes: 180,
    questionIds: [
      'mains-20m-environmental-jurisprudence-public-trust', // 20M
      'mains-20m-art-142-complete-justice', // 20M
      'mains-15m-cbi-ed-sanction-prosecution', // 15M
      'mains-15m-electoral-bonds-invalidation', // 15M
      'mains-10m-mineral-rights-taxation-mada', // 10M
      'mains-10m-njac-collegium-judicial-primacy', // 10M
      'mains-5m-separation-of-powers', // 5M
      'mains-5m-right-to-property-300a' // 5M
    ]
  },

  // =========================================================================
  // 2. 1-HOUR SECTIONAL POWER SPRINTS (40–50 MARKS • 60 MINS)
  // =========================================================================
  {
    id: 'sprint-fr-intensive',
    drillType: '1hr-sprint',
    title: 'Fundamental Rights & The Golden Triangle Power Sprint',
    subtitle: 'Intensive 1-hour workout on Articles 14, 19, 21, Substantive Due Process, and Privacy',
    badge: '50 Marks • 60 Mins',
    totalMarks: 50,
    durationMinutes: 60,
    questionIds: [
      'mains-20m-bulldozer-justice-demolitions', // 20M
      'mains-15m-golden-triangle-maneka', // 15M
      'mains-10m-privacy-three-fold-test', // 10M
      'mains-5m-right-to-travel-abroad' // 5M
    ]
  },
  {
    id: 'sprint-judiciary-writs',
    drillType: '1hr-sprint',
    title: 'Union Judiciary, Writs & Complete Justice Sprint',
    subtitle: 'High-frequency judicial paper on Articles 32/226, Article 142 inherent powers, and Curative Petitions',
    badge: '50 Marks • 60 Mins',
    totalMarks: 50,
    durationMinutes: 60,
    questionIds: [
      'mains-20m-art-142-complete-justice', // 20M
      'mains-15m-writs-habeas-corpus-detention', // 15M
      'mains-10m-njac-collegium-judicial-primacy', // 10M
      'mains-5m-curative-petition-art-142' // 5M
    ]
  },
  {
    id: 'sprint-federalism-tax',
    drillType: '1hr-sprint',
    title: 'Federal Relations, 7th Schedule & Taxation Sprint',
    subtitle: 'Master Entry 50 mineral powers (MADA 2024), GST Council federalism, and Article 254 Repugnancy',
    badge: '50 Marks • 60 Mins',
    totalMarks: 50,
    durationMinutes: 60,
    questionIds: [
      'mains-20m-indian-federalism-accountability', // 20M
      'mains-15m-gst-council-fiscal-federalism', // 15M
      'mains-10m-mineral-rights-taxation-mada', // 10M
      'mains-5m-doctrine-pith-substance' // 5M
    ]
  },
  {
    id: 'sprint-criminal-due-process',
    drillType: '1hr-sprint',
    title: 'Criminal-Constitutional Safeguards & Prosecution Sprint',
    subtitle: 'Favorite paper for CBI Public Prosecutor and State APP exams (Self-Incrimination, Sanctions, Bail)',
    badge: '40 Marks • 60 Mins',
    totalMarks: 40,
    durationMinutes: 60,
    questionIds: [
      'mains-15m-cbi-ed-sanction-prosecution', // 15M
      'mains-10m-self-incrimination-narco-dna', // 10M
      'mains-10m-bail-rule-jail-exception', // 10M
      'mains-5m-double-jeopardy-art-20-2' // 5M
    ]
  },

  // =========================================================================
  // 3. 30-MINUTE RAPID RESPONSE DRILLS (20–25 MARKS • 30 MINS)
  // =========================================================================
  {
    id: 'rapid-5m-short-notes',
    drillType: '30min-rapid',
    title: '5-Marker Doctrinal Short Notes Rapid Blitz',
    subtitle: 'Rapid test of 4 crisp short notes testing statutory definitions, case anchors, and 100-word pacing',
    badge: '20 Marks • 30 Mins',
    totalMarks: 20,
    durationMinutes: 30,
    questionIds: [
      'mains-5m-waiver-fr', // 5M
      'mains-5m-doctrine-of-eclipse', // 5M
      'mains-5m-nemo-judex-bias', // 5M
      'mains-5m-doctrine-of-severability' // 5M
    ]
  },
  {
    id: 'rapid-2024-constitution-benches',
    drillType: '30min-rapid',
    title: 'Recent 2024 Constitution Bench Decisions Sprint',
    subtitle: 'Fast-paced drill covering Davinder Singh (SC Sub-classification) and MADA v. SAIL (Mineral Rights)',
    badge: '20 Marks • 30 Mins',
    totalMarks: 20,
    durationMinutes: 30,
    questionIds: [
      'mains-10m-sc-subclassification-davinder-singh', // 10M
      'mains-10m-mineral-rights-taxation-mada' // 10M
    ]
  },
  {
    id: 'rapid-doctrines-blitz',
    drillType: '30min-rapid',
    title: 'Core Legislative Doctrines Speed-Run',
    subtitle: 'Timed drill on Pith & Substance, Colourable Legislation, Territorial Nexus, and Repugnancy',
    badge: '25 Marks • 35 Mins',
    totalMarks: 25,
    durationMinutes: 35,
    questionIds: [
      'mains-10m-repugnancy-art-254-wb-hira', // 10M
      'mains-5m-doctrine-pith-substance', // 5M
      'mains-5m-colourable-legislation', // 5M
      'mains-5m-territorial-nexus' // 5M
    ]
  },
  {
    id: 'rapid-speedy-trial-liberty',
    drillType: '30min-rapid',
    title: 'Personal Liberty & Undertrial Incarceration Sprint',
    subtitle: 'Focus on Section 436A, Article 21 Speedy Trial, and Custodial Compensation jurisprudence',
    badge: '25 Marks • 35 Mins',
    totalMarks: 25,
    durationMinutes: 35,
    questionIds: [
      'mains-10m-speedy-trial-najeeb-antil', // 10M
      'mains-10m-custodial-violence-compensation', // 10M
      'mains-5m-handcuffing-solitary-confinement' // 5M
    ]
  }
];

export const MainsMockExamSimulatorView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Active Category Filter for Drills
  const [activeDrillCategory, setActiveDrillCategory] = useState<DrillType>('3hr-full');

  // Selected Paper Configuration
  const [selectedPaperId, setSelectedPaperId] = useState<string>(PRESET_MOCK_PAPERS[0].id);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);

  // Active question index in test
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  // Timer state (seconds)
  const [remainingSeconds, setRemainingSeconds] = useState<number>(180 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // Custom Generator Settings
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(4);
  const [customDurationMinutes, setCustomDurationMinutes] = useState<number>(60);
  const [customMarksFilter, setCustomMarksFilter] = useState<string>('all');
  const [customExamFilter, setCustomExamFilter] = useState<string>('ALL');

  // Student Drafts for each question in this exam
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_active_mains_mock');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Filtered preset papers by tab
  const displayedPresets = useMemo(() => {
    return PRESET_MOCK_PAPERS.filter((p) => p.drillType === activeDrillCategory);
  }, [activeDrillCategory]);

  // Current paper object (Preset or Custom)
  const currentPaper: MockPaperTemplate = useMemo(() => {
    if (activeDrillCategory === 'custom') {
      // Build dynamic custom paper from master questions
      let candidatePool = [...MAINS_MASTER_QUESTIONS];

      if (customMarksFilter !== 'all') {
        const targetMarks = parseInt(customMarksFilter, 10);
        candidatePool = candidatePool.filter((q) => q.typicalMarks === targetMarks);
      }

      if (customExamFilter !== 'ALL') {
        candidatePool = candidatePool.filter((q) => q.examCategory === customExamFilter);
      }

      // Slice up to selected count
      const selected = candidatePool.slice(0, customQuestionCount);
      const totalMarks = selected.reduce((sum, q) => sum + q.typicalMarks, 0);

      return {
        id: 'custom-generated-paper',
        drillType: 'custom',
        title: `Custom Mains Diagnostic Paper (${selected.length} Questions)`,
        subtitle: `Configured for ${customDurationMinutes} minutes • ${customMarksFilter !== 'all' ? customMarksFilter + 'M questions' : 'Mixed marks'} • ${customExamFilter} category`,
        badge: `${totalMarks} Marks • ${customDurationMinutes} Mins`,
        totalMarks: totalMarks || 50,
        durationMinutes: customDurationMinutes,
        questionIds: selected.map((q) => q.id)
      };
    }

    return (
      PRESET_MOCK_PAPERS.find((p) => p.id === selectedPaperId) ||
      displayedPresets[0] ||
      PRESET_MOCK_PAPERS[0]
    );
  }, [activeDrillCategory, selectedPaperId, displayedPresets, customQuestionCount, customDurationMinutes, customMarksFilter, customExamFilter]);

  // Questions for this paper
  const paperQuestions: MainsMasterQuestion[] = useMemo(() => {
    return currentPaper.questionIds
      .map((id) => MAINS_MASTER_QUESTIONS.find((q) => q.id === id))
      .filter((q): q is MainsMasterQuestion => !!q);
  }, [currentPaper]);

  const activeQuestion: MainsMasterQuestion =
    paperQuestions[activeQuestionIndex] || paperQuestions[0];

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_active_mains_mock', JSON.stringify(examAnswers));
    } catch (e) {
      console.error('Failed to autosave mains mock exam:', e);
    }
  }, [examAnswers]);

  // Countdown Timer
  useEffect(() => {
    if (!isExamActive || isExamSubmitted || isTimerPaused) return;

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamActive, isExamSubmitted, isTimerPaused]);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remSecs = secs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setRemainingSeconds(currentPaper.durationMinutes * 60);
    setIsExamActive(true);
    setIsExamSubmitted(false);
    setIsTimerPaused(false);
    setActiveQuestionIndex(0);
  };

  const handleAnswerChange = (qId: string, text: string) => {
    setExamAnswers((prev) => ({
      ...prev,
      [qId]: text
    }));
  };

  const totalWordsWritten = useMemo(() => {
    return Object.values(examAnswers).reduce((sum, text) => {
      return sum + (text || '').split(/\s+/).filter(Boolean).length;
    }, 0);
  }, [examAnswers]);

  const attemptedCount = useMemo(() => {
    return paperQuestions.filter(
      (q) => (examAnswers[q.id] || '').trim().length > 20
    ).length;
  }, [paperQuestions, examAnswers]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn">
      {/* 1. PRE-EXAM SETUP SCREEN */}
      {!isExamActive && (
        <div className="rounded-3xl p-6 sm:p-10 bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-8 shadow-xl">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Clock className="w-3.5 h-3.5" />
              Mains Mock Examination Hall & Timed Practice Simulator
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
              Mains Mock Examination Simulator
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
              Choose from full 3-hour exam hall papers, 1-hour sectional sprints, 30-minute rapid doctrinal drills, or build your own customized test paper from our 100-Question Master Bank.
            </p>
          </div>

          {/* Drill Format Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[var(--border-subtle)] pb-3">
            <button
              type="button"
              onClick={() => {
                setActiveDrillCategory('3hr-full');
                setSelectedPaperId(PRESET_MOCK_PAPERS[0].id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDrillCategory === '3hr-full'
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Full 3-Hour Papers (100 Marks)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveDrillCategory('1hr-sprint');
                setSelectedPaperId(PRESET_MOCK_PAPERS.find((p) => p.drillType === '1hr-sprint')!.id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDrillCategory === '1hr-sprint'
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>1-Hour Sectional Sprints (40–50 Marks)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveDrillCategory('30min-rapid');
                setSelectedPaperId(PRESET_MOCK_PAPERS.find((p) => p.drillType === '30min-rapid')!.id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDrillCategory === '30min-rapid'
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Flame className="w-4 h-4 text-rose-400" />
              <span>30-Minute Rapid Response Drills (20–25 Marks)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDrillCategory('custom')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDrillCategory === 'custom'
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>⚡ Custom Paper Builder</span>
            </button>
          </div>

          {/* PRESET PAPERS GRID (For 3hr, 1hr, and 30min) */}
          {activeDrillCategory !== 'custom' && (
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Select Test Paper:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedPresets.map((paper) => {
                  const isSelected = selectedPaperId === paper.id;
                  return (
                    <button
                      key={paper.id}
                      type="button"
                      onClick={() => setSelectedPaperId(paper.id)}
                      className={`p-5 rounded-2xl border text-left transition-all space-y-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/20'
                          : 'bg-[var(--bg-base)]/60 border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-mono">
                          {paper.badge}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-mono">
                          {paper.durationMinutes} Mins
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                        {paper.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                        {paper.subtitle}
                      </p>

                      <div className="text-[11px] font-mono text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)] flex items-center justify-between">
                        <span>{paper.questionIds.length} Target Questions</span>
                        <span className="text-[var(--accent-primary)] font-bold">Select Paper →</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* CUSTOM EXAM BUILDER CONTROLS */}
          {activeDrillCategory === 'custom' && (
            <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-6">
              <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
                <Sliders className="w-5 h-5 text-[var(--accent-primary)]" />
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    Custom Mains Paper Generator
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Configure your personalized test parameters from the 100-Question Master Vault.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {/* Number of Questions */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[var(--text-primary)]">Number of Questions:</label>
                  <select
                    value={customQuestionCount}
                    onChange={(e) => setCustomQuestionCount(parseInt(e.target.value, 10))}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                  >
                    <option value={2}>2 Questions (Mini-Test)</option>
                    <option value={4}>4 Questions (Standard Sprint)</option>
                    <option value={6}>6 Questions (Intensive Session)</option>
                    <option value={8}>8 Questions (Full Paper)</option>
                    <option value={10}>10 Questions (Grand Test)</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[var(--text-primary)]">Duration:</label>
                  <select
                    value={customDurationMinutes}
                    onChange={(e) => setCustomDurationMinutes(parseInt(e.target.value, 10))}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                  >
                    <option value={15}>15 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes (1 Hour)</option>
                    <option value={90}>90 Minutes (1.5 Hours)</option>
                    <option value={120}>120 Minutes (2 Hours)</option>
                    <option value={180}>180 Minutes (3 Hours)</option>
                  </select>
                </div>

                {/* Marks Tier Filter */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[var(--text-primary)]">Marks Tier Focus:</label>
                  <select
                    value={customMarksFilter}
                    onChange={(e) => setCustomMarksFilter(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                  >
                    <option value="all">All Marks Tiers (Mixed)</option>
                    <option value="5">5 Marks Only (Short Notes)</option>
                    <option value="10">10 Marks Only (Standard)</option>
                    <option value="15">15 Marks Only (Problems)</option>
                    <option value="20">20 Marks Only (Flagship Essays)</option>
                  </select>
                </div>

                {/* Exam Board Filter */}
                <div className="space-y-1.5">
                  <label className="font-bold text-[var(--text-primary)]">Exam Board Category:</label>
                  <select
                    value={customExamFilter}
                    onChange={(e) => setCustomExamFilter(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                  >
                    <option value="ALL">All Judicial & Prosecution Exams</option>
                    <option value="DJS">Delhi Judicial Service (DJS)</option>
                    <option value="UP_PCSJ">UP PCS-J (Mains)</option>
                    <option value="BJS">Bihar Judicial Service (BJS)</option>
                    <option value="PROSECUTION">Prosecution (CBI / State APP)</option>
                    <option value="UPSC_LAW">UPSC Law Optional</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Paper Question Index Preview */}
          <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <span className="text-xs font-bold text-[var(--text-primary)]">
                Paper Index: {currentPaper.title}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {paperQuestions.length} Questions • {currentPaper.totalMarks} Marks • {currentPaper.durationMinutes} Minutes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {paperQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-2"
                >
                  <span className="font-semibold text-[var(--text-primary)] truncate">
                    Q{idx + 1}. {q.title}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-[var(--text-muted)]">
                      {q.targetWordLimit.split('|')[0]}
                    </span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                      {q.typicalMarks}M
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={handleStartExam}
              className="px-8 py-3.5 rounded-2xl bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Enter Examination Hall & Begin {currentPaper.durationMinutes}-Minute Timer</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM HALL INTERFACE */}
      {isExamActive && !isExamSubmitted && (
        <div className="space-y-6">
          {/* Top Exam Header with Stopwatch & Controls */}
          <div className="rounded-2xl p-4 sm:p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md sticky top-16 z-30 backdrop-blur-md">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h2 className="text-sm font-bold text-[var(--text-primary)] truncate max-w-md">
                  {currentPaper.title}
                </h2>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Attempted: {attemptedCount} of {paperQuestions.length} Questions • {totalWordsWritten} Words Total (≈ {(totalWordsWritten / 200).toFixed(1)} Pages)
              </p>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="px-4 py-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] font-mono text-base sm:text-lg font-black flex items-center gap-2 shadow-inner">
                <Clock className={`w-4 h-4 ${remainingSeconds < 600 ? 'text-rose-400 animate-pulse' : 'text-amber-400'}`} />
                <span className={remainingSeconds < 600 ? 'text-rose-400' : 'text-[var(--text-primary)]'}>
                  {formatTime(remainingSeconds)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsTimerPaused(!isTimerPaused)}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5"
              >
                {isTimerPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isTimerPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you ready to submit your full examination paper?')) {
                    setIsExamSubmitted(true);
                  }
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-black font-black transition-all flex items-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Paper</span>
              </button>
            </div>
          </div>

          {/* Question Navigator Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {paperQuestions.map((q, idx) => {
              const isSelected = activeQuestionIndex === idx;
              const hasDraft = (examAnswers[q.id] || '').trim().length > 20;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setActiveQuestionIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                      : hasDraft
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>Q{idx + 1}</span>
                  <span className="text-[10px] font-mono opacity-80">({q.typicalMarks}M)</span>
                  {hasDraft && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Active Question Workspace */}
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Question Details */}
            <div className="space-y-3 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  Question {activeQuestionIndex + 1} of {paperQuestions.length} • {activeQuestion.typicalMarks} Marks
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  Target: {activeQuestion.targetWordLimit} ({activeQuestion.estimatedPages})
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                {activeQuestion.questionText}
              </h2>
            </div>

            {/* Answer Scratchpad with Word Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Candidate Answer Script:</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">
                  {((examAnswers[activeQuestion.id] || '').split(/\s+/).filter(Boolean).length)} Words
                  {' '}≈ {(((examAnswers[activeQuestion.id] || '').split(/\s+/).filter(Boolean).length) / 200).toFixed(1)} Pages
                </span>
              </div>

              <textarea
                value={examAnswers[activeQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(activeQuestion.id, e.target.value)}
                placeholder="Write your complete examination answer here..."
                rows={16}
                className="w-full p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              />
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeQuestionIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveQuestionIndex((prev) => Math.min(paperQuestions.length - 1, prev + 1))}
                disabled={activeQuestionIndex === paperQuestions.length - 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. POST-EXAM SUBMISSION & PRINTABLE BOOKLET */}
      {isExamSubmitted && (
        <div className="space-y-6">
          <div className="rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-6 shadow-xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[var(--text-primary)]">
                Examination Paper Submitted
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {currentPaper.title} ({currentPaper.totalMarks} Marks)
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-xs">
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Questions Attempted</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {attemptedCount} / {paperQuestions.length}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Total Words</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {totalWordsWritten}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Estimated Exam Pages</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {(totalWordsWritten / 200).toFixed(1)} Pages
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Time Remaining</span>
                <p className="text-lg font-bold text-[var(--text-primary)] pt-1">
                  {formatTime(remainingSeconds)}
                </p>
              </div>
            </div>

            {/* Print & Restart Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-6 py-3 rounded-2xl bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 font-bold text-xs flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>🖨️ Export Printable Answer Script (PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsExamActive(false);
                  setIsExamSubmitted(false);
                }}
                className="px-5 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] font-bold text-xs transition-colors cursor-pointer"
              >
                Back to Mock Setup
              </button>
            </div>
          </div>

          {/* Printable Answer Booklet Sheet */}
          <div className="space-y-6 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Your Complete Submitted Answer Script & Official Model Answers:
            </h3>

            {paperQuestions.map((q, idx) => {
              const studentAnswer = examAnswers[q.id] || '';
              return (
                <div
                  key={q.id}
                  className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-5 shadow-lg page-break-inside-avoid"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                    <span className="text-xs font-bold text-[var(--accent-primary)]">
                      Question #{idx + 1} ({q.typicalMarks} Marks)
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Word Count: {studentAnswer.split(/\s+/).filter(Boolean).length} Words
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {q.questionText}
                  </h4>

                  {/* Candidate Answer */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      Candidate's Written Response:
                    </span>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap font-serif">
                      {studentAnswer.trim() || 'No answer attempted for this question.'}
                    </p>
                  </div>

                  {/* Official 4-Step Blueprint Reference */}
                  <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Official 4-Step Examiner Blueprint:
                    </span>
                    <div className="space-y-1 text-[var(--text-muted)]">
                      <p><strong className="text-[var(--text-primary)]">Step 1:</strong> {q.answerBlueprint.step1Intro}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 2:</strong> {q.answerBlueprint.step2DoctrinalCore}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 3:</strong> {q.answerBlueprint.step3PrecedentEvolution}</p>
                      <p><strong className="text-[var(--text-primary)]">Step 4:</strong> {q.answerBlueprint.step4Conclusion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
