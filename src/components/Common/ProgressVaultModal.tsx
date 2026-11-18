import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Download,
  Upload,
  ShieldCheck,
  Copy,
  Check,
  Flame,
  BrainCircuit,
  AlertTriangle,
  Bookmark,
  HardDrive,
  RefreshCw
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import {
  getStudyReadinessSnapshot,
  downloadProgressBackup,
  buildProgressBackupPayload,
  importProgressBackupJson,
  type ProgressVaultSnapshot
} from '../../services/progressVaultService';

export const ProgressVaultModal: React.FC = () => {
  const { vaultModalOpen, setVaultModalOpen } = useTheme();
  const [snapshot, setSnapshot] = useState<ProgressVaultSnapshot>(() => getStudyReadinessSnapshot());
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (vaultModalOpen) {
      setSnapshot(getStudyReadinessSnapshot());
      setStatusMsg(null);
    }
  }, [vaultModalOpen]);

  useEffect(() => {
    if (!vaultModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVaultModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [vaultModalOpen, setVaultModalOpen]);

  if (!vaultModalOpen) return null;

  const handleDownload = () => {
    try {
      const res = downloadProgressBackup();
      setSnapshot(getStudyReadinessSnapshot());
      setStatusMsg({
        type: 'success',
        text: `Downloaded ${res.filename} (${res.keyCount} progress records safely backed up).`
      });
    } catch (e: any) {
      setStatusMsg({
        type: 'error',
        text: e?.message || 'Failed to generate backup file.'
      });
    }
  };

  const handleCopyJson = async () => {
    try {
      const payload = buildProgressBackupPayload();
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setStatusMsg({ type: 'success', text: 'Copied full JSON progress backup to clipboard.' });
    } catch {
      setStatusMsg({ type: 'error', text: 'Could not copy to clipboard.' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const res = importProgressBackupJson(String(reader.result || ''));
        setSnapshot(getStudyReadinessSnapshot());
        setStatusMsg({
          type: 'success',
          text: `Restored ${res.restoredKeys} progress records${res.exportedAt ? ` from ${res.exportedAt.slice(0, 10)}` : ''}! Click "Reload App" to refresh all live tabs.`
        });
      } catch (err: any) {
        setStatusMsg({
          type: 'error',
          text: err?.message || 'Could not parse backup JSON file.'
        });
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={() => setVaultModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl overflow-hidden animate-scaleUp"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Study Progress Backup Vault
              </h2>
              <p className="text-xs font-mono text-[var(--text-muted)]">
                Export or restore Bootcamp, Leitner SRS, Mistakes Bank & Bookmarks
              </p>
            </div>
          </div>

          <button
            onClick={() => setVaultModalOpen(false)}
            className="p-2 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Live Snapshot Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 uppercase font-bold">
                <Flame className="w-3 h-3" /> Bootcamp
              </div>
              <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-1">
                {snapshot.bootcampDaysCompleted}/15
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                {snapshot.bootcampMcqsAnswered} MCQs done
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400 uppercase font-bold">
                <BrainCircuit className="w-3 h-3" /> Leitner SRS
              </div>
              <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-1">
                {snapshot.srsTotalReviews}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                {snapshot.srsPinnedCount} pinned · {snapshot.srsStreakDays}d streak
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-400 uppercase font-bold">
                <AlertTriangle className="w-3 h-3" /> Mistakes
              </div>
              <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-1">
                {snapshot.mistakesUnmastered}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                {snapshot.mistakesMastered} mastered
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--gold)] uppercase font-bold">
                <Bookmark className="w-3 h-3" /> Saved
              </div>
              <div className="text-lg font-extrabold font-mono text-[var(--text-primary)] mt-1">
                {snapshot.bookmarkedArticlesCount + snapshot.bookmarkedCasesCount}
              </div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">
                {snapshot.estimatedSizeKB} KB stored
              </div>
            </div>
          </div>

          {/* Last Backup Meta */}
          <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-between gap-2 text-xs font-mono">
            <span className="flex items-center gap-2 text-[var(--text-secondary)]">
              <HardDrive className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>
                {snapshot.lastBackupDate
                  ? `Last exported: ${new Date(snapshot.lastBackupDate).toLocaleString()}`
                  : 'No local backup exported yet — export a JSON file to keep your progress drive-safe.'}
              </span>
            </span>
          </div>

          {/* Status Feedback */}
          {statusMsg && (
            <div
              className={`p-3.5 rounded-xl border text-xs font-mono flex items-center justify-between gap-2 ${
                statusMsg.type === 'success'
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
              }`}
            >
              <span>{statusMsg.text}</span>
              {statusMsg.type === 'success' && statusMsg.text.includes('Restored') && (
                <button
                  onClick={() => window.location.reload()}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500 text-black font-bold shrink-0 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reload App
                </button>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={handleDownload}
              className="py-3 px-4 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-sm btn-tactile"
            >
              <Download className="w-4 h-4" />
              <span>Export .JSON</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="py-3 px-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all btn-tactile"
            >
              <Upload className="w-4 h-4" />
              <span>Restore .JSON</span>
            </button>

            <button
              onClick={handleCopyJson}
              className="py-3 px-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all btn-tactile"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};
