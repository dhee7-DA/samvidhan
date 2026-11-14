import React, { useState, useMemo, useEffect } from 'react';
import {
  FileText,
  Search,
  Award,
  Calendar,
  BookOpen,
  Scale,
  Sparkles,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  CheckCircle2,
  Clock,
  Layers,
  Flame,
  ArrowRight,
  HelpCircle,
  Trophy,
  Filter,
  Check,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Globe,
  Compass
} from 'lucide-react';
import { JKPSC_MAINS_PYQ_DATA, type PyqQuestion } from '../../data/pyqData';
import {
  ALL_INDIA_TOPIC_FREQUENCIES,
  COMMON_JUDICIARY_QUESTIONS,
  type AllIndiaTopicFrequency,
  type CommonJudiciaryQuestion
} from '../../data/allIndiaJudicialTopics';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';

export const PyqVaultView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Primary Scope Toggle: 'jkpsc' | 'allIndia'
  const [examScope, setExamScope] = useState<'jkpsc' | 'allIndia'>('allIndia');

  // =========================================================================
  // JKPSC SECTION STATE
  // =========================================================================
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('all');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(JKPSC_MAINS_PYQ_DATA[0].id);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Practice Drafts for JKPSC
  const [userDrafts, setUserDrafts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_jkpsc_pyq_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_jkpsc_pyq_drafts', JSON.stringify(userDrafts));
    } catch (e) {
      console.error('Failed to save PYQ drafts:', e);
    }
  }, [userDrafts]);

  // Timer State for drafting practice
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredQuestions = useMemo(() => {
    return JKPSC_MAINS_PYQ_DATA.filter((q) => {
      if (selectedYearFilter !== 'all' && q.year !== selectedYearFilter) return false;
      if (selectedTopicFilter !== 'all' && q.topic !== selectedTopicFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.title.toLowerCase().includes(query) ||
          q.questionText.toLowerCase().includes(query) ||
          q.relevantArticles.some((art) => art.toLowerCase().includes(query)) ||
          q.coreIssues.some((issue) => issue.toLowerCase().includes(query)) ||
          q.landmarkPrecedents.classic.toLowerCase().includes(query) ||
          q.landmarkPrecedents.modern2024.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, selectedYearFilter, selectedTopicFilter]);

  const currentQuestion: PyqQuestion = useMemo(() => {
    return (
      JKPSC_MAINS_PYQ_DATA.find((q) => q.id === selectedQuestionId) ||
      JKPSC_MAINS_PYQ_DATA[0]
    );
  }, [selectedQuestionId]);

  const handleDraftChange = (text: string) => {
    setUserDrafts((prev) => ({
      ...prev,
      [currentQuestion.id]: text
    }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const wordCount = (userDrafts[currentQuestion.id] || '').split(/\s+/).filter(Boolean).length;

  // =========================================================================
  // ALL-INDIA JUDICIAL SECTION STATE
  // =========================================================================
  const [selectedTopicId, setSelectedTopicId] = useState<string>(ALL_INDIA_TOPIC_FREQUENCIES[0].id);
  const [selectedCommonQId, setSelectedCommonQId] = useState<string>(COMMON_JUDICIARY_QUESTIONS[0].id);
  const [allIndiaDrafts, setAllIndiaDrafts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('samvidhan_all_india_drafts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('samvidhan_all_india_drafts', JSON.stringify(allIndiaDrafts));
    } catch (e) {
      console.error('Failed to save All-India drafts:', e);
    }
  }, [allIndiaDrafts]);

  const activeTopic = useMemo(() => {
    return (
      ALL_INDIA_TOPIC_FREQUENCIES.find((t) => t.id === selectedTopicId) ||
      ALL_INDIA_TOPIC_FREQUENCIES[0]
    );
  }, [selectedTopicId]);

  const activeCommonQ = useMemo(() => {
    return (
      COMMON_JUDICIARY_QUESTIONS.find((q) => q.id === selectedCommonQId) ||
      COMMON_JUDICIARY_QUESTIONS[0]
    );
  }, [selectedCommonQId]);

  const handleAllIndiaDraftChange = (text: string) => {
    setAllIndiaDrafts((prev) => ({
      ...prev,
      [activeCommonQ.id]: text
    }));
  };

  const allIndiaWordCount = (allIndiaDrafts[activeCommonQ.id] || '').split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* =========================================================================
          HERO BANNER & PRIMARY SCOPE SWITCHER
      ========================================================================= */}
      <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Scale className="w-3.5 h-3.5" />
              All-India Judicial & Prosecution Mains Question Intelligence
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Constitutional Law Mains Vault
            </h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Explore the <strong className="text-[var(--text-primary)]">most recurrent topics & universal question blueprints</strong> across 
              Delhi Judicial Service (DJS), UP PCS-J, Bihar Judicial (BPSC), UPSC Law Optional, and J&K Prosecuting Officer exams.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Exams Synthesized</span>
              <span className="text-lg font-black text-[var(--accent-primary)]">DJS, UP, BPSC, UPSC</span>
            </div>
            <button
              onClick={() => setActiveTab('bootcamp')}
              className="px-4 py-3 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Flame className="w-4 h-4" />
              <span>15-Day Bootcamp</span>
            </button>
          </div>
        </div>

        {/* Primary Mode Tabs */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
          <button
            onClick={() => setExamScope('allIndia')}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
              examScope === 'allIndia'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] ring-2 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>All-India Topic Frequency & Master Blueprints</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
              examScope === 'allIndia' ? 'bg-black/20 text-[var(--bg-base)]' : 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
            }`}>
              Most Common
            </span>
          </button>

          <button
            onClick={() => setExamScope('jkpsc')}
            className={`px-5 py-3 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm ${
              examScope === 'jkpsc'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] ring-2 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>J&K Mains PYQs (24 Official Questions)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
              examScope === 'jkpsc' ? 'bg-black/20 text-[var(--bg-base)]' : 'bg-emerald-500/10 text-emerald-400'
            }`}>
              2014–2023
            </span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          VIEW 1: ALL-INDIA TOPIC FREQUENCY & MASTER BLUEPRINTS
      ========================================================================= */}
      {examScope === 'allIndia' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Exam Comparative Analysis Bar */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <Globe className="w-4 h-4" />
              <span>Exam Frameworks Analyzed & Weightage Methodology</span>
            </div>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              Based on empirical analysis of past 15 years papers from <strong>Delhi Judicial Service (DJS)</strong>, 
              <strong>UP PCS-J</strong>, <strong>Bihar Judicial Services (BPSC)</strong>, <strong>UPSC Civil Services (Law Optional)</strong>, 
              <strong>Rajasthan & MP Judicial Services</strong>, and <strong>Prosecuting Officer (APO/PO) exams</strong>. 
              Examiners across all states concentrate over <span className="text-[var(--accent-primary)] font-bold">70% of marks</span> on the top 4 constitutional pillars.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Delhi Judicial (DJS)', 'UP PCS-J (Mains)', 'Bihar Judicial (BPSC)', 'UPSC Law Optional', 'Rajasthan Judiciary (RJS)', 'MP Civil Judge', 'CBI / State Prosecution (PO/APO)'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================================
              HEATMAP & FREQUENCY RANKING GRID
          ===================================================================== */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--accent-primary)]" />
                  Top Recurring Constitutional Topics by All-India Frequency
                </h2>
                <p className="text-xs text-[var(--text-secondary)]">
                  Click on any topic card to inspect why examiners repeatedly test it, core articles, and modern 2024 Constitution Bench shifts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ALL_INDIA_TOPIC_FREQUENCIES.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                const tierColor =
                  topic.frequencyTier === 'Tier 1: Guaranteed Super-Core'
                    ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                    : topic.frequencyTier === 'Tier 2: High Probability Recurring'
                    ? 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                    : 'border-blue-500/30 text-blue-400 bg-blue-500/10';

                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`p-4 rounded-xl text-left border transition-all space-y-3 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 shadow-lg'
                        : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black text-[var(--accent-primary)]">
                          RANK #{topic.rank}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${tierColor}`}>
                          {topic.frequencyScore}% OF ALL MARKS
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                        {topic.title}
                      </h3>

                      {/* Visual Frequency Progress Bar */}
                      <div className="w-full bg-[var(--bg-base)] h-2 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-amber-500 rounded-full transition-all"
                          style={{ width: `${Math.min(100, topic.frequencyScore * 4)}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {topic.coreArticles.slice(0, 3).map((art) => (
                        <span
                          key={art}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                        >
                          {art}
                        </span>
                      ))}
                      {topic.coreArticles.length > 3 && (
                        <span className="text-[10px] text-[var(--text-muted)]">
                          +{topic.coreArticles.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================================
              ACTIVE TOPIC DEEP-DIVE CARD
          ===================================================================== */}
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                    Rank #{activeTopic.rank} Priority
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    {activeTopic.frequencyTier}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                  {activeTopic.title}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Frequency Weightage</span>
                <span className="text-2xl font-black text-[var(--accent-primary)]">
                  ~{activeTopic.frequencyScore}%
                </span>
              </div>
            </div>

            {/* Why Examiners Love This Topic */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Examiner Psychology: Why This Topic Appears in Every Mains Paper
              </span>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeTopic.whyExaminersLoveIt}
              </p>
            </div>

            {/* Two-Column Grid: Recurring Themes & Precedent Evolution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recurring Themes */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                  Exact Recurring Question Angles Across States:
                </span>
                <ul className="space-y-2">
                  {activeTopic.recurringThemes.map((theme, i) => (
                    <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benchmark Precedent Evolution */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Benchmark Precedent Evolution:
                </span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Foundational Benchmark Case Laws:
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {activeTopic.benchmarkCases.classic}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-emerald-500/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Modern 2024 Constitution Bench Shift:
                    </span>
                    <span className="font-semibold text-emerald-300">
                      {activeTopic.benchmarkCases.modern2024}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typical Past Year Question Prompt Snippet */}
            <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                Standard Question Blueprint in Exams:
              </span>
              <p className="text-xs md:text-sm font-medium italic text-[var(--text-primary)] leading-relaxed">
                {activeTopic.sampleQuestionSnippet}
              </p>
            </div>
          </div>

          {/* =====================================================================
              UNIVERSALLY RECURRING MASTER QUESTIONS VAULT
          ===================================================================== */}
          <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--accent-primary)]" />
                Master Recurring Question Blueprints Across Judiciary Exams
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                The exact questions that get asked repeatedly across DJS, UP PCS-J, Bihar, and UPSC Law Optional, complete with 4-step answer blueprints.
              </p>
            </div>

            {/* Question Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {COMMON_JUDICIARY_QUESTIONS.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedCommonQId(q.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                    selectedCommonQId === q.id
                      ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] border-[var(--accent-primary)] shadow-sm'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Q{idx + 1}: {q.title.split(':')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Master Question Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Standard {activeCommonQ.typicalMarks} Marks Question
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      Appeared In: {activeCommonQ.examsAppeared.join(' | ')}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[var(--accent-primary)]">
                    Model Blueprint
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                  {activeCommonQ.title}
                </h3>

                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] leading-relaxed italic">
                  {activeCommonQ.questionText}
                </div>
              </div>

              {/* Core Issues & Examiner Expectations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                    Core Doctrinal Issues Framed:
                  </span>
                  <ul className="space-y-1.5">
                    {activeCommonQ.coreIssues.map((issue, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/20 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Examiner Expectation (What Fetches 70%+ Marks):
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {activeCommonQ.examinerExpectation}
                  </p>
                </div>
              </div>

              {/* Essential Citations Bar */}
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  Mandatory Citations & Case Laws to Quote:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCommonQ.essentialCitations.map((cite, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                    >
                      ⚖️ {cite}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4-Step Answer Blueprint */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--accent-primary)]/20 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Mains Answer Drafting Blueprint (4-Step Formula):
                </span>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-blue-400 block">Step 1: Introduction & Textual Foundations</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step1Intro}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-amber-400 block">Step 2: Doctrinal Core & Legal Test</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step2DoctrinalCore}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-purple-400 block">Step 3: Judicial Precedents & Evolution</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step3PrecedentEvolution}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                    <span className="font-black text-emerald-400 block">Step 4: Constitutional Synthesis & Modern Ruling</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{activeCommonQ.answerBlueprint.step4Conclusion}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Drafting Scratchpad */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Interactive Answer Drafting Scratchpad
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {allIndiaWordCount} Words
                  </span>
                </div>

                <textarea
                  value={allIndiaDrafts[activeCommonQ.id] || ''}
                  onChange={(e) => handleAllIndiaDraftChange(e.target.value)}
                  placeholder="Practice drafting your answer to this master question blueprint using the 4-step formula above..."
                  rows={8}
                  className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: JKPSC MAINS PYQ VAULT (24 OFFICIAL QUESTIONS)
      ========================================================================= */}
      {examScope === 'jkpsc' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Filters & Search Matrix */}
          <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword, case law (e.g. Anuradha Bhasin, MADA, Selvi), or article..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                />
              </div>

              {/* Year Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {['all', '2022–2023', '2018–2019', '2014–2016'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYearFilter(year)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      selectedYearFilter === year
                        ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                        : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {year === 'all' ? 'All 10 Years' : year}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                Topics:
              </span>
              {[
                'all',
                'Fundamental Rights',
                'Criminal Due Process',
                'Judiciary & Writs',
                'Executive & Legislature',
                'Federalism & Emergency',
                'Amendments & Basic Structure',
                'Administrative Law'
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopicFilter(topic)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTopicFilter === topic
                      ? 'bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 font-bold'
                      : 'bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  }`}
                >
                  {topic === 'all' ? 'All Topics' : topic}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content: Left Column Question List, Right Column Question Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Questions Selector List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
                <span className="font-bold uppercase tracking-wider">
                  Official Exam Questions ({filteredQuestions.length})
                </span>
                <span>Select to View & Practice</span>
              </div>

              <div className="space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
                {filteredQuestions.map((q) => {
                  const isSelected = selectedQuestionId === q.id;
                  const hasDraft = !!userDrafts[q.id];

                  return (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQuestionId(q.id)}
                      className={`w-full p-4 rounded-xl text-left border transition-all space-y-2.5 relative ${
                        isSelected
                          ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 shadow-lg'
                          : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                            {q.year} • Q{q.questionNumber}
                          </span>
                          <span className="text-[10px] font-bold text-[var(--text-muted)]">
                            {q.part}
                          </span>
                        </div>
                        <span className="text-xs font-black text-[var(--accent-primary)]">
                          {q.marks}M
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                        {q.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                          {q.topic}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400">
                          Day {q.bootcampDay}
                        </span>
                        {hasDraft && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Drafted
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Question Detail & Interactive Workspace */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-6">
                {/* Header Information */}
                <div className="space-y-4 border-b border-[var(--border-subtle)] pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-black bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                        {currentQuestion.year} Examination
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                        {currentQuestion.paper} • {currentQuestion.part}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-[var(--accent-primary)]">
                        Marks: {currentQuestion.marks}
                      </span>
                      <button
                        onClick={() => setActiveTab('bootcamp')}
                        className="text-xs font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 pl-2 border-l border-[var(--border-subtle)]"
                      >
                        <span>Go to Day {currentQuestion.bootcampDay}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-[var(--text-primary)] leading-tight">
                    {currentQuestion.title}
                  </h2>

                  {/* Question Text Prompt */}
                  <div className="p-4 md:p-5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Official Verbatim Question Paper Text:
                    </span>
                    <div className="text-xs md:text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-medium">
                      {currentQuestion.questionText}
                    </div>
                  </div>
                </div>

                {/* Core Legal Issues Framed */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                    Core Constitutional Legal Issues to Address:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQuestion.coreIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="leading-relaxed">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Constitutional Articles & Precedents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Articles */}
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Relevant Articles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentQuestion.relevantArticles.map((art) => (
                        <span
                          key={art}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--accent-primary)]"
                        >
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Precedents Preview */}
                  <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                      Classic Benchmark vs 2024 Shift:
                    </span>
                    <div className="text-xs space-y-1">
                      <p className="text-[var(--text-muted)]">
                        <strong className="text-[var(--text-secondary)]">Classic:</strong>{' '}
                        {currentQuestion.landmarkPrecedents.classic}
                      </p>
                      <p className="text-emerald-400">
                        <strong className="text-emerald-300">2024 Shift:</strong>{' '}
                        {currentQuestion.landmarkPrecedents.modern2024}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ===================================================================
                    STUDENT ANSWER DRAFTING SCRATCHPAD (With Word Count & Timer)
                =================================================================== */}
                <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--accent-primary)]/20 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                        Mains Answer Drafting Scratchpad
                      </span>
                    </div>

                    {/* Timer and Word Count Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                        {wordCount} Words
                      </span>

                      <div className="flex items-center gap-1.5 bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] text-xs font-mono">
                        <Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                        <span>{formatTimer(timerSeconds)}</span>
                        <button
                          onClick={() => setIsTimerRunning(!isTimerRunning)}
                          className="ml-1 text-[10px] font-bold text-[var(--accent-primary)] hover:underline"
                        >
                          {isTimerRunning ? 'Pause' : 'Start'}
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          setIsTimerRunning(false);
                          setTimerSeconds(0);
                        }}
                        title="Reset Timer"
                        className="p-1 rounded hover:bg-[var(--bg-card)] text-[var(--text-muted)] transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={userDrafts[currentQuestion.id] || ''}
                    onChange={(e) => handleDraftChange(e.target.value)}
                    placeholder="Draft your answer following the 4-step Mains Gold-Standard formula: 
1. Constitutional & Statutory Provisions...
2. Judicial Test / Doctrine...
3. Precedent Evolution (Classic ➔ 2024 Bench)...
4. Applied Analysis & Prosecutorial Submissions..."
                    rows={9}
                    className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  />
                </div>

                {/* Model Answer Toggle Button */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => toggleSolution(currentQuestion.id)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>
                      {revealedSolutions[currentQuestion.id]
                        ? 'Hide Official Model Answer'
                        : 'Reveal Examiner\'s Model Answer & 50-Mark Rubric'}
                    </span>
                  </button>
                </div>

                {/* ===================================================================
                    EXAMINER MODEL SOLUTION & 50-MARK RUBRIC
                =================================================================== */}
                {revealedSolutions[currentQuestion.id] && (
                  <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)] animate-fadeIn">
                    {/* Model Answer Box */}
                    <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/30 space-y-4">
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4" />
                          Official Examiner Grade Model Solution (50 Marks)
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          Standard JKPSC PO Mains Format
                        </span>
                      </div>

                      <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line font-normal space-y-3">
                        <AnnotatedLegalText text={currentQuestion.modelAnswer} />
                      </div>
                    </div>

                    {/* 50-Mark Rubric Breakdown */}
                    <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] block">
                        Official 50-Mark Scoring Rubric & Evaluation Standard:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentQuestion.scoringRubric.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between text-xs"
                          >
                            <span className="text-[var(--text-secondary)] pr-2">{item.criterion}</span>
                            <span className="font-extrabold text-[var(--accent-primary)] shrink-0">
                              {item.marks} Marks
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
