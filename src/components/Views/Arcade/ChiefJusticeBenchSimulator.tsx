import React, { useState } from 'react';
import {
  Scale,
  Gavel,
  ShieldAlert,
  Award,
  ChevronRight,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  Users
} from 'lucide-react';
import { BENCH_PETITIONS, type BenchPetition } from '../../../data/benchSimulatorData';
import { recordBenchJudgment } from '../../../services/judicialCareerService';
import { arcadeAudio } from '../../../services/arcadeAudioService';

interface Props {
  onAwardResult: (xp: number, levelUp: boolean, newBadges: string[]) => void;
}

export const ChiefJusticeBenchSimulator: React.FC<Props> = ({ onAwardResult }) => {
  const [selectedPetitionId, setSelectedPetitionId] = useState<string>(BENCH_PETITIONS[0].id);
  const [stage, setStage] = useState<'brief' | 'arguments' | 'deliberate' | 'decree'>('brief');

  // Choices
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedPrecedentId, setSelectedPrecedentId] = useState<string | null>(null);
  const [selectedDoctrineId, setSelectedDoctrineId] = useState<string | null>(null);
  const [selectedDecreeId, setSelectedDecreeId] = useState<string | null>(null);

  const [hasDeliveredJudgment, setHasDeliveredJudgment] = useState<boolean>(false);
  const [gavelAnimating, setGavelAnimating] = useState<boolean>(false);

  const petition = BENCH_PETITIONS.find((p) => p.id === selectedPetitionId) || BENCH_PETITIONS[0];

  const handleSelectPetition = (id: string) => {
    setSelectedPetitionId(id);
    resetPetition();
  };

  const resetPetition = () => {
    setStage('brief');
    setSelectedArticleId(null);
    setSelectedPrecedentId(null);
    setSelectedDoctrineId(null);
    setSelectedDecreeId(null);
    setHasDeliveredJudgment(false);
  };

  const canProceedToDecree = selectedArticleId && selectedPrecedentId && selectedDoctrineId;

  const deliverDecree = () => {
    if (!selectedDecreeId) return;
    setGavelAnimating(true);
    arcadeAudio.playGavel();

    const chosenDecree = petition.decreeOptions.find((d) => d.id === selectedDecreeId);
    const isUnanimous = chosenDecree ? chosenDecree.isCorrect && chosenDecree.unanimous : false;

    setTimeout(() => {
      setGavelAnimating(false);
      setHasDeliveredJudgment(true);
      setStage('decree');

      if (chosenDecree?.isCorrect) {
        arcadeAudio.playFanfare();
      } else {
        arcadeAudio.playWrong();
      }

      const res = recordBenchJudgment(petition.id, isUnanimous);
      onAwardResult(
        res.gainedXP,
        res.leveledUp,
        res.newBadges.map((b) => b.title)
      );
    }, 600);
  };

  const chosenDecreeObj = petition.decreeOptions.find((d) => d.id === selectedDecreeId);

  return (
    <div className="space-y-6">
      {/* Court Header & Docket Selector */}
      <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-inner">
              <Gavel className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
                  Supreme Court of India • Courtroom 1
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                  5-Judge Constitution Bench
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[var(--text-primary)]">
                Chief Justice Bench Simulator
              </h2>
            </div>
          </div>

          {/* Docket Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {BENCH_PETITIONS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleSelectPetition(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  selectedPetitionId === p.id
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/30 font-semibold shadow-sm'
                    : 'bg-[var(--bg-base)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                Case #{idx + 1}: {p.citation.split(' ')[0]} {p.citation.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Stepper */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[var(--border-subtle)] text-xs font-mono">
          <button
            onClick={() => setStage('brief')}
            className={`py-2 px-3 rounded-lg text-left transition-all ${
              stage === 'brief'
                ? 'bg-[var(--accent)] text-white font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            1. The Docket
          </button>
          <button
            onClick={() => setStage('arguments')}
            className={`py-2 px-3 rounded-lg text-left transition-all ${
              stage === 'arguments'
                ? 'bg-[var(--accent)] text-white font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            2. Oral Submissions
          </button>
          <button
            onClick={() => setStage('deliberate')}
            className={`py-2 px-3 rounded-lg text-left transition-all ${
              stage === 'deliberate'
                ? 'bg-[var(--accent)] text-white font-bold'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            3. Deliberation Matrix
          </button>
          <button
            onClick={() => {
              if (canProceedToDecree || hasDeliveredJudgment) setStage('decree');
            }}
            disabled={!canProceedToDecree && !hasDeliveredJudgment}
            className={`py-2 px-3 rounded-lg text-left transition-all ${
              stage === 'decree'
                ? 'bg-[var(--accent)] text-white font-bold'
                : canProceedToDecree || hasDeliveredJudgment
                ? 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                : 'text-[var(--text-muted)]/40 cursor-not-allowed'
            }`}
          >
            4. The Decree
          </button>
        </div>
      </div>

      {/* Stage 1: Brief / Docket */}
      {stage === 'brief' && (
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 font-semibold">
              {petition.docketTheme}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">{petition.citation}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
            {petition.caseTitle}
          </h3>

          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <div className="text-xs font-mono uppercase text-amber-500 font-bold mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Factual Matrix & Constitutional Crisis
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {petition.briefSummary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wide">
                Petitioner
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{petition.petitioner}</p>
            </div>
            <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wide">
                Respondent State
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{petition.respondent}</p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStage('arguments')}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
            >
              Hear Oral Arguments <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Stage 2: Oral Arguments */}
      {stage === 'arguments' && (
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <h3 className="text-lg font-serif font-bold text-[var(--text-primary)]">
              Oral Advocacy Before the 5-Judge Constitution Bench
            </h3>
            <p className="text-xs font-mono text-[var(--text-muted)]">
              Carefully examine the rival legal submissions before entering the Deliberation Chamber.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Petitioner Arguments */}
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                Submissions of the Petitioner
              </div>
              <div className="space-y-3">
                {petition.petitionerArguments.map((arg, idx) => (
                  <div key={idx} className="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="text-sky-400 font-mono font-bold">§{idx + 1}</span>
                    <p>{arg}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Respondent Arguments */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                Submissions of the State / Union
              </div>
              <div className="space-y-3">
                {petition.respondentArguments.map((arg, idx) => (
                  <div key={idx} className="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="text-rose-400 font-mono font-bold">§{idx + 1}</span>
                    <p>{arg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setStage('brief')}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              ← Back to Docket
            </button>
            <button
              onClick={() => setStage('deliberate')}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
            >
              Enter Deliberation Chamber <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Stage 3: Deliberation Chamber */}
      {stage === 'deliberate' && (
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wide">
              Step 3: Judicial Ratio Decidendi
            </span>
            <h3 className="text-lg font-serif font-bold text-[var(--text-primary)]">
              Assemble the Legal Grounding for the Constitution Bench
            </h3>
            <p className="text-xs font-mono text-[var(--text-muted)]">
              Select the governing constitutional articles, authoritative precedent, and doctrine.
            </p>
          </div>

          {/* 1. Article Selection */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                1
              </span>
              Select Controlling Constitutional Article(s)
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {petition.articleOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedArticleId(opt.id)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all ${
                    selectedArticleId === opt.id
                      ? 'border-amber-500 bg-amber-500/10 text-[var(--text-primary)] font-semibold shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.label}</span>
                    {selectedArticleId === opt.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Precedent Selection */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                2
              </span>
              Select Controlling Supreme Court Precedent
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {petition.precedentOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPrecedentId(opt.id)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all ${
                    selectedPrecedentId === opt.id
                      ? 'border-amber-500 bg-amber-500/10 text-[var(--text-primary)] font-semibold shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.label}</span>
                    {selectedPrecedentId === opt.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Doctrine Selection */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                3
              </span>
              Select Governing Judicial Doctrine / Test
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {petition.doctrineOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDoctrineId(opt.id)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all ${
                    selectedDoctrineId === opt.id
                      ? 'border-amber-500 bg-amber-500/10 text-[var(--text-primary)] font-semibold shadow-sm'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt.label}</span>
                    {selectedDoctrineId === opt.id && (
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Choose Operative Order */}
          <div className="space-y-3 pt-3 border-t border-[var(--border-subtle)]">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                4
              </span>
              Formulate Operative Decree of the Court
            </div>
            <div className="grid grid-cols-1 gap-3">
              {petition.decreeOptions.map((dec) => (
                <button
                  key={dec.id}
                  onClick={() => setSelectedDecreeId(dec.id)}
                  className={`p-4 rounded-xl border text-left text-xs font-mono leading-relaxed transition-all ${
                    selectedDecreeId === dec.id
                      ? 'border-amber-500 bg-amber-500/10 text-[var(--text-primary)] font-semibold shadow-md ring-1 ring-amber-500/30'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p>{dec.decreeText}</p>
                    {selectedDecreeId === dec.id && (
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setStage('arguments')}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              ← Back to Arguments
            </button>
            <button
              onClick={deliverDecree}
              disabled={!canProceedToDecree || !selectedDecreeId || gavelAnimating}
              className={`px-8 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg ${
                canProceedToDecree && selectedDecreeId && !gavelAnimating
                  ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-amber-500/20 scale-100 hover:scale-[1.02]'
                  : 'bg-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed'
              }`}
            >
              <Gavel className={`w-4 h-4 ${gavelAnimating ? 'animate-bounce text-red-600' : ''}`} />
              {gavelAnimating ? 'Striking Gavel...' : 'Deliver Constitution Bench Judgment'}
            </button>
          </div>
        </div>
      )}

      {/* Stage 4: Judgment Delivery & Operative Decree */}
      {stage === 'decree' && chosenDecreeObj && (
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          {/* Verdict Banner */}
          <div
            className={`p-5 rounded-2xl border ${
              chosenDecreeObj.isCorrect
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
                : 'bg-rose-950/20 border-rose-500/40 text-rose-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {chosenDecreeObj.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block">
                    {chosenDecreeObj.isCorrect
                      ? 'Operative Order Delivered • Bench In Accord'
                      : 'Constitutional Ratio Rejected'}
                  </span>
                  <span className="text-base font-serif font-bold text-[var(--text-primary)]">
                    {chosenDecreeObj.unanimous ? '5–0 Unanimous Judgment' : '4–1 Divided Bench'}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[var(--bg-base)] border border-current">
                {chosenDecreeObj.isCorrect ? '+300 XP Earned' : '+50 XP Participation'}
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] font-mono">
              {chosenDecreeObj.feedback}
            </p>
          </div>

          {/* Dissenting Opinion if incorrect */}
          {chosenDecreeObj.dissentingNote && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-300 space-y-1.5 font-mono text-xs">
              <span className="font-bold uppercase flex items-center gap-1.5 text-amber-400">
                <AlertCircle className="w-3.5 h-3.5" />
                Historic Judicial Dissent
              </span>
              <p className="italic leading-relaxed">{chosenDecreeObj.dissentingNote}</p>
            </div>
          )}

          {/* Judicial Impact Meters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                Democracy Index
              </span>
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-bold font-mono ${
                    chosenDecreeObj.democracyDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {chosenDecreeObj.democracyDelta > 0 ? `+${chosenDecreeObj.democracyDelta}` : chosenDecreeObj.democracyDelta}
                </span>
                <TrendingUp className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                Rule of Law Score
              </span>
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-bold font-mono ${
                    chosenDecreeObj.ruleOfLawDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {chosenDecreeObj.ruleOfLawDelta > 0 ? `+${chosenDecreeObj.ruleOfLawDelta}` : chosenDecreeObj.ruleOfLawDelta}
                </span>
                <ShieldAlert className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                Fundamental Rights
              </span>
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-bold font-mono ${
                    chosenDecreeObj.rightsDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {chosenDecreeObj.rightsDelta > 0 ? `+${chosenDecreeObj.rightsDelta}` : chosenDecreeObj.rightsDelta}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
            </div>
          </div>

          {/* Historical Case Footnote */}
          <div className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
            <span className="font-bold text-[var(--text-primary)]">Precedential Grounding:</span>{' '}
            {petition.historicContext}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={resetPetition}
              className="px-4 py-2 rounded-xl text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Re-Hear Case
            </button>
            <button
              onClick={() => {
                const nextIdx = (BENCH_PETITIONS.findIndex((p) => p.id === petition.id) + 1) % BENCH_PETITIONS.length;
                handleSelectPetition(BENCH_PETITIONS[nextIdx].id);
              }}
              className="px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all shadow-md"
            >
              Next Constitution Petition <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
