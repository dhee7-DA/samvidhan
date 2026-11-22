import React, { useState } from 'react';
import {
  BrainCircuit,
  Scale,
  Sparkles,
  BookOpen,
  Award,
  AlertTriangle,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Flame,
  Swords,
  Scroll
} from 'lucide-react';
import {
  SOCRATIC_PARADOXES,
  type SocraticParadoxDossier,
  type SocraticArgumentChoice
} from '../../data/socraticTutorData';
import { arcadeAudio } from '../../services/arcadeAudioService';
import { recordSocraticTutorResult } from '../../services/judicialCareerService';

export const SocraticTutorView: React.FC = () => {
  // Selected paradox track
  const [selectedParadoxId, setSelectedParadoxId] = useState<string>(SOCRATIC_PARADOXES[0].id);

  // Active Dialogue Step:
  // 1: Hook & Authorities
  // 2: Choose Opening Thesis
  // 3: Counter-Thrust & Fallacy Alert
  // 4: Choose Rebuttal
  // 5: Final Synthesis & Model Mains Answer
  const [dialogueStep, setDialogueStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Selected argument path
  const [selectedArgPath, setSelectedArgPath] = useState<SocraticArgumentChoice | null>(null);

  // Selected rebuttal option id
  const [selectedRebuttalId, setSelectedRebuttalId] = useState<string | null>(null);

  // Depth meter (0 to 100)
  const [depthScorePct, setDepthScorePct] = useState<number>(30);

  // Track completed paradoxes
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  const currentParadox: SocraticParadoxDossier =
    SOCRATIC_PARADOXES.find((p) => p.id === selectedParadoxId) || SOCRATIC_PARADOXES[0];

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleSelectParadox = (id: string) => {
    setSelectedParadoxId(id);
    setDialogueStep(1);
    setSelectedArgPath(null);
    setSelectedRebuttalId(null);
    setDepthScorePct(30);
    arcadeAudio.playGavel();
  };

  const handleStartDefense = () => {
    setDialogueStep(2);
    arcadeAudio.playStamp();
  };

  const handleChooseArgument = (arg: SocraticArgumentChoice) => {
    setSelectedArgPath(arg);
    setDialogueStep(3);
    setDepthScorePct((prev) => Math.min(60, prev + 25));
    arcadeAudio.playGavel();
  };

  const handleProceedToRebuttal = () => {
    setDialogueStep(4);
    arcadeAudio.playStamp();
  };

  const handleChooseRebuttal = (rebuttalId: string) => {
    if (!selectedArgPath) return;
    setSelectedRebuttalId(rebuttalId);

    const opt = selectedArgPath.rebuttalOptions.find((o) => o.id === rebuttalId);
    if (!opt) return;

    if (opt.isOptimalSynthesis) {
      arcadeAudio.playFanfare();
      const newDepth = Math.min(100, depthScorePct + opt.depthGainPct);
      setDepthScorePct(newDepth);

      if (!completedIds.includes(currentParadox.id)) {
        setCompletedIds((prev) => [...prev, currentParadox.id]);
      }

      recordSocraticTutorResult(currentParadox.id, newDepth);
    } else {
      arcadeAudio.playWrong();
      setDepthScorePct((prev) => Math.max(20, prev - 10));
    }

    setDialogueStep(5);
  };

  const handleResetSession = () => {
    setDialogueStep(1);
    setSelectedArgPath(null);
    setSelectedRebuttalId(null);
    setDepthScorePct(30);
    arcadeAudio.playGavel();
  };

  // Socratic Depth Tier
  const getDepthTier = (pct: number) => {
    if (pct >= 80) return { label: 'Jurisprudential Master', color: 'text-amber-400 bg-amber-500/15 border-amber-500/30' };
    if (pct >= 50) return { label: 'Doctrinal Analyst', color: 'text-sky-400 bg-sky-500/15 border-sky-500/30' };
    return { label: 'Surface Textualist', color: 'text-zinc-400 bg-zinc-800 border-zinc-700' };
  };

  const depthTier = getDepthTier(depthScorePct);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          HEADER BANNER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5" />
                Socratic Constitutional Cross-Examiner
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                Dialectical Reasoning & Fallacy Detector
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <Scale className="w-6 h-6 text-amber-500" />
              Socratic Constitutional Cross-Examiner
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Step into the chamber of venerable senior jurists. Face deep constitutional paradoxes, defend your legal thesis against razor-sharp counter-thrusts, and formulate landmark syntheses.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Socratic Depth Gauge */}
            <div className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5 min-w-[180px]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)] text-[10px] uppercase font-bold">
                  Socratic Depth
                </span>
                <span className="font-black text-amber-400">{depthScorePct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${depthScorePct}%` }}
                />
              </div>
              <div className="flex justify-between items-center pt-0.5">
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold ${depthTier.color}`}
                >
                  {depthTier.label}
                </span>
              </div>
            </div>

            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            <button
              onClick={handleResetSession}
              className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Debate</span>
            </button>
          </div>
        </div>

        {/* 6 Paradox Tracks Selector */}
        <div className="pt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {SOCRATIC_PARADOXES.map((paradox) => {
            const isSelected = paradox.id === selectedParadoxId;
            const isCompleted = completedIds.includes(paradox.id);

            return (
              <button
                key={paradox.id}
                onClick={() => handleSelectParadox(paradox.id)}
                className={`p-2.5 px-3.5 rounded-2xl text-left border transition-all cursor-pointer btn-tactile shrink-0 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-amber-500 text-[var(--text-primary)] shadow-sm ring-1 ring-amber-500/30'
                    : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-sm font-black text-amber-400">
                  {paradox.trackNumber}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs line-clamp-1">{paradox.title}</span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] block line-clamp-1">
                    {paradox.coreArticles.join(', ')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          MAIN INTERACTIVE DIALOGUE CHAMBER
      ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Examiner Profile & Context (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Senior Jurist Profile Card */}
          <div className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl shadow-inner shrink-0">
                {currentParadox.examinerPersona.avatar}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-500 font-bold block">
                  Cross-Examiner
                </span>
                <h4 className="font-black text-base text-[var(--text-primary)]">
                  {currentParadox.examinerPersona.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  {currentParadox.examinerPersona.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-secondary)] italic bg-[var(--bg-base)] p-3 rounded-2xl border border-[var(--border-subtle)] leading-relaxed">
              "{currentParadox.examinerPersona.reputation}"
            </p>
          </div>

          {/* Conflicting Authorities Card */}
          <div className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold flex items-center gap-1.5">
              <Swords className="w-4 h-4 text-amber-400" />
              Conflicting Authorities in Tension:
            </h5>

            <div className="space-y-2.5">
              {/* Authority Side A */}
              <div className="p-3 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">
                  Thesis Authority (Side A):
                </span>
                <strong className="text-xs text-[var(--text-primary)] block">
                  {currentParadox.conflictingAuthorities.sideA.caseOrText}
                </strong>
                <p className="text-[11px] text-rose-300/80 leading-relaxed">
                  {currentParadox.conflictingAuthorities.sideA.coreHolding}
                </p>
              </div>

              {/* Authority Side B */}
              <div className="p-3 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase text-sky-400 font-bold block">
                  Antithesis Authority (Side B):
                </span>
                <strong className="text-xs text-[var(--text-primary)] block">
                  {currentParadox.conflictingAuthorities.sideB.caseOrText}
                </strong>
                <p className="text-[11px] text-sky-300/80 leading-relaxed">
                  {currentParadox.conflictingAuthorities.sideB.coreHolding}
                </p>
              </div>
            </div>
          </div>

          {/* Latin Maxim Card */}
          <div className="p-4 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-bold block">
              Guiding Jurisprudential Maxim:
            </span>
            <p className="text-xs italic font-serif text-[var(--text-primary)] font-bold">
              {currentParadox.keyLatinMaxim}
            </p>
          </div>
        </div>

        {/* Right Column: Socratic Stage & Dialogue Flow (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* STEP 1: THE CONUNDRUM HOOK */}
          <div className="p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">
                Constitutional Paradox #{currentParadox.trackNumber}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Pillar: {currentParadox.constitutionalPillar}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
              {currentParadox.subtitle}
            </h3>

            {/* Jurist's Speech Bubble */}
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border-l-4 border-amber-500 text-xs md:text-sm text-[var(--text-primary)] leading-relaxed font-serif space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-400 block not-italic">
                The Cross-Examiner's Question:
              </span>
              <p>"{currentParadox.theConundrumHook}"</p>
            </div>

            {dialogueStep === 1 && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleStartDefense}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>Formulate Legal Defense</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* STEP 2: OPENING THESIS SELECTION */}
          {dialogueStep >= 2 && (
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold">
                  Step 1: Choose Your Opening Jurisprudential Thesis
                </h4>
                <span className="text-[10px] font-mono text-amber-400">
                  Select your school of constitutional thought
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentParadox.argumentPaths.map((arg) => (
                  <div
                    key={arg.id}
                    onClick={() => dialogueStep === 2 && handleChooseArgument(arg)}
                    className={`p-4 rounded-2xl border transition-all ${
                      selectedArgPath?.id === arg.id
                        ? 'bg-amber-500/10 border-amber-500 shadow-sm ring-1 ring-amber-500/30'
                        : dialogueStep === 2
                        ? 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-amber-500/50 cursor-pointer'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h5 className="font-bold text-sm text-[var(--text-primary)]">
                        {arg.thesisTitle}
                      </h5>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        {arg.jurisprudentialPhilosophy}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                      "{arg.candidateOpeningStatement}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: THE JURIST'S COUNTER-THRUST & FALLACY SPOTTER */}
          {dialogueStep >= 3 && selectedArgPath && (
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                  <Swords className="w-4 h-4" />
                  Step 2: The Jurist's Sharp Counter-Thrust
                </h4>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  The Socratic Challenge
                </span>
              </div>

              {/* Jurist's Counter-Thrust Speech */}
              <div className="p-4 rounded-2xl bg-rose-500/5 border-l-4 border-rose-500 text-xs md:text-sm text-[var(--text-primary)] leading-relaxed font-serif space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-rose-400 block not-italic">
                  The Cross-Examiner's Counter-Thrust:
                </span>
                <p>"{selectedArgPath.juristCounterThrust}"</p>
              </div>

              {/* Specialized Fallacy Detector Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                  <AlertTriangle className="w-4 h-4" />
                  <span>FALLACY DETECTED: {selectedArgPath.identifiedFallacy.fallacyName}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedArgPath.identifiedFallacy.fallacyExplanation}
                </p>
              </div>

              {dialogueStep === 3 && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleProceedToRebuttal}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <span>Proceed to Synthesized Rebuttal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: REBUTTAL OPTIONS */}
          {dialogueStep >= 4 && selectedArgPath && (
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Step 3: Resolve the Paradox (Synthesized Rebuttal)
                </h4>
                <span className="text-[10px] font-mono text-amber-400">
                  Select the definitive constitutional synthesis
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {selectedArgPath.rebuttalOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => dialogueStep === 4 && handleChooseRebuttal(opt.id)}
                    className={`p-4 rounded-2xl border transition-all ${
                      selectedRebuttalId === opt.id
                        ? opt.isOptimalSynthesis
                          ? 'bg-emerald-500/10 border-emerald-500 shadow-sm'
                          : 'bg-rose-500/10 border-rose-500'
                        : dialogueStep === 4
                        ? 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-amber-500 cursor-pointer'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[var(--text-primary)]">
                        {opt.statement}
                      </span>
                      {selectedRebuttalId === opt.id && (
                        opt.isOptimalSynthesis ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                        )
                      )}
                    </div>
                    {selectedRebuttalId === opt.id && (
                      <p className="text-xs text-amber-300/90 mt-2 italic border-t border-[var(--border-subtle)] pt-1.5">
                        "{opt.examinerVerdict}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: FINAL SYNTHESIS & MODEL MAINS ANSWER BLUEPRINT */}
          {dialogueStep === 5 && selectedArgPath && (
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-amber-500/40 shadow-2xl space-y-6 animate-fadeIn">
              <div className="text-center space-y-2 pb-4 border-b border-[var(--border-subtle)]">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-3xl shadow-inner">
                  🏛️
                </div>
                <span className="text-[10px] font-mono uppercase text-amber-500 font-bold block">
                  Definitive Constitutional Synthesis
                </span>
                <h4 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                  {selectedArgPath.concludingSynthesisRatio.benchCitation}
                </h4>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] italic max-w-2xl mx-auto">
                  "{selectedArgPath.concludingSynthesisRatio.rulingRatio}"
                </p>
              </div>

              {/* Model Mains Answer Blueprint (4 Pillars) */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold flex items-center gap-1.5">
                  <Scroll className="w-4 h-4 text-amber-400" />
                  15-Mark UPSC / Judiciary Mains Answer Blueprint:
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {/* Pillar 1: Intro */}
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                      1. Constitutional Introduction:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {selectedArgPath.concludingSynthesisRatio.mainsAnswerBlueprint.introduction}
                    </p>
                  </div>

                  {/* Pillar 2: Conflict */}
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">
                      2. Tension & Conflicting Rulings:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {selectedArgPath.concludingSynthesisRatio.mainsAnswerBlueprint.conflictAnalysis}
                    </p>
                  </div>

                  {/* Pillar 3: Harmonious */}
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      3. Harmonious Synthesis:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {selectedArgPath.concludingSynthesisRatio.mainsAnswerBlueprint.harmoniousResolution}
                    </p>
                  </div>

                  {/* Pillar 4: Contemporary */}
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase text-sky-400 font-bold block">
                      4. Contemporary Relevance:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {selectedArgPath.concludingSynthesisRatio.mainsAnswerBlueprint.contemporaryRelevance}
                    </p>
                  </div>
                </div>
              </div>

              {/* High-Yield Exam Tip */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                  💡 Examiner's High-Yield Tip:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {currentParadox.highYieldExamTip}
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleResetSession}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Re-Examine This Paradox</span>
                </button>

                {currentParadox.trackNumber < SOCRATIC_PARADOXES.length && (
                  <button
                    onClick={() => {
                      const nextParadox = SOCRATIC_PARADOXES[currentParadox.trackNumber];
                      handleSelectParadox(nextParadox.id);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>Next Paradox Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
