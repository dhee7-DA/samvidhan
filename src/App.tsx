import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { SearchModal } from './components/Common/SearchModal';
import { UniversalDictionaryPopover } from './components/Common/UniversalDictionaryPopover';
import { GlobalDictionaryModal } from './components/Common/GlobalDictionaryModal';
import { OverviewDashboard } from './components/Views/OverviewDashboard';
import { TopicDetailView } from './components/Views/TopicDetailView';
import { ArticlesMasterView } from './components/Views/ArticlesMasterView';
import { VisualLabView } from './components/Views/VisualLabView';
import { AmendmentsView } from './components/Views/AmendmentsView';
import { SchedulesView } from './components/Views/SchedulesView';
import { DoctrinesHubView } from './components/Views/DoctrinesHubView';
import { LandmarkCasesView } from './components/Views/LandmarkCasesView';
import { ComparativeLawView } from './components/Views/ComparativeLawView';
import { QuizMasteryView } from './components/Views/QuizMasteryView';
import { DictionaryView } from './components/Views/DictionaryView';
import { StudyBootcampView } from './components/Views/StudyBootcampView';
import { PyqVaultView } from './components/Views/PyqVaultView';
import { MockExamSimulatorView } from './components/Views/MockExamSimulatorView';
import { MistakesNotebookView } from './components/Views/MistakesNotebookView';
import { MainsAnswerWritingLabView } from './components/Views/MainsAnswerWritingLabView';
import { PrintableRevisionView } from './components/Views/PrintableRevisionView';
import { Scale } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <Sidebar />
      <SearchModal />
      <GlobalDictionaryModal />
      <UniversalDictionaryPopover />

      <main className="flex-1 pb-16">
        {activeTab === 'overview' && <OverviewDashboard />}
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

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <button onClick={() => setActiveTab('overview')} className="hover:text-[var(--text-primary)]">Overview</button>
            <button onClick={() => setActiveTab('bootcamp')} className="hover:text-[var(--text-primary)] text-[var(--accent)] font-semibold">15-Day Bootcamp</button>
            <button onClick={() => setActiveTab('mock-exam')} className="hover:text-[var(--text-primary)] text-indigo-400 font-semibold">Mock Exam</button>
            <button onClick={() => setActiveTab('mistakes-notebook')} className="hover:text-[var(--text-primary)] text-rose-400 font-semibold">Mistakes Bank</button>
            <button onClick={() => setActiveTab('mains-lab')} className="hover:text-[var(--text-primary)] text-purple-400 font-semibold">Mains Writing Lab</button>
            <button onClick={() => setActiveTab('revision-sheets')} className="hover:text-[var(--text-primary)] text-amber-400 font-semibold">Revision Sheets</button>
            <button onClick={() => setActiveTab('pyqs')} className="hover:text-[var(--text-primary)] text-emerald-400 font-semibold">J&K Mains PYQs</button>
            <button onClick={() => setActiveTab('parts')} className="hover:text-[var(--text-primary)]">25 Parts</button>
            <button onClick={() => setActiveTab('articles-master')} className="hover:text-[var(--text-primary)]">Articles 1–395</button>
            <button onClick={() => setActiveTab('dictionary')} className="hover:text-[var(--text-primary)]">Legal Dictionary</button>
            <button onClick={() => setActiveTab('visual-lab')} className="hover:text-[var(--text-primary)]">Visual Law Lab</button>
            <button onClick={() => setActiveTab('amendments')} className="hover:text-[var(--text-primary)]">Amendments</button>
            <button onClick={() => setActiveTab('doctrines')} className="hover:text-[var(--text-primary)]">Doctrines</button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-[var(--text-primary)]">Quiz</button>
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
