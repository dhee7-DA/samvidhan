import React from 'react';
import {
  BookOpen,
  Scale,
  Award,
  Users,
  Shield,
  Sparkles,
  Quote,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Gavel
} from 'lucide-react';
import { caseStoryService } from '../../services/caseStoryService';
import type { RealArticleStory } from '../../data/realCaseStoriesData';

interface Props {
  articleNumber: string;
  articleTitle: string;
  part: string;
  onSelectArticleStory?: (artNum: string) => void;
}

export const ArticleRealCaseStoryTab: React.FC<Props> = ({
  articleNumber,
  articleTitle,
  part,
  onSelectArticleStory
}) => {
  const story = caseStoryService.getStoryForArticle(articleNumber);
  const allStories = caseStoryService.getAllStories();

  if (!story) {
    // Show nearest available stories from Part or General
    return (
      <div className="flex flex-col gap-6 animate-fadeIn">
        <div className="p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h4 className="text-base font-serif font-bold text-[var(--text-primary)]">
              Constitutional Doctrine for Article {articleNumber}
            </h4>
            <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed">
              Article {articleNumber} forms part of <strong className="text-[var(--text-primary)]">{part}</strong>. Its statutory text is interpreted by the constitutional benches listed below.
            </p>
          </div>
        </div>

        {/* Available Stories Showcase */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
            <Gavel className="w-3.5 h-3.5 text-amber-500" />
            Explore Verified Courtroom Dramas in Key Articles ({allStories.length} Documented Stories)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allStories.slice(0, 6).map((s) => (
              <div
                key={s.articleNumber}
                onClick={() => onSelectArticleStory && onSelectArticleStory(s.articleNumber)}
                className="p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-amber-500/40 cursor-pointer transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      Article {s.articleNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">{s.decisionYear}</span>
                  </div>
                  <h5 className="text-xs font-serif font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors line-clamp-1">
                    {s.headline}
                  </h5>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1 italic line-clamp-1">
                    {s.caseName}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-amber-500 font-bold">
                  <span>Read Case Story</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Authentic Case Law Header Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[var(--bg-surface)] to-amber-500/5 border-2 border-amber-500/30 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500 text-black uppercase tracking-wider">
              100% Authentic Law Report Record
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              AIR • SCC • SCR Official Precedent
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-amber-500">
            Decided {story.decisionYear}
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-primary)] leading-tight">
            {story.headline}
          </h3>
          <p className="text-sm font-serif italic text-amber-500 mt-1">
            {story.caseName} • {story.officialCitation}
          </p>
        </div>

        {/* Bench Composition */}
        <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2.5">
          <Scale className="w-4 h-4 text-amber-500 shrink-0" />
          <div>
            <strong className="text-[var(--text-primary)]">Presiding Bench:</strong> {story.bench}
          </div>
        </div>

        {/* Thematic Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {story.thematicTags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Chapter 1: The Real Citizen & Ground Conflict */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-amber-500 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Chapter 1: The Human Conflict on the Ground
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
            Documented Historical Facts
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">The Real Citizen / Litigant:</strong>{' '}
          {story.theRealCitizen}
        </div>

        <p className="text-sm font-sans leading-relaxed text-[var(--text-primary)] font-medium">
          {story.theGroundFacts}
        </p>
      </div>

      {/* Chapter 2: The Courtroom Clash */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] space-y-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-sky-400 flex items-center gap-2">
            <Scale className="w-4 h-4" />
            Chapter 2: The Supreme Court Battlefield (Courtroom 1)
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
            Citizen vs Sovereign State
          </span>
        </div>

        <p className="text-sm font-sans leading-relaxed text-[var(--text-secondary)]">
          {story.theCourtroomClash}
        </p>
      </div>

      {/* Chapter 3: The Moment of Lightning & Verbatim Holding */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-950/10 border-2 border-amber-500/40 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-amber-400 flex items-center gap-2">
            <Gavel className="w-4 h-4" />
            Chapter 3: The Landmark Ratio Decidendi (Art. 141 Binding Law)
          </span>
          <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">
            Verbatim Holding
          </span>
        </div>

        <p className="text-sm font-sans leading-relaxed text-[var(--text-primary)] font-medium">
          {story.verbatimRatio}
        </p>

        {/* Verbatim Landmark Quote Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-surface)] border border-amber-500/30 text-xs sm:text-sm font-serif italic text-amber-300 leading-relaxed relative pl-10 shadow-inner">
          <Quote className="w-5 h-5 text-amber-500 absolute left-3 top-4 opacity-70" />
          {story.keyQuote}
        </div>
      </div>

      {/* Chapter 4: Living Legacy Today */}
      <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/30 space-y-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Chapter 4: The Living Legacy (How It Protects You Today)
          </span>
          <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">
            Exam & Courtroom Application
          </span>
        </div>

        <p className="text-xs sm:text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
          {story.livingLegacy}
        </p>
      </div>
    </div>
  );
};
