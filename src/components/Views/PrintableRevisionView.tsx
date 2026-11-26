import React, { useState, useMemo } from 'react';
import {
  Printer,
  FileText,
  Download,
  BookOpen,
  Scale,
  Sparkles,
  Award,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import {
  FIFTEEN_DAY_BOOTCAMP_DATA,
  type BootcampDay
} from '../../data/bootcamp';
import { getHindiArticleMeaning } from '../../data/hindiArticleMeanings';
import { ConstitutionalWatermark } from '../Common/ConstitutionalWatermark';

export const PrintableRevisionView: React.FC = () => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number | 'all'>(1);
  const [bilingualHindi, setBilingualHindi] = useState<boolean>(true);

  const selectedDays: BootcampDay[] = useMemo(() => {
    if (selectedDayNumber === 'all') {
      return FIFTEEN_DAY_BOOTCAMP_DATA;
    }
    const day = FIFTEEN_DAY_BOOTCAMP_DATA.find((d) => d.dayNumber === selectedDayNumber);
    return day ? [day] : [FIFTEEN_DAY_BOOTCAMP_DATA[0]];
  }, [selectedDayNumber]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Controls (Hidden during print) */}
      <div className="print:hidden relative overflow-hidden p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] surface-specular bg-editorial-grid shadow-sm space-y-4">
        <ConstitutionalWatermark variant="scroll" position="bottom-right" size="md" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Printer className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Printable Dossiers &amp; Bilingual Revision Sheets</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Constitutional Law Revision Cheat Sheets
            </h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
              Clean, high-density printable summaries designed for rapid offline revision before preliminary &amp; mains examinations. Click &ldquo;Print / Save as PDF&rdquo; to generate clean A4 pages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setBilingualHindi((prev) => !prev)}
              className={`px-3.5 py-2.5 rounded-xl font-mono text-xs font-bold border transition-colors cursor-pointer btn-tactile ${
                bilingualHindi
                  ? 'bg-[var(--bg-base)] border-[var(--accent)] text-[var(--accent)]'
                  : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
              }`}
            >
              {bilingualHindi ? 'EN + सरल हिंदी: ON' : 'English Only'}
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-bold text-sm shadow-sm hover:opacity-95 transition-opacity flex items-center gap-2 cursor-pointer btn-tactile"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Day Selector */}
        <div className="pt-3 border-t border-border/40 flex flex-wrap items-center gap-3">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Select Scope:
          </label>
          <select
            value={selectedDayNumber}
            onChange={(e) =>
              setSelectedDayNumber(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))
            }
            className="text-xs font-semibold px-3 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="all">Complete 15-Day Compendium (All Days)</option>
            {FIFTEEN_DAY_BOOTCAMP_DATA.map((d) => (
              <option key={d.dayNumber} value={d.dayNumber}>
                Day {d.dayNumber}: {d.title.split('—')[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Printable Sheet Content */}
      <div className="space-y-10 print:space-y-8">
        {selectedDays.map((day) => {
          // Extract top high-frequency landmark MCQs and Traps for rapid summary
          const landmarkMcqs = day.mcqs.filter((m) => m.round === 'Landmark Precedents').slice(0, 6);
          const trapMcqs = day.mcqs.filter((m) => m.round === 'Negative Traps' || m.round === 'Applied Courtroom').slice(0, 4);

          return (
            <div
              key={day.dayNumber}
              className="p-8 rounded-3xl bg-card border border-border print:border-black print:p-6 print:rounded-none print:shadow-none shadow-md space-y-6 page-break-after-always"
            >
              {/* Sheet Header */}
              <div className="border-b-2 border-indigo-600 print:border-black pb-4 flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-500 print:text-black">
                    SAMVIDHAN · RAPID REVISION DOSSIER · DAY {day.dayNumber} OF 15
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-foreground print:text-black tracking-tight mt-1">
                    {day.title}
                  </h2>
                  <p className="text-xs text-muted-foreground print:text-gray-700 mt-0.5">
                    Target Articles: {day.targetArticles.join(', ')}
                  </p>
                </div>
                <div className="text-right hidden sm:block print:block">
                  <span className="text-[10px] font-mono text-muted-foreground print:text-black">
                    JKPSC PO / Judicial Services Exam
                  </span>
                </div>
              </div>

              {/* Section 1: Core Statutory Anchors & Thresholds */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-black flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  <span>1. Core Constitutional Thresholds & Concepts</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {day.coreConcepts.map((concept, cIdx) => {
                    const artMatch = concept.articleAnchor.match(/([0-9]+[A-Za-z]*)/);
                    const hindiDigest = bilingualHindi && artMatch ? getHindiArticleMeaning(artMatch[1]) : undefined;
                    return (
                      <div
                        key={cIdx}
                        className="p-3 rounded-xl border border-border/80 bg-muted/20 print:border-gray-400 print:bg-white text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-foreground print:text-black block">
                            {concept.heading}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-semibold print:text-black shrink-0">
                            {concept.articleAnchor}
                          </span>
                        </div>
                        <p className="text-muted-foreground print:text-gray-800 text-[11px] leading-relaxed">
                          {concept.synopsis}
                        </p>
                        {hindiDigest && (
                          <p className="text-[11px] text-foreground/90 print:text-gray-900 pt-1 border-t border-border/40 print:border-gray-300 leading-relaxed">
                            <strong className="text-[var(--accent)] print:text-black">सरल हिंदी: </strong>
                            {hindiDigest.meaningHi}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 2: Landmark Precedent Rulings & Binding Ratios */}
              {landmarkMcqs.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-amber-400 print:text-black flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>2. Landmark Precedents & Binding Ratios</span>
                  </h3>

                  <div className="space-y-2">
                    {landmarkMcqs.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl border border-border/60 bg-muted/10 print:border-gray-300 print:bg-white text-xs leading-relaxed space-y-1"
                      >
                        <div className="font-bold text-foreground print:text-black flex items-center justify-between">
                          <span>{m.question}</span>
                        </div>
                        <p className="text-muted-foreground print:text-gray-800 text-[11px]">
                          <strong className="text-indigo-400 print:text-black">Rule: </strong>
                          {m.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 3: Statutory Exceptions & Negative-Marking Traps */}
              {trapMcqs.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase tracking-wider text-rose-400 print:text-black flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>3. Statutory Exceptions, Time Limits & Exam Traps</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {trapMcqs.map((t, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/5 print:border-gray-400 print:bg-white text-xs space-y-1"
                      >
                        <span className="font-bold text-foreground print:text-black block text-[11px]">
                          {t.question}
                        </span>
                        <p className="text-muted-foreground print:text-gray-800 text-[11px] leading-snug">
                          {t.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sheet Footer */}
              <div className="border-t border-border/60 print:border-gray-300 pt-3 flex items-center justify-between text-[10px] text-muted-foreground print:text-gray-600 font-mono">
                <span>Samvidhan Constitutional Law Preparation System</span>
                <span>Page {day.dayNumber} · Self-Study & Revision</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
