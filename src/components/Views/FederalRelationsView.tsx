import React, { useState } from 'react';
import {
  Layers,
  Scale,
  AlertTriangle,
  Award,
  FileText,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Flame,
  Check,
  Zap,
  Globe2,
  HelpCircle
} from 'lucide-react';
import {
  SCHEDULE_7_LISTS,
  FIVE_PARLIAMENT_GATEWAYS,
  type Schedule7List,
  type GatewayException
} from '../../data/federalRelationsData';
import { useTheme } from '../../context/ThemeContext';

export const FederalRelationsView: React.FC = () => {
  const { setActiveTab } = useTheme();

  // Mode: 'lists' | 'gateways' | 'repugnancy' | 'drill'
  const [activeMode, setActiveMode] = useState<'lists' | 'gateways' | 'repugnancy' | 'drill'>('lists');
  const [activeListTab, setActiveListTab] = useState<'union' | 'state' | 'concurrent'>('union');
  const [selectedGatewayArt, setSelectedGatewayArt] = useState<string>('Article 249');

  const currentList: Schedule7List = SCHEDULE_7_LISTS[activeListTab];
  const selectedGateway =
    FIVE_PARLIAMENT_GATEWAYS.find((g) => g.article === selectedGatewayArt) ||
    FIVE_PARLIAMENT_GATEWAYS[0];

  // -------------------------------------------------------------
  // RECALL DRILL QUESTIONS
  // -------------------------------------------------------------
  const drillItems = [
    {
      id: 'fd-1',
      question: 'When Parliament enacts a law on a State List subject under Article 252 upon resolutions passed by two or more States, who can amend or repeal that law?',
      options: [
        'Any of the consenting State Legislatures independently',
        'Parliament ALONE; the consenting States have no power to amend or repeal it',
        'A Joint Committee of the consenting State Assemblies',
        'The Governor of the oldest consenting State'
      ],
      correct: 'Parliament ALONE; the consenting States have no power to amend or repeal it',
      explanation: 'Under Article 252(2), any Act so passed by Parliament may be amended or repealed by an Act of Parliament passed in like manner. Consenting States completely surrender their power to amend or repeal it!',
      trap: 'The biggest Prelims trap on federal relations. Candidates assume the states that surrendered power can take it back or amend it. They CANNOT!'
    },
    {
      id: 'fd-2',
      question: 'Which of the following subjects was NOT transferred from the State List to the Concurrent List by the 42nd Constitutional Amendment Act, 1976?',
      options: [
        'Education',
        'Forests',
        'Police and Public Health',
        'Protection of wild animals and birds'
      ],
      correct: 'Police and Public Health',
      explanation: 'The 42nd CAA (1976) transferred 5 subjects: (1) Education, (2) Forests, (3) Weights and measures, (4) Protection of wild animals and birds, and (5) Administration of justice. Police and Public Health remain in the State List!',
      trap: 'Police and Public Health are strictly List II (State List) entries.'
    },
    {
      id: 'fd-3',
      question: 'Under Article 249, a resolution empowering Parliament to legislate on a State List subject in national interest requires what majority?',
      options: [
        'Special Majority in both Houses of Parliament',
        'Supported by not less than two-thirds (2/3rd) of members present and voting in the RAJYA SABHA ONLY',
        'Simple majority in the Lok Sabha with Presidential concurrence',
        'Ratification by half of the State Legislatures'
      ],
      correct: 'Supported by not less than two-thirds (2/3rd) of members present and voting in the RAJYA SABHA ONLY',
      explanation: 'Article 249(1) mandates a resolution supported by not less than 2/3rd of the members present and voting in the Council of States (Rajya Sabha) only. Lok Sabha does not vote on the initiating resolution.',
      trap: 'The initiating resolution is passed by the Rajya Sabha alone, as the representative organ of States.'
    },
    {
      id: 'fd-4',
      question: 'If a State Law on a Concurrent List subject is inconsistent with an earlier Central Law on the same subject, how can the State Law prevail in that State under Article 254(2)?',
      options: [
        'If the State Assembly passes it again by a 2/3rd majority',
        'If it was reserved for the consideration of the President and received Presidential Assent',
        'If the High Court certifies it as beneficial to the State',
        'A State Law can never prevail over a Central Law under any circumstance'
      ],
      correct: 'If it was reserved for the consideration of the President and received Presidential Assent',
      explanation: 'Article 254(2) creates the famous safe-harbour exception: If the State law has been reserved for the consideration of the President and has received his assent, it prevails in that State over the inconsistent prior Central law.',
      trap: 'However, notice the proviso to Art 254(2): Parliament can still subsequently enact a fresh law overriding the State law!'
    },
    {
      id: 'fd-5',
      question: 'Under the Indian Constitution, where are the Residuary Powers of legislation and taxation vested?',
      options: [
        'Exclusively in the State Legislatures, like in the United States',
        'Exclusively in Parliament under Article 248 and Entry 97 of the Union List',
        'Equally shared between Parliament and State Legislatures in the Concurrent List',
        'Vested in the Inter-State Council'
      ],
      correct: 'Exclusively in Parliament under Article 248 and Entry 97 of the Union List',
      explanation: 'Unlike USA, Switzerland, and Australia where residuary powers belong to States, India followed the Canadian model where Article 248 and Entry 97 List I vest all residuary legislative and taxing powers exclusively in Parliament.',
      trap: 'Do not confuse Indian federalism with the American model. In India, residuary powers belong to the Centre.'
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
            <Layers className="w-6 h-6 text-sky-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              7th Schedule & Legislative Relations
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
              Articles 245–255
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            High-yield comparative analysis of the 3 Legislative Lists, the 5 Exceptional Gateways into State List, and Article 254 Repugnancy.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center flex-wrap max-w-full gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)] justify-start sm:justify-end">
          <button
            onClick={() => setActiveMode('lists')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'lists'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>7th Schedule Lists</span>
          </button>
          <button
            onClick={() => setActiveMode('gateways')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'gateways'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>5 Gateways (Parliament in State List)</span>
          </button>
          <button
            onClick={() => setActiveMode('repugnancy')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === 'repugnancy'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Art. 254 Repugnancy</span>
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
            <span>Drill ({drillItems.length})</span>
          </button>
        </div>
      </div>

      {/* MODE 1: 7TH SCHEDULE 3 LISTS EXPLORER */}
      {activeMode === 'lists' && (
        <div className="flex flex-col gap-5 animate-fadeIn">
          {/* List Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex-wrap">
            <button
              onClick={() => setActiveListTab('union')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeListTab === 'union'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>List I: Union List (100 Entries)</span>
            </button>
            <button
              onClick={() => setActiveListTab('state')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeListTab === 'state'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>List II: State List (61 Entries)</span>
            </button>
            <button
              onClick={() => setActiveListTab('concurrent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeListTab === 'concurrent'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span>List III: Concurrent List (52 Entries)</span>
            </button>
          </div>

          {/* List Header Card */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  {currentList.exclusivePowerArticle}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] font-serif">
                  {currentList.hindiName}
                </span>
              </div>
              <h2 className="text-xl font-serif font-bold text-[var(--text-primary)]">
                {currentList.name}
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Originally {currentList.originalCount} entries &rarr; Currently{' '}
                <strong>{currentList.currentCount} active entries</strong>.
              </p>
            </div>

            <button
              onClick={() => handleOpenBareActArticle('246')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono font-bold hover:opacity-90 transition-all shrink-0 shadow-sm"
            >
              <span>Read Article 246 Bare Act</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 42nd CAA Highlight if viewing State or Concurrent */}
          {activeListTab !== 'union' && (
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3 text-xs">
              <Zap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-purple-300 font-mono">
                  The 42nd Amendment Act (1976) Shift:
                </strong>
                <p className="text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  Transferred <strong>5 subjects from State List to Concurrent List</strong>: (1) Education, (2) Forests, (3) Weights and measures, (4) Protection of wild animals and birds, and (5) Administration of justice & constitution of inferior courts.
                </p>
              </div>
            </div>
          )}

          {/* High-Yield Entries Grid */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Most Frequently Tested Entries in {currentList.name.split(' (')[0]}:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentList.highYieldEntries.map((ent) => (
                <div
                  key={ent.entryNumber}
                  className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-1 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      Entry {ent.entryNumber}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] font-bold">
                      HIGH-YIELD
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">
                    {ent.subject}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                    {ent.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Examiner Traps Alert Box */}
          <div className="p-4 rounded-xl bg-rose-500/10 border-2 border-rose-500/30 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-4 h-4" />
              <span>Top Prelims Traps on {currentList.name.split(' (')[0]}</span>
            </span>
            <ul className="list-disc list-inside space-y-1 text-xs text-rose-200">
              {currentList.examinerTraps.map((tr, i) => (
                <li key={i}>{tr}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* MODE 2: 5 GATEWAYS (PARLIAMENT IN STATE LIST) */}
      {activeMode === 'gateways' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
          {/* Left: Gateway Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-2 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
            <span className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] px-1 pb-1 border-b border-[var(--border-subtle)]">
              The 5 Constitutional Gateways:
            </span>
            {FIVE_PARLIAMENT_GATEWAYS.map((gw) => {
              const isSelected = gw.article === selectedGateway.article;
              return (
                <button
                  key={gw.article}
                  onClick={() => setSelectedGatewayArt(gw.article)}
                  className={`p-3 rounded-lg text-left transition-all flex flex-col gap-1 border ${
                    isSelected
                      ? 'bg-sky-500/15 border-sky-500 text-[var(--text-primary)] shadow-sm'
                      : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-sky-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      {gw.article}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      Exception #{FIVE_PARLIAMENT_GATEWAYS.indexOf(gw) + 1}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-1">
                    {gw.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Gateway Deep Detail */}
          <div className="lg:col-span-8 flex flex-col gap-5 bg-[var(--bg-surface)] p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                  State List Override Gateway
                </span>
                <h3 className="text-xl font-serif font-bold text-[var(--text-primary)]">
                  {selectedGateway.article}: {selectedGateway.name}
                </h3>
              </div>
              <button
                onClick={() => handleOpenBareActArticle(selectedGateway.article)}
                className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline font-bold"
              >
                <span>Read Bare Act</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase">
                  Trigger Condition:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedGateway.condition}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                  Parliamentary Procedure & Majority:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedGateway.parliamentaryProcedure}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                  Duration of Law & Sunset:
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedGateway.durationOfLaw}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">
                  Can Consenting States Repeal/Amend?
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedGateway.canConsentingStatesRepeal}
                </p>
              </div>
            </div>

            {/* Examiner Trap */}
            <div className="p-4 rounded-xl bg-rose-500/10 border-2 border-rose-500/30 flex flex-col gap-1.5">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>Primary Prelims Trap on {selectedGateway.article}:</span>
              </span>
              <p className="text-xs text-rose-200 leading-relaxed font-mono">
                {selectedGateway.examinerTrap}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: ARTICLE 254 REPUGNANCY & PRESIDENTIAL ASSENT */}
      {activeMode === 'repugnancy' && (
        <div className="flex flex-col gap-6 animate-fadeIn">
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border-2 border-[var(--border-strong)] flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
              <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                Article 254: Inconsistency between Central & State Laws
              </span>
              <button
                onClick={() => handleOpenBareActArticle('254')}
                className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1"
              >
                <span>Read Article 254 Bare Act</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-rose-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-rose-400 font-bold border-b border-rose-500/20 pb-1">
                  <span>ARTICLE 254(1): THE GENERAL RULE</span>
                  <span>CENTRE PREVAILS</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  If any provision of a law made by the Legislature of a State on a Concurrent List subject is <strong>repugnant to any provision of a law made by Parliament</strong>, then:
                </p>
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-xs font-mono text-rose-300 font-bold">
                  The law made by Parliament PREVAILS, and the State law is VOID to the extent of the repugnancy.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-emerald-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold border-b border-emerald-500/20 pb-1">
                  <span>ARTICLE 254(2): THE LIFE-SAVING EXCEPTION</span>
                  <span>STATE PREVAILS</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Where a State law on a Concurrent subject contains any provision repugnant to an earlier Parliamentary law, <strong>IF THE STATE LAW WAS RESERVED FOR THE CONSIDERATION OF THE PRESIDENT AND HAS RECEIVED HIS ASSENT</strong>:
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-xs font-mono text-emerald-300 font-bold">
                  The State law PREVAILS in that State!
                </div>
              </div>
            </div>

            {/* The Ultimate Proviso */}
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex flex-col gap-1.5 text-xs">
              <span className="font-mono font-bold text-purple-300 uppercase">
                The Proviso to Article 254(2): Parliament’s Ultimate Override
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Nothing in clause (2) shall prevent Parliament from enacting at any time any law with respect to the same matter, including a law adding to, amending, varying, or repealing the law so made by the Legislature of the State.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODE 4: RECALL DRILL */}
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
                  'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-sky-400 hover:text-[var(--text-primary)]';

                if (drillRevealed) {
                  if (isCorrect) {
                    optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 line-through';
                  } else {
                    optStyle = 'bg-[var(--bg-base)] border-[var(--border-subtle)] opacity-50 text-[var(--text-muted)]';
                  }
                } else if (isSelected) {
                  optStyle = 'bg-sky-500 text-white font-bold border-sky-500';
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
                  <span className="text-[var(--text-muted)]">Official Key</span>
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
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 text-white font-mono font-bold text-xs hover:bg-sky-600 transition-all shadow-sm"
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
