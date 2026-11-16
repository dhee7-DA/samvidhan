import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  FileText,
  Clock,
  CheckCircle2,
  Award,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Save,
  Eye,
  Sliders,
  Scale,
  Download,
  Copy,
  Check,
  HelpCircle,
  ExternalLink,
  PenTool,
  Timer
} from 'lucide-react';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  type BootcampDay,
  type BootcampComprehensionCaseStudy
} from '../../data/bootcamp';

const MAINS_DRAFTS_STORAGE = 'samvidhan_mains_drafts_v1';
const MAINS_SCORES_STORAGE = 'samvidhan_mains_scores_v1';

export const MainsAnswerWritingLabView: React.FC = () => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [studentDraft, setStudentDraft] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [rubricScores, setRubricScores] = useState<Record<number, number>>({});
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Timer state
  const [timerDuration, setTimerDuration] = useState<number>(20 * 60); // 20 mins default
  const [timerRemaining, setTimerRemaining] = useState<number>(20 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  const currentDay = useMemo(() => {
    return FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDayNumber) || FIFTEEN_DAY_BOOTCAMP_DATA[0];
  }, [selectedDayNumber]);

  const caseStudiesList = useMemo(() => {
    return currentDay.comprehensionCaseStudies || [];
  }, [currentDay]);

  const currentCase: BootcampComprehensionCaseStudy | null = useMemo(() => {
    return caseStudiesList[selectedCaseIndex] || caseStudiesList[0] || null;
  }, [caseStudiesList, selectedCaseIndex]);

  // Storage key for current case
  const currentKey = useMemo(() => {
    return `d${selectedDayNumber}_c${selectedCaseIndex}`;
  }, [selectedDayNumber, selectedCaseIndex]);

  // Load saved draft and scores
  useEffect(() => {
    try {
      const draftsRaw = localStorage.getItem(MAINS_DRAFTS_STORAGE);
      if (draftsRaw) {
        const drafts = JSON.parse(draftsRaw);
        setStudentDraft(drafts[currentKey] || '');
      } else {
        setStudentDraft('');
      }

      const scoresRaw = localStorage.getItem(MAINS_SCORES_STORAGE);
      if (scoresRaw) {
        const scores = JSON.parse(scoresRaw);
        setRubricScores(scores[currentKey] || {});
      } else {
        setRubricScores({});
      }
    } catch (e) {
      console.error('Failed to load drafts', e);
    }

    setIsEvaluating(false);
    setIsTimerRunning(false);
    setTimerRemaining(timerDuration);
  }, [currentKey, timerDuration]);

  // Timer countdown
  useEffect(() => {
    if (!isTimerRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimerRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // Save Draft
  const handleSaveDraft = () => {
    try {
      const draftsRaw = localStorage.getItem(MAINS_DRAFTS_STORAGE);
      const drafts = draftsRaw ? JSON.parse(draftsRaw) : {};
      drafts[currentKey] = studentDraft;
      localStorage.setItem(MAINS_DRAFTS_STORAGE, JSON.stringify(drafts));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    } catch (e) {
      console.error('Failed to save draft', e);
    }
  };

  // Save Rubric Score
  const handleScoreChange = (rubricIdx: number, val: number) => {
    const updated = { ...rubricScores, [rubricIdx]: val };
    setRubricScores(updated);
    try {
      const scoresRaw = localStorage.getItem(MAINS_SCORES_STORAGE);
      const scores = scoresRaw ? JSON.parse(scoresRaw) : {};
      scores[currentKey] = updated;
      localStorage.setItem(MAINS_SCORES_STORAGE, JSON.stringify(scores));
    } catch (e) {
      console.error('Failed to save score', e);
    }
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(studentDraft);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const wordCount = useMemo(() => {
    const trimmed = studentDraft.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [studentDraft]);

  const totalRubricMarks = useMemo(() => {
    if (!currentCase || !currentCase.markingRubric) return 20;
    return currentCase.markingRubric.reduce((sum, r) => sum + r.marks, 0);
  }, [currentCase]);

  const totalStudentMarks = useMemo(() => {
    return Object.values(rubricScores).reduce((sum, val) => sum + val, 0);
  }, [rubricScores]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-card border border-purple-500/30 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <PenTool className="w-3.5 h-3.5" />
              <span>Judicial Services & Mains Answer Writing Lab</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Constitutional Case Study Writing Canvas
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              Practice timed drafting on all 150 master courtroom factual dossiers. Self-evaluate against structured judicial model answers and institutional marking rubrics.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-card border border-border text-foreground font-mono">
              150 Total Master Case Studies
            </span>
          </div>
        </div>

        {/* Day & Case Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-5 border-t border-border/40">
          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
              Select Bootcamp Day (1 to 15)
            </label>
            <select
              value={selectedDayNumber}
              onChange={(e) => {
                setSelectedDayNumber(parseInt(e.target.value, 10));
                setSelectedCaseIndex(0);
              }}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
              {FIFTEEN_DAY_BOOTCAMP_DATA.map((d) => (
                <option key={d.dayNumber} value={d.dayNumber}>
                  Day {d.dayNumber}: {d.title.split('—')[0]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
              Select Case Study (1 to 10 for Day {selectedDayNumber})
            </label>
            <select
              value={selectedCaseIndex}
              onChange={(e) => setSelectedCaseIndex(parseInt(e.target.value, 10))}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
              {caseStudiesList.map((cs, idx) => (
                <option key={cs.id || idx} value={idx}>
                  Case {idx + 1}: {cs.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {currentCase && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Factual Matrix & Framing Questions */}
          <div className="lg:col-span-6 space-y-5">
            {/* Case Dossier Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">
                  Case Study {selectedCaseIndex + 1} of 10
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  Theme: {currentCase.legalTheme}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                {currentCase.title}
              </h2>

              {/* Factual Matrix */}
              <div className="p-4 rounded-xl bg-muted/30 border border-border/60 space-y-2">
                <span className="text-xs font-extrabold text-foreground uppercase tracking-wider block">
                  Factual Matrix & Record:
                </span>
                <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-serif whitespace-pre-line">
                  {currentCase.factualMatrix}
                </p>
              </div>

              {/* Statutory Applicability */}
              {currentCase.statutoryApplicability && currentCase.statutoryApplicability.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Statutory Anchors & Articles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCase.statutoryApplicability.map((stat, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Landmark Evolution Precedents */}
              {currentDay.landmarkEvolutionPairs && currentDay.landmarkEvolutionPairs.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                    Essential Landmark Precedents:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDay.landmarkEvolutionPairs.slice(0, 3).map((pair, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium"
                      >
                        {pair.classicCase.name} ({pair.classicCase.year}) / {pair.modernCase.name} ({pair.modernCase.year})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Framing Questions */}
              <div className="space-y-2 pt-2 border-t border-border/60">
                <span className="text-xs font-extrabold text-foreground uppercase tracking-wider block">
                  Framing Issues for Determination:
                </span>
                <div className="space-y-2">
                  {currentCase.framingQuestions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="p-3 rounded-lg border border-border/60 bg-muted/20 text-xs md:text-sm text-foreground flex items-start gap-2.5"
                    >
                      <span className="font-bold text-purple-400 shrink-0">Issue {qIdx + 1}:</span>
                      <span className="leading-snug">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Writing Canvas & Evaluator */}
          <div className="lg:col-span-6 space-y-5">
            {/* Canvas Header & Timer */}
            <div className="p-4 rounded-2xl bg-card border border-border flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className={`px-3 py-1.5 rounded-lg border flex items-center gap-2 font-mono font-bold text-xs ${
                    timerRemaining < 120
                      ? 'border-rose-500 bg-rose-500/20 text-rose-400 animate-pulse'
                      : 'border-border bg-muted/40 text-foreground'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{formatTimer(timerRemaining)}</span>
                </div>

                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="text-xs px-2.5 py-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground font-semibold transition-colors"
                >
                  {isTimerRunning ? 'Pause Timer' : 'Start Timer'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">
                  {wordCount} words
                </span>
                <button
                  onClick={handleSaveDraft}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{savedSuccess ? 'Saved!' : 'Save Draft'}</span>
                </button>
              </div>
            </div>

            {/* Answer Textarea */}
            <div className="relative">
              <textarea
                value={studentDraft}
                onChange={(e) => setStudentDraft(e.target.value)}
                placeholder="Draft your structured judicial response here...&#10;&#10;Suggested Format:&#10;1. Constitutional Issues Arising&#10;2. Statutory Provisions & Article Thresholds&#10;3. Judicial Precedents & Ratio Decidendi&#10;4. Operative Finding & Remedy Awarded"
                className="w-full h-[360px] p-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground/60 text-sm leading-relaxed font-serif focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-y shadow-inner"
              />
            </div>

            {/* Evaluation Toggle Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyDraft}
                  disabled={!studentDraft.trim()}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground flex items-center gap-1.5 transition-colors disabled:opacity-40"
                >
                  {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSuccess ? 'Copied' : 'Copy Draft'}</span>
                </button>
              </div>

              <button
                onClick={() => setIsEvaluating(!isEvaluating)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>{isEvaluating ? 'Hide Model Solution' : 'Evaluate with Model Solution'}</span>
              </button>
            </div>

            {/* Model Solution & Rubric Accordion */}
            {isEvaluating && (
              <div className="p-6 rounded-2xl bg-card border border-purple-500/40 shadow-xl space-y-6 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <h3 className="text-base font-extrabold text-foreground">
                      Official Judicial Model Answer
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    Max Marks: {totalRubricMarks}
                  </span>
                </div>

                {/* Model Answer Body */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border/80 text-xs md:text-sm text-foreground/95 leading-relaxed font-serif whitespace-pre-line max-h-72 overflow-y-auto">
                  {currentCase.modelAnswer}
                </div>

                {/* Marking Rubric Checklist */}
                {currentCase.markingRubric && currentCase.markingRubric.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-border/60">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                        Self-Evaluation Marking Rubric:
                      </span>
                      <span className="text-xs font-bold text-purple-400 font-mono">
                        Awarded: {totalStudentMarks} / {totalRubricMarks} Marks
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {currentCase.markingRubric.map((r, rIdx) => {
                        const currentAwarded = rubricScores[rIdx] ?? 0;
                        return (
                          <div
                            key={rIdx}
                            className="p-3 rounded-xl border border-border/60 bg-muted/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                          >
                            <span className="font-medium text-foreground flex-1">
                              {r.criterion}
                            </span>
                            <div className="flex items-center gap-2 shrink-0">
                              <select
                                value={currentAwarded}
                                onChange={(e) => handleScoreChange(rIdx, parseInt(e.target.value, 10))}
                                className="px-2 py-1 rounded border border-border bg-card text-foreground font-bold font-mono focus:outline-none"
                              >
                                {Array.from({ length: r.marks + 1 }, (_, i) => i).map((m) => (
                                  <option key={m} value={m}>
                                    {m} / {r.marks} marks
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
