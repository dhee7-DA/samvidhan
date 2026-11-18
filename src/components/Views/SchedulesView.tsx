import React, { useState } from 'react';
import { Calendar, CheckCircle2, Gamepad2, BrainCircuit, Star, Sparkles, Scale, Lightbulb } from 'lucide-react';
import { SCHEDULES_DATA } from '../../data/schedulesData';
import { SchedulesGenealogySVG } from '../VectorDiagrams/SchedulesGenealogySVG';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';
import { getCardIdForSchedule } from '../../services/flashcardService';

const SCHEDULE_ELI5_MAP: Record<number, { plain: string; example: string }> = {
  1: {
    plain: 'India’s official address book of all 28 States and 8 Union Territories—whenever Parliament splits a state or renames a border, this list gets edited.',
    example: 'When Telangana was carved out in 2014 or J&K was reorganized in 2019, Parliament updated the First Schedule.'
  },
  2: {
    plain: 'The constitutional pay-scale sheet for top guardians of democracy (President, Governors, Speakers, SC/HC Judges, CAG) so politicians can’t cut their salaries as revenge.',
    example: 'Parliament cannot cut a sitting Supreme Court Judge’s salary after they rule against the government.'
  },
  3: {
    plain: 'The exact oath scripts sworn by Ministers, MPs, MLAs, Judges, and CAG before taking office (note: President, VP, and Governors have separate oaths in Arts 60, 69, 159!).',
    example: 'When a new Cabinet Minister takes oath at Rashtrapati Bhavan, they read the exact Secrecy & Office script from the Third Schedule.'
  },
  4: {
    plain: 'The seating chart showing how many Rajya Sabha MPs each State and UT gets based on population—big states get more seats, unlike the US Senate.',
    example: 'Uttar Pradesh sends 31 Rajya Sabha MPs while Goa or Sikkim sends 1.'
  },
  5: {
    plain: 'Protective shield for tribal-majority Scheduled Areas across 10 mainland states—letting the Governor modify laws and stop tribal land from being grabbed by outsiders.',
    example: 'In Samatha (1997), the Supreme Court blocked private mining leases on Fifth Schedule tribal land in Andhra Pradesh.'
  },
  6: {
    plain: 'Super-autonomy for tribal hill regions of 4 North-East states—Assam, Meghalaya, Tripura, Mizoram (AMTM)—giving Autonomous District Councils their own local laws and tribal courts.',
    example: 'District Councils in Meghalaya or Mizoram directly manage local forests, village councils, and customary law.'
  },
  7: {
    plain: 'The federal job-description table splitting lawmaking powers into 3 buckets: Union List (Defence/Railways), State List (Police/Agriculture), and Concurrent List (Education/Criminal Law).',
    example: 'Only the Centre can print currency (List I), States run state police (List II), and both can pass education laws (List III).'
  },
  8: {
    plain: 'India’s roster of 22 officially recognized regional languages (started with 14 in 1950; expanded by 21st, 71st, and 92nd Amendments—note English is NOT on it!).',
    example: 'Candidates can write UPSC Mains exams in any of the 22 Eighth Schedule languages (including Dogri, Sindhi, Tamil, Marathi, etc.).'
  },
  9: {
    plain: 'Originally created in 1951 as a "litigation shield" to protect land-reform laws from Fundamental Rights lawsuits—but after I.R. Coelho (2007), post-1973 laws here are still reviewable under Basic Structure.',
    example: 'Tamil Nadu’s 69% quota law and early Zamindari abolition laws sit in the Ninth Schedule.'
  },
  10: {
    plain: 'The Anti-Defection Law (1985): stops elected MPs and MLAs from switching political parties after winning elections or defying their party whip.',
    example: 'If an MLA votes against their party whip in a floor test without a 2/3rd merger, the Speaker can disqualify them under the Tenth Schedule.'
  },
  11: {
    plain: 'The 29 village-level powers (agriculture, rural roads, drinking water, primary schools, sanitation) handed to Gram, Block, and Zila Panchayats by the 73rd Amendment.',
    example: 'A Gram Panchayat building village drainage or maintaining local water tanks exercises Eleventh Schedule subjects.'
  },
  12: {
    plain: 'The 18 city-level powers (urban planning, streetlights, public health, waste collection, fire services, parks) handed to Municipalities by the 74th Amendment.',
    example: 'Your city Municipal Corporation handling garbage collection, street lighting, and building approvals runs on the Twelfth Schedule.'
  }
};

export const SchedulesView: React.FC = () => {
  const { launchGameDeck, launchFlashcardDeck, pinnedFlashcardIds, togglePinFlashcard } = useTheme();
  const [filterQuery, setFilterQuery] = useState('');
  const [scheduleMode, setScheduleMode] = useState<'eli5' | 'juristic'>('eli5');

  const filtered = SCHEDULES_DATA.filter((s) => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.subject.toLowerCase().includes(q) ||
      s.mnemonicKeyword.toLowerCase().includes(q) ||
      s.articlesCovered.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-[var(--accent)]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              The 12 Schedules of the Constitution
            </h1>
            <span className="text-xs px-2 py-0.5 rounded font-mono bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
              Mnemonic: TEARS OF OLD PM
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Explore functional distribution, special tribal regimes, official languages, and anti-defection provisions.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          <button
            onClick={() => launchFlashcardDeck('schedules', 'all')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm"
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Drill 12 Schedules SRS</span>
          </button>
          <button
            onClick={() => launchGameDeck('schedules')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Play 12 Schedules Matcher</span>
          </button>
        </div>
      </div>

      {/* Embedded SVG Architecture Diagram */}
      <SchedulesGenealogySVG />

      {/* Grid of All 12 Schedules */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              Complete Schedule Catalog
            </h3>
            {/* ELI5 vs Juristic Toggle */}
            <div className="flex items-center p-0.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono">
              <button
                onClick={() => setScheduleMode('eli5')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                  scheduleMode === 'eli5'
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-amber-500 hover:text-amber-400 font-bold'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>ELI5</span>
              </button>
              <button
                onClick={() => setScheduleMode('juristic')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                  scheduleMode === 'juristic'
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Scale className="w-3 h-3" />
                <span>Juristic</span>
              </button>
            </div>
          </div>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter schedules..."
            className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sch) => (
            <div
              key={sch.number}
              className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] font-mono font-bold flex items-center justify-center text-sm">
                      {sch.mnemonicLetter}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                        {sch.roman}
                      </span>
                      <div className="text-[10px] font-mono text-[var(--text-muted)]">
                        {sch.mnemonicKeyword}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    {sch.articlesCovered.split(',')[0]}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                  <AnnotatedLegalText text={sch.title} />
                </h4>

                {/* ELI5 Plain English & Real-World Analogy Block */}
                {scheduleMode === 'eli5' && SCHEDULE_ELI5_MAP[sch.number] ? (
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-[var(--bg-base)] to-[var(--bg-base)] border border-amber-500/30 space-y-2 mb-4 animate-fadeIn">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Plain-English Meaning (ELI5):
                    </span>
                    <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                      {SCHEDULE_ELI5_MAP[sch.number].plain}
                    </p>
                    <div className="pt-1.5 border-t border-amber-500/20 text-[11px] text-[var(--text-secondary)] italic flex items-start gap-1">
                      <Lightbulb className="w-3 h-3 text-[var(--gold)] shrink-0 mt-0.5" />
                      <span>{SCHEDULE_ELI5_MAP[sch.number].example}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    <AnnotatedLegalText text={sch.subject} />
                  </p>
                )}

                <div className="flex flex-col gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Core Provisions
                  </span>
                  {sch.details.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[var(--emerald)] shrink-0" />
                      <span className="leading-snug">
                        <AnnotatedLegalText text={d} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                <span className="text-[10px] italic text-[var(--text-muted)] line-clamp-2">
                  <AnnotatedLegalText text={sch.historicalEvolution} />
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => togglePinFlashcard(getCardIdForSchedule(sch.number))}
                    title={pinnedFlashcardIds.includes(getCardIdForSchedule(sch.number)) ? 'Pinned in SRS' : 'Pin Schedule to SRS'}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      pinnedFlashcardIds.includes(getCardIdForSchedule(sch.number))
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                        : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-amber-400'
                    }`}
                  >
                    <Star className={`w-3.5 h-3.5 ${pinnedFlashcardIds.includes(getCardIdForSchedule(sch.number)) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => launchFlashcardDeck('schedules', 'all', getCardIdForSchedule(sch.number))}
                    title={`Drill ${sch.roman} in SRS Flashcards`}
                    className="p-1.5 rounded-lg border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition-colors"
                  >
                    <BrainCircuit className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
