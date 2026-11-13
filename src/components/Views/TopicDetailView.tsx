import React, { useState } from 'react';
import {
  BookOpen,
  Bookmark,
  Scale,
  Award,
  ChevronRight,
  ChevronDown,
  Search,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  Filter,
  Gavel,
  CheckCircle2
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
import { CriminalConstitutionalPipelineSVG } from '../VectorDiagrams/CriminalConstitutionalPipelineSVG';
import { ExecutiveClemencyArchitectureSVG } from '../VectorDiagrams/ExecutiveClemencyArchitectureSVG';

export const TopicDetailView: React.FC = () => {
  const { selectedPartId, setSelectedPartId, bookmarkedArticles, toggleBookmark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobilePartsOpen, setIsMobilePartsOpen] = useState(false);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6 animate-fadeIn">
      {/* Mobile Collapsible Parts Trigger */}
      <div className="lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsMobilePartsOpen((prev) => !prev)}
          className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-bold text-[var(--accent)]">{currentPart.partNumber}:</span>
            <span className="truncate">{currentPart.title}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[10px] text-[var(--text-muted)]">25 Parts</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobilePartsOpen ? 'rotate-180 text-[var(--accent)]' : ''}`} />
          </div>
        </button>

        {isMobilePartsOpen && (
          <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] shadow-xl flex flex-col gap-3 animate-fadeIn">
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
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
              {filteredParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => {
                    setSelectedPartId(part.id);
                    setIsMobilePartsOpen(false);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                    part.id === currentPart.id
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold border-[var(--accent)]'
                      : 'bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  <span className="font-bold mr-1.5">{part.partNumber}:</span>
                  <span>{part.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Desktop Parts Sidebar (Collapsible) */}
        {!isSidebarCollapsed ? (
          <div className="hidden lg:flex w-80 shrink-0 flex-col gap-4 animate-fadeIn">
            {/* Header with Collapse Button */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-[var(--text-muted)]">
              <span className="font-bold uppercase tracking-wider text-[var(--text-primary)]">
                25 Constitutional Parts
              </span>
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                title="Collapse sidebar to maximize reading area"
                className="flex items-center gap-1 hover:text-[var(--text-primary)] text-[11px] px-2 py-0.5 rounded hover:bg-[var(--bg-surface)] transition-colors"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
                <span>Hide</span>
              </button>
            </div>

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
        ) : (
          /* Desktop Collapsed Indicator Button */
          <div className="hidden lg:block shrink-0">
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-sm"
              title="Show 25 Constitutional Parts sidebar"
            >
              <PanelLeftOpen className="w-4 h-4 text-[var(--accent)]" />
              <span>Show 25 Parts</span>
            </button>
          </div>
        )}

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

        {/* Embedded SVG Visualizers for this Part */}
        {currentPart.id === 'part-3' && (
          <div className="flex flex-col gap-6">
            <CriminalConstitutionalPipelineSVG />
            <WritsMatrixSVG />
          </div>
        )}
        {currentPart.id === 'part-5' && (
          <div className="flex flex-col gap-6">
            <ExecutiveClemencyArchitectureSVG />
            <SeparationOfPowersSVG />
          </div>
        )}
        {currentPart.id === 'part-6' && (
          <div className="flex flex-col gap-6">
            <ExecutiveClemencyArchitectureSVG />
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

          <div className="flex flex-col gap-5">
            {currentPart.articles.map((art) => {
              const artLabel = `Art ${art.number}`;
              const isBookmarked = bookmarkedArticles.includes(artLabel);

              return (
                <div
                  key={art.number}
                  className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col gap-3.5 shadow-sm"
                >
                  {/* Article Title & Bookmark */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg font-mono text-xs font-bold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                        Article {art.number}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                        {art.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => toggleBookmark(artLabel)}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                      className={`p-1.5 rounded-xl border transition-colors shrink-0 ${
                        isBookmarked
                          ? 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {art.summary}
                  </p>

                  {/* Plain English Highlight Box */}
                  {art.plainEnglish && (
                    <div className="p-3 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20 flex flex-col gap-1">
                      <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> In Plain English
                      </span>
                      <p className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                        {art.plainEnglish}
                      </p>
                    </div>
                  )}

                  {/* Constitutional Text Snippet */}
                  <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] italic leading-relaxed">
                    "{art.textSnippet}"
                  </div>

                  {/* Real-World Everyday / Courtroom Scenario */}
                  {art.realWorldScenario && (
                    <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5" /> Real-World Everyday / Practical Scenario
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {art.realWorldScenario}
                      </p>
                    </div>
                  )}

                  {/* Prosecutor / Judicial Litigation Note */}
                  {art.prosecutionNote && (
                    <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/20 flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" /> Prosecutor & Judicial Litigation Note
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {art.prosecutionNote}
                      </p>
                    </div>
                  )}

                  {/* Clauses Breakdown with Examples */}
                  {art.clauses && art.clauses.length > 0 && (
                    <div className="mt-1 flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-[var(--text-muted)]">
                        Clause Breakdown & Practical Interpretation
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {art.clauses.map((c, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs flex flex-col gap-1"
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono font-bold text-[var(--accent)] text-[11px] px-1.5 py-0.2 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                                {c.clause}
                              </span>
                              <span className="text-[var(--text-primary)] font-medium">
                                {c.explanation}
                              </span>
                            </div>
                            {c.example && (
                              <div className="mt-1 pl-2 border-l-2 border-[var(--accent)]/50 text-[11px] text-[var(--text-muted)] italic">
                                Example: {c.example}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exceptions & Provisos */}
                  {art.exceptions && art.exceptions.length > 0 && (
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs flex flex-col gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                        Constitutional Exceptions & Provisos
                      </span>
                      <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1">
                        {art.exceptions.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Landmark Cases for this Article */}
                  {art.landmarkCases && art.landmarkCases.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border-subtle)]">
                      <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        Key Landmark Precedents for Article {art.number}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {art.landmarkCases.map((lc, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs flex flex-col justify-between gap-1.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className="font-bold text-[var(--text-primary)] truncate">{lc.caseName}</span>
                                <span className="text-[10px] font-mono text-[var(--gold)] shrink-0 font-bold">{lc.year}</span>
                              </div>
                              {lc.bench && (
                                <span className="text-[10px] font-mono text-[var(--text-muted)] block mb-1">
                                  {lc.bench}
                                </span>
                              )}
                              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                                {lc.summary}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-[var(--accent)] pt-1 border-t border-[var(--border-subtle)]/60">
                              Ruling: {lc.significance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Associated Doctrines */}
                  {art.doctrineLinks && art.doctrineLinks.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">Doctrines:</span>
                      {art.doctrineLinks.map((doc, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {doc}
                        </span>
                      ))}
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
  </div>
);
};
