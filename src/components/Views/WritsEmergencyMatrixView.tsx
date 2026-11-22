import React, { useState } from 'react';
import {
  ShieldAlert,
  Scale,
  AlertTriangle,
  Award,
  Layers,
  FileText,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Flame,
  Check,
  Zap,
  HelpCircle
} from 'lucide-react';
import {
  WRITS_MATRIX_DATA,
  EMERGENCY_TRIO_DATA,
  type WritMatrixItem,
  type EmergencyMatrixItem
} from '../../data/writsEmergencyMatrixData';
import { useTheme } from '../../context/ThemeContext';

export const WritsEmergencyMatrixView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Mode: 'writs' | 'emergency' | 'drill'
  const [activeMode, setActiveMode] = useState<'writs' | 'emergency' | 'drill'>('writs');
  const [selectedWritId, setSelectedWritId] = useState<string>('habeas-corpus');

  const selectedWrit =
    WRITS_MATRIX_DATA.find((w) => w.id === selectedWritId) || WRITS_MATRIX_DATA[0];

  // -----------------------------------------------------------
  // SPEED EXAM DRILL
  // -----------------------------------------------------------
  const drillItems = [
    {
      id: 'd-1',
      question: 'A police officer detains a citizen for 5 days without an FIR and without producing them before a Judicial Magistrate. Which constitutional writ should be filed immediately?',
      options: [
        'Mandamus',
        'Habeas Corpus',
        'Quo Warranto',
        'Prohibition'
      ],
      correct: 'Habeas Corpus',
      explanation: 'Habeas Corpus ("You shall have the body") lies for unlawful physical detention, commanding the detaining authority to produce the prisoner before court and justify lawful custody.',
      trap: 'Mandamus compels performance of public duty; Habeas Corpus is the exclusive writ for illegal bodily detention.'
    },
    {
      id: 'd-2',
      question: 'Can the writ of Mandamus be issued against the President of India or the Governor of a State to compel the performance of their official duties?',
      options: [
        'Yes, under Article 32 by the Supreme Court',
        'Yes, under Article 226 by the High Court',
        'No, there is an absolute constitutional bar under Article 361(1)',
        'Yes, with the prior sanction of the Chief Justice of India'
      ],
      correct: 'No, there is an absolute constitutional bar under Article 361(1)',
      explanation: 'Under Article 361(1), the President and Governors enjoy absolute immunity from being answerable to any court for the exercise of their powers and duties. Mandamus cannot lie against them personally.',
      trap: 'Article 361(1) completely bars mandamus against President or Governor in their official capacity.'
    },
    {
      id: 'd-3',
      question: 'Within what time frame must a Proclamation of National Emergency under Article 352 be approved by both Houses of Parliament?',
      options: [
        'Within 2 months by Simple Majority',
        'Within 1 month by Special Majority (Type 2)',
        'Within 6 months by Simple Majority',
        'Within 14 days by effective majority'
      ],
      correct: 'Within 1 month by Special Majority (Type 2)',
      explanation: 'Under the 44th Constitutional Amendment (1978), Article 352 MUST be approved within ONE MONTH by a Special Majority in each House. President’s Rule (Art 356) and Financial Emergency (Art 360) have 2-month approval periods.',
      trap: 'Art 352 is 1 month + Special Majority. Art 356 and 360 are 2 months + Simple Majority!'
    },
    {
      id: 'd-4',
      question: 'During a National Emergency declared on the ground of "Armed Rebellion", what is the status of the six freedoms guaranteed under Article 19?',
      options: [
        'They are automatically suspended under Article 358',
        'They can be suspended by a specific Presidential Order under Article 359',
        'They are NOT suspended; Article 19 suspends automatically ONLY during war or external aggression',
        'They are permanently abolished'
      ],
      correct: 'They are NOT suspended; Article 19 suspends automatically ONLY during war or external aggression',
      explanation: 'Under the 44th Amendment Act, Article 358 suspends Article 19 automatically ONLY when emergency is proclaimed on grounds of war or external aggression, NEVER for armed rebellion!',
      trap: 'Classic Prelims elimination trap. 44th CAA added this explicit protection.'
    },
    {
      id: 'd-5',
      question: 'Can the salaries of Judges of the Supreme Court and High Courts be reduced by the President during a Financial Emergency under Article 360?',
      options: [
        'No, judicial salaries are charged and cannot be varied to their disadvantage under any circumstance',
        'Yes, Article 360(4)(b) explicitly empowers the President to reduce salaries of judges during Financial Emergency',
        'Only with the unanimous consent of the Collegium',
        'Only after a constitutional amendment under Article 368'
      ],
      correct: 'Yes, Article 360(4)(b) explicitly empowers the President to reduce salaries of judges during Financial Emergency',
      explanation: 'Article 360(4)(b) is a rare constitutional exception allowing reduction of salaries and allowances of all persons serving the Union, including Judges of the Supreme Court and High Courts.',
      trap: 'Judicial salaries are normally protected from disadvantageous alterations, but Article 360 is the sole constitutional exception.'
    }
  ];

  const [drillIdx, setDrillIdx] = useState(0);
  const [selectedDrillOpt, setSelectedDrillOpt] = useState<string | null>(null);
  const [drillRevealed, setDrillRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const currentDrill = drillItems[drillIdx];

  const handleSelectDrillOpt = (opt: string) => {
    if (drillRevealed) return;
    setSelectedDrillOpt(opt);
    setDrillRevealed(true);
    if (opt === currentDrill.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextDrill = () => {
    setSelectedDrillOpt(null);
    setDrillRevealed(false);
    setDrillIdx((idx) => (idx + 1) % drillItems.length);
  };

  const handleOpenBareActArticle = (artNum: string) => {
    const clean = artNum.replace(/\D/g, '');
    try {
      localStorage.setItem('samvidhan_active_article', clean);
      window.dispatchEvent(
        new CustomEvent('samvidhan_navigate_article', { detail: clean })
      );
    } catch (e) {
      // ignore
    }
    setActiveTab('articles-master');
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-6 h-6 text-rose-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Writs & Emergency Fast-Action Matrix
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
              Exam War Room
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Definitive comparative matrix of the 5 Prerogative Writs (Arts 32 vs 226) and the Emergency Trio (Arts 352 vs 356 vs 360).
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)] shrink-0 self-stretch sm:self-auto justify-end">
          <button
            onClick={() => setActiveMode('writs')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'writs'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>5 Writs Matrix</span>
          </button>
          <button
            onClick={() => setActiveMode('emergency')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'emergency'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Emergency Trio (352/356/360)</span>
          </button>
          <button
            onClick={() => setActiveMode('drill')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'drill'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Speed Drill ({drillItems.length})</span>
          </button>
        </div>
      </div>

      {/* MODE 1: 5 PREROGATIVE WRITS MASTER MATRIX */}
      {activeMode === 'writs' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Article 32 vs Article 226 Comparison Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-[var(--bg-surface-elevated)] to-sky-500/10 border-2 border-[var(--border-strong)] flex flex-col md:flex-row items-stretch justify-between gap-4 shadow-sm">
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-rose-500 text-white">
                  Article 32 (Supreme Court)
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Guaranteed in Part III • &ldquo;Heart & Soul&rdquo;
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Remedy is <strong>ITSELF a Fundamental Right</strong>. The Supreme Court <em>cannot refuse</em> relief on grounds of alternative remedy. Limited exclusively to enforcement of <strong>Part III Fundamental Rights</strong> across India.
              </p>
            </div>

            <div className="w-px bg-[var(--border-subtle)] hidden md:block" />

            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sky-500 text-white">
                  Article 226 (High Courts)
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Part VI • Broader Subject-Matter
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Remedy is <strong>DISCRETIONARY</strong> (High Court can decline if alternative efficacious remedy exists). However, subject-matter scope is <strong>BROADER</strong>: issues for Fundamental Rights <em>&ldquo;and for any other purpose&rdquo;</em> (ordinary legal/statutory rights).
              </p>
            </div>
          </div>

          {/* Master Comparison Table of the 5 Writs */}
          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[var(--bg-base)] border-b border-[var(--border-subtle)] text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <th className="p-3.5 font-bold">Writ & Meaning</th>
                  <th className="p-3.5 font-bold">Locus Standi</th>
                  <th className="p-3.5 font-bold">Lies Against</th>
                  <th className="p-3.5 font-bold text-rose-400">Does NOT Lie Against</th>
                  <th className="p-3.5 font-bold">Landmark Case</th>
                  <th className="p-3.5 font-bold text-amber-400">Top Examiner Trap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {WRITS_MATRIX_DATA.map((w) => (
                  <tr
                    key={w.id}
                    onClick={() => setSelectedWritId(w.id)}
                    className={`cursor-pointer transition-colors ${
                      selectedWritId === w.id
                        ? 'bg-rose-500/10'
                        : 'hover:bg-[var(--bg-surface-elevated)]/50'
                    }`}
                  >
                    <td className="p-3.5 align-top min-w-[170px]">
                      <div className="font-bold text-sm text-[var(--text-primary)]">
                        {w.name}
                      </div>
                      <div className="text-[11px] text-[var(--accent)] italic">
                        {w.literalTranslation}
                      </div>
                      <span className="inline-block mt-1 text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                        {w.targetCategory}
                      </span>
                    </td>

                    <td className="p-3.5 align-top min-w-[180px] text-[11px] text-[var(--text-secondary)]">
                      <span
                        className={`font-bold block mb-1 ${
                          w.canThirdPartyApply ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {w.canThirdPartyApply ? '✓ Third Party Allowed' : '✗ Strict Personal Locus'}
                      </span>
                      <p className="line-clamp-3 leading-snug">{w.locusStandi}</p>
                    </td>

                    <td className="p-3.5 align-top min-w-[200px] text-[11px] text-[var(--text-secondary)]">
                      <ul className="list-disc list-inside space-y-1">
                        {w.liesAgainst.map((item, i) => (
                          <li key={i} className="line-clamp-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="p-3.5 align-top min-w-[210px] text-[11px] text-rose-300">
                      <ul className="list-disc list-inside space-y-1">
                        {w.doesNotLieAgainst.slice(0, 2).map((item, i) => (
                          <li key={i} className="line-clamp-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="p-3.5 align-top min-w-[170px] text-[11px]">
                      <strong className="text-[var(--text-primary)] block">
                        {w.landmarkPrecedents[0]?.caseName} ({w.landmarkPrecedents[0]?.year})
                      </strong>
                      <p className="text-[10px] text-[var(--text-muted)] line-clamp-2 mt-0.5">
                        {w.landmarkPrecedents[0]?.ratio}
                      </p>
                    </td>

                    <td className="p-3.5 align-top min-w-[230px]">
                      <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/25 text-[10px] text-rose-300 leading-snug">
                        {w.examinerTraps[0]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep-Dive Card on Selected Writ */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase">
                  Writ In Focus
                </span>
                <h3 className="text-xl font-serif font-bold text-[var(--text-primary)]">
                  {selectedWrit.name} ({selectedWrit.literalTranslation})
                </h3>
              </div>
              <button
                onClick={() => handleOpenBareActArticle('32')}
                className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline font-bold"
              >
                <span>Read Article 32 & 226 in Bare Act</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                  Grounds & Prerequisite Conditions:
                </span>
                <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-secondary)]">
                  {selectedWrit.groundConditions.map((gc, i) => (
                    <li key={i}>{gc}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
                  <Flame className="w-4 h-4" />
                  <span>Top Prelims Traps on {selectedWrit.name}:</span>
                </span>
                <ul className="list-disc list-inside space-y-1 text-xs text-rose-200">
                  {selectedWrit.examinerTraps.map((tr, i) => (
                    <li key={i}>{tr}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: EMERGENCY TRIO (ARTS 352, 356, 360) */}
      {activeMode === 'emergency' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          {/* Quick Summary Pill Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EMERGENCY_TRIO_DATA.map((em) => (
              <div
                key={em.article}
                className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-500 text-white">
                    {em.article}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Invoked: {em.timesInvoked}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">{em.type}</h4>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                  {em.grounds}
                </p>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[var(--text-muted)]">Approval:</span>
                  <span className="font-bold text-[var(--accent)]">{em.approvalWindow}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Full Side-by-Side Comparison Matrix */}
          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[var(--bg-base)] border-b border-[var(--border-subtle)] text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <th className="p-3.5 font-bold">Parameter</th>
                  <th className="p-3.5 font-bold text-rose-400">National Emergency (Art. 352)</th>
                  <th className="p-3.5 font-bold text-amber-400">President’s Rule (Art. 356)</th>
                  <th className="p-3.5 font-bold text-sky-400">Financial Emergency (Art. 360)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Constitutional Grounds</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">War, External Aggression, or Armed Rebellion (44th CAA)</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">Failure of constitutional machinery in State (Art 356/365)</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">Threat to financial stability or credit of India</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Cabinet Advice Requirement</td>
                  <td className="p-3.5 text-[11px] text-rose-300 font-bold">WRITTEN communication of Union Cabinet mandatory (44th CAA)</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">Normal advice of Council of Ministers</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">Normal advice of Council of Ministers</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Parliamentary Approval Window</td>
                  <td className="p-3.5 text-[11px] text-rose-400 font-bold">Within ONE MONTH (30 days)</td>
                  <td className="p-3.5 text-[11px] text-amber-400 font-bold">Within TWO MONTHS (60 days)</td>
                  <td className="p-3.5 text-[11px] text-sky-400 font-bold">Within TWO MONTHS (60 days)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Majority Required for Approval</td>
                  <td className="p-3.5 text-[11px] text-rose-400 font-bold">SPECIAL MAJORITY Type 2 (&gt;50% Total + 2/3rd P&V)</td>
                  <td className="p-3.5 text-[11px] text-amber-400 font-bold">SIMPLE MAJORITY (Members P&V)</td>
                  <td className="p-3.5 text-[11px] text-sky-400 font-bold">SIMPLE MAJORITY (Members P&V)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Maximum Constitutional Lifespan</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">INDEFINITE (renewable every 6 months by Special Majority)</td>
                  <td className="p-3.5 text-[11px] text-amber-400 font-bold">MAX 3 YEARS CEILING (Strict conditions after 1 year)</td>
                  <td className="p-3.5 text-[11px] text-sky-400 font-bold">INDEFINITE until revoked (No 6-month renewals needed!)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Effect on Fundamental Rights</td>
                  <td className="p-3.5 text-[11px] text-rose-300">
                    Art 358: Art 19 suspended automatically for war/external aggression only.<br />
                    Art 359: Presidential order, but <strong>Arts 20 & 21 can NEVER be suspended</strong>.
                  </td>
                  <td className="p-3.5 text-[11px] text-emerald-400 font-bold">ZERO EFFECT on Fundamental Rights</td>
                  <td className="p-3.5 text-[11px] text-emerald-400 font-bold">ZERO EFFECT on Fundamental Rights</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-[var(--text-primary)]">Effect on State Government</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">State government continues; Parliament gains concurrent power to make laws on List II</td>
                  <td className="p-3.5 text-[11px] text-amber-300">State Ministry dismissed; Assembly suspended (cannot dissolve until Parliament approves - Bommai)</td>
                  <td className="p-3.5 text-[11px] text-[var(--text-secondary)]">State government continues; Centre can give financial directives and reserve Money Bills</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-rose-400">Top Examiner Trap</td>
                  <td className="p-3.5 text-[11px] text-rose-300 bg-rose-500/10">1 month approval & Special Majority! Word &ldquo;Cabinet&rdquo; appears only in Art 352(3).</td>
                  <td className="p-3.5 text-[11px] text-amber-300 bg-amber-500/10">Assembly cannot be dissolved upon proclamation; simple majority within 2 months.</td>
                  <td className="p-3.5 text-[11px] text-sky-300 bg-sky-500/10">Never declared in India; judges' salaries CAN be reduced under Art 360(4)(b).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODE 3: SPEED EXAM DRILL */}
      {activeMode === 'drill' && (
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-6 animate-fadeIn">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-[var(--accent)]">
              Question {drillIdx + 1} of {drillItems.length}
            </span>
            <span className="text-emerald-400 font-bold">Score: {score} / {drillItems.length}</span>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] flex flex-col gap-5 shadow-md">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[var(--text-primary)] leading-snug">
              {currentDrill.question}
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {currentDrill.options.map((opt, i) => {
                const isSelected = selectedDrillOpt === opt;
                const isCorrect = opt === currentDrill.correct;

                let optStyle =
                  'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-rose-400 hover:text-[var(--text-primary)]';

                if (drillRevealed) {
                  if (isCorrect) {
                    optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                  } else {
                    optStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50 text-[var(--text-muted)]';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-rose-500 text-white font-bold border-rose-500';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectDrillOpt(opt)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-start gap-3 ${optStyle}`}
                  >
                    <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold border border-current shrink-0 mt-0.5">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="leading-relaxed font-sans">{opt}</span>
                  </button>
                );
              })}
            </div>

            {drillRevealed && (
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2.5 animate-fadeIn text-xs">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5 font-mono">
                  <span
                    className={`font-bold ${
                      selectedDrillOpt === currentDrill.correct
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {selectedDrillOpt === currentDrill.correct
                      ? '✓ CORRECT! (+2 Marks)'
                      : '✗ INCORRECT! (-0.66 Marks)'}
                  </span>
                  <span className="text-[var(--text-muted)]">Official Answer Key</span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {currentDrill.explanation}
                </p>

                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-[11px] flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-rose-400">Examiner Trap: </strong>
                    {currentDrill.trap}
                  </span>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={nextDrill}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500 text-white font-mono font-bold text-xs hover:bg-rose-600 transition-all shadow-sm"
                  >
                    <span>Next Drill Question &rarr;</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
