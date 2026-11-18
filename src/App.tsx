import React, { Suspense, lazy } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { SearchModal } from './components/Common/SearchModal';
import { UniversalDictionaryPopover } from './components/Common/UniversalDictionaryPopover';
import { GlobalDictionaryModal } from './components/Common/GlobalDictionaryModal';
import { ProgressVaultModal } from './components/Common/ProgressVaultModal';
import { OverviewDashboard } from './components/Views/OverviewDashboard';
import { Scale, Loader2 } from 'lucide-react';

// Code-split all secondary views for instant initial page load & PWA responsiveness
const TopicDetailView = lazy(() =>
  import('./components/Views/TopicDetailView').then((m) => ({ default: m.TopicDetailView }))
);
const ArticlesMasterView = lazy(() =>
  import('./components/Views/ArticlesMasterView').then((m) => ({ default: m.ArticlesMasterView }))
);
const VisualLabView = lazy(() =>
  import('./components/Views/VisualLabView').then((m) => ({ default: m.VisualLabView }))
);
const AmendmentsView = lazy(() =>
  import('./components/Views/AmendmentsView').then((m) => ({ default: m.AmendmentsView }))
);
const SchedulesView = lazy(() =>
  import('./components/Views/SchedulesView').then((m) => ({ default: m.SchedulesView }))
);
const DoctrinesHubView = lazy(() =>
  import('./components/Views/DoctrinesHubView').then((m) => ({ default: m.DoctrinesHubView }))
);
const LandmarkCasesView = lazy(() =>
  import('./components/Views/LandmarkCasesView').then((m) => ({ default: m.LandmarkCasesView }))
);
const ComparativeLawView = lazy(() =>
  import('./components/Views/ComparativeLawView').then((m) => ({ default: m.ComparativeLawView }))
);
const QuizMasteryView = lazy(() =>
  import('./components/Views/QuizMasteryView').then((m) => ({ default: m.QuizMasteryView }))
);
const DictionaryView = lazy(() =>
  import('./components/Views/DictionaryView').then((m) => ({ default: m.DictionaryView }))
);
const StudyBootcampView = lazy(() =>
  import('./components/Views/StudyBootcampView').then((m) => ({ default: m.StudyBootcampView }))
);
const PyqVaultView = lazy(() =>
  import('./components/Views/PyqVaultView').then((m) => ({ default: m.PyqVaultView }))
);
const MockExamSimulatorView = lazy(() =>
  import('./components/Views/MockExamSimulatorView').then((m) => ({ default: m.MockExamSimulatorView }))
);
const MistakesNotebookView = lazy(() =>
  import('./components/Views/MistakesNotebookView').then((m) => ({ default: m.MistakesNotebookView }))
);
const MainsAnswerWritingLabView = lazy(() =>
  import('./components/Views/MainsAnswerWritingLabView').then((m) => ({ default: m.MainsAnswerWritingLabView }))
);
const PrintableRevisionView = lazy(() =>
  import('./components/Views/PrintableRevisionView').then((m) => ({ default: m.PrintableRevisionView }))
);
const FlashcardsView = lazy(() =>
  import('./components/Views/FlashcardsView').then((m) => ({ default: m.FlashcardsView }))
);
const PrecedentLineageView = lazy(() =>
  import('./components/Views/PrecedentLineageView').then((m) => ({ default: m.PrecedentLineageView }))
);
const AudioBriefingsView = lazy(() =>
  import('./components/Views/AudioBriefingsView').then((m) => ({ default: m.AudioBriefingsView }))
);
const TileMatcherGameView = lazy(() =>
  import('./components/Views/TileMatcherGameView').then((m) => ({ default: m.TileMatcherGameView }))
);

const ViewLoadingFallback: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center justify-center gap-3 text-[var(--text-muted)] animate-fadeIn">
    <div className="w-11 h-11 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shadow-sm">
      <Loader2 className="w-5 h-5 animate-spin" />
    </div>
    <span className="text-xs font-mono tracking-wider uppercase">Loading Constitutional Module...</span>
  </div>
);

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab, setVaultModalOpen } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <Sidebar />
      <SearchModal />
      <GlobalDictionaryModal />
      <UniversalDictionaryPopover />
      <ProgressVaultModal />

      <main className="flex-1 pb-16">
        {activeTab === 'overview' ? (
          <OverviewDashboard />
        ) : (
          <Suspense fallback={<ViewLoadingFallback />}>
            {activeTab === 'bootcamp' && <StudyBootcampView />}
            {activeTab === 'mock-exam' && <MockExamSimulatorView />}
            {activeTab === 'mistakes-notebook' && (
              <MistakesNotebookView
                onNavigateToBootcampDay={() => {
                  setActiveTab('bootcamp');
                }}
              />
            )}
            {activeTab === 'mains-lab' && <MainsAnswerWritingLabView />}
            {activeTab === 'revision-sheets' && <PrintableRevisionView />}
            {activeTab === 'flashcards' && <FlashcardsView />}
            {activeTab === 'tile-matcher' && <TileMatcherGameView />}
            {activeTab === 'lineage' && <PrecedentLineageView />}
            {activeTab === 'audio-lab' && <AudioBriefingsView />}
            {activeTab === 'pyqs' && <PyqVaultView />}
            {activeTab === 'parts' && <TopicDetailView />}
            {activeTab === 'articles-master' && <ArticlesMasterView />}
            {activeTab === 'dictionary' && <DictionaryView />}
            {activeTab === 'visual-lab' && <VisualLabView />}
            {activeTab === 'amendments' && <AmendmentsView />}
            {activeTab === 'schedules' && <SchedulesView />}
            {activeTab === 'doctrines' && <DoctrinesHubView />}
            {activeTab === 'judgments' && <LandmarkCasesView />}
            {activeTab === 'comparative' && <ComparativeLawView />}
            {activeTab === 'quiz' && <QuizMasteryView />}
          </Suspense>
        )}
      </main>

      {/* Sleek Minimalist Editorial Footer */}
      <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[var(--bg-base)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)]">
              <Scale className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-[var(--text-primary)]">SAMVIDHAN</span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              • Lex Magna et Fundamentum Reipublicae
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <button onClick={() => setActiveTab('overview')} className="hover:text-[var(--text-primary)] btn-tactile">Overview</button>
            <button onClick={() => setActiveTab('bootcamp')} className="hover:text-[var(--text-primary)] text-[var(--accent)] font-semibold btn-tactile">15-Day Bootcamp</button>
            <button onClick={() => setActiveTab('mock-exam')} className="hover:text-[var(--text-primary)] text-[var(--info-text)] font-semibold btn-tactile">Mock Exam</button>
            <button onClick={() => setActiveTab('mistakes-notebook')} className="hover:text-[var(--text-primary)] text-[var(--error-text)] font-semibold btn-tactile">Mistakes Bank</button>
            <button onClick={() => setActiveTab('mains-lab')} className="hover:text-[var(--text-primary)] text-[var(--warning-text)] font-semibold btn-tactile">Mains Writing Lab</button>
            <button onClick={() => setActiveTab('revision-sheets')} className="hover:text-[var(--text-primary)] text-[var(--warning-text)] font-semibold btn-tactile">Revision Sheets</button>
            <button onClick={() => setActiveTab('flashcards')} className="hover:text-[var(--text-primary)] text-[var(--accent)] font-semibold btn-tactile">Flashcards (SRS)</button>
            <button onClick={() => setActiveTab('tile-matcher')} className="hover:text-[var(--text-primary)] text-[var(--success-text)] font-semibold btn-tactile">Synaptic Matcher</button>
            <button onClick={() => setActiveTab('lineage')} className="hover:text-[var(--text-primary)] text-[var(--info-text)] font-semibold btn-tactile">Precedent Trees</button>
            <button onClick={() => setActiveTab('audio-lab')} className="hover:text-[var(--text-primary)] text-[var(--success-text)] font-semibold btn-tactile">Audio Lab</button>
            <button onClick={() => setActiveTab('pyqs')} className="hover:text-[var(--text-primary)] text-[var(--success-text)] font-semibold btn-tactile">J&K Mains PYQs</button>
            <button onClick={() => setActiveTab('parts')} className="hover:text-[var(--text-primary)] btn-tactile">25 Parts</button>
            <button onClick={() => setActiveTab('articles-master')} className="hover:text-[var(--text-primary)] btn-tactile">Articles 1–395</button>
            <button onClick={() => setActiveTab('dictionary')} className="hover:text-[var(--text-primary)] btn-tactile">Legal Dictionary</button>
            <button onClick={() => setActiveTab('visual-lab')} className="hover:text-[var(--text-primary)] btn-tactile">Visual Law Lab</button>
            <button onClick={() => setActiveTab('amendments')} className="hover:text-[var(--text-primary)] btn-tactile">106 Amendments</button>
            <button onClick={() => setActiveTab('doctrines')} className="hover:text-[var(--text-primary)] btn-tactile">Doctrines</button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-[var(--text-primary)] btn-tactile">Quiz</button>
            <button onClick={() => setVaultModalOpen(true)} className="hover:text-[var(--text-primary)] text-emerald-400 font-semibold btn-tactile">Backup Vault</button>
          </div>

          <div className="text-[11px] font-mono text-[var(--text-muted)] text-center sm:text-right">
            Sovereign Socialist Secular Democratic Republic of India
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
