import React, { useState } from 'react';
import {
  Gavel,
  Scale,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Layers,
  RotateCcw,
  Clock,
  Printer
} from 'lucide-react';
import { JUDGMENT_LAB_DATA, type JudicialProblem } from '../../data/judgmentLabData';
import { useTheme } from '../../context/ThemeContext';

export const JudgmentWritingLabView: React.FC = () => {
  const { setActiveTab } = useTheme();
  const [selectedCaseId, setSelectedCaseId] = useState<string>(JUDGMENT_LAB_DATA[0].id);
  const [activeSubTab, setActiveSubTab] = useState<'issues' | 'studio' | 'model'>('issues');

  // Interactive user drafts
  const [framedIssuesDraft, setFramedIssuesDraft] = useState<Record<string, string>>({});
  const [judgmentDrafts, setJudgmentDrafts] = useState<Record<string, string>>({});
  const [revealedIssues, setRevealedIssues] = useState<Record<string, boolean>>({});

  const activeProblem: JudicialProblem =
    JUDGMENT_LAB_DATA.find((p) => p.id === selectedCaseId) || JUDGMENT_LAB_DATA[0];

  const currentIssuesDraft = framedIssuesDraft[activeProblem.id] || '';
  const currentJudgmentDraft = judgmentDrafts[activeProblem.id] || '';

  const wordCount = currentJudgmentDraft.split(/\s+/).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--accent-primary)]/10 border border-[var(--border-subtle)] space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
              <Gavel className="w-3.5 h-3.5" />
              Judicial Services Mains Paper III / IV
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
              Judgment Writing & Framing of Issues Lab
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
              Master the highest-scoring paper in Judicial Services exams (DJS, UP PCS-J, MPJ, BJS, RJS). Practice framing issues under Order XIV CPC, framing criminal charges under CrPC/BNSS, and authoring complete structured judgments.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--accent-primary)]">
              50 Marks Weightage
            </span>
          </div>
        </div>

        {/* Sub-Tab Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={() => setActiveSubTab('issues')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'issues'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>1. Framing of Issues & Charges</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('studio')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'studio'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>2. Judgment Drafting Canvas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('model')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'model'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-sm'
                : 'bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>3. Solved Benchmark Judgment & Rubric</span>
          </button>
        </div>
      </div>

      {/* Case Problem Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {JUDGMENT_LAB_DATA.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelectedCaseId(p.id)}
            className={`px-4 py-2.5 rounded-2xl border text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCaseId === p.id
                ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] text-[var(--text-primary)] shadow-md ring-1 ring-[var(--accent-primary)]/20'
                : 'bg-[var(--bg-card)]/60 border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${p.type === 'Civil Judgment' ? 'bg-blue-400' : 'bg-rose-400'}`} />
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Fact Sheet / Case Dossier (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Case Pleadings Dossier
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                {activeProblem.examOrigin}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {activeProblem.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {activeProblem.type} • {activeProblem.marksWeightage} Marks
              </p>
            </div>

            {/* Plaint / Prosecution Case */}
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2 text-xs">
              <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-blue-400">
                <FileText className="w-3.5 h-3.5" />
                {activeProblem.type === 'Civil Judgment' ? 'Plaint (Plaintiff\'s Case):' : 'Prosecution Chargesheet:'}
              </span>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {activeProblem.plaintOrChargesheetSummary}
              </p>
            </div>

            {/* Written Statement / Defense Case */}
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2 text-xs">
              <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 text-amber-400">
                <FileText className="w-3.5 h-3.5" />
                {activeProblem.type === 'Civil Judgment' ? 'Written Statement (Defense):' : 'Defense Plea & Sec 313 Statement:'}
              </span>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {activeProblem.writtenStatementOrDefenseSummary}
              </p>
            </div>

            {/* Admitted vs Disputed Facts */}
            <div className="space-y-3 pt-2">
              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Admitted Material Facts:
                </span>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                  {activeProblem.admittedFacts.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-rose-400 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Disputed Material Propositions:
                </span>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                  {activeProblem.disputedFacts.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Statutes & Precedents */}
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2 text-xs">
              <span className="font-bold text-[var(--text-primary)]">Key Statutory Provisions & Precedents:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeProblem.keyStatutes.map((s, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Active Interactive Workspace (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* TAB 1: FRAMING OF ISSUES */}
          {activeSubTab === 'issues' && (
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="space-y-1 border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[var(--accent-primary)]" />
                    Issue & Charge Framing Practice Studio
                  </h3>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                    10 Marks
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Read the plaint/chargesheet and written statement on the left. Frame the formal legal issues with proper onus (OPP/OPD) or formal criminal charges.
                </p>
              </div>

              {/* Practice Scratchpad for Issues */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--text-primary)] flex items-center justify-between">
                  <span>Your Drafted Issues / Charges:</span>
                  <span className="text-[10px] text-[var(--text-muted)] font-normal">
                    Rule: Each issue must be single-headed, concise, with explicit onus (OPP/OPD).
                  </span>
                </label>
                <textarea
                  value={currentIssuesDraft}
                  onChange={(e) =>
                    setFramedIssuesDraft({
                      ...framedIssuesDraft,
                      [activeProblem.id]: e.target.value
                    })
                  }
                  placeholder="Issue 1: Whether the Plaintiff has proved that... (OPP)
Issue 2: Whether the Defendant proves that... (OPD)
Issue 3: Relief and costs?"
                  rows={6}
                  className="w-full p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                />
              </div>

              {/* Reveal Benchmark Formulations Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setRevealedIssues({
                      ...revealedIssues,
                      [activeProblem.id]: !revealedIssues[activeProblem.id]
                    })
                  }
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[var(--accent-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>
                    {revealedIssues[activeProblem.id]
                      ? 'Hide Benchmark Formulations'
                      : 'Reveal Model Framed Issues & Onus Analysis'}
                  </span>
                </button>
              </div>

              {/* Revealed Model Issues */}
              {revealedIssues[activeProblem.id] && (
                <div className="space-y-3 pt-3 border-t border-[var(--border-subtle)] animate-fadeIn">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Examiner\'s Model Framed Issues & Burden Allocation:
                  </span>

                  <div className="space-y-2.5">
                    {activeProblem.modelFramedIssuesOrCharges.map((item) => (
                      <div
                        key={item.number}
                        className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[var(--accent-primary)]">
                            Issue #{item.number} ({item.issueType})
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                            {item.burdenOfProof}
                          </span>
                        </div>
                        <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                          {item.issueText}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: JUDGMENT DRAFTING CANVAS */}
          {activeSubTab === 'studio' && (
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-[var(--accent-primary)]" />
                    Structured Judgment Drafting Studio
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Draft a complete judicial pronouncement across the 6 mandatory statutory stages.
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                  <span>{wordCount} Words</span>
                  <span>•</span>
                  <span>≈ {(wordCount / 200).toFixed(1)} Pages</span>
                </div>
              </div>

              {/* 6 Stages Cheatsheet */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">1. Cause Title:</span>
                  <p className="text-[var(--text-muted)] truncate">Court, jurisdiction, parties</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">2. Pleadings:</span>
                  <p className="text-[var(--text-muted)] truncate">Plaint & WS gist</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">3. Issues Framed:</span>
                  <p className="text-[var(--text-muted)] truncate">Verbatim issues with onus</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">4. Marshalling:</span>
                  <p className="text-[var(--text-muted)] truncate">Appreciation of PWs & DWs</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">5. Findings:</span>
                  <p className="text-[var(--text-muted)] truncate">Issue-by-issue ratio & cases</p>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-[var(--text-primary)]">6. Relief / Decree:</span>
                  <p className="text-[var(--text-muted)] truncate">Operative direction, costs</p>
                </div>
              </div>

              {/* Main Drafting Textarea */}
              <div className="space-y-2">
                <textarea
                  value={currentJudgmentDraft}
                  onChange={(e) =>
                    setJudgmentDrafts({
                      ...judgmentDrafts,
                      [activeProblem.id]: e.target.value
                    })
                  }
                  placeholder={`IN THE COURT OF...
Civil Suit No... / Sessions Trial No...

JUDGMENT

1. Brief Facts & Pleadings:
...

2. Issues Framed:
...

3. Marshalling of Oral & Documentary Evidence:
...

4. Issue-Wise Findings & Reasons:
...

5. Operative Order & Relief:
...`}
                  rows={16}
                  className="w-full p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs md:text-sm font-mono text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* TAB 3: SOLVED BENCHMARK JUDGMENT */}
          {activeSubTab === 'model' && (
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      Examiner Benchmark Model Judgment
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      High Ranker Format
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {activeProblem.modelJudgment.courtTitle}
                  </h3>
                </div>
              </div>

              {/* Rendered Official Judgment Sheet */}
              <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-emerald-500/20 space-y-5 text-xs md:text-sm text-[var(--text-primary)] font-serif leading-relaxed">
                <div className="text-center font-bold space-y-1 border-b border-[var(--border-subtle)] pb-4">
                  <p className="tracking-wide uppercase">{activeProblem.modelJudgment.courtTitle}</p>
                  <p className="font-mono text-xs text-[var(--accent-primary)]">{activeProblem.modelJudgment.caseNumber}</p>
                  <div className="py-2 text-xs font-normal">
                    <p className="font-bold">{activeProblem.modelJudgment.parties.plaintiffOrState}</p>
                    <p className="italic text-[var(--text-muted)] text-[11px]">... Versus ...</p>
                    <p className="font-bold">{activeProblem.modelJudgment.parties.defendantOrAccused}</p>
                  </div>
                  <p className="font-black tracking-widest pt-1 underline">JUDGMENT</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-sans font-bold uppercase text-xs text-[var(--accent-primary)] tracking-wider">
                      I. Pleadings & Nature of Dispute
                    </h5>
                    <p className="text-[var(--text-muted)] pt-1">{activeProblem.modelJudgment.briefPleadings}</p>
                  </div>

                  <div>
                    <h5 className="font-sans font-bold uppercase text-xs text-[var(--accent-primary)] tracking-wider">
                      II. Marshalling & Appreciation of Evidence
                    </h5>
                    <p className="text-[var(--text-muted)] pt-1">{activeProblem.modelJudgment.marshallingOfEvidence}</p>
                  </div>

                  <div>
                    <h5 className="font-sans font-bold uppercase text-xs text-[var(--accent-primary)] tracking-wider">
                      III. Issue-Wise Findings & Reasons
                    </h5>
                    <div className="space-y-3 pt-2">
                      {activeProblem.modelJudgment.issueWiseFindings.map((finding) => (
                        <div key={finding.issueNumber} className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                          <p className="font-sans font-bold text-xs text-[var(--text-primary)]">
                            Issue #{finding.issueNumber}: {finding.finding}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">{finding.reasoning}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--accent-primary)]/20 space-y-1.5">
                    <h5 className="font-sans font-bold uppercase text-xs text-[var(--accent-primary)] tracking-wider">
                      IV. Operative Decree / Sentence & Relief
                    </h5>
                    <p className="text-xs leading-relaxed font-mono text-[var(--text-primary)]">
                      {activeProblem.modelJudgment.operativeOrder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scoring Rubric Breakdown */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[var(--accent-primary)]" />
                  Judicial Evaluation Matrix (50 Marks)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {activeProblem.scoringGuide.map((g, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                      <div className="flex items-center justify-between font-bold">
                        <span className="text-[var(--text-primary)]">{g.dimension}</span>
                        <span className="text-[var(--accent-primary)] font-mono">{g.marks}M</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)]">{g.tips}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
