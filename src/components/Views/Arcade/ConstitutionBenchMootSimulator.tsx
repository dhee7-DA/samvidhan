import React, { useState, useEffect, useMemo } from 'react';
import {
  Gavel,
  Scale,
  Shield,
  Trophy,
  Sparkles,
  Award,
  Clock,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Flame,
  Volume2,
  VolumeX,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import {
  BENCH_JUDGES,
  MOOT_CASES,
  ARGUMENT_CARDS_DECK,
  type JudgeArchetype,
  type ArgumentCard,
  type MootCaseDossier
} from '../../../data/mootCourtData';
import { arcadeAudio } from '../../../services/arcadeAudioService';
import { recordMootCourtResult } from '../../../services/judicialCareerService';

interface ConstitutionBenchMootSimulatorProps {
  onAwardResult: (gainedXP: number, leveledUp: boolean, newBadges: string[]) => void;
}

export const ConstitutionBenchMootSimulator: React.FC<ConstitutionBenchMootSimulatorProps> = ({
  onAwardResult
}) => {
  // Screen state: 'select' | 'trial' | 'verdict'
  const [screenState, setScreenState] = useState<'select' | 'trial' | 'verdict'>('select');

  // Selected Case & Role
  const [selectedCaseId, setSelectedCaseId] = useState<string>(MOOT_CASES[0].id);
  const [selectedRole, setSelectedRole] = useState<'PETITIONER' | 'RESPONDENT'>('PETITIONER');

  // Active Trial State
  const [currentRound, setCurrentRound] = useState<number>(1); // 1: Open, 2: Substantive, 3: Interlocutory
  const [interlocutoryTimer, setInterlocutoryTimer] = useState<number>(15);
  const [isInterlocutoryActive, setIsInterlocutoryActive] = useState<boolean>(false);

  // Bench Votes: judgeId -> 'AGREE' | 'DISSENT' | 'UNDECIDED'
  const [judgeVotes, setJudgeVotes] = useState<Record<string, 'AGREE' | 'DISSENT' | 'UNDECIDED'>>({
    'judge-living-const': 'UNDECIDED',
    'judge-strict-text': 'UNDECIDED',
    'judge-social-justice': 'UNDECIDED',
    'judge-pragmatist': 'UNDECIDED',
    'judge-federalism': 'UNDECIDED'
  });

  const [playedCards, setPlayedCards] = useState<string[]>([]);
  const [trialLog, setTrialLog] = useState<{ speaker: string; text: string }[]>([]);
  const [isMuted, setIsMuted] = useState<boolean>(arcadeAudio.isMuted());

  const activeCase: MootCaseDossier = useMemo(() => {
    return MOOT_CASES.find((c) => c.id === selectedCaseId) || MOOT_CASES[0];
  }, [selectedCaseId]);

  // Audio Toggle
  const toggleMute = () => {
    arcadeAudio.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  // Interlocutory Timer Tick
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isInterlocutoryActive && interlocutoryTimer > 0) {
      interval = setInterval(() => {
        setInterlocutoryTimer((prev) => {
          if (prev <= 1) {
            setIsInterlocutoryActive(false);
            // Time out on question -> auto default penalty
            handleInterlocutoryTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInterlocutoryActive, interlocutoryTimer]);

  const handleStartTrial = () => {
    setCurrentRound(1);
    setPlayedCards([]);
    setInterlocutoryTimer(15);
    setIsInterlocutoryActive(false);
    setJudgeVotes({
      'judge-living-const': 'UNDECIDED',
      'judge-strict-text': 'UNDECIDED',
      'judge-social-justice': 'UNDECIDED',
      'judge-pragmatist': 'UNDECIDED',
      'judge-federalism': 'UNDECIDED'
    });
    setTrialLog([
      {
        speaker: 'Court Master',
        text: `Courtroom 1 called! Item No. 1: ${activeCase.caseTitle}. Senior Counsel appearing for ${
          selectedRole === 'PETITIONER' ? 'Petitioner' : 'Union of India (Solicitor General)'
        }.`
      }
    ]);
    setScreenState('trial');
    arcadeAudio.playGavel();
  };

  // Handle playing an argument card in Round 1 or Round 2
  const handlePlayCard = (card: ArgumentCard) => {
    if (playedCards.includes(card.id)) return;
    setPlayedCards((prev) => [...prev, card.id]);

    arcadeAudio.playStamp();

    // Determine impact on judges
    const newVotes = { ...judgeVotes };
    let gainedSupport = 0;

    BENCH_JUDGES.forEach((judge) => {
      const isTarget = card.targetJudges.includes(judge.id);
      const isAntagonist = card.antagonistJudges.includes(judge.id);

      if (selectedRole === 'PETITIONER') {
        if (isTarget && card.petitionerPower >= 7) {
          newVotes[judge.id] = 'AGREE';
          gainedSupport++;
        } else if (isAntagonist && card.petitionerPower < 5) {
          newVotes[judge.id] = 'DISSENT';
        } else if (newVotes[judge.id] === 'UNDECIDED') {
          newVotes[judge.id] = card.petitionerPower >= 6 ? 'AGREE' : 'UNDECIDED';
        }
      } else {
        // Respondent
        if (isTarget && card.respondentPower >= 7) {
          newVotes[judge.id] = 'AGREE';
          gainedSupport++;
        } else if (isAntagonist && card.respondentPower < 5) {
          newVotes[judge.id] = 'DISSENT';
        } else if (newVotes[judge.id] === 'UNDECIDED') {
          newVotes[judge.id] = card.respondentPower >= 6 ? 'AGREE' : 'UNDECIDED';
        }
      }
    });

    setJudgeVotes(newVotes);

    setTrialLog((prev) => [
      ...prev,
      {
        speaker: selectedRole === 'PETITIONER' ? 'Senior Counsel' : 'Solicitor General',
        text: `My Lords, we submit: ${card.quote} [${card.citation}]`
      },
      {
        speaker: 'The Bench',
        text: `Submission noted. ${gainedSupport > 0 ? `${gainedSupport} Judge(s) nod approvingly.` : 'The Bench deliberates cautiously.'}`
      }
    ]);

    // Advance round
    if (currentRound === 1) {
      setCurrentRound(2);
    } else if (currentRound === 2) {
      setCurrentRound(3);
      setInterlocutoryTimer(15);
      setIsInterlocutoryActive(true);
    }
  };

  // Handle Interlocutory Question choice in Round 3
  const handleInterlocutoryAnswer = (optionId: string) => {
    setIsInterlocutoryActive(false);
    const q = activeCase.interlocutoryChallenge;
    const opt = q.options.find((o) => o.id === optionId);
    if (!opt) return;

    arcadeAudio.playGavel();

    const isSuccess =
      selectedRole === 'PETITIONER' ? opt.isOptimalForPetitioner : opt.isOptimalForRespondent;

    const newVotes = { ...judgeVotes };
    const askingJudge = q.judgeId;

    if (isSuccess) {
      arcadeAudio.playCorrect(3);
      newVotes[askingJudge] = 'AGREE';
      // Pragmatist or Living Const also sways
      if (newVotes['judge-pragmatist'] === 'UNDECIDED') newVotes['judge-pragmatist'] = 'AGREE';
      if (newVotes['judge-social-justice'] === 'UNDECIDED') newVotes['judge-social-justice'] = 'AGREE';
    } else {
      arcadeAudio.playWrong();
      newVotes[askingJudge] = 'DISSENT';
    }

    // Resolve any remaining undecided judges
    BENCH_JUDGES.forEach((j) => {
      if (newVotes[j.id] === 'UNDECIDED') {
        newVotes[j.id] = isSuccess ? 'AGREE' : 'DISSENT';
      }
    });

    setJudgeVotes(newVotes);

    setTrialLog((prev) => [
      ...prev,
      {
        speaker: selectedRole === 'PETITIONER' ? 'Senior Counsel' : 'Solicitor General',
        text: opt.text
      },
      {
        speaker: BENCH_JUDGES.find((j) => j.id === q.judgeId)?.name || 'The Bench',
        text: opt.judgeReaction
      }
    ]);

    // Deliver verdict after brief pause
    setTimeout(() => {
      deliverFinalVerdict(newVotes);
    }, 1800);
  };

  const handleInterlocutoryTimeout = () => {
    arcadeAudio.playWrong();
    const newVotes = { ...judgeVotes };
    newVotes[activeCase.interlocutoryChallenge.judgeId] = 'DISSENT';
    BENCH_JUDGES.forEach((j) => {
      if (newVotes[j.id] === 'UNDECIDED') newVotes[j.id] = 'DISSENT';
    });
    setJudgeVotes(newVotes);
    setTrialLog((prev) => [
      ...prev,
      {
        speaker: 'Court Master',
        text: 'Time expired on the interlocutory question! Counsel remained silent.'
      }
    ]);
    deliverFinalVerdict(newVotes);
  };

  // Deliver Final Decree
  const deliverFinalVerdict = (finalVotes: Record<string, 'AGREE' | 'DISSENT' | 'UNDECIDED'>) => {
    let agreeCount = 0;
    Object.values(finalVotes).forEach((v) => {
      if (v === 'AGREE') agreeCount++;
    });

    const isWon = agreeCount >= 3;
    const isUnanimous = agreeCount === 5;

    const result = recordMootCourtResult(activeCase.id, isWon, isUnanimous);
    onAwardResult(
      result.gainedXP,
      result.leveledUp,
      result.newBadges.map((b) => b.title)
    );

    if (isWon) {
      arcadeAudio.playFanfare();
    } else {
      arcadeAudio.playWrong();
    }

    setScreenState('verdict');
  };

  // Standing Summary
  const agreeCount = Object.values(judgeVotes).filter((v) => v === 'AGREE').length;
  const dissentCount = Object.values(judgeVotes).filter((v) => v === 'DISSENT').length;
  const undecidedCount = Object.values(judgeVotes).filter((v) => v === 'UNDECIDED').length;

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn select-none">
      {/* =====================================================================
          COURTROOM 1 HEADER
      ===================================================================== */}
      <div className="p-5 md:p-6 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Gavel className="w-3.5 h-3.5" />
                Supreme Court of India • Courtroom 1
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-base)] border border-[var(--border-subtle)]">
                5-Judge Constitution Bench
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5">
              <Scale className="w-6 h-6 text-amber-500" />
              The Constitution Bench Moot Showdown
            </h2>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Step up to the podium before 5 Supreme Court judges. Play your argument cards, survive the 15s interlocutory grilling, and secure a majority decree!
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleMute}
              className="p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-500" />}
            </button>

            {screenState !== 'select' && (
              <button
                onClick={() => setScreenState('select')}
                className="p-3 px-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-amber-400 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Change Case / Role</span>
              </button>
            )}
          </div>
        </div>

        {/* Live 5-Judge Bench Top Panel */}
        {screenState !== 'select' && (
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)] font-bold">
                Live Bench Standing:
              </span>
              <div className="flex items-center gap-2 font-black">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {agreeCount} In Favor
                </span>
                <span className="px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-400 border border-rose-500/30">
                  {dissentCount} Dissent
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  {undecidedCount} Deliberating
                </span>
              </div>
            </div>

            {/* 5 Judge Podium Avatars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {BENCH_JUDGES.map((judge) => {
                const vote = judgeVotes[judge.id];

                return (
                  <div
                    key={judge.id}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      vote === 'AGREE'
                        ? 'bg-emerald-500/15 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                        : vote === 'DISSENT'
                        ? 'bg-rose-500/15 border-rose-500 shadow-md ring-1 ring-rose-500/50'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-80'
                    }`}
                  >
                    <div className="text-2xl mb-1">{judge.avatar}</div>
                    <div className="text-xs font-extrabold text-[var(--text-primary)] truncate">
                      {judge.name.replace('Justice ', 'J. ')}
                    </div>
                    <div className="text-[9px] font-mono text-[var(--text-muted)] truncate">
                      {judge.archetype}
                    </div>

                    {/* Vote Tag */}
                    <div className="mt-2">
                      <span
                        className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full ${
                          vote === 'AGREE'
                            ? 'bg-emerald-500 text-black'
                            : vote === 'DISSENT'
                            ? 'bg-rose-500 text-white'
                            : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]'
                        }`}
                      >
                        {vote === 'AGREE' ? '✓ AGREE' : vote === 'DISSENT' ? '✗ DISSENT' : 'UNDECIDED'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          SCREEN 1: CASE & ROLE SELECTION
      ===================================================================== */}
      {screenState === 'select' && (
        <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-8 animate-fadeIn">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-500">Step 1 of 2</span>
            <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] mt-0.5">
              Select Your Landmark Constitution Bench Dossier
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
              Choose which high-stakes constitutional dispute you wish to argue before the Full Court:
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MOOT_CASES.map((dossier) => {
              const isSelected = selectedCaseId === dossier.id;

              return (
                <div
                  key={dossier.id}
                  onClick={() => setSelectedCaseId(dossier.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 shadow-lg ring-1 ring-amber-500'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] hover:border-amber-500/40'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 block">
                      Year {dossier.year} • Constitution Bench
                    </span>
                    <h4 className="text-sm font-black text-[var(--text-primary)] leading-snug">
                      {dossier.popularName}
                    </h4>
                    <p className="text-[11px] font-mono text-[var(--text-muted)]">
                      {dossier.caseTitle}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                      {dossier.backgroundStory}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-1">
                    {dossier.coreArticles.map((art, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step 2: Role Selection */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
            <span className="text-xs font-mono font-bold uppercase text-amber-500">Step 2 of 2</span>
            <h4 className="text-sm font-black text-[var(--text-primary)]">Select Your Courtroom Role:</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedRole('PETITIONER')}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'PETITIONER'
                    ? 'bg-sky-500/15 border-sky-500 text-sky-300 ring-2 ring-sky-500 shadow-md'
                    : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase text-sky-400">Petitioner Senior Counsel</span>
                  <Award className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">
                  Attack the unconstitutional statute or gubernatorial veto!
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Brief: {activeCase.petitionerBrief}
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('RESPONDENT')}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'RESPONDENT'
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-2 ring-amber-500 shadow-md'
                    : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase text-amber-400">Solicitor General of India</span>
                  <Shield className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">
                  Defend the legislative enactment & presumption of constitutionality!
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Brief: {activeCase.respondentBrief}
                </p>
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-black shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Gavel className="w-4 h-4" />
              <span>APPEAR BEFORE THE CONSTITUTION BENCH</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: COURTROOM TRIAL IN SESSION
      ===================================================================== */}
      {screenState === 'trial' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          {/* Left Column: Podium Submissions & Argument Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                <span className="text-xs font-mono font-bold uppercase text-amber-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Round {currentRound} of 3: {currentRound === 1 ? 'Maintainability & Locus' : currentRound === 2 ? 'Substantive Challenge' : 'Interlocutory Grilling'}
                </span>
                <span className="text-xs font-mono font-bold text-sky-400">
                  {selectedRole === 'PETITIONER' ? 'Arguing as Petitioner' : 'Arguing as Solicitor General'}
                </span>
              </div>

              {/* Round Prompt */}
              <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">
                  Chief Justice Directive:
                </span>
                <p className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-relaxed">
                  {currentRound === 1
                    ? activeCase.round1Prompt
                    : currentRound === 2
                    ? activeCase.round2Prompt
                    : 'The Bench has a direct question for Counsel:'}
                </p>
              </div>

              {/* ROUND 1 & 2: ARGUMENT CARDS SELECTION */}
              {(currentRound === 1 || currentRound === 2) && (
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] block">
                    Choose Your Lead Submission Card from Your Deck:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ARGUMENT_CARDS_DECK.filter((c) => !playedCards.includes(c.id)).slice(0, 4).map((card) => {
                      const power = selectedRole === 'PETITIONER' ? card.petitionerPower : card.respondentPower;

                      return (
                        <div
                          key={card.id}
                          className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500/50 flex flex-col justify-between space-y-3 transition-all cursor-pointer shadow-sm group"
                          onClick={() => handlePlayCard(card)}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {card.cardType}
                              </span>
                              <span className="text-[10px] font-mono font-bold text-emerald-400">
                                Impact: {power}/10
                              </span>
                            </div>
                            <h4 className="text-xs font-extrabold text-[var(--text-primary)] group-hover:text-amber-400 transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[11px] text-[var(--text-secondary)] italic leading-tight">
                              {card.quote}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[150px]">
                              {card.citation}
                            </span>
                            <span className="text-[11px] font-black text-amber-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              PLAY CARD <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ROUND 3: 15-SECOND INTERLOCUTORY QUESTION */}
              {currentRound === 3 && (
                <div className="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
                      Interlocutory Challenge from the Bench:
                    </span>
                    <span className="text-lg font-mono font-black text-rose-400 animate-pulse">
                      ⏱️ {interlocutoryTimer}s
                    </span>
                  </div>

                  <p className="text-xs md:text-sm font-bold text-[var(--text-primary)] leading-relaxed">
                    {activeCase.interlocutoryChallenge.questionText}
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {activeCase.interlocutoryChallenge.options.map((opt, oIdx) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleInterlocutoryAnswer(opt.id)}
                        className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-amber-500 text-left text-xs text-[var(--text-primary)] transition-all flex items-start gap-2.5 cursor-pointer"
                      >
                        <span className="w-5 h-5 rounded-md bg-[var(--bg-base)] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Courtroom Proceedings Log */}
          <div className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl flex flex-col justify-between space-y-4 max-h-[550px] overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                <span className="text-xs font-mono font-bold uppercase text-amber-500 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Courtroom Transcript
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Live Stenography</span>
              </div>

              <div className="space-y-3 overflow-y-auto max-h-[420px] pr-1">
                {trialLog.map((log, lIdx) => (
                  <div key={lIdx} className="text-xs space-y-1">
                    <span className="font-mono font-bold text-amber-400 block text-[10px] uppercase">
                      {log.speaker}:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-snug bg-[var(--bg-base)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
                      {log.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 3: FINAL BENCH VERDICT & DECREE
      ===================================================================== */}
      {screenState === 'verdict' && (
        <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-card)] border-2 border-amber-500/50 shadow-2xl text-center space-y-8 animate-fadeIn">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mx-auto text-4xl shadow-xl">
            {agreeCount >= 3 ? '👑' : '⚖️'}
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                agreeCount >= 3
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}
            >
              {agreeCount === 5 ? '5:0 Unanimous Accord' : `${agreeCount}:${dissentCount} Majority Verdict`}
            </span>

            <h3 className="text-3xl font-black text-[var(--text-primary)]">
              {agreeCount >= 3 ? 'DECREE DELIVERED IN YOUR FAVOUR!' : 'PETITION DISMISSED BY MAJORITY'}
            </h3>

            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              {agreeCount >= 3
                ? `You successfully persuaded ${agreeCount} out of 5 Constitution Bench judges. Senior Advocate Silk Robes conferred!`
                : `The Bench ruled ${dissentCount}:${agreeCount} against your submissions. The presumption of constitutionality prevailed.`}
            </p>
          </div>

          {/* Historical Case Outcome Note */}
          <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-left max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase text-amber-500 block">
              Actual Supreme Court Landmark Decision:
            </span>
            <div className="text-xs font-bold text-[var(--text-primary)]">
              {activeCase.benchmarkPrecedent}
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {activeCase.actualSupremeCourtVerdict}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setScreenState('select')}
              className="px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-black shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ARGUE ANOTHER LANDMARK CASE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
