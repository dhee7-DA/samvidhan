import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  BookOpen,
  Mic,
  MessageSquare,
  Scale,
  Send,
  CheckCircle2,
  HelpCircle,
  Clock,
  Radio
} from 'lucide-react';
import { speechService } from '../../services/speechService';
import { FIFTEEN_DAY_BOOTCAMP_DATA } from '../../data/bootcamp';

interface VivaChallenge {
  id: string;
  bench: string;
  question: string;
  benchmarkPoints: string[];
  statutoryAnchor: string;
  leadPrecedents: string[];
}

const VIVA_CHALLENGES: VivaChallenge[] = [
  {
    id: 'viva-1',
    bench: 'Constitution Bench on Fundamental Rights',
    question: 'Counsel, explain the constitutional distinction between testimonial compulsion under Article 20(3) and non-testimonial physical evidence under Kathi Kalu Oghad. Can the State compel an accused to disclose their smartphone passcode?',
    benchmarkPoints: [
      'Identification of Article 20(3) 3-fold threshold (accused, compulsion, witness against self).',
      'Distinction between mental cognitive contents and physical specimens in Kathi Kalu Oghad.',
      'Application of Selvi v. State of Karnataka (2010) on mental privacy and cognitive autonomy.',
      'Distinction between biometric sensor touching and alphanumeric mental passcodes.'
    ],
    statutoryAnchor: 'Article 20(3) & Section 63 BSA 2023',
    leadPrecedents: ['Kathi Kalu Oghad (1961)', 'Selvi (2010)', 'Puttaswamy (2017)']
  },
  {
    id: 'viva-2',
    bench: 'Constitution Bench on Basic Structure',
    question: 'How did Minerva Mills (1980) consolidate the limits of constituent amending power under Article 368, and why is the balance between Part III and Part IV considered an unamendable basic feature?',
    benchmarkPoints: [
      'Donee of a limited amending power cannot enlarge that power into an absolute one.',
      'Invalidation of Clauses (4) and (5) of Article 368 inserted by the 42nd Amendment.',
      'Rejection of unconditional subordination of Fundamental Rights to DPSPs under Art 31C.',
      'Harmonious construction: Part III and Part IV as two wheels of the constitutional chariot.'
    ],
    statutoryAnchor: 'Article 368(1), (4), (5) & Article 31C',
    leadPrecedents: ['Kesavananda Bharati (1973)', 'Minerva Mills (1980)']
  },
  {
    id: 'viva-3',
    bench: 'Constitution Bench on Legislative Power & Federalism',
    question: 'Explain the legal test of "Manifest Arbitrariness" formulated in Shayara Bano (2017). Does it enable constitutional courts to strike down plenary Parliamentary legislation, or does it apply solely to subordinate administrative action?',
    benchmarkPoints: [
      'Expansion from Royappa\'s non-arbitrariness into plenary statutory review.',
      'Test: Something done whimsically, capriciously, disproportionately, or without an adequate determining principle.',
      'Overruling of earlier restrictive dicta in McDowel (1996) regarding legislative arbitrariness.',
      'Subsequent application in Navtej Johar (2018) and Joseph Shine (2018).'
    ],
    statutoryAnchor: 'Article 14 & Article 245',
    leadPrecedents: ['E.P. Royappa (1974)', 'Shayara Bano (2017)', 'Navtej Johar (2018)']
  }
];

export const AudioBriefingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'briefings' | 'viva'>('briefings');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Viva Simulator State
  const [activeVivaIdx, setActiveVivaIdx] = useState<number>(0);
  const [userArgument, setUserArgument] = useState<string>('');
  const [vivaEvaluated, setVivaEvaluated] = useState<boolean>(false);

  const currentDay = FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDayNumber) || FIFTEEN_DAY_BOOTCAMP_DATA[0];
  const activeViva = VIVA_CHALLENGES[activeVivaIdx];

  // Prepare briefing text
  const briefingText = `Samvidhan Audio Revision Dossier. Day ${currentDay.dayNumber}: ${currentDay.title}.
This day focuses on target articles: ${currentDay.targetArticles.join(', ')}.
Core Jurisprudential Concepts: ${currentDay.coreConcepts.map((c) => `${c.heading}. ${c.synopsis}`).join(' ')}
Key Precedents: ${currentDay.landmarkEvolutionPairs.map((p) => `${p.classicCase.name} decided in ${p.classicCase.year}, and ${p.modernCase.name} decided in ${p.modernCase.year}. ${p.examApplicationNote}`).join(' ')}`;

  // Handle Play Briefing
  const handleTogglePlay = () => {
    if (isPlaying) {
      if (isPaused) {
        speechService.resume();
        setIsPaused(false);
      } else {
        speechService.pause();
        setIsPaused(true);
      }
    } else {
      speechService.speak(briefingText, {
        rate: speechRate,
        onEnd: () => {
          setIsPlaying(false);
          setIsPaused(false);
        }
      });
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStopSpeech = () => {
    speechService.stop();
    setIsPlaying(false);
    setIsPaused(false);
  };

  // Speak Viva Question
  const handleSpeakVivaQuestion = () => {
    speechService.speak(activeViva.question, { rate: 0.95 });
  };

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-card border border-emerald-500/30 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>Audio Revision & Oral Viva Simulator</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Constitutional Audio Lab
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
              Listen to spoken daily 5-minute revision briefings or test your oral advocacy with the interactive Judicial Viva Bench. Works 100% offline.
            </p>
          </div>

          <div className="inline-flex rounded-xl border border-border/60 bg-muted/40 p-1 text-xs">
            <button
              onClick={() => {
                handleStopSpeech();
                setActiveTab('briefings');
              }}
              className={`px-4 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'briefings' ? 'bg-emerald-600 text-white shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Audio Briefings
            </button>
            <button
              onClick={() => {
                handleStopSpeech();
                setActiveTab('viva');
              }}
              className={`px-4 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'viva' ? 'bg-emerald-600 text-white shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Oral Viva Bench
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Spoken Audio Briefings */}
      {activeTab === 'briefings' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Audio Player Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-card border border-emerald-500/30 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                  OFFLINE SPOKEN SYNOPSIS
                </span>
                <h2 className="text-xl md:text-2xl font-black text-foreground">
                  Day {currentDay.dayNumber}: {currentDay.title}
                </h2>
              </div>

              {/* Day Selector Dropdown */}
              <select
                value={selectedDayNumber}
                onChange={(e) => {
                  handleStopSpeech();
                  setSelectedDayNumber(parseInt(e.target.value, 10));
                }}
                className="text-xs font-semibold px-3 py-2 rounded-xl border border-border bg-muted/30 text-foreground focus:outline-none"
              >
                {FIFTEEN_DAY_BOOTCAMP_DATA.map((d) => (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    Day {d.dayNumber}: {d.title.split('—')[0]}
                  </option>
                ))}
              </select>
            </div>

            {/* Player Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-muted/20 border border-border/60">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                  {isPlaying && !isPaused ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                {isPlaying && (
                  <button
                    onClick={handleStopSpeech}
                    className="p-3 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    title="Stop Audio"
                  >
                    <VolumeX className="w-4 h-4" />
                  </button>
                )}

                <div className="text-xs">
                  <span className="font-bold text-foreground block">
                    {isPlaying ? (isPaused ? 'Paused' : 'Playing Spoken Briefing...') : 'Ready to Listen'}
                  </span>
                  <span className="text-muted-foreground text-[11px] font-mono">
                    Native Web Speech Audio Engine
                  </span>
                </div>
              </div>

              {/* Playback Speed Controls */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-muted-foreground mr-1">Speed:</span>
                {[0.8, 1.0, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => {
                      setSpeechRate(rate);
                      if (isPlaying) {
                        handleStopSpeech();
                      }
                    }}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition-colors ${
                      speechRate === rate ? 'bg-emerald-600 text-white' : 'bg-muted/40 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            {/* Spoken Text Transcript Box */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                Spoken Transcript & Key Articles:
              </span>
              <div className="p-5 rounded-2xl bg-muted/30 border border-border/60 text-xs md:text-sm text-foreground/90 font-serif leading-relaxed whitespace-pre-line max-h-80 overflow-y-auto">
                {briefingText}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Courtroom Oral Viva Simulator */}
      {activeTab === 'viva' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in">
          {/* Left Column: Bench Query */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">
                  Viva Query {activeVivaIdx + 1} of {VIVA_CHALLENGES.length}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {activeViva.statutoryAnchor}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-bold block">
                  {activeViva.bench}
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                  "{activeViva.question}"
                </h3>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleSpeakVivaQuestion}
                  className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Listen to Chief Justice Query</span>
                </button>
              </div>

              {/* Precedent references */}
              <div className="pt-2 border-t border-border/60 space-y-1.5">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                  Applicable Precedents:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeViva.leadPrecedents.map((p, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-foreground font-mono">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Argument Formulation Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Counsel's Oral Argument Draft
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {userArgument.trim() ? userArgument.trim().split(/\s+/).length : 0} words
                </span>
              </div>

              <textarea
                value={userArgument}
                onChange={(e) => setUserArgument(e.target.value)}
                placeholder="Formulate your structured constitutional argument for the Bench here...&#10;&#10;Key structure:&#10;1. May it please your Lordships...&#10;2. Statutory threshold under the relevant Article...&#10;3. Binding ratio of the Constitution Bench...&#10;4. Operative submission..."
                className="w-full h-52 p-4 rounded-xl border border-border bg-muted/20 text-foreground text-sm font-serif leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y"
              />

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  onClick={() => {
                    setUserArgument('');
                    setVivaEvaluated(false);
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear Canvas
                </button>

                <button
                  onClick={() => setVivaEvaluated(true)}
                  disabled={!userArgument.trim()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 disabled:opacity-40"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit to Bench</span>
                </button>
              </div>

              {/* Bench Evaluation Rubric */}
              {vivaEvaluated && (
                <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                      Judicial Bench Benchmark Scoring Checklist
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-foreground/90">
                    {activeViva.benchmarkPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
