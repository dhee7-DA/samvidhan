import React, { Suspense, lazy, useEffect } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'motion/react';
import { viewTransitionVariants } from './lib/motionTokens';
import { recordStudyPulse } from './services/studyActivityService';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { SearchModal } from './components/Common/SearchModal';
import { UniversalDictionaryPopover } from './components/Common/UniversalDictionaryPopover';
import { GlobalDictionaryModal } from './components/Common/GlobalDictionaryModal';
import { ProgressVaultModal } from './components/Common/ProgressVaultModal';
import { ConstitutionalWatermark } from './components/Common/ConstitutionalWatermark';
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
const ArcadeHubView = lazy(() =>
  import('./components/Views/ArcadeHubView').then((m) => ({ default: m.ArcadeHubView }))
);
const PrecedentClashView = lazy(() =>
  import('./components/Views/PrecedentClashView').then((m) => ({ default: m.PrecedentClashView }))
);
const JudgmentWritingLabView = lazy(() =>
  import('./components/Views/JudgmentWritingLabView').then((m) => ({ default: m.JudgmentWritingLabView }))
);
const MainsMockExamSimulatorView = lazy(() =>
  import('./components/Views/MainsMockExamSimulatorView').then((m) => ({ default: m.MainsMockExamSimulatorView }))
);
const ReadinessIndexView = lazy(() =>
  import('./components/Views/ReadinessIndexView').then((m) => ({ default: m.ReadinessIndexView }))
);
const FastTrackMasteryView = lazy(() =>
  import('./components/Views/FastTrackMasteryView').then((m) => ({ default: m.FastTrackMasteryView }))
);
const ConstitutionalBodiesView = lazy(() =>
  import('./components/Views/ConstitutionalBodiesView').then((m) => ({ default: m.ConstitutionalBodiesView }))
);
const WritsEmergencyMatrixView = lazy(() =>
  import('./components/Views/WritsEmergencyMatrixView').then((m) => ({ default: m.WritsEmergencyMatrixView }))
);
const FederalRelationsView = lazy(() =>
  import('./components/Views/FederalRelationsView').then((m) => ({ default: m.FederalRelationsView }))
);
const MajoritiesLabView = lazy(() =>
  import('./components/Views/MajoritiesLabView').then((m) => ({ default: m.MajoritiesLabView }))
);
const DeadlinesMatrixView = lazy(() =>
  import('./components/Views/DeadlinesMatrixView').then((m) => ({ default: m.DeadlinesMatrixView }))
);
const NegativeMarkingSimulatorView = lazy(() =>
  import('./components/Views/NegativeMarkingSimulatorView').then((m) => ({ default: m.NegativeMarkingSimulatorView }))
);
const SocraticTutorView = lazy(() =>
  import('./components/Views/SocraticTutorView').then((m) => ({ default: m.SocraticTutorView }))
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

  // Record 1 active study minute every 60s while the app tab is visible
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        recordStudyPulse(1, 0);
      }
    }, 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Header />
      <SearchModal />
      <GlobalDictionaryModal />
      <UniversalDictionaryPopover />
      <ProgressVaultModal />

      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        <Sidebar />

        <div className="flex-1 min-w-0 flex flex-col">
          <main className="flex-1 pb-16 min-w-0 overflow-x-clip relative">
            <ConstitutionalWatermark
              variant="chakra"
              size="lg"
              animated
              className="!fixed !right-4 !bottom-4 !opacity-[0.025] z-0 print:hidden"
            />
            <div className="relative z-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab === 'tile-matcher' ? 'arcade' : activeTab}
                variants={viewTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {activeTab === 'overview' ? (
                  <OverviewDashboard />
                ) : (
                  <Suspense fallback={<ViewLoadingFallback />}>
                {activeTab === 'bootcamp' && <StudyBootcampView />}
                {activeTab === 'mock-exam' && <MockExamSimulatorView />}
                {activeTab === 'mains-mock' && <MainsMockExamSimulatorView />}
                {activeTab === 'readiness-index' && <ReadinessIndexView />}
                {activeTab === 'fast-track' && <FastTrackMasteryView />}
                {activeTab === 'judgment-lab' && <JudgmentWritingLabView />}
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
                {(activeTab === 'arcade' || activeTab === 'tile-matcher') && <ArcadeHubView />}
                {activeTab === 'lineage' && <PrecedentLineageView />}
                {activeTab === 'precedent-clash' && <PrecedentClashView />}
                {activeTab === 'audio-lab' && <AudioBriefingsView />}
                {activeTab === 'pyqs' && <PyqVaultView />}
                {activeTab === 'parts' && <TopicDetailView />}
                {activeTab === 'articles-master' && <ArticlesMasterView />}
                {activeTab === 'article-mastery' && <ArticlesMasterView initialMode="mastery" />}
                {activeTab === 'dictionary' && <DictionaryView />}
                {activeTab === 'visual-lab' && <VisualLabView />}
                {activeTab === 'amendments' && <AmendmentsView />}
                {activeTab === 'schedules' && <SchedulesView />}
                {activeTab === 'doctrines' && <DoctrinesHubView />}
                {activeTab === 'constitutional-bodies' && <ConstitutionalBodiesView />}
                {activeTab === 'writs-emergency' && <WritsEmergencyMatrixView />}
                {activeTab === 'federal-relations' && <FederalRelationsView />}
                {activeTab === 'majorities-lab' && <MajoritiesLabView />}
                {activeTab === 'deadlines-matrix' && <DeadlinesMatrixView />}
                {activeTab === 'trap-simulator' && <NegativeMarkingSimulatorView />}
                {activeTab === 'judgments' && <LandmarkCasesView />}
                {activeTab === 'comparative' && <ComparativeLawView />}
                {activeTab === 'quiz' && <QuizMasteryView />}
                {activeTab === 'socratic-tutor' && <SocraticTutorView />}
                  </Suspense>
                )}
              </motion.div>
            </AnimatePresence>
            </div>
          </main>

          {/* Quiet Minimalist Editorial Colophon */}
          <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-5 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[var(--bg-base)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-primary)]">
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs tracking-tight text-[var(--text-primary)]">SAMVIDHAN</span>
                <span className="text-[11px] font-mono text-[var(--text-muted)] hidden md:inline">
                  &bull; Lex Magna et Fundamentum Reipublicae
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-secondary)]">
                <button onClick={() => setActiveTab('overview')} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Overview
                </button>
                <button onClick={() => setActiveTab('articles-master')} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Articles 1–395
                </button>
                <button onClick={() => setActiveTab('readiness-index')} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Readiness Heatmap
                </button>
                <button onClick={() => setActiveTab('arcade')} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Arcade
                </button>
                <button onClick={() => setVaultModalOpen(true)} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Backup Vault
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </MotionConfig>
  );
}
