import React from 'react';
import {
  Printer,
  X,
  FileText,
  Scale,
  Zap,
  Shield,
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';
import {
  MATH_FORMULA_PAIRS,
  CONSTITUTIONAL_MAJORITY_DATA,
  MNEMONIC_ENGINES,
  MASTER_CHEAT_CODES,
  EMERGENCY_PLUS_FOUR_DATA
} from '../../data/fastTrackHacksData';

interface PocketCheatsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PocketCheatsheetModal: React.FC<PocketCheatsheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="w-full max-w-5xl rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Top Control Bar (Screen Only) */}
        <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-[var(--text-primary)]">
                Master Constitutional Revision Matrix
              </h2>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">
                Official Ultra-Dense Exam Hall Cheatsheet • Clean Print & PDF Ready
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-mono text-xs font-bold shadow-md hover:opacity-95 transition-all btn-tactile"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE TO PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-[var(--bg-base)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div
          id="samvidhan-pocket-sheet"
          className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-neutral-900 bg-white print:p-2 print:text-[10px] print:bg-white print:text-black font-sans leading-tight"
        >
          {/* Document Header */}
          <div className="border-b-2 border-neutral-900 pb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase font-black tracking-widest text-neutral-600">
                SAMVIDHAN • HIGH-YIELD REVISION DOSSIER
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 font-serif">
                Constitution of India: Master Formula & Revision Matrix
              </h1>
              <p className="text-[11px] text-neutral-700 font-medium">
                Dual-State +89/+90 Rules • 4 Majority Types • 8 Memory Palaces • 7 Master Cheat Codes
              </p>
            </div>
            <div className="text-right font-mono text-[10px] text-neutral-600 shrink-0">
              <div>UPSC CSE & Judicial Services</div>
              <div className="font-bold text-neutral-900">Articles 1 to 395</div>
            </div>
          </div>

          {/* Section 1: The 23 Dual-State Pairs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-neutral-100 p-1.5 px-2 rounded font-bold uppercase font-mono text-[11px] text-neutral-900 border border-neutral-300">
              <span>Section 1: The 23 Dual-State Conversion Pairs (+89 & +90 Rules)</span>
              <span className="text-[10px] text-neutral-600 font-normal">Arts 72-111 (+89) | Arts 112-124 (+90)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-neutral-300 text-[10px]">
                <thead>
                  <tr className="bg-neutral-200 text-neutral-900 font-mono">
                    <th className="border border-neutral-300 p-1 w-28">Formula</th>
                    <th className="border border-neutral-300 p-1">Union Provision</th>
                    <th className="border border-neutral-300 p-1">State Counterpart</th>
                    <th className="border border-neutral-300 p-1">Key Statutory Difference / Trap</th>
                  </tr>
                </thead>
                <tbody>
                  {MATH_FORMULA_PAIRS.map((p, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="border border-neutral-300 p-1 font-mono font-bold whitespace-nowrap">
                        Art. {p.unionArticle} {p.rule} ➔ {p.stateArticle}
                      </td>
                      <td className="border border-neutral-300 p-1 font-semibold">
                        {p.unionTitle}
                      </td>
                      <td className="border border-neutral-300 p-1 font-semibold text-neutral-800">
                        {p.stateTitle}
                      </td>
                      <td className="border border-neutral-300 p-1 text-neutral-700">
                        <strong>Trap: </strong>{p.examinerTrap.slice(0, 110)}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Constitutional Majority Matrix */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between bg-neutral-100 p-1.5 px-2 rounded font-bold uppercase font-mono text-[11px] text-neutral-900 border border-neutral-300">
              <span>Section 2: The Constitutional Majority Matrix (4 Core Types)</span>
              <span className="text-[10px] text-neutral-600 font-normal">Art 100(3) Quorum: 1/10th</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-neutral-300 text-[10px]">
                <thead>
                  <tr className="bg-neutral-200 text-neutral-900 font-mono">
                    <th className="border border-neutral-300 p-1 w-32">Majority Tier</th>
                    <th className="border border-neutral-300 p-1 w-32">Mathematical Formula</th>
                    <th className="border border-neutral-300 p-1">Constitutional Scope & Provisions</th>
                    <th className="border border-neutral-300 p-1">Critical Examiner Trap</th>
                  </tr>
                </thead>
                <tbody>
                  {CONSTITUTIONAL_MAJORITY_DATA.map((m, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="border border-neutral-300 p-1 font-bold">
                        {m.name.split('(')[0]}
                      </td>
                      <td className="border border-neutral-300 p-1 font-mono font-bold text-neutral-900">
                        {m.fractionFormula}
                      </td>
                      <td className="border border-neutral-300 p-1 text-neutral-800">
                        {m.keyUseCases.map((u) => `${u.article} (${u.provision})`).join('; ')}
                      </td>
                      <td className="border border-neutral-300 p-1 text-neutral-700">
                        {m.examinerTraps[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: The 8 Mnemonic Palaces */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between bg-neutral-100 p-1.5 px-2 rounded font-bold uppercase font-mono text-[11px] text-neutral-900 border border-neutral-300">
              <span>Section 3: The 8 Master Mnemonic Memory Palaces</span>
              <span className="text-[10px] text-neutral-600 font-normal">Instant Statutory Recall</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px]">
              {MNEMONIC_ENGINES.map((m, idx) => (
                <div key={idx} className="p-2 border border-neutral-300 rounded bg-neutral-50 space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <strong className="text-neutral-950 font-black">{m.catchphrase}</strong>
                    <span className="text-neutral-600">{m.articlesCovered}</span>
                  </div>
                  <div className="font-semibold text-neutral-800">{m.title}</div>
                  <p className="text-neutral-700 leading-tight">
                    {m.breakdown.map((b) => `${b.letter}=${b.word} (${b.article})`).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: 7 Master Cheat Codes */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between bg-neutral-100 p-1.5 px-2 rounded font-bold uppercase font-mono text-[11px] text-neutral-900 border border-neutral-300">
              <span>Section 4: The 7 Master Cheat Codes (Statutory Mental Models)</span>
              <span className="text-[10px] text-neutral-600 font-normal">Deduction Rules</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px]">
              {MASTER_CHEAT_CODES.map((c, idx) => (
                <div key={idx} className="p-2 border border-neutral-300 rounded bg-white space-y-0.5">
                  <div className="font-mono font-bold text-neutral-950">
                    {c.formulaTag}: {c.title}
                  </div>
                  <div className="text-neutral-700">{c.howItWorks}</div>
                  <div className="text-neutral-600 italic">Trap: {c.examinerTrap}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Citation */}
          <div className="border-t border-neutral-400 pt-2 flex items-center justify-between text-[9px] font-mono text-neutral-500">
            <span>SAMVIDHAN • Master the Indian Constitution</span>
            <span>Printed on {new Date().toLocaleDateString('en-GB')} • Authorized Pedagogical Resource</span>
          </div>
        </div>
      </div>
    </div>
  );
};
