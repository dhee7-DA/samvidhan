import React, { useState } from 'react';
import {
  BookOpen,
  Bookmark,
  Scale,
  Award,
  ChevronRight,
  Search,
  ExternalLink,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { CONSTITUTION_PARTS } from '../../data/partsData';
import type { ConstitutionPart, ArticleItem } from '../../types/constitution';
import { WritsMatrixSVG } from '../VectorDiagrams/WritsMatrixSVG';
import { SeparationOfPowersSVG } from '../VectorDiagrams/SeparationOfPowersSVG';
import { AmendmentPipelineSVG } from '../VectorDiagrams/AmendmentPipelineSVG';
import { FederalRelationsSVG } from '../VectorDiagrams/FederalRelationsSVG';
import { EmergencyMatrixSVG } from '../VectorDiagrams/EmergencyMatrixSVG';
import { LegislativePassageSVG } from '../VectorDiagrams/LegislativePassageSVG';

export const TopicDetailView: React.FC = () => {
  const { selectedPartId, setSelectedPartId, bookmarkedArticles, toggleBookmark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Selected Part or default to Part III
  const currentPart = CONSTITUTION_PARTS.find((p) => p.id === selectedPartId) || CONSTITUTION_PARTS[2];

  const categories = ['All', 'Foundation', 'Rights & Duties', 'Governance', 'Federalism', 'Special & Emergency'];

  const filteredParts = CONSTITUTION_PARTS.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.partNumber.toLowerCase().includes(q) ||
        p.articles.some((a) => a.number.includes(q) || a.title.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-8 animate-fadeIn">
      {/* Left Column: Parts Selector Sidebar */}
      <div className="lg:w-80 shrink-0 flex flex-col gap-4">
        {/* Search & Category Filter */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search parts or articles..."
              className="w-full bg-transparent border-none text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold'
                    : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Parts List */}
        <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
          {filteredParts.map((part) => {
            const isSelected = part.id === currentPart.id;
            return (
              <div
                key={part.id}
                onClick={() => setSelectedPartId(part.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface-elevated)] border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                    {part.partNumber}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {part.articlesRange}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)] line-clamp-1">
                  {part.title}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 mt-1">
                  {part.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: In-Depth Part Details & Articles */}
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        {/* Part Header Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[var(--accent)] text-[var(--accent-contrast)]">
                {currentPart.partNumber}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--badge-border)]">
                {currentPart.articlesRange}
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Category: {currentPart.category}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              {currentPart.title}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {currentPart.description}
            </p>
          </div>

          {/* Historical Background */}
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Framing & Historical Context
            </span>
            <p className="text-xs text-[var(--text-primary)] leading-relaxed">
              {currentPart.historicalBackground}
            </p>
          </div>

          {/* Key Principles */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Core Principles & Doctrines
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentPart.keyPrinciples.map((prin, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{prin}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded SVG Visualizer if matching this Part */}
        {currentPart.id === 'part-3' && (
          <div className="flex flex-col gap-2">
            <WritsMatrixSVG />
          </div>
        )}
        {currentPart.id === 'part-5' && (
          <div className="flex flex-col gap-2">
            <SeparationOfPowersSVG />
          </div>
        )}
        {currentPart.id === 'part-6' && (
          <div className="flex flex-col gap-2">
            <LegislativePassageSVG />
          </div>
        )}
        {currentPart.id === 'part-11' && (
          <div className="flex flex-col gap-2">
            <FederalRelationsSVG />
          </div>
        )}
        {currentPart.id === 'part-18' && (
          <div className="flex flex-col gap-2">
            <EmergencyMatrixSVG />
          </div>
        )}
        {currentPart.id === 'part-20' && (
          <div className="flex flex-col gap-2">
            <AmendmentPipelineSVG />
          </div>
        )}

        {/* Articles Clause-by-Clause Explorer */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--accent)]" />
              <span>Articles in {currentPart.partNumber}</span>
            </h3>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {currentPart.articles.length} key articles cataloged
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {currentPart.articles.map((art) => {
              const artLabel = `Art ${art.number}`;
              const isBookmarked = bookmarkedArticles.includes(artLabel);

              return (
                <div
                  key={art.number}
                  className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-3"
                >
                  {/* Article Title & Bookmark */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                        Article {art.number}
                      </span>
                      <h4 className="text-base font-bold text-[var(--text-primary)]">
                        {art.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => toggleBookmark(artLabel)}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {art.summary}
                  </p>

                  {/* Constitutional Text Snippet */}
                  <div className="p-3 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] italic leading-relaxed">
                    "{art.textSnippet}"
                  </div>

                  {/* Clauses Breakdown if available */}
                  {art.clauses && art.clauses.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-[var(--text-muted)]">
                        Clause Breakdown & Interpretation
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {art.clauses.map((c, i) => (
                          <div
                            key={i}
                            className="p-2 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
                          >
                            <span className="font-mono font-bold text-[var(--accent)] text-[11px] shrink-0">
                              [{c.clause}]
                            </span>
                            <span className="text-[var(--text-secondary)]">
                              {c.explanation}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Landmark Cases in this Part */}
        {currentPart.landmarkCases && currentPart.landmarkCases.length > 0 && (
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--gold)]" />
              <span>Landmark Precedents Governing {currentPart.partNumber}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPart.landmarkCases.map((lc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">
                        {lc.caseName}
                      </h4>
                      <span className="text-xs font-mono text-[var(--gold)] font-semibold">
                        {lc.year}
                      </span>
                    </div>
                    {lc.bench && (
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {lc.bench}
                      </span>
                    )}
                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {lc.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)]">
                    Impact: {lc.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
