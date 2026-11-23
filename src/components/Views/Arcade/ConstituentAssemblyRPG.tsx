import React, { useState } from 'react';
import {
  Scroll,
  Scale,
  Shield,
  Zap,
  Award,
  Sparkles,
  RotateCcw,
  BookOpen,
  Volume2,
  VolumeX,
  ArrowRight,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  History,
  Building2,
  Users
} from 'lucide-react';
import {
  ASSEMBLY_CRISES,
  calculateAssemblyOutcome,
  type AssemblyCrisisDilemma,
  type AssemblyDelegateChoice,
  type PlayerRpgResult
} from '../../../data/constituentAssemblyRpgData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordAssemblyRPGResult } from '../../../services/judicialCareerService';

interface ConstituentAssemblyRPGProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const ConstituentAssemblyRPG: React.FC<ConstituentAssemblyRPGProps> = ({
  onAwardResult
}) => {
  // Screen state: 'intro' | 'debate' | 'reveal' | 'adoption'
  const [screenState, setScreenState] = useState<'intro' | 'debate' | 'reveal' | 'adoption'>('intro');

  // Active Crisis Index (0 to 9)
  const [currentCrisisIndex, setCurrentCrisisIndex] = useState<number>(0);

  // Dynamic Meters: (0 to 100, starting at 50)
  const [meters, setMeters] = useState<{
    liberty: number;
    federalism: number;
    executiveCapacity: number;
  }>({
    liberty: 50,
    federalism: 50,
    executiveCapacity: 50
  });

  // Player choices made: crisisId -> choiceId
  const [choicesMade, setChoicesMade] = useState<Record<string, string>>({});
  const [lastChosenChoice, setLastChosenChoice] = useState<AssemblyDelegateChoice | null>(null);

  // Final Results
  const [finalOutcome, setFinalOutcome] = useState<PlayerRpgResult | null>(null);
  const [showCadNotes, setShowCadNotes] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  const currentCrisis: AssemblyCrisisDilemma = ASSEMBLY_CRISES[currentCrisisIndex];

  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleStartSimulation = () => {
    setCurrentCrisisIndex(0);
    setMeters({ liberty: 50, federalism: 50, executiveCapacity: 50 });
    setChoicesMade({});
    setLastChosenChoice(null);
    setFinalOutcome(null);
    setScreenState('debate');
    arcadeAudio.playGavel();
  };

  const handleSelectChoice = (choice: AssemblyDelegateChoice) => {
    // Calculate new meters bounded 5-95
    const newMeters = {
      liberty: Math.max(5, Math.min(95, meters.liberty + choice.impact.liberty)),
      federalism: Math.max(5, Math.min(95, meters.federalism + choice.impact.federalism)),
      executiveCapacity: Math.max(
        5,
        Math.min(95, meters.executiveCapacity + choice.impact.executiveCapacity)
      )
    };

    setMeters(newMeters);
    setChoicesMade((prev) => ({ ...prev, [currentCrisis.id]: choice.id }));
    setLastChosenChoice(choice);

    if (choice.isAdoptedConstitutionHistory) {
      arcadeAudio.playCorrect(3);
    } else {
      arcadeAudio.playStamp();
    }

    setScreenState('reveal');
  };

  const handleNextCrisis = () => {
    if (currentCrisisIndex < ASSEMBLY_CRISES.length - 1) {
      setCurrentCrisisIndex((prev) => prev + 1);
      setLastChosenChoice(null);
      setScreenState('debate');
      arcadeAudio.playGavel();
    } else {
      // Completed all 10 crises!
      const outcome = calculateAssemblyOutcome(choicesMade, meters);
      setFinalOutcome(outcome);

      const award = recordAssemblyRPGResult(outcome.alignmentRate);
      onAwardResult(
        award.gainedXP,
        award.leveledUp,
        award.newBadges.map((b) => b.title)
      );

      arcadeAudio.playFanfare();
      setScreenState('adoption');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          CENTRAL HALL DRAFTING BANNER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Scroll className="w-3.5 h-3.5" />
                Central Hall of Parliament • 1946–1949
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                The Drafting Committee RPG
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-amber-500" />
              Constituent Assembly: The Drafting RPG
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Take your seat among Dr. Ambedkar, Sardar Patel, and Nehru. Face 10 monumental constitutional crossroads, balance the 3 dynamic meters of statehood, and craft the Republic’s supreme law!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            {screenState !== 'intro' && (
              <button
                onClick={handleStartSimulation}
                className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Session</span>
              </button>
            )}
          </div>
        </div>

        {/* 3 Dynamic Gauges (Visible during debate, reveal, and adoption) */}
        {screenState !== 'intro' && (
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Meter 1: Civil Liberty */}
            <div className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Scale className="w-3.5 h-3.5" />
                  Civil Liberty
                </span>
                <span className="font-black text-[var(--text-primary)]">{meters.liberty}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${meters.liberty}%` }}
                />
              </div>
              <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                Fundamental Rights, personal liberty, judicial review
              </p>
            </div>

            {/* Meter 2: Federal Harmony */}
            <div className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                  <Shield className="w-3.5 h-3.5" />
                  Federal Harmony
                </span>
                <span className="font-black text-[var(--text-primary)]">{meters.federalism}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full transition-all duration-500"
                  style={{ width: `${meters.federalism}%` }}
                />
              </div>
              <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                Provincial autonomy, linguistic balance, state rights
              </p>
            </div>

            {/* Meter 3: Executive Capacity */}
            <div className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  Executive Authority
                </span>
                <span className="font-black text-[var(--text-primary)]">
                  {meters.executiveCapacity}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${meters.executiveCapacity}%` }}
                />
              </div>
              <p className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                National security, land reforms, central command
              </p>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          SCREEN 1: INTRO / BRIEFING
      ===================================================================== */}
      {screenState === 'intro' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
              <Scale className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[var(--text-primary)]">
              Welcome to Central Hall, Constituent Assembly
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Between 9 December 1946 and 26 November 1949, 299 delegates gathered under the ceiling fans of Central Hall to draft the world’s longest written constitution. Every clause was forged through impassioned philosophical clash.
            </p>
          </div>

          {/* Historical Pillars Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                The Individual vs The Leviathan
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Should citizens have absolute American Due Process and unrestricted property rights, or must the newborn state hold the power to dismantle feudal zamindari and quell rioting?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                The Union vs The Provinces
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Should Governors be popularly elected by the states, or appointed by New Delhi? How will the volatile national language question be resolved without causing partition of the South?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
              <Scroll className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-sm text-[var(--text-primary)]">
                Authentic CAD Debates
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Every crisis incorporates genuine historical quotes from Dr. Ambedkar, Sardar Patel, Nehru, H.V. Kamath, and K.M. Munshi. Learn the exact legislative intent tested in UPSC & Judiciary exams!
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleStartSimulation}
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Scroll className="w-5 h-5" />
              <span>Take Your Seat in the Assembly</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: ACTIVE DEBATE & CRISIS DILEMMA
      ===================================================================== */}
      {screenState === 'debate' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Crisis Header & Progress */}
          <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-xs font-mono font-bold">
                  Crisis {currentCrisis.number} of {ASSEMBLY_CRISES.length}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {currentCrisis.date}
                </span>
              </div>
              <span className="text-xs font-mono text-amber-500 font-bold">
                {currentCrisis.coreArticleRef}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Constitutional Pillar: {currentCrisis.constitutionalPillar}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
                {currentCrisis.debateTitle}
              </h3>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                {currentCrisis.contextSummary}
              </p>
            </div>

            {/* Keynote Speakers on the Floor */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                Voices on the Floor of Central Hall:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentCrisis.primaryKeynoteSpeakers.map((spk, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{spk.avatar}</span>
                      <div>
                        <h5 className="font-bold text-xs text-[var(--text-primary)]">{spk.name}</h5>
                        <span className="text-[9px] font-mono text-amber-500 block">
                          {spk.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] italic leading-snug">
                      "{spk.standpoint}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Delegate Choices / Proposed Amendments */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Cast Your Vote or Sponsor an Amendment:
              </h4>
              <span className="text-[10px] font-mono text-amber-400">
                Each choice alters the 3 balance meters
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {currentCrisis.choices.map((choice) => (
                <div
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice)}
                  className="p-4 md:p-5 rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] hover:border-amber-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 font-bold block">
                        Proposed by: {choice.sponsor}
                      </span>
                      <h5 className="font-bold text-sm md:text-base text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                        {choice.title}
                      </h5>
                    </div>

                    {/* Meter Impact Preview Badges */}
                    <div className="flex items-center gap-2 font-mono text-[10px] shrink-0">
                      {choice.impact.liberty !== 0 && (
                        <span
                          className={`px-2 py-0.5 rounded ${
                            choice.impact.liberty > 0
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          Liberty {choice.impact.liberty > 0 ? `+${choice.impact.liberty}` : choice.impact.liberty}%
                        </span>
                      )}
                      {choice.impact.federalism !== 0 && (
                        <span
                          className={`px-2 py-0.5 rounded ${
                            choice.impact.federalism > 0
                              ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                              : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          Federal {choice.impact.federalism > 0 ? `+${choice.impact.federalism}` : choice.impact.federalism}%
                        </span>
                      )}
                      {choice.impact.executiveCapacity !== 0 && (
                        <span
                          className={`px-2 py-0.5 rounded ${
                            choice.impact.executiveCapacity > 0
                              ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          Executive {choice.impact.executiveCapacity > 0 ? `+${choice.impact.executiveCapacity}` : choice.impact.executiveCapacity}%
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {choice.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-300">
                      <strong className="block text-[10px] font-mono uppercase text-emerald-400">
                        Pros:
                      </strong>
                      {choice.argumentsFor}
                    </div>
                    <div className="p-2.5 rounded-xl bg-rose-500/5 border border-rose-500/20 text-rose-300">
                      <strong className="block text-[10px] font-mono uppercase text-rose-400">
                        Cons:
                      </strong>
                      {choice.argumentsAgainst}
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                    <span className="italic line-clamp-1">
                      {choice.cadHistoricalQuote}
                    </span>
                    <span className="font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
                      Sponsor Amendment <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 3: HISTORICAL REVELATION & DECREE
      ===================================================================== */}
      {screenState === 'reveal' && lastChosenChoice && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {lastChosenChoice.isAdoptedConstitutionHistory ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Exact 1950 Historical Draft Adopted!
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                    <History className="w-3.5 h-3.5" />
                    Historical Alternative / Defeated Amendment
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)]">
                {lastChosenChoice.title}
              </h3>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block">
                Debate Record
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">
                Assembly Session {currentCrisis.number} / 10
              </span>
            </div>
          </div>

          {/* Authentic CAD Speech Box */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
              CAD Archival Record — {lastChosenChoice.historicalSpeaker}:
            </span>
            <p className="text-xs md:text-sm italic text-[var(--text-primary)] leading-relaxed font-serif">
              {lastChosenChoice.cadHistoricalQuote}
            </p>
          </div>

          {/* Historical Reality & Future Evolution */}
          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-bold">
              How History Actually Unfolded:
            </span>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              {lastChosenChoice.historicalOutcomeNote}
            </p>
          </div>

          {/* Exam Takeaway Note */}
          <div className="p-4 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
              <BookOpen className="w-4 h-4" />
              <span>Judiciary & UPSC Mains Analytical Lens:</span>
            </div>
            <p className="text-xs text-sky-200/90 leading-relaxed">
              {currentCrisis.mainsAnalysisTakeaway}
            </p>
          </div>

          {/* Next Button */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={handleNextCrisis}
              className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>
                {currentCrisisIndex < ASSEMBLY_CRISES.length - 1
                  ? 'Proceed to Next Assembly Debate'
                  : 'Complete Drafting & Adopt Constitution'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 4: FINAL CONSTITUTION ADOPTION CEREMONY
      ===================================================================== */}
      {screenState === 'adoption' && finalOutcome && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] space-y-6 animate-fadeIn">
          {/* Ceremony Header */}
          <div className="text-center space-y-3 pb-4 border-b border-[var(--border-subtle)]">
            <div className="inline-flex p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-4xl shadow-inner animate-pulse">
              {finalOutcome.archetypeBadge}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-bold block">
              26 November 1949 • "We, the People of India, Adopt, Enact, and Give to Ourselves This Constitution"
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">
              Your Drafting Archetype: {finalOutcome.archetypeTitle}
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {finalOutcome.archetypeDescription}
            </p>
          </div>

          {/* Final Scorecard & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Historical Alignment
              </span>
              <span className="text-3xl font-black text-amber-400">
                {finalOutcome.alignmentRate}%
              </span>
              <p className="text-[10px] text-[var(--text-secondary)]">
                Match with actual 1950 Constitution
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Career XP Awarded
              </span>
              <span className="text-3xl font-black text-emerald-400">
                +{finalOutcome.xpEarned.toLocaleString()} XP
              </span>
              <p className="text-[10px] text-[var(--text-secondary)]">
                Constituent Assembly Service Badge Unlocked
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center space-y-1">
              <span className="text-[10px] font-mono text-[var(--text-muted)] block uppercase">
                Constitutional Equilibrium
              </span>
              <span className="text-3xl font-black text-sky-400">
                {Math.round((meters.liberty + meters.federalism + meters.executiveCapacity) / 3)}%
              </span>
              <p className="text-[10px] text-[var(--text-secondary)]">
                Tri-pillar synthesis score
              </p>
            </div>
          </div>

          {/* Tri-Meter Final Breakdown */}
          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Tri-Pillar Equilibrium Balance:
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400">Civil Liberty & Rights:</span>
                <span className="font-black text-[var(--text-primary)]">{meters.liberty}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${meters.liberty}%` }} />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-sky-400">Federal Harmony & Autonomy:</span>
                <span className="font-black text-[var(--text-primary)]">{meters.federalism}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div className="h-full bg-sky-500" style={{ width: `${meters.federalism}%` }} />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-amber-400">Executive State Capacity:</span>
                <span className="font-black text-[var(--text-primary)]">
                  {meters.executiveCapacity}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--bg-card)] overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: `${meters.executiveCapacity}%` }} />
              </div>
            </div>
          </div>

          {/* CAD Exam Insights Collapsible */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
            <button
              onClick={() => setShowCadNotes(!showCadNotes)}
              className="w-full flex items-center justify-between text-xs font-mono font-bold text-amber-400 uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>10 Central Hall Debates — Mains Answer Writing Cheat Sheet</span>
              </div>
              {showCadNotes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showCadNotes && (
              <div className="space-y-3 pt-2 text-xs divide-y divide-[var(--border-subtle)]">
                {ASSEMBLY_CRISES.map((cr) => (
                  <div key={cr.id} className="pt-2 space-y-1">
                    <span className="font-bold text-[var(--text-primary)] block">
                      {cr.number}. {cr.debateTitle} ({cr.coreArticleRef})
                    </span>
                    <p className="text-[var(--text-secondary)]">
                      {cr.mainsAnalysisTakeaway}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleStartSimulation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Draft Again (Try Alternative Ideology)</span>
            </button>

            <button
              onClick={() => setScreenState('intro')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-mono tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Back to Assembly Entrance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
