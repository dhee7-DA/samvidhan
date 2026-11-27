# SAMVIDHAN — Indian Constitutional Law Workbench

> A complete, offline-capable (PWA) interactive workbench for mastering the **Constitution of India** across Prelims, Mains, CLAT PG, and Judicial Services (Judiciary) exams.
>
> **Designed as the reference architecture** for sister legal workbooks (**BNSS**, **BNS**, **BSA**) so future builds can replicate every proven pattern without trial-and-error.

---

## Verified Content Inventory

| Layer | Coverage |
|---|---|
| **Bare Act & Parts** | **25 Active Parts** (+ Repealed Part VII = `26` browsable entries), `505` English & Hindi Bare Act entries, `12` Schedules, Amendments (`1st–106th`), `18` Doctrines, Constitutional Bodies Matrix, Majorities Lab, Time Limits Matrix |
| **Case Studies** | **8,200 Total Case Studies** — `3,000` in the 15-Day Bootcamp (`200/day`) + `5,200` across all `26` Constitutional Parts (`200/Part` in 25-case batches), each with factual matrix, framing issues, MCQs, IRAC model answer & 10-mark rubric |
| **Chapter Drills** | **Chapter Comprehension Lab** after every Part's Case Studies: `Comprehension Passage`, `Fill in the Blanks` (with hints & flexible normalization), `True / False Check`, and `Assertion & Reasoning` |
| **Practice & Arcade** | `3,001` Bootcamp MCQs (`5` rounds/day), `133` Article Blitz, `100` Trap Buster, `100` Ultra Vires Swipe, `50` Negative Marking, `48` Mastery Quiz, `48` Bench Simulator, `43` 7th Schedule Sort, `40` Constituent Assembly RPG, `29` Escape Room, `27` Socratic Examiner, `25` Moot Court, `5`-Box Leitner SRS Flashcards |
| **Judiciary & Mains** | `118` Landmark Cases, `63` Precedent Clashes (incl. 2024–2025 Constitution Bench overrulings), `13` Civil & Criminal Judgment Writing Labs, `125` Mains Answer Writing questions, `26` PYQ sets |
| **Memory & Visuals** | `27+` interactive SVG blueprints, `+89 / +90` Union-to-State formula converter, `22` Mnemonic Engines, `25` Rapid Reflex drills, `215+` Legal Dictionary terms |

---

## Tech Stack & Build Pipeline

- **Frontend:** React 19 + TypeScript (`tsc -b`) + Vite 8 (Rolldown manual chunking in `vite.config.ts`)
- **Styling:** Tailwind CSS v4 + semantic CSS theme variables (`dark`, `paper`, `parchment`) in `src/index.css`
- **Motion:** `motion/react` (`motion@14`) with `MotionConfig reducedMotion="user"`
- **Icons:** `lucide-react`
- **PWA / Offline:** `public/manifest.json` + `public/sw.js`
- **QA & Logging:** Playwright smoke suite (`scripts/smoke_check.py`) + persistent ledger (`scripts/updateProjectLog.cjs` → `PROJECT_LOG.md`)

```bash
npm install
npm run dev -- --host      # Local dev server on http://localhost:5173
npm run build              # Typecheck + production bundle (tsc -b && vite build)
npm run test:smoke         # Playwright check across 5 split-screen (860x760) + 34 desktop (1366x860) routes
npm run log:update -- --step "Summary" --details "Details"
```

---

## Frontend Design System: Themes, Fonts & Motion

### 1. Typography (`index.html` + `src/index.css`)
- **Primary UI Sans:** `Geist` (`--font-current: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif`)
- **Monospace / Tabular Telemetry:** `Geist Mono` (`--font-code`) & `JetBrains Mono` — used for article numbers, study timers (`tabular-nums`), citations, and formula readouts
- **Editorial Serif:** `Newsreader` (optical size `6..72`, italic & weights `400–600`) for long-form constitutional/Bare Act reading

### 2. Multi-Theme CSS Variable Architecture (`src/index.css`)
Six built-in themes switched via `[data-theme="..."]` on `<html>` (`ThemeContext.tsx`):
- **Default (`:root`):** Monochrome Editorial Dark (`--bg-base: #09090b`, `--bg-surface: #121215`, `--accent: #ffffff`)
- **`ink`:** Pure OLED Black + Electric Cyan (`--bg-base: #000000`, `--accent: #00f0ff`)
- **`carbon`:** Deep Slate Graphite (`--bg-base: #0b0d0e`, `--bg-surface: #121517`)
- **`paper`:** Warm Editorial Parchment/Paper (with dedicated `.surface-specular` and `.bg-editorial-grid` light overrides)
- **`chalk`:** Crisp Daylight / Chalk
- **`pink`:** Editorial Rose Accent

All components bind strictly to semantic tokens (`--bg-base`, `--bg-surface`, `--bg-surface-elevated`, `--bg-card`, `--border-subtle`, `--border-strong`, `--text-primary`, `--text-secondary`, `--text-muted`, `--accent`, `--accent-contrast`, `--gold`, `--emerald`, `--crimson`).

### 3. UI & Animation System (`src/lib/motionTokens.ts` + `EditorialMotionCards.tsx`)
- **Global Accessibility:** Root `<MotionConfig reducedMotion="user">` in `src/App.tsx` + `@media (prefers-reduced-motion: reduce)` CSS fallback.
- **Spring Presets:**
  - `EDITORIAL_SPRING`: `stiffness: 380, damping: 30, mass: 0.8` (cards, tabs, segmented controls)
  - `springs.snappy` (`480 / 36 / 0.85`), `springs.gentle` (`280 / 30 / 1`), `springs.bouncy` (`380 / 22 / 0.9`), `springs.cardFlip` (`320 / 26 / 0.9`)
- **Reusable Motion Primitives:**
  - `SlidingSegmentedControl`: `layoutId`-driven gliding pill switcher for tabs & filters
  - `EditorialHoverCard` + `.editorial-spotlight`: `y: -2` spring lift, `0.988` tap compression, and cursor-aware radial accent glow using `--mx`/`--my` CSS variables (zero React re-renders)
  - `StudyTelemetryCard`: `Day | Week | Month` switcher + hover-scrubbable bar chart with dashed `avg` baseline and floating tooltip pill
  - `StreakMatrixCard`: 30-day intensity-shaded emerald dot matrix
  - `UpNextHeroQueue`: Featured action card + faded queue with `AnimatePresence` + `layout` spring promotion
  - `ConstitutionalWatermark`: Hairline animated Ashok Chakra & architectural SVG watermarks (`src/components/Common/ConstitutionalWatermark.tsx`)
  - `viewTransitionVariants`: `opacity` + `8px` vertical glide (`0.20s`, `ease: [0.16, 1, 0.3, 1]`) between routes

---

## Repository Architecture

```text
├── public/
│   ├── data/
│   │   ├── case-studies/          # day1.json..day15.json (190 lazy case studies/day)
│   │   └── part-case-studies/     # part-1.json..part-22.json (200 lazy case studies/Part)
│   ├── manifest.json & sw.js      # PWA manifest & service worker
├── scripts/
│   ├── generate_case_studies.py
│   ├── generate_part_case_studies.py
│   ├── smoke_check.py             # 39-route viewport, overflow & console-error gate
│   └── updateProjectLog.cjs       # Syncs PROJECT_LOG.md snapshot, inventory & commits
├── src/
│   ├── components/
│   │   ├── Common/
│   │   │   ├── EditorialMotionCards.tsx   # EditorialHoverCard, SlidingSegmentedControl, StudyTelemetryCard, StreakMatrixCard, UpNextHeroQueue
│   │   │   ├── ChapterComprehensionLab.tsx# Passage, Fill-in-Blanks, True/False, Assertion & Reasoning
│   │   │   ├── DailyConstitutionalWorkout.tsx
│   │   │   ├── ConstitutionalWatermark.tsx
│   │   │   └── AnnotatedLegalText.tsx     # Auto-links legal terms & citations
│   │   ├── Layout/                # Header.tsx, Sidebar.tsx
│   │   ├── VectorDiagrams/        # 27+ interactive SVG blueprints
│   │   └── Views/                 # Lazy-loaded module views (Overview, Bootcamp, 25 Parts, Articles, Arcade, Judiciary, Readiness, etc.)
│   ├── data/                      # Modular TypeScript datasets (part*.ts, bootcamp/, mains/, pyqs/, caseLawsDetailedData.ts, precedentClashesData.ts, etc.)
│   ├── services/                  # flashcardService.ts, readinessIndexService.ts, studyActivityService.ts, mistakesService.ts, progressVaultService.ts
│   └── lib/motionTokens.ts        # Shared springs & variants
└── PROJECT_LOG.md                 # Complete file inventory, commit history & step log
```

---

## Replication Playbook for BNSS, BNS & BSA

When starting **BNSS (Bharatiya Nagarik Suraksha Sanhita)**, **BNS (Bharatiya Nyaya Sanhita)**, or **BSA (Bharatiya Sakshya Adhiniyam)**, follow these exact rules learned during SAMVIDHAN so we avoid trial-and-error:

1. **Lazy JSON Packs for Large Practice Banks (`200` Case Studies/Chapter):**
   - Keep `10` static core scenarios in TypeScript for instant render, and store bulk chapter case studies (`200/chapter`) in `public/data/chapter-case-studies/*.json` fetched on demand with **25-case batch pagination**. Never bundle thousands of case studies into static `.ts` imports.
2. **Collapsible Section/Article Tiles:**
   - Default all section/article cards inside a Chapter/Part to **collapsed tiles** (badge + title + 1-line preview + SRS/Bookmark buttons) with **Expand All / Collapse All** and **Jump to Practice ↓**, so users don't scroll past 30+ sections to reach Case Studies & Comprehension Drills.
3. **4-Mode Chapter Comprehension Lab After Case Studies:**
   - Include `Comprehension Passage`, `Fill in the Blanks` (with input normalization + hints), `True / False Check`, and `Assertion & Reasoning` for every Chapter/Part.
4. **Cross-Code Mapping (Essential for BNSS / BNS / BSA):**
   - Reuse the `1950 vs Modern` diff engine pattern (`amendmentDiffsData.ts` / `precedentClashesData.ts`) for **Old CrPC → BNSS**, **Old IPC → BNS**, and **Old IEA → BSA** side-by-side section diffs and `+offset` memory shortcuts.
5. **Theme Variables Only (Dark / Paper / Parchment):**
   - Always use `bg-[var(--bg-surface)]`, `bg-[var(--bg-base)]`, `bg-[var(--bg-surface-elevated)]`, `text-[var(--text-primary)]`, `text-[var(--text-secondary)]`, `text-[var(--text-muted)]`, and `border-[var(--border-subtle)]`. Never hardcode `bg-neutral-900` or `bg-zinc-950`.
6. **SVG Sizing & Hover Physics:**
   - Always give diagram `<svg>` elements a `viewBox` + `w-full h-auto`—**never** add `min-w-[700px]` (which breaks split-screen scaling).
   - **Never** apply CSS `transform: translateY/scale` on `.vector-node:hover` for SVG `<g transform="translate(x, y)">` elements (CSS `transform` overrides the SVG attribute and causes 60fps hover teleport/flicker). Use `filter` + `opacity` instead.
7. **Calm Editorial Motion & Clean Inline Headers:**
   - Use `SlidingSegmentedControl` (`layoutId`), `EditorialHoverCard` (`.editorial-spotlight` CSS vars), `StudyTelemetryCard` (`Day | Week | Month`), `StreakMatrixCard`, and `UpNextHeroQueue`. Keep metadata like `Day X` and `Streak` as clean inline text rather than cramped mini-boxes.
8. **Mandatory Verification Before Every Commit:**
   - Run `npm run build`, `npm run test:smoke` (`860x760` + `1366x860`, `0` errors, `0px` overflow), and `npm run log:update` before `git commit`.
