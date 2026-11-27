import React, { useState, useMemo } from 'react';
import { SlidingSegmentedControl } from '../Common/EditorialMotionCards';
import {
  ShieldAlert,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Award,
  Layers,
  FileText,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  Flame,
  Check,
  Scale
} from 'lucide-react';
import {
  CONSTITUTIONAL_BODIES_DATA,
  type ConstitutionalBodyItem,
  type BodyClassification
} from '../../data/constitutionalBodiesData';
import { useTheme } from '../../context/ThemeContext';

interface DrillQuestion {
  id: string;
  bodyName: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  examinerTrap: string;
}

export const ConstitutionalBodiesView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Active view: 'matrix' | 'dossiers' | 'drill'
  const [viewMode, setViewMode] = useState<'matrix' | 'dossiers' | 'drill'>('matrix');

  // Filters
  const [selectedType, setSelectedType] = useState<'All' | BodyClassification>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBodyId, setSelectedBodyId] = useState<string>('eci');

  // Filtered Bodies
  const filteredBodies = useMemo(() => {
    let list = CONSTITUTIONAL_BODIES_DATA;

    if (selectedType !== 'All') {
      list = list.filter((b) => b.classification === selectedType);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          (b.constitutionalArticle && b.constitutionalArticle.toLowerCase().includes(q)) ||
          (b.enactingStatute && b.enactingStatute.toLowerCase().includes(q)) ||
          b.appointingAuthority.toLowerCase().includes(q) ||
          b.removalProcedure.toLowerCase().includes(q) ||
          b.postRetirementBar.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedType, searchQuery]);

  const activeBody = useMemo(() => {
    return (
      filteredBodies.find((b) => b.id === selectedBodyId) ||
      filteredBodies[0] ||
      CONSTITUTIONAL_BODIES_DATA[0]
    );
  }, [selectedBodyId, filteredBodies]);

  // -----------------------------------------------------------------
  // QUICK RECALL EXAM DRILL ENGINE
  // -----------------------------------------------------------------
  const drillQuestions: DrillQuestion[] = useMemo(() => {
    return [
      {
        id: 'dq-1',
        bodyName: 'State Public Service Commission (SPSC)',
        question: 'Who is constitutionally empowered to REMOVE the Chairman or a Member of an SPSC?',
        options: [
          'The Governor of the concerned State on the advice of the Chief Minister',
          'The President of India only, after a binding inquiry by the Supreme Court',
          'The Chief Justice of the High Court of that State',
          'The State Legislative Assembly by passing an impeachment resolution'
        ],
        correctAnswer: 'The President of India only, after a binding inquiry by the Supreme Court',
        explanation: 'CLASSIC PRELIMS TRAP: Although the Governor APPOINTS the members of an SPSC (Art 316), the Governor CANNOT remove them! Only the PRESIDENT can remove them under Article 317 after an inquiry by the Supreme Court.',
        examinerTrap: 'Never mark the Governor for removal of SPSC members. Governor can only suspend them pending the inquiry.'
      },
      {
        id: 'dq-2',
        bodyName: 'Comptroller and Auditor General of India (CAG)',
        question: 'Which of the following describes the post-retirement eligibility of the CAG under Article 148(4)?',
        options: [
          'Eligible for appointment as Governor of a State only',
          'Eligible for appointment as Chairman of the Finance Commission',
          'Strictly ineligible for any further office under either the Government of India or the Government of any State',
          'Eligible for any post with the prior concurrence of the Chief Justice of India'
        ],
        correctAnswer: 'Strictly ineligible for any further office under either the Government of India or the Government of any State',
        explanation: 'Article 148(4) creates an absolute bar to preserve audit impartiality: "The Comptroller and Auditor-General shall not be eligible for further office either under the Government of India or under the Government of any State after he has ceased to hold his office."',
        examinerTrap: 'Do not confuse CAG with UPSC Chairman (who can become other bodies chairman) or Election Commissioners (who have no constitutional bar).'
      },
      {
        id: 'dq-3',
        bodyName: 'Central Vigilance Commission (CVC)',
        question: 'What is the statutory tenure of the Central Vigilance Commissioner under the CVC Act, 2003?',
        options: [
          '5 years or up to 65 years of age',
          '6 years or up to 65 years of age',
          '4 years or up to 65 years of age, whichever is earlier',
          '3 years or up to 70 years of age'
        ],
        correctAnswer: '4 years or up to 65 years of age, whichever is earlier',
        explanation: 'CVC has a UNIQUE FOUR-YEAR TENURE (4 years or 65 years of age). Most other bodies are 5, 6, or 3 years.',
        examinerTrap: 'Candidates instinctively guess 5 or 6 years. CVC is strictly 4 years!'
      },
      {
        id: 'dq-4',
        bodyName: 'Election Commission of India (ECI)',
        question: 'How are Election Commissioners (other than the Chief Election Commissioner) removed from office?',
        options: [
          'In like manner and on like grounds as a Judge of the Supreme Court',
          'By the President on the recommendation of the Chief Election Commissioner',
          'By a resolution passed by a 2/3rd majority in the Rajya Sabha',
          'By the Prime Minister on the recommendation of the Law Minister'
        ],
        correctAnswer: 'By the President on the recommendation of the Chief Election Commissioner',
        explanation: 'Under Article 324(5) Proviso, only the CEC has judge-like removal protection. Other Election Commissioners can be removed by the President simply on the recommendation of the CEC without parliamentary address.',
        examinerTrap: 'Supreme Court judge-like impeachment applies ONLY to the CEC, not to other ECs.'
      },
      {
        id: 'dq-5',
        bodyName: 'National Human Rights Commission (NHRC)',
        question: 'Following the 2019 Amendment to the Protection of Human Rights Act, what is the tenure of the Chairperson of NHRC?',
        options: [
          '5 years or up to 70 years of age',
          '3 years or up to 70 years of age, and is eligible for reappointment',
          '6 years or up to 65 years of age',
          '4 years or up to 65 years of age'
        ],
        correctAnswer: '3 years or up to 70 years of age, and is eligible for reappointment',
        explanation: 'The Protection of Human Rights (Amendment) Act 2019 reduced the tenure from 5 years to 3 years, retaining the upper age limit of 70 years, and allowed reappointment.',
        examinerTrap: 'Do not mark 5 years; it was amended to 3 years in 2019.'
      },
      {
        id: 'dq-6',
        bodyName: 'Attorney General for India',
        question: 'Which of the following privileges is granted to the Attorney General under Article 88?',
        options: [
          'Right to vote in both Houses of Parliament on money bills',
          'Right to speak and participate in proceedings of either House, but without right to vote',
          'Automatic seat in the Union Cabinet as Minister of Law',
          'Power to veto decisions of the Supreme Court'
        ],
        correctAnswer: 'Right to speak and participate in proceedings of either House, but without right to vote',
        explanation: 'Under Article 88, the Attorney General has the right to speak and take part in proceedings of either House, joint sittings, and parliamentary committees, but SHALL NOT BY VIRTUE OF THIS ARTICLE BE ENTITLED TO VOTE.',
        examinerTrap: 'Attorney General can speak, participate, and sit in committee, but CANNOT VOTE under any circumstances.'
      }
    ];
  }, []);

  const [drillIdx, setDrillIdx] = useState<number>(0);
  const [selectedDrillOpt, setSelectedDrillOpt] = useState<string | null>(null);
  const [drillRevealed, setDrillRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [attempted, setAttempted] = useState<number>(0);

  const currentDrill = drillQuestions[drillIdx];

  const handleSelectDrillOption = (opt: string) => {
    if (drillRevealed) return;
    setSelectedDrillOpt(opt);
    setDrillRevealed(true);
    setAttempted((prev) => prev + 1);
    if (opt === currentDrill.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextDrillQuestion = () => {
    setSelectedDrillOpt(null);
    setDrillRevealed(false);
    setDrillIdx((prev) => (prev + 1) % drillQuestions.length);
  };

  const handleOpenArticleInBareAct = (artNumber: string) => {
    const clean = artNumber.replace(/\D/g, '');
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
            <Scale className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Constitutional vs Statutory Bodies Matrix
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
              High-Yield Exam Lab
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Comparative analysis of Appointments, Removal Procedures (*Impeachment vs Pleasure*), Tenures, and Post-Retirement Bars.
          </p>
        </div>

        {/* View Switcher */}
        <SlidingSegmentedControl
          layoutGroupId="bodies-view-mode"
          value={viewMode}
          onChange={setViewMode}
          options={[
            { id: 'matrix', label: 'Comparison Matrix' },
            { id: 'dossiers', label: 'Body Dossiers' },
            { id: 'drill', label: 'Recall Drill', count: drillQuestions.length },
          ]}
        />
      </div>

      {/* FILTER CONTROLS (Active in Matrix & Dossiers modes) */}
      {viewMode !== 'drill' && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Filter:</span>
            {(['All', 'Constitutional', 'Statutory', 'Executive / Extra-Constitutional'] as const).map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all border ${
                    selectedType === type
                      ? 'bg-purple-600 text-white border-purple-500 shadow-xs'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {type === 'Executive / Extra-Constitutional' ? 'Executive (NITI)' : type}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-2 bg-[var(--bg-base)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] focus-within:border-purple-500">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search body, article, or removal rule..."
              className="bg-transparent border-none text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none w-full sm:w-60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      )}

      {/* VIEW 1: MASTER COMPARISON MATRIX TABLE */}
      {viewMode === 'matrix' && (
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[var(--bg-base)] border-b border-[var(--border-subtle)] text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  <th className="p-3.5 font-bold">Body & Origin</th>
                  <th className="p-3.5 font-bold">Appointing Authority</th>
                  <th className="p-3.5 font-bold">Tenure & Age</th>
                  <th className="p-3.5 font-bold">Removal Procedure & Grounds</th>
                  <th className="p-3.5 font-bold">Post-Retirement Bar</th>
                  <th className="p-3.5 font-bold text-rose-400">Examiner Trap Alert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {filteredBodies.map((body) => (
                  <tr
                    key={body.id}
                    className="hover:bg-[var(--bg-surface-elevated)]/50 transition-colors"
                  >
                    {/* Body & Origin */}
                    <td className="p-3.5 align-top min-w-[200px]">
                      <div className="font-bold text-[var(--text-primary)] text-xs mb-1">
                        {body.name}
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase border ${
                            body.classification === 'Constitutional'
                              ? 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                              : body.classification === 'Statutory'
                              ? 'bg-sky-500/15 text-sky-400 border-sky-500/30'
                              : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          {body.classification}
                        </span>
                        {body.constitutionalArticle ? (
                          <button
                            onClick={() =>
                              handleOpenArticleInBareAct(
                                body.constitutionalArticle!.split(' ')[1]
                              )
                            }
                            className="text-[10px] text-[var(--accent)] hover:underline flex items-center gap-0.5 font-bold"
                          >
                            <span>{body.constitutionalArticle}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        ) : (
                          <span className="text-[10px] text-[var(--text-muted)] truncate max-w-[130px]">
                            {body.enactingStatute}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Appointing Authority */}
                    <td className="p-3.5 align-top min-w-[180px] text-[11px] text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)] block">
                        {body.appointingAuthority}
                      </strong>
                      {body.selectionCommittee && (
                        <p className="text-[10px] text-[var(--text-muted)] mt-1 line-clamp-3">
                          {body.selectionCommittee}
                        </p>
                      )}
                    </td>

                    {/* Tenure & Age */}
                    <td className="p-3.5 align-top min-w-[140px] text-[11px] font-bold text-[var(--accent)]">
                      {body.tenure}
                    </td>

                    {/* Removal Procedure & Grounds */}
                    <td className="p-3.5 align-top min-w-[220px] text-[11px] text-[var(--text-secondary)]">
                      <p className="leading-snug">{body.removalProcedure}</p>
                      <span className="text-[10px] text-rose-400 font-bold block mt-1">
                        Ground: {body.removalGrounds}
                      </span>
                    </td>

                    {/* Post-Retirement Bar */}
                    <td className="p-3.5 align-top min-w-[180px] text-[11px]">
                      <p
                        className={`leading-snug ${
                          body.postRetirementBar.includes('ABSOLUTE') ||
                          body.postRetirementBar.includes('STRICT') ||
                          body.postRetirementBar.includes('INELIGIBLE')
                            ? 'text-rose-400 font-bold'
                            : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {body.postRetirementBar}
                      </p>
                    </td>

                    {/* Examiner Trap Alert */}
                    <td className="p-3.5 align-top min-w-[240px]">
                      <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-[10px] text-rose-300 flex flex-col gap-1 leading-snug">
                        {body.examinerTraps.slice(0, 2).map((trap, i) => (
                          <div key={i} className="flex items-start gap-1">
                            <span className="text-rose-400 font-bold shrink-0">•</span>
                            <span>{trap}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 2: BODY DOSSIERS (Master Card Grid & Deep Detail) */}
      {viewMode === 'dossiers' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
          {/* Left: Body Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-2 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)] max-h-[750px] overflow-y-auto">
            {filteredBodies.map((b) => {
              const isSelected = b.id === activeBody.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBodyId(b.id)}
                  className={`p-3 rounded-lg text-left transition-all flex flex-col gap-1 border ${
                    isSelected
                      ? 'bg-purple-600/15 border-purple-500 text-[var(--text-primary)] shadow-sm'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                      {b.name.split(' (')[0]}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border ${
                        b.classification === 'Constitutional'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                          : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                      }`}
                    >
                      {b.classification === 'Constitutional' ? 'CONST' : 'STAT'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                    <span>{b.constitutionalArticle || b.enactingStatute?.split(',')[0]}</span>
                    <span>{b.tenure.split(',')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Comprehensive Dossier Card */}
          <div className="lg:col-span-8 flex flex-col gap-5 bg-[var(--bg-surface)] p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span
                    className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase border ${
                      activeBody.classification === 'Constitutional'
                        ? 'bg-purple-500 text-white border-purple-600'
                        : 'bg-sky-500 text-white border-sky-600'
                    }`}
                  >
                    {activeBody.classification} Body
                  </span>
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">
                    {activeBody.constitutionalArticle || activeBody.enactingStatute}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)]">
                  {activeBody.name}
                </h2>
                {activeBody.hindiName && (
                  <p className="text-xs text-[var(--text-muted)] font-serif mt-0.5">
                    {activeBody.hindiName}
                  </p>
                )}
              </div>

              {activeBody.constitutionalArticle && (
                <button
                  onClick={() =>
                    handleOpenArticleInBareAct(
                      activeBody.constitutionalArticle!.split(' ')[1]
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold hover:opacity-90 transition-all shrink-0 shadow-sm"
                >
                  <span>Open Bare Act & Exam Intel</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Tenure & Age</span>
                <span className="text-xs font-mono font-bold text-[var(--accent)]">
                  {activeBody.tenure}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Appointed By</span>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                  {activeBody.appointingAuthority}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Established In</span>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                  {activeBody.establishedYear}
                </span>
              </div>
            </div>

            {/* Selection Committee */}
            {activeBody.selectionCommittee && (
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                  Appointment Selection Committee / Collegium:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {activeBody.selectionCommittee}
                </p>
              </div>
            )}

            {/* Removal & Post-Retirement Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/25 flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Removal Procedure & Grounds:</span>
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {activeBody.removalProcedure}
                </p>
                <div className="text-[10px] font-mono text-rose-400 font-bold mt-1">
                  Grounds: {activeBody.removalGrounds}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-amber-500/25 flex flex-col gap-1.5">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Post-Retirement Bar / Employment:</span>
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {activeBody.postRetirementBar}
                </p>
              </div>
            </div>

            {/* Key Functions */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                Mandate & Key Constitutional Functions:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {activeBody.keyFunctions.map((fn, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{fn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Examiner Traps Alert Box */}
            <div className="p-4 rounded-xl bg-rose-500/10 border-2 border-rose-500/30 flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>Top Prelims Examiner Traps on {activeBody.name.split(' (')[0]}</span>
              </span>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-rose-200">
                {activeBody.examinerTraps.map((tr, i) => (
                  <li key={i} className="leading-relaxed">
                    {tr}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: QUICK RECALL EXAM DRILL */}
      {viewMode === 'drill' && (
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-6 animate-fadeIn">
          {/* Progress & Score */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--accent)]">
                Question {drillIdx + 1} of {drillQuestions.length}
              </span>
              <span className="text-[var(--text-muted)]">
                ({currentDrill.bodyName})
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold">Score: {score}</span>
              <span className="text-[var(--text-muted)]">Attempted: {attempted}</span>
            </div>
          </div>

          {/* Drill Question Card */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] flex flex-col gap-5 shadow-md">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[var(--text-primary)] leading-snug">
              {currentDrill.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentDrill.options.map((opt, i) => {
                const isSelected = selectedDrillOpt === opt;
                const isCorrect = opt === currentDrill.correctAnswer;

                let optStyle =
                  'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-purple-400 hover:text-[var(--text-primary)]';

                if (drillRevealed) {
                  if (isCorrect) {
                    optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                  } else {
                    optStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50 text-[var(--text-muted)]';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-purple-600 text-white font-bold border-purple-500';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectDrillOption(opt)}
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

            {/* Answer Reveal & Trap Explanation */}
            {drillRevealed && (
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2.5 animate-fadeIn text-xs">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5 font-mono">
                  <span
                    className={`font-bold ${
                      selectedDrillOpt === currentDrill.correctAnswer
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {selectedDrillOpt === currentDrill.correctAnswer
                      ? '✓ CORRECT! (+2 Marks)'
                      : '✗ INCORRECT! (-0.66 Marks)'}
                  </span>
                  <span className="text-[var(--text-muted)]">Official Key</span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {currentDrill.explanation}
                </p>

                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-[11px] flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-rose-400">Examiner Trap: </strong>
                    {currentDrill.examinerTrap}
                  </span>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={nextDrillQuestion}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white font-mono font-bold text-xs hover:bg-purple-700 transition-all shadow-sm"
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
