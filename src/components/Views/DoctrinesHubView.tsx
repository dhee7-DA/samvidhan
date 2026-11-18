import React, { useState } from 'react';
import {
  Scale,
  CheckCircle2,
  AlertOctagon,
  Award,
  Search,
  ChevronRight,
  ChevronDown,
  Gamepad2,
  Sparkles,
  Lightbulb,
  Check,
  FileText,
  BrainCircuit,
  Star
} from 'lucide-react';
import { DOCTRINES_DATA } from '../../data/doctrinesData';
import type { ConstitutionalDoctrine } from '../../types/constitution';
import { AnnotatedLegalText } from '../Common/AnnotatedLegalText';
import { useTheme } from '../../context/ThemeContext';
import { getCardIdForDoctrine } from '../../services/flashcardService';

export const DoctrinesHubView: React.FC = () => {
  const { launchGameDeck, launchFlashcardDeck, pinnedFlashcardIds, togglePinFlashcard } = useTheme();
  const [selectedDocId, setSelectedDocId] = useState<string>(DOCTRINES_DATA[0].id);
  const [searchDoc, setSearchDoc] = useState('');
  const [isMobileDocOpen, setIsMobileDocOpen] = useState(false);
  const [doctrineMode, setDoctrineMode] = useState<'eli5' | 'juristic'>('eli5');

  const currentDoctrine = DOCTRINES_DATA.find((d) => d.id === selectedDocId) || DOCTRINES_DATA[0];

  const filtered = DOCTRINES_DATA.filter((d) => {
    if (!searchDoc) return true;
    const q = searchDoc.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.leadCase.toLowerCase().includes(q) ||
      d.essence.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Mobile Collapsible Doctrines Trigger */}
      <div className="lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobileDocOpen((prev) => !prev)}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Scale className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--accent)]">Doctrine:</span>
            <span className="truncate">{currentDoctrine.name}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[10px] text-[var(--text-muted)]">10 Doctrines</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileDocOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobileDocOpen && (
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                placeholder="Search doctrines or cases..."
                className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
              />
            </div>
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
              {filtered.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => {
                    setSelectedDocId(doc.id);
                    setIsMobileDocOpen(false);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                    doc.id === currentDoctrine.id
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{doc.name}</span>
                    {doc.latinTerm && (
                      <span className="text-[10px] opacity-75 italic">{doc.latinTerm}</span>
                    )}
                  </div>
                  <p className="text-[11px] truncate mt-0.5 opacity-80">Case: {doc.leadCase}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Doctrines List (Desktop) */}
        <div className="hidden lg:flex w-80 shrink-0 flex-col gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Constitutional Doctrines
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              placeholder="Search doctrines or cases..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
          </div>
          <button
            onClick={() => launchGameDeck('doctrines')}
            className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold transition-all shadow-sm"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Play 10 Doctrines Matcher</span>
          </button>
          <button
            onClick={() => launchFlashcardDeck('doctrines', 'all')}
            className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono text-xs font-bold transition-all shadow-sm"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Drill 10 Doctrines in SRS</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
          {filtered.map((doc) => {
            const isSelected = doc.id === currentDoctrine.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] break-words">
                    {doc.name}
                  </h4>
                  {doc.latinTerm && (
                    <span className="text-[9px] font-mono italic text-[var(--text-muted)] shrink-0 max-w-[110px] truncate text-right">
                      {doc.latinTerm}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 break-words">
                  Case: {doc.leadCase}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: In-Depth Doctrine Inspector */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--gold)] border border-[var(--gold)]/30">
                  Judicial Doctrine
                </span>
                {currentDoctrine.latinTerm && (
                  <span className="text-xs font-mono text-[var(--text-muted)] italic">
                    "{currentDoctrine.latinTerm}"
                  </span>
                )}
                {doctrineMode === 'eli5' && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    ELI5 ACTIVE
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {currentDoctrine.name}
              </h2>
            </div>

            {/* Quick Toggle: ELI5 vs Juristic + SRS Pin/Drill */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => togglePinFlashcard(getCardIdForDoctrine(currentDoctrine.id))}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-colors ${
                  pinnedFlashcardIds.includes(getCardIdForDoctrine(currentDoctrine.id))
                    ? 'bg-amber-500/15 text-amber-400 border-amber-500/40'
                    : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-amber-400'
                }`}
                title="Pin this Doctrine to SRS Flashcards"
              >
                <Star className={`w-3.5 h-3.5 ${pinnedFlashcardIds.includes(getCardIdForDoctrine(currentDoctrine.id)) ? 'fill-current' : ''}`} />
                <span>{pinnedFlashcardIds.includes(getCardIdForDoctrine(currentDoctrine.id)) ? 'Pinned' : 'SRS Pin'}</span>
              </button>

              <button
                onClick={() => launchFlashcardDeck('doctrines', 'all', getCardIdForDoctrine(currentDoctrine.id))}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] text-xs font-mono font-bold transition-colors"
                title="Study this Doctrine card in Leitner SRS"
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Drill Card</span>
              </button>

              <div className="flex items-center p-0.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono shadow-inner">
                <button
                  onClick={() => setDoctrineMode('eli5')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    doctrineMode === 'eli5'
                      ? 'bg-amber-500 text-black font-bold shadow-xs'
                      : 'text-amber-500 hover:text-amber-400 font-bold'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ELI5 & Analogy</span>
                </button>
                <button
                  onClick={() => setDoctrineMode('juristic')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    doctrineMode === 'juristic'
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Juristic Text</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                {currentDoctrine.constitutionalArticles.map((art) => (
                  <span key={art} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    {art}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Case Citation Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
            <Award className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                Leading Judicial Precedent & Origin
              </span>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mt-0.5">
                {currentDoctrine.leadCase}
              </h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Origin: {currentDoctrine.origin}
              </p>
            </div>
          </div>

          {/* MODE 1: PLAIN-ENGLISH ELI5 & REAL-LIFE ANALOGY */}
          {doctrineMode === 'eli5' && (
            <div className="flex flex-col gap-5 animate-fadeIn">
              {/* Everyday Metaphor / Analogy Card */}
              {currentDoctrine.analogy && (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-[var(--bg-surface-elevated)] to-[var(--bg-base)] border-2 border-amber-500/40 shadow-sm flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Everyday Analogy (How to Remember This Forever)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
                    <AnnotatedLegalText text={currentDoctrine.analogy} />
                  </p>
                </div>
              )}

              {/* In Plain English Breakdown */}
              <div className="p-5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-2 shadow-xs">
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  In Plain English (Zero Legalese Definition)
                </span>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                  <AnnotatedLegalText text={currentDoctrine.plainEnglish || currentDoctrine.essence} />
                </p>
              </div>

              {/* Real-World Courtroom Dispute */}
              {currentDoctrine.realWorldScenario && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--bg-surface-elevated)] to-[var(--bg-base)] border border-emerald-500/30 flex flex-col gap-2 shadow-xs">
                  <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    Real-World Courtroom & Practical Dispute
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    <AnnotatedLegalText text={currentDoctrine.realWorldScenario} />
                  </p>
                </div>
              )}

              {/* Judge's 3-Step Litmus Test Checklist */}
              {currentDoctrine.simpleJudgeQuestions && currentDoctrine.simpleJudgeQuestions.length > 0 && (
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Judge's 3-Step Litmus Test (The 3 Questions A Court Asks)
                  </span>
                  <div className="flex flex-col gap-2">
                    {currentDoctrine.simpleJudgeQuestions.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-black text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed font-sans">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Switch to Juristic Mode Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setDoctrineMode('juristic')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all btn-tactile"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Academic & Juristic Formulation →</span>
                </button>
              </div>
            </div>
          )}

          {/* MODE 2: JURISTIC ACADEMIC DOCTRINE */}
          {doctrineMode === 'juristic' && (
            <div className="flex flex-col gap-5 animate-fadeIn">
              {/* Core Essence */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                  Constitutional Essence
                </span>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                  <AnnotatedLegalText text={currentDoctrine.essence} />
                </p>
              </div>

              {/* Legal Test Mechanism */}
              <div className="flex flex-col gap-3 pt-3 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                  Litmus Test & Judicial Mechanism
                </span>
                <div className="flex flex-col gap-2">
                  {currentDoctrine.testMechanism.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicability & Exceptions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[var(--border-subtle)]">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    Operational Scope in India
                  </span>
                  <p className="text-xs text-[var(--text-primary)] leading-relaxed bg-[var(--bg-surface-elevated)] p-3 rounded-lg border border-[var(--border-subtle)]">
                    {currentDoctrine.applicabilityInIndia}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    Recognized Exceptions & Caveats
                  </span>
                  <div className="flex flex-col gap-2 bg-[var(--bg-surface-elevated)] p-3 rounded-lg border border-[var(--border-subtle)]">
                    {currentDoctrine.exceptions.map((exc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <AlertOctagon className="w-3.5 h-3.5 text-[var(--crimson)] shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Switch to ELI5 Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setDoctrineMode('eli5')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-500 font-bold transition-all btn-tactile"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Switch to Plain-English ELI5 & Analogies →</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};
