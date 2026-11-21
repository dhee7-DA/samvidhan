# SAMVIDHAN — Project Activity & File Log

> Persistent, auto-synced ledger of every step, file, and commit in the **Samvidhan (Indian Constitution)** project.
> Run `npm run log:update` (or `npm run log:update -- --step "Summary of work"`) to keep this log synchronized.

## Project Snapshot

<!-- AUTO:SNAPSHOT:START -->
| Metric | Value |
| :--- | :--- |
| **Last Log Sync** | 2026-11-21 15:03:16 (+05:30) |
| **Repository** | https://github.com/dhee7-DA/samvidhan.git |
| **Branch / HEAD** | `main` @ `5294c7c` (2026-11-21T14:45:55+05:30) |
| **Total Commits** | 92 |
| **Total Files Indexed** | 279 (279 tracked, 0 new untracked) |
| **Working Tree** | 3 pending change(s) |
<!-- AUTO:SNAPSHOT:END -->

---

## Step-by-Step Activity Log

<!-- AUTO:STEPS:START -->

### [2026-11-21 15:03:16 (+05:30)] Add 5 landmark battles to Precedent Clash and wire dynamic filters (DONE)
- **Details:** Expanded arena from 10 to 15 battles with ADR Electoral Bonds (2024), Shayara Bano (2017), Sabarimala (2018), NJAC (2015), and Subhash Desai (2023). Added 5-Judge Overruling filter, shortName pill tags, and verified live in browser.
- **Files Touched (3):** `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/PrecedentClashView.tsx`, `M src/data/precedentClashesData.ts`
- **Git HEAD:** `main` @ `5294c7c`

### [2026-11-21 14:44:11 (+05:30)] Optimize Precedent Clash layout density and eliminate vertical whitespace (DONE)
- **Details:** Replaced 420px hero card with high-density cockpit toolbar and horizontal battle pill carousel; converted duel arena to responsive side-by-side md:grid-cols-2 layout; verified live visual rendering via browser verifier.
- **Files Touched (2):** `M src/components/Views/PrecedentClashView.tsx`, `M src/components/Views/PrecedentDuelArena.tsx`
- **Git HEAD:** `main` @ `d32e8e2`

### [2026-11-21 13:56:41 (+05:30)] Refine UI harmony across Precedent Clash, Speed Hacks, Arcade, and Spotlight Search (DONE)
- **Details:** Eliminated gradient fog and glowing blobs in PrecedentClashView and PrecedentDuelArena, upgraded SearchModal with / shortcut, arrow-key navigation, and universal deep links, standardized segmented navigation in FastTrackMasteryView and ArcadeHubView, verified live with 0 console errors.
- **Files Touched (5):** `M src/components/Common/SearchModal.tsx`, `M src/components/Views/ArcadeHubView.tsx`, `M src/components/Views/FastTrackMasteryView.tsx`, `M src/components/Views/PrecedentClashView.tsx`, `M src/components/Views/PrecedentDuelArena.tsx`
- **Git HEAD:** `main` @ `003e2d2`

### [2026-11-21 13:15:22 (+05:30)] Add interactive deep-linking & node click-to-open across Knowledge Graphs and Precedent Trees (DONE)
- **Details:** Implemented bidirectional cross-module navigation between Knowledge Graph nodes and Articles Master, Landmark Cases, Doctrines Hub, and Amendments views via custom events and synced localStorage; added on-node badge pills, double-click triggers, and prominent action buttons verified live in browser with 0 errors.
- **Files Touched (6):** `M src/components/Views/AmendmentsView.tsx`, `M src/components/Views/ArticlesMasterView.tsx`, `M src/components/Views/ConceptWebGraphView.tsx`, `M src/components/Views/DoctrinesHubView.tsx`, `M src/components/Views/LandmarkCasesView.tsx`, `M src/components/Views/PrecedentLineageView.tsx`
- **Git HEAD:** `main` @ `98ed436`

### [2026-11-21 11:48:03 (+05:30)] Sync project log with commit 35dec72 (DONE)
- **Details:** Final log sync
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `35dec72`

### [2026-11-21 11:47:08 (+05:30)] Remove all gradients and glowing fog from Knowledge Graphs and Precedent Lineage (DONE)
- **Details:** Removed SVG radial gradient nebulas, blurry neon glow filters, timeline rainbow gradient, and purple banner gradients from ConceptWebGraphView and PrecedentLineageView, giving a crisp Obsidian/Neo4j-style vector dark canvas
- **Files Touched (2):** `M src/components/Views/ConceptWebGraphView.tsx`, `M src/components/Views/PrecedentLineageView.tsx`
- **Git HEAD:** `main` @ `a7f7831`

### [2026-11-21 01:54:57 (+05:30)] Sync project log with commit 0d4bd48 (DONE)
- **Details:** Final log sync
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `0d4bd48`

### [2026-11-21 01:54:22 (+05:30)] Refactor color hierarchy: remove rainbow clutter and restrict colors strictly to key words (DONE)
- **Details:** Toned down all 12 quick trigger buttons, Daily Workout cards and tabs, learning gateway pillars, and concept web controls to neutral surfaces; restricted vivid color highlights strictly to key statutory article numbers (+89/+90 rule, Art 72, Art 161) and critical verdicts
- **Files Touched (3):** `M src/components/Common/DailyConstitutionalWorkout.tsx`, `M src/components/Views/ConceptWebGraphView.tsx`, `M src/components/Views/OverviewDashboard.tsx`
- **Git HEAD:** `main` @ `718f0ba`

### [2026-11-20 23:19:00 (+05:30)] Sync PROJECT_LOG for commit 7ff35ca (DONE)
- **Details:** All upgraded Knowledge Graph features committed cleanly
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `7ff35ca`

### [2026-11-20 23:18:10 (+05:30)] Upgrade Knowledge Graph with Force Drag Physics, Constitutional Path-Finder, Edge Relations, and Fullscreen Cockpit (DONE)
- **Details:** Expanded conceptWebData.ts to 42 curated nodes and semantic edges with BFS path-finder. Upgraded ConceptWebGraphView.tsx with drag-and-drop node physics, canvas pan and zoom, Mode A (Constellation Explorer) vs Mode B (Path-Finder with judicial bridges), edge relationship tags, fullscreen cockpit with floating glass dossier, and verified clean build.
- **Files Touched (2):** `M src/components/Views/ConceptWebGraphView.tsx`, `M src/data/conceptWebData.ts`
- **Git HEAD:** `main` @ `c7096ab`

### [2026-11-20 21:18:09 (+05:30)] Sync PROJECT_LOG for commit 76d187c (DONE)
- **Details:** All 3 features committed with 0 errors
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `76d187c`

### [2026-11-20 21:17:16 (+05:30)] Add Daily Constitutional Workout, Precedent Duel Battle-Cards Arena, and Interactive Concept Web Knowledge Graph (DONE)
- **Details:** Created DailyConstitutionalWorkout.tsx (4-card habit loop with streak & XP), PrecedentDuelArena.tsx (head-to-head battle card showdown with Battle IQ challenges), ConceptWebGraphView.tsx (2D interactive constellation node web with cluster filters, node inspector, and click traversal), dailyWorkoutData.ts, conceptWebData.ts; integrated into OverviewDashboard, PrecedentClashView, and PrecedentLineageView. Build verified cleanly.
- **Files Touched (8):** `M src/components/Views/OverviewDashboard.tsx`, `M src/components/Views/PrecedentClashView.tsx`, `M src/components/Views/PrecedentLineageView.tsx`, `?? src/components/Common/DailyConstitutionalWorkout.tsx`, `?? src/components/Views/ConceptWebGraphView.tsx`, `?? src/components/Views/PrecedentDuelArena.tsx`, `?? src/data/conceptWebData.ts`, `?? src/data/dailyWorkoutData.ts`
- **Git HEAD:** `main` @ `bda5d1d`

### [2026-11-20 16:01:54 (+05:30)] Sync project log with commit d003041 (DONE)
- **Details:** All 3 speed-mastery features committed and verified cleanly
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `d003041`

### [2026-11-20 16:01:14 (+05:30)] Add Pocket Cheatsheet Modal, Trap-Buster Arcade game, and Command Palette speed-hack indexing (DONE)
- **Details:** Created PocketCheatsheetModal.tsx (print-ready 2-page cheatsheet with +89/+90 pairs, majority rules, mnemonics, cheat codes), TrapBusterGame.tsx (30s True/False reflex game with sound, streaks, XP), trapBusterData.ts (20 high-yield assertion traps), precedentLineagesData.ts, integrated deep search in SearchModal.tsx, and verified clean build.
- **Files Touched (8):** `M src/components/Common/SearchModal.tsx`, `M src/components/Views/ArcadeHubView.tsx`, `M src/components/Views/FastTrackMasteryView.tsx`, `M src/components/Views/PrecedentLineageView.tsx`, `?? src/components/Common/PocketCheatsheetModal.tsx`, `?? src/components/Views/Arcade/TrapBusterGame.tsx`, `?? src/data/precedentLineagesData.ts`, `?? src/data/trapBusterData.ts`
- **Git HEAD:** `main` @ `094e7fd`

### [2026-11-20 15:23:22 (+05:30)] Added Bidirectional Article Solver, Constitutional Majority Matrix with Live Simulator, and Knowledge Graph Navigation (DONE)
- **Details:** Implemented real-time bidirectional +89/-90 solver, Constitutional Majority Matrix decoding all 4 majority types with live parliamentary chamber sliders, renamed sidebar tab to Knowledge Graphs (Trees), and added direct navigation from Overview and Speed Hacks.
- **Files Touched (4):** `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/FastTrackMasteryView.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/data/fastTrackHacksData.ts`
- **Git HEAD:** `main` @ `593b6ff`

### [2026-11-20 14:12:01 (+05:30)] Converted +89/+90 speed hack tiles into responsive inline expandable accordions (DONE)
- **Details:** Transformed disconnected two-column grid into self-contained accordion cards with animated chevron rotation, inline mathematical bridge, conceptual bridge, critical divergence, examiner trap, benchmark precedent, Bare Act direct navigation, and Expand/Collapse All controls. Tested and verified in live browser.
- **Files Touched (2):** `M src/components/Views/ArticlesMasterView.tsx`, `M src/components/Views/FastTrackMasteryView.tsx`
- **Git HEAD:** `main` @ `e952afe`

### [2026-11-20 13:35:31 (+05:30)] Added Contextual Speed Hacks in Bare Act Explorer and 7 Master Cheat Codes Wall (DONE)
- **Details:** Embedded dynamic speed hack banners in ArticlesMasterView linking paired articles with 1-click jumps, and added the 7 Master Cheat Codes Wall tab in FastTrackMasteryView with P-E-J-S-L-A, 15 percent ministry cap, and 62 vs 65 retirement staircase
- **Files Touched (3):** `M src/components/Views/ArticlesMasterView.tsx`, `M src/components/Views/FastTrackMasteryView.tsx`, `M src/data/fastTrackHacksData.ts`
- **Git HEAD:** `main` @ `b3963a3`

### [2026-11-20 13:08:21 (+05:30)] Built Fast-Track Constitutional Mastery Vault with Magic +89/+90 Rule & Mnemonic Engines (DONE)
- **Details:** Added fastTrackHacksData and FastTrackMasteryView featuring 23 +89/+90 conversion pairs with interactive calculator, 8 mnemonic engines (TEARS OF OLD PM, EDOUT, SAUMRT, EDS, HMPCQ, 21+71=92, SSSDR, 371 States), +4 Emergency Triad, 60s rapid reflex sprint, and printable pocket formula sheet
- **Files Touched (5):** `M src/App.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `?? src/components/Views/FastTrackMasteryView.tsx`, `?? src/data/fastTrackHacksData.ts`
- **Git HEAD:** `main` @ `9c25d8b`

### [2026-11-20 12:41:21 (+05:30)] Built Constitutional Readiness Index (CRI) and 25-Part Syllabus Heatmap (DONE)
- **Details:** Added readinessIndexService and ReadinessIndexView featuring exam weighting profiles, radial SVG gauge, 3-part critical blindspots sentinel, chromatic 25-part heatmap grid and category views, deep-dive diagnostic drawer, 10-Q live diagnostic test challenge, self-calibration slider, and printable audit report
- **Files Touched (5):** `M src/App.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `?? src/components/Views/ReadinessIndexView.tsx`, `?? src/services/readinessIndexService.ts`
- **Git HEAD:** `main` @ `12c64b5`

### [2026-11-19 14:06:34 (+05:30)] Expand Mains Mock Simulator with 12 multi-tier drills and custom paper builder (DONE)
- **Details:** Added 4 full 3-hr papers (DJS, UP PCS-J, BJS, UPSC Law), 4 1-hr sectional sprints, 4 30-min rapid drills, and an interactive custom exam generator pulling from the 100-question master vault. Verified live in browser at localhost:5173 with 0 errors.
- **Files Touched (1):** `M src/components/Views/MainsMockExamSimulatorView.tsx`
- **Git HEAD:** `main` @ `5bbabe8`

### [2026-11-19 14:00:19 (+05:30)] Implement Instant Answer Evaluator, Precedent Clash Arena, Judgment Writing Lab, and 3-Hour Mains Mock Hall (DONE)
- **Details:** Delivered answerEvaluatorService.ts, AnswerEvaluationCard.tsx, precedentClashesData.ts (10 battles), PrecedentClashView.tsx, judgmentLabData.ts, JudgmentWritingLabView.tsx, and MainsMockExamSimulatorView.tsx. Verified live in browser at localhost:5173 with 0 errors.
- **Files Touched (12):** `M src/App.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/components/Views/PyqVaultView.tsx`, `M src/types/mainsQuestionTypes.ts`, `?? src/components/Common/AnswerEvaluationCard.tsx`, `?? src/components/Views/JudgmentWritingLabView.tsx`, `?? src/components/Views/MainsMockExamSimulatorView.tsx`, `?? src/components/Views/PrecedentClashView.tsx`, `?? src/data/judgmentLabData.ts`, `?? src/data/precedentClashesData.ts`, `?? src/services/answerEvaluatorService.ts`
- **Git HEAD:** `main` @ `96d143e`

### [2026-11-19 13:02:43 (+05:30)] Complete 100-Question Mains Master Question Bank with Batch 3 and Batch 4 integration (DONE)
- **Details:** Delivered 30 questions in mainsBatch3.ts and 26 questions in mainsBatch4.ts to achieve full 100-question vault across 5M, 10M, 15M, and 20M+ marks tiers. Verified in browser at localhost:5173 with 0 errors, hover intel callouts, and clean build.
- **Files Touched (3):** `M src/data/mainsQuestionsData.ts`, `?? src/data/mains/mainsBatch3.ts`, `?? src/data/mains/mainsBatch4.ts`
- **Git HEAD:** `main` @ `46802c4`

### [2026-11-19 12:24:49 (+05:30)] Expand Mains Master Question Bank to 44 Questions (Batch 2) (DONE)
- **Details:** Added src/data/mains/mainsBatch1.ts (19 questions) and src/data/mains/mainsBatch2.ts (25 new questions) covering Pith & Substance, Colourable Legislation, Habeas Corpus, Mandamus, Fundamental Duties, Territorial Nexus, EWS 103rd Amendment, Reservations in Promotion (Nagaraj/Jarnail Singh), Commercial Speech, Custodial Violence Compensation, Handcuffing/Solitary Confinement, Pardoning Power, Re-promulgation of Ordinances, Speedy Trial, Passive Euthanasia (Common Cause 2023), Minority Institutions (CMC Vellore), Anti-Defection (Subhash Desai 2023), Quashing FIRs (Bhajan Lal/Neeharika), Repugnancy under Art 254, Election Commission Autonomy (Anoop Baranwal 2023), PIL Locus Standi (Chaufal), President's Rule (Bommai), Harmonious Construction (Minerva Mills), Civil Servants Art 311 (Tulsiram Patel), and Art 370 Abrogation (2023 Bench). Total in app: 68 Mains questions.
- **Files Touched (2):** `M src/data/mainsQuestionsData.ts`, `?? src/data/mains/`
- **Git HEAD:** `main` @ `a025b61`

### [2026-11-19 11:55:59 (+05:30)] Add Mains Exam Question Bank, Interactive Hover Callouts, Marks Filters, Live Word Pacer & Handwritten Page Meter (DONE)
- **Details:** Created src/types/mainsQuestionTypes.ts, QuestionIntelHoverCard.tsx, mainsQuestionsData.ts with authentic PYQs across 5M/10M/15M/20M/25M marks tiers, and upgraded PyqVaultView.tsx with marks/exam filters, live word-to-page gauge, and marks-calibrated timer. Verified via browser subagent with 0 console errors.
- **Files Touched (5):** `M src/components/Views/PyqVaultView.tsx`, `M src/data/allIndiaJudicialTopics.ts`, `?? src/components/Common/QuestionIntelHoverCard.tsx`, `?? src/data/mainsQuestionsData.ts`, `?? src/types/mainsQuestionTypes.ts`
- **Git HEAD:** `main` @ `78c5f7d`

### [2026-11-19 11:18:26 (+05:30)] Harmonize Real Case Stories and Bare Act Explorer with Theme Tokens (DONE)
- **Details:** Finalized commit badc8f6 eliminating harsh amber/yellow in favor of native CSS theme variables.
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `badc8f6`

### [2026-11-19 11:17:59 (+05:30)] Harmonize Real Case Stories and Bare Act Explorer with Theme Tokens (DONE)
- **Details:** Replaced all hardcoded amber/yellow Tailwind classes with dynamic CSS theme tokens (var(--accent), var(--accent-contrast), var(--badge-bg), var(--badge-border)). Fixed color clashing in Mono Pink and all other themes.
- **Files Touched (2):** `M src/components/Views/ArticleRealCaseStoryTab.tsx`, `M src/components/Views/ArticlesMasterView.tsx`
- **Git HEAD:** `main` @ `75be064`

### [2026-11-19 11:05:11 (+05:30)] Expand Real Case Law Stories to 65 Landmark Precedents across Parts I to XXI (DONE)
- **Details:** Finalized commit 852dd5a with 65 authentic Indian Law Reports case stories and multi-case article selector.
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `852dd5a`

### [2026-11-19 11:04:43 (+05:30)] Expand Real Case Law Stories to 65 Landmark Precedents across Parts I to XXI (DONE)
- **Details:** Added 37 new authentic courtroom dramas from official Indian Law Reports (AIR/SCC/SCR) including Romesh Thappar, Shirur Mutt, TMA Pai, Minerva Mills, Property Owners Association, Shamsher Singh, Sita Soren, Golaknath, and Kihoto Hollohan. Added multi-case precedent selector for articles with multiple landmark decisions.
- **Files Touched (3):** `M src/components/Views/ArticleRealCaseStoryTab.tsx`, `M src/data/realCaseStoriesData.ts`, `M src/services/caseStoryService.ts`
- **Git HEAD:** `main` @ `a15f579`

### [2026-11-19 01:36:06 (+05:30)] Add 100% Authentic Real Case Law Stories across Bare Act Articles (DONE)
- **Details:** Finalized commit e3a6613 with full real case stories dataset, 4-chapter narrative UI, directory badges, and seamless Bare Act integration.
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `e3a6613`

### [2026-11-19 01:35:23 (+05:30)] Add 100% Authentic Real Case Law Stories across Bare Act Articles (DONE)
- **Details:** Implemented comprehensive authentic Indian Law Reports (AIR/SCC/SCR) case stories across Parts I-XXI with 4-chapter narrative structure, courtroom debate, landmark verbatim holdings, living legacy, directory badges, and seamless reader integration. Zero build errors.
- **Files Touched (4):** `M src/components/Views/ArticlesMasterView.tsx`, `?? src/components/Views/ArticleRealCaseStoryTab.tsx`, `?? src/data/realCaseStoriesData.ts`, `?? src/services/caseStoryService.ts`
- **Git HEAD:** `main` @ `7aac50b`

### [2026-11-19 01:28:37 (+05:30)] Add 100% Authentic Real Case Law Stories for Constitutional Articles (DONE)
- **Details:** Created RealCaseStoriesData with 100% documented law report records (AIR/SCC/SCR), CaseStoryService, ArticleRealCaseStoryTab with 4-chapter narrative dossiers (Ground Facts, Courtroom Clash, Verbatim Ratio, Living Legacy), integrated Real Case Story tab and STORY badges into Bare Act Explorer
- **Files Touched (4):** `M src/components/Views/ArticlesMasterView.tsx`, `?? src/components/Views/ArticleRealCaseStoryTab.tsx`, `?? src/data/realCaseStoriesData.ts`, `?? src/services/caseStoryService.ts`
- **Git HEAD:** `main` @ `7aac50b`

### [2026-11-19 00:25:55 (+05:30)] Committed Constitutional Arcade (8554304) (DONE)
- **Details:** Ready for GitHub push sync
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `8554304`

### [2026-11-19 00:25:12 (+05:30)] Add Constitutional Arcade with Chief Justice Bench Simulator, 60s Article Blitz, Writs Emergency Room, and Judicial Career Progression (DONE)
- **Details:** E2E browser tested live: Chief Justice 5-Judge Bench Simulator with 4 crisis dockets, 60s Article Blitz with combo multipliers & keyboard 1-4 shortcuts, Writs Emergency Room with 8 citizen scenarios, 7-tier Judicial Career Rank system (Intern to CJI) with 12 badges, Web Audio arcade sound engine, and zero console errors
- **Files Touched (11):** `M src/App.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/services/progressVaultService.ts`, `?? src/components/Views/Arcade/`, `?? src/components/Views/ArcadeHubView.tsx`, `?? src/data/articleBlitzData.ts`, `?? src/data/benchSimulatorData.ts`, `?? src/data/writsEmergencyData.ts`, `?? src/services/arcadeAudioService.ts`, `?? src/services/judicialCareerService.ts`
- **Git HEAD:** `main` @ `3ce9f3d`

### [2026-11-19 00:21:10 (+05:30)] Build Constitutional Arcade Gaming Hub with CJ Bench Simulator, 60s Article Blitz, Writs Emergency Room, and Judicial Career Progression (DONE)
- **Details:** Created JudicialCareerService with 7 ranks (Intern to CJI), 12 badges, Web Audio arcade audio engine; built Chief Justice Bench Simulator with 4 detailed constitutional crisis petitions; built 60s Article Blitz speed recall; built Writs Emergency Room with 8 citizen scenarios; integrated with Overview and Sidebar
- **Files Touched (11):** `M src/App.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/services/progressVaultService.ts`, `?? src/components/Views/Arcade/`, `?? src/components/Views/ArcadeHubView.tsx`, `?? src/data/articleBlitzData.ts`, `?? src/data/benchSimulatorData.ts`, `?? src/data/writsEmergencyData.ts`, `?? src/services/arcadeAudioService.ts`, `?? src/services/judicialCareerService.ts`
- **Git HEAD:** `main` @ `3ce9f3d`

### [2026-11-18 23:29:47 (+05:30)] Committed 106 Amendments, ELI5 modes, Progress Vault, and code splitting (DONE)
- **Details:** Committed as 1603e66. Ready for GitHub push sync
- **Files Touched:** No working-tree file diffs
- **Git HEAD:** `main` @ `1603e66`

### [2026-11-18 23:29:08 (+05:30)] Verified 106 Amendments, ELI5 modes, Progress Vault, and code splitting in live browser (DONE)
- **Details:** E2E browser verification confirmed all 106 Amendments with ELI5, Progress Vault export/restore modal, Schedules & Landmark Cases ELI5 toggles, and zero console errors
- **Files Touched (14):** `M src/App.tsx`, `M src/components/Common/GlobalDictionaryModal.tsx`, `M src/components/Layout/Header.tsx`, `M src/components/Views/AmendmentsView.tsx`, `M src/components/Views/FlashcardsView.tsx`, `M src/components/Views/LandmarkCasesView.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/components/Views/SchedulesView.tsx`, `M src/context/ThemeContext.tsx`, `M src/data/amendmentsData.ts`, `M src/services/flashcardService.ts`, `?? src/components/Common/ProgressVaultModal.tsx`, `?? src/services/flashcardPinStore.ts`, `?? src/services/progressVaultService.ts`
- **Git HEAD:** `main` @ `9e33658`

### [2026-11-18 23:24:28 (+05:30)] Complete 106 Amendments, ELI5 modes for Cases/Schedules, Progress Vault backup, and code-split lazy loading (DONE)
- **Details:** Populated all 106 Amendments (1951-2023) with ELI5/exam hooks; added ELI5 toggles to Landmark Cases and Schedules; created Progress Vault JSON export/restore; added live Study Readiness strip to Overview; code-split secondary views with React.lazy; verified build in 19.68s
- **Files Touched (14):** `M src/App.tsx`, `M src/components/Common/GlobalDictionaryModal.tsx`, `M src/components/Layout/Header.tsx`, `M src/components/Views/AmendmentsView.tsx`, `M src/components/Views/FlashcardsView.tsx`, `M src/components/Views/LandmarkCasesView.tsx`, `M src/components/Views/OverviewDashboard.tsx`, `M src/components/Views/SchedulesView.tsx`, `M src/context/ThemeContext.tsx`, `M src/data/amendmentsData.ts`, `M src/services/flashcardService.ts`, `?? src/components/Common/ProgressVaultModal.tsx`, `?? src/services/flashcardPinStore.ts`, `?? src/services/progressVaultService.ts`
- **Git HEAD:** `main` @ `9e33658`

### [2026-11-18 22:59:54 (+05:30)] Expanded 5-Box Leitner SRS Flashcards app-wide across all datasets, views, and all 15 Bootcamp Days (DONE)
- **Details:** Upgraded flashcardService.ts with dynamic zero-duplicate hydration for all 505 Bare Act Articles, 136 Landmark Cases, 12 Schedules, 10 Doctrines, 20 Amendments, 215 Legal Dictionary terms/maxims, 15 Bootcamp Days, Mistakes Bank, custom cards, and lightweight v3 localStorage progress store with v1/v2 migration. Added launchFlashcardDeck/togglePinFlashcard to ThemeContext. Upgraded FlashcardsView with search, Part/Topic/Day/Category sub-filters, ELI5 card backs, Pin/Focus queue, shuffle, and custom card creator. Created BootcampDayFlashcards and embedded as Sub-Tab 7 & Task 7 in StudyBootcampView. Wired SRS Drill & Pin buttons across ArticlesMasterView, TopicDetailView, LandmarkCasesView, DoctrinesHubView, SchedulesView, AmendmentsView, DictionaryView, GlobalDictionaryModal, MistakesNotebookView, and Sidebar. Verified via tsc -b && vite build (0 errors) and live browser check on http://localhost:5173/.
- **Files Touched (15):** `M src/components/Common/GlobalDictionaryModal.tsx`, `M src/components/Layout/Sidebar.tsx`, `M src/components/Views/AmendmentsView.tsx`, `M src/components/Views/ArticlesMasterView.tsx`, `M src/components/Views/DictionaryView.tsx`, `M src/components/Views/DoctrinesHubView.tsx`, `M src/components/Views/FlashcardsView.tsx`, `M src/components/Views/LandmarkCasesView.tsx`, `M src/components/Views/MistakesNotebookView.tsx`, `M src/components/Views/SchedulesView.tsx`, `M src/components/Views/StudyBootcampView.tsx`, `M src/components/Views/TopicDetailView.tsx`, `M src/context/ThemeContext.tsx`, `M src/services/flashcardService.ts`, `?? src/components/Views/BootcampDayFlashcards.tsx`
- **Git HEAD:** `main` @ `7da595c`

### [2026-11-18 20:57:47 (+05:30)] Established automated persistent project log and always-on workspace logging rule (DONE)
- **Details:** Created scripts/updateProjectLog.cjs (npm run log:update), AGENTS.md always-on workspace rule, and generated full PROJECT_LOG.md indexing all project files, steps, and 60 git commits.
- **Files Touched (3):** `M package.json`, `?? AGENTS.md`, `?? scripts/updateProjectLog.cjs`
- **Git HEAD:** `main` @ `c4ae501`

### [2026-11-18 20:57:45 (+05:30)] Recovered full repository from GitHub (origin/main @ c4ae501) after external drive corruption (DONE)
- **Details:** Cloned 60 commits and 232 tracked files into i:\projects\constitution, restored node_modules via npm install, verified tsc -b && vite build (0 errors, 6.84s), and verified live preview on http://localhost:5173/ (Landing, Preamble, 4-stage roadmap, Bare Act Explorer + ELI5 toggle, 0 console errors).
- **Files Touched (7):** `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `src/**`, `public/**`, `scripts/**`
- **Git HEAD:** `main` @ `c4ae501`

<!-- AUTO:STEPS:END -->

---

## Complete File Inventory

<!-- AUTO:FILES:START -->
> Indexed **279** project files across **32** directories (excluding `node_modules/`, `dist/`, `.git/`).

### `(root)` (12 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `.gitignore` | 287 B | 26 | `3fcf3c8` (2026-11-14) |
| `.oxlintrc.json` | 253 B | 9 | `3c486dd` (2026-11-13) |
| `AGENTS.md` | 1.4 KB | 19 | `7da595c` (2026-11-18) |
| `index.html` | 1.5 KB | 22 | `ea3d899` (2026-11-16) |
| `package-lock.json` | 74.8 KB | 2307 | `3c486dd` (2026-11-13) |
| `package.json` | 766 B | 32 | `7da595c` (2026-11-18) |
| `PROJECT_LOG.md` | 63.6 KB | 771 | `5294c7c` (2026-11-21) |
| `README.md` | 1.3 KB | 33 | `3c486dd` (2026-11-13) |
| `tsconfig.app.json` | 683 B | 27 | `3c486dd` (2026-11-13) |
| `tsconfig.json` | 126 B | 8 | `3c486dd` (2026-11-13) |
| `tsconfig.node.json` | 581 B | 24 | `3c486dd` (2026-11-13) |
| `vite.config.ts` | 2.3 KB | 67 | `a058cc1` (2026-11-16) |

### `public` (4 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `public/favicon.svg` | 9.3 KB | 1 | `3c486dd` (2026-11-13) |
| `public/icons.svg` | 4.9 KB | 25 | `3c486dd` (2026-11-13) |
| `public/manifest.json` | 1.2 KB | 22 | `ea3d899` (2026-11-16) |
| `public/sw.js` | 1.5 KB | 58 | `ea3d899` (2026-11-16) |

### `scripts` (2 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `scripts/buildBareActDataset.cjs` | 149.0 KB | 598 | `3db5394` (2026-11-16) |
| `scripts/updateProjectLog.cjs` | 10.2 KB | 345 | `7da595c` (2026-11-18) |

### `src` (3 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/App.tsx` | 11.3 KB | 201 | `b3963a3` (2026-11-20) |
| `src/index.css` | 13.6 KB | 515 | `ef6f11d` (2026-11-17) |
| `src/main.tsx` | 570 B | 20 | `ea3d899` (2026-11-16) |

### `src/assets` (3 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/assets/hero.png` | 12.8 KB | — | `3c486dd` (2026-11-13) |
| `src/assets/react.svg` | 4.0 KB | 1 | `3c486dd` (2026-11-13) |
| `src/assets/vite.svg` | 8.5 KB | 2 | `3c486dd` (2026-11-13) |

### `src/components/Common` (9 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/components/Common/AnnotatedLegalText.tsx` | 9.2 KB | 246 | `409818a` (2026-11-14) |
| `src/components/Common/AnswerEvaluationCard.tsx` | 12.9 KB | 298 | `5bbabe8` (2026-11-19) |
| `src/components/Common/DailyConstitutionalWorkout.tsx` | 22.6 KB | 472 | `0d4bd48` (2026-11-21) |
| `src/components/Common/GlobalDictionaryModal.tsx` | 21.3 KB | 459 | `3ce9f3d` (2026-11-18) |
| `src/components/Common/PocketCheatsheetModal.tsx` | 10.8 KB | 224 | `d003041` (2026-11-20) |
| `src/components/Common/ProgressVaultModal.tsx` | 10.5 KB | 259 | `3ce9f3d` (2026-11-18) |
| `src/components/Common/QuestionIntelHoverCard.tsx` | 10.5 KB | 255 | `a025b61` (2026-11-19) |
| `src/components/Common/SearchModal.tsx` | 17.0 KB | 430 | `d32e8e2` (2026-11-21) |
| `src/components/Common/UniversalDictionaryPopover.tsx` | 10.8 KB | 292 | `b351247` (2026-11-15) |

### `src/components/Layout` (3 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/components/Layout/Header.tsx` | 5.8 KB | 106 | `3ce9f3d` (2026-11-18) |
| `src/components/Layout/Sidebar.tsx` | 14.2 KB | 271 | `99a2930` (2026-11-20) |
| `src/components/Layout/ThemeSelector.tsx` | 10.3 KB | 241 | `be6170e` (2026-11-17) |

### `src/components/VectorDiagrams` (17 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/components/VectorDiagrams/AmendmentPipelineSVG.tsx` | 13.4 KB | 261 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/Article21EvolutionSVG.tsx` | 8.6 KB | 192 | `3c486dd` (2026-11-13) |
| `src/components/VectorDiagrams/AsymmetricFederalismSVG.tsx` | 9.1 KB | 199 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/BasicStructureEvolutionSVG.tsx` | 10.2 KB | 241 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/CivilServicesSafeguardsSVG.tsx` | 12.8 KB | 183 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/CriminalConstitutionalPipelineSVG.tsx` | 19.8 KB | 402 | `a423d55` (2026-11-13) |
| `src/components/VectorDiagrams/ElectoralArchitectureSVG.tsx` | 7.3 KB | 109 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/EmergencyMatrixSVG.tsx` | 10.3 KB | 198 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/ExecutiveClemencyArchitectureSVG.tsx` | 27.8 KB | 559 | `fc3e951` (2026-11-13) |
| `src/components/VectorDiagrams/FederalRelationsSVG.tsx` | 10.4 KB | 237 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/GSTCouncilFiscalSVG.tsx` | 12.6 KB | 188 | `dc47388` (2026-11-13) |
| `src/components/VectorDiagrams/LegislativePassageSVG.tsx` | 11.4 KB | 219 | `3c486dd` (2026-11-13) |
| `src/components/VectorDiagrams/PreambleArchitectureSVG.tsx` | 10.8 KB | 256 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/PrecedentLineageSVG.tsx` | 58.0 KB | 1127 | `e980352` (2026-11-14) |
| `src/components/VectorDiagrams/SchedulesGenealogySVG.tsx` | 6.0 KB | 143 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/SeparationOfPowersSVG.tsx` | 15.1 KB | 279 | `19a5ef8` (2026-11-13) |
| `src/components/VectorDiagrams/WritsMatrixSVG.tsx` | 17.2 KB | 424 | `19a5ef8` (2026-11-13) |

### `src/components/Views` (32 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/components/Views/AmendmentsView.tsx` | 24.6 KB | 502 | `003e2d2` (2026-11-21) |
| `src/components/Views/ArcadeHubView.tsx` | 10.5 KB | 238 | `d32e8e2` (2026-11-21) |
| `src/components/Views/ArticleRealCaseStoryTab.tsx` | 11.4 KB | 253 | `78c5f7d` (2026-11-19) |
| `src/components/Views/ArticlesMasterView.tsx` | 71.4 KB | 1372 | `003e2d2` (2026-11-21) |
| `src/components/Views/AudioBriefingsView.tsx` | 17.7 KB | 393 | `ea3d899` (2026-11-16) |
| `src/components/Views/BootcampDayFlashcards.tsx` | 17.3 KB | 377 | `9e33658` (2026-11-18) |
| `src/components/Views/BootcampDayMemoryGame.tsx` | 24.7 KB | 613 | `ef6f11d` (2026-11-17) |
| `src/components/Views/ComparativeLawView.tsx` | 7.8 KB | 162 | `409818a` (2026-11-14) |
| `src/components/Views/ConceptWebGraphView.tsx` | 36.9 KB | 861 | `003e2d2` (2026-11-21) |
| `src/components/Views/DictionaryView.tsx` | 13.3 KB | 270 | `9e33658` (2026-11-18) |
| `src/components/Views/DoctrinesHubView.tsx` | 23.3 KB | 460 | `003e2d2` (2026-11-21) |
| `src/components/Views/FastTrackMasteryView.tsx` | 96.1 KB | 1837 | `d32e8e2` (2026-11-21) |
| `src/components/Views/FlashcardsView.tsx` | 51.2 KB | 1141 | `3ce9f3d` (2026-11-18) |
| `src/components/Views/JudgmentWritingLabView.tsx` | 24.8 KB | 497 | `5bbabe8` (2026-11-19) |
| `src/components/Views/LandmarkCasesView.tsx` | 57.3 KB | 1058 | `003e2d2` (2026-11-21) |
| `src/components/Views/MainsAnswerWritingLabView.tsx` | 20.1 KB | 463 | `a058cc1` (2026-11-16) |
| `src/components/Views/MainsMockExamSimulatorView.tsx` | 42.2 KB | 938 | `12c64b5` (2026-11-19) |
| `src/components/Views/MistakesNotebookView.tsx` | 23.0 KB | 518 | `9e33658` (2026-11-18) |
| `src/components/Views/MockExamSimulatorView.tsx` | 35.0 KB | 815 | `a058cc1` (2026-11-16) |
| `src/components/Views/OverviewDashboard.tsx` | 28.0 KB | 449 | `0d4bd48` (2026-11-21) |
| `src/components/Views/PrecedentClashView.tsx` | 21.0 KB | 431 | `5294c7c` (2026-11-21) |
| `src/components/Views/PrecedentDuelArena.tsx` | 13.8 KB | 314 | `5294c7c` (2026-11-21) |
| `src/components/Views/PrecedentLineageView.tsx` | 14.5 KB | 298 | `003e2d2` (2026-11-21) |
| `src/components/Views/PrintableRevisionView.tsx` | 9.8 KB | 210 | `a058cc1` (2026-11-16) |
| `src/components/Views/PyqVaultView.tsx` | 77.6 KB | 1446 | `5bbabe8` (2026-11-19) |
| `src/components/Views/QuizMasteryView.tsx` | 10.2 KB | 237 | `eb17fbd` (2026-11-14) |
| `src/components/Views/ReadinessIndexView.tsx` | 54.9 KB | 1111 | `9c25d8b` (2026-11-20) |
| `src/components/Views/SchedulesView.tsx` | 14.6 KB | 254 | `3ce9f3d` (2026-11-18) |
| `src/components/Views/StudyBootcampView.tsx` | 127.1 KB | 2492 | `9e33658` (2026-11-18) |
| `src/components/Views/TileMatcherGameView.tsx` | 25.3 KB | 602 | `ef6f11d` (2026-11-17) |
| `src/components/Views/TopicDetailView.tsx` | 36.8 KB | 720 | `9e33658` (2026-11-18) |
| `src/components/Views/VisualLabView.tsx` | 16.4 KB | 373 | `fc3e951` (2026-11-13) |

### `src/components/Views/Arcade` (5 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/components/Views/Arcade/ArticleBlitzGame.tsx` | 21.3 KB | 504 | `7aac50b` (2026-11-19) |
| `src/components/Views/Arcade/CareerBadgesModal.tsx` | 5.9 KB | 135 | `7aac50b` (2026-11-19) |
| `src/components/Views/Arcade/ChiefJusticeBenchSimulator.tsx` | 26.3 KB | 574 | `7aac50b` (2026-11-19) |
| `src/components/Views/Arcade/TrapBusterGame.tsx` | 15.8 KB | 364 | `d003041` (2026-11-20) |
| `src/components/Views/Arcade/WritsEmergencyRoom.tsx` | 12.8 KB | 322 | `7aac50b` (2026-11-19) |

### `src/context` (1 file)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/context/ThemeContext.tsx` | 6.4 KB | 185 | `3ce9f3d` (2026-11-18) |

### `src/data` (52 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/allConstitutionArticlesCatalog.json` | 173.6 KB | 4648 | `3db5394` (2026-11-16) |
| `src/data/allIndiaJudicialTopics.ts` | 15.5 KB | 291 | `a025b61` (2026-11-19) |
| `src/data/amendmentDiffsData.ts` | 39.9 KB | 459 | `3db5394` (2026-11-16) |
| `src/data/amendmentsData.ts` | 101.9 KB | 1413 | `3ce9f3d` (2026-11-18) |
| `src/data/articleBlitzData.ts` | 15.0 KB | 337 | `7aac50b` (2026-11-19) |
| `src/data/articlesMasterData.ts` | 33.1 KB | 175 | `e3546e4` (2026-11-14) |
| `src/data/benchSimulatorData.ts` | 23.1 KB | 469 | `7aac50b` (2026-11-19) |
| `src/data/caseLawsDetailedData.ts` | 237.9 KB | 2339 | `e980352` (2026-11-14) |
| `src/data/comparativeData.ts` | 8.3 KB | 200 | `3c486dd` (2026-11-13) |
| `src/data/conceptWebData.ts` | 35.8 KB | 846 | `7ff35ca` (2026-11-20) |
| `src/data/dailyWorkoutData.ts` | 16.6 KB | 294 | `76d187c` (2026-11-20) |
| `src/data/doctrinesData.ts` | 28.0 KB | 243 | `c4ae501` (2026-11-17) |
| `src/data/fastTrackHacksData.ts` | 69.3 KB | 1226 | `99a2930` (2026-11-20) |
| `src/data/forensicVocabularyData.ts` | 19.1 KB | 314 | `b351247` (2026-11-15) |
| `src/data/judgmentLabData.ts` | 20.8 KB | 315 | `5bbabe8` (2026-11-19) |
| `src/data/judgmentsData.ts` | 8.1 KB | 112 | `3c486dd` (2026-11-13) |
| `src/data/legalDictionaryData.ts` | 239.6 KB | 2159 | `f3c4d68` (2026-11-14) |
| `src/data/mainsQuestionsData.ts` | 503 B | 15 | `96d143e` (2026-11-19) |
| `src/data/part10TribalData.ts` | 7.7 KB | 86 | `4fb3dbf` (2026-11-14) |
| `src/data/part11FederalData.ts` | 27.7 KB | 353 | `eae5768` (2026-11-13) |
| `src/data/part12FinanceData.ts` | 25.2 KB | 318 | `eae5768` (2026-11-13) |
| `src/data/part13TradeData.ts` | 8.2 KB | 95 | `4fb3dbf` (2026-11-14) |
| `src/data/part14aTribunalsData.ts` | 8.5 KB | 88 | `4fb3dbf` (2026-11-14) |
| `src/data/part14ServicesData.ts` | 19.5 KB | 241 | `eae5768` (2026-11-13) |
| `src/data/part15ElectionsData.ts` | 15.5 KB | 176 | `e365e73` (2026-11-14) |
| `src/data/part16ClassesData.ts` | 18.0 KB | 189 | `4fb3dbf` (2026-11-14) |
| `src/data/part17LanguageData.ts` | 14.4 KB | 165 | `e365e73` (2026-11-14) |
| `src/data/part18EmergencyData.ts` | 24.5 KB | 275 | `eae5768` (2026-11-13) |
| `src/data/part19MiscData.ts` | 17.2 KB | 165 | `4fb3dbf` (2026-11-14) |
| `src/data/part1TerritoryData.ts` | 13.0 KB | 157 | `e365e73` (2026-11-14) |
| `src/data/part20AmendmentData.ts` | 6.4 KB | 68 | `eae5768` (2026-11-13) |
| `src/data/part21SpecialData.ts` | 15.6 KB | 174 | `eae5768` (2026-11-13) |
| `src/data/part22ClosingData.ts` | 12.2 KB | 133 | `4fb3dbf` (2026-11-14) |
| `src/data/part2CitizenshipData.ts` | 20.6 KB | 245 | `e365e73` (2026-11-14) |
| `src/data/part3FundamentalRightsData.ts` | 94.5 KB | 1221 | `a859fb4` (2026-11-14) |
| `src/data/part4aDutiesData.ts` | 7.0 KB | 96 | `e365e73` (2026-11-14) |
| `src/data/part4DPSPData.ts` | 54.6 KB | 695 | `a423d55` (2026-11-13) |
| `src/data/part5UnionData.ts` | 99.2 KB | 1170 | `e3546e4` (2026-11-14) |
| `src/data/part6StatesData.ts` | 44.4 KB | 537 | `a859fb4` (2026-11-14) |
| `src/data/part8UTsData.ts` | 9.7 KB | 108 | `4fb3dbf` (2026-11-14) |
| `src/data/part9aMunicipalitiesData.ts` | 12.6 KB | 148 | `4fb3dbf` (2026-11-14) |
| `src/data/part9LocalGovernanceData.ts` | 17.8 KB | 219 | `e365e73` (2026-11-14) |
| `src/data/partsData.ts` | 44.6 KB | 740 | `4fb3dbf` (2026-11-14) |
| `src/data/preambleData.ts` | 6.9 KB | 121 | `3c486dd` (2026-11-13) |
| `src/data/precedentClashesData.ts` | 56.8 KB | 906 | `5bbabe8` (2026-11-19) |
| `src/data/precedentLineagesData.ts` | 17.2 KB | 296 | `d003041` (2026-11-20) |
| `src/data/pyqData.ts` | 1.1 KB | 39 | `ea3d899` (2026-11-16) |
| `src/data/quizData.ts` | 6.8 KB | 125 | `3c486dd` (2026-11-13) |
| `src/data/realCaseStoriesData.ts` | 161.9 KB | 1389 | `75be064` (2026-11-19) |
| `src/data/schedulesData.ts` | 10.5 KB | 189 | `3c486dd` (2026-11-13) |
| `src/data/trapBusterData.ts` | 11.2 KB | 199 | `d003041` (2026-11-20) |
| `src/data/writsEmergencyData.ts` | 10.8 KB | 164 | `7aac50b` (2026-11-19) |

### `src/data/bootcamp` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/articleLookup.ts` | 4.0 KB | 112 | `7a96362` (2026-11-14) |
| `src/data/bootcamp/bootcampLinks.ts` | 19.4 KB | 387 | `58746c9` (2026-11-14) |
| `src/data/bootcamp/bootcampTypes.ts` | 2.3 KB | 98 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/days11to15.ts` | 48.9 KB | 461 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/days1to5.ts` | 49.5 KB | 465 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/days6to10.ts` | 49.7 KB | 464 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/index.ts` | 785 B | 25 | `6de8c28` (2026-11-15) |

### `src/data/bootcamp/day1` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day1/day1CaseStudies.ts` | 56.4 KB | 741 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/day1McqsRound1.ts` | 31.1 KB | 605 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/day1McqsRound2.ts` | 36.5 KB | 605 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/day1McqsRound3.ts` | 37.6 KB | 727 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/day1McqsRound4.ts` | 30.2 KB | 605 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/day1McqsRound5.ts` | 46.7 KB | 605 | `6de8c28` (2026-11-15) |
| `src/data/bootcamp/day1/index.ts` | 769 B | 25 | `6de8c28` (2026-11-15) |

### `src/data/bootcamp/day10` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day10/day10CaseStudies.ts` | 87.2 KB | 929 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/day10McqsRound1.ts` | 31.1 KB | 565 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/day10McqsRound2.ts` | 38.4 KB | 565 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/day10McqsRound3.ts` | 39.5 KB | 565 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/day10McqsRound4.ts` | 32.4 KB | 565 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/day10McqsRound5.ts` | 49.0 KB | 565 | `2096e89` (2026-11-15) |
| `src/data/bootcamp/day10/index.ts` | 761 B | 25 | `2096e89` (2026-11-15) |

### `src/data/bootcamp/day11` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day11/day11CaseStudies.ts` | 87.5 KB | 923 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/day11McqsRound1.ts` | 30.8 KB | 565 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/day11McqsRound2.ts` | 40.3 KB | 565 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/day11McqsRound3.ts` | 41.1 KB | 565 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/day11McqsRound4.ts` | 33.4 KB | 565 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/day11McqsRound5.ts` | 50.9 KB | 565 | `f88f557` (2026-11-15) |
| `src/data/bootcamp/day11/index.ts` | 761 B | 25 | `f88f557` (2026-11-15) |

### `src/data/bootcamp/day12` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day12/day12CaseStudies.ts` | 89.7 KB | 975 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/day12McqsRound1.ts` | 38.6 KB | 565 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/day12McqsRound2.ts` | 42.6 KB | 565 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/day12McqsRound3.ts` | 45.8 KB | 565 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/day12McqsRound4.ts` | 37.6 KB | 565 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/day12McqsRound5.ts` | 55.1 KB | 565 | `4c05d96` (2026-11-15) |
| `src/data/bootcamp/day12/index.ts` | 761 B | 25 | `4c05d96` (2026-11-15) |

### `src/data/bootcamp/day13` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day13/day13CaseStudies.ts` | 84.6 KB | 975 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/day13McqsRound1.ts` | 33.6 KB | 565 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/day13McqsRound2.ts` | 40.1 KB | 565 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/day13McqsRound3.ts` | 45.0 KB | 565 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/day13McqsRound4.ts` | 36.7 KB | 565 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/day13McqsRound5.ts` | 54.9 KB | 565 | `ece9ca8` (2026-11-15) |
| `src/data/bootcamp/day13/index.ts` | 761 B | 25 | `ece9ca8` (2026-11-15) |

### `src/data/bootcamp/day14` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day14/day14CaseStudies.ts` | 84.3 KB | 937 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/day14McqsRound1.ts` | 39.9 KB | 565 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/day14McqsRound2.ts` | 40.8 KB | 565 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/day14McqsRound3.ts` | 42.0 KB | 565 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/day14McqsRound4.ts` | 31.0 KB | 565 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/day14McqsRound5.ts` | 56.1 KB | 565 | `1022b50` (2026-11-15) |
| `src/data/bootcamp/day14/index.ts` | 761 B | 25 | `1022b50` (2026-11-15) |

### `src/data/bootcamp/day15` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day15/day15CaseStudies.ts` | 96.6 KB | 951 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/day15McqsRound1.ts` | 37.2 KB | 565 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/day15McqsRound2.ts` | 42.3 KB | 565 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/day15McqsRound3.ts` | 41.9 KB | 565 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/day15McqsRound4.ts` | 40.2 KB | 565 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/day15McqsRound5.ts` | 52.5 KB | 565 | `5eba82b` (2026-11-15) |
| `src/data/bootcamp/day15/index.ts` | 761 B | 25 | `5eba82b` (2026-11-15) |

### `src/data/bootcamp/day2` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day2/day2CaseStudies.ts` | 79.4 KB | 937 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/day2McqsRound1.ts` | 34.5 KB | 605 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/day2McqsRound2.ts` | 40.6 KB | 605 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/day2McqsRound3.ts` | 45.7 KB | 605 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/day2McqsRound4.ts` | 37.5 KB | 605 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/day2McqsRound5.ts` | 50.0 KB | 605 | `f4b0190` (2026-11-15) |
| `src/data/bootcamp/day2/index.ts` | 769 B | 25 | `f4b0190` (2026-11-15) |

### `src/data/bootcamp/day3` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day3/day3CaseStudies.ts` | 82.5 KB | 931 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/day3McqsRound1.ts` | 34.0 KB | 605 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/day3McqsRound2.ts` | 41.1 KB | 605 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/day3McqsRound3.ts` | 41.7 KB | 605 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/day3McqsRound4.ts` | 35.0 KB | 605 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/day3McqsRound5.ts` | 52.0 KB | 605 | `54059a6` (2026-11-15) |
| `src/data/bootcamp/day3/index.ts` | 769 B | 25 | `54059a6` (2026-11-15) |

### `src/data/bootcamp/day4` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day4/day4CaseStudies.ts` | 75.0 KB | 927 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/day4McqsRound1.ts` | 37.5 KB | 605 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/day4McqsRound2.ts` | 39.9 KB | 605 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/day4McqsRound3.ts` | 42.0 KB | 605 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/day4McqsRound4.ts` | 40.2 KB | 605 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/day4McqsRound5.ts` | 54.1 KB | 605 | `02e0b69` (2026-11-15) |
| `src/data/bootcamp/day4/index.ts` | 769 B | 25 | `02e0b69` (2026-11-15) |

### `src/data/bootcamp/day5` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day5/day5CaseStudies.ts` | 72.4 KB | 928 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/day5McqsRound1.ts` | 36.2 KB | 605 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/day5McqsRound2.ts` | 38.0 KB | 605 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/day5McqsRound3.ts` | 39.2 KB | 605 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/day5McqsRound4.ts` | 34.5 KB | 605 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/day5McqsRound5.ts` | 49.8 KB | 605 | `3256fe4` (2026-11-15) |
| `src/data/bootcamp/day5/index.ts` | 769 B | 25 | `3256fe4` (2026-11-15) |

### `src/data/bootcamp/day6` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day6/day6CaseStudies.ts` | 86.6 KB | 933 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/day6McqsRound1.ts` | 32.8 KB | 605 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/day6McqsRound2.ts` | 41.1 KB | 605 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/day6McqsRound3.ts` | 43.4 KB | 605 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/day6McqsRound4.ts` | 36.4 KB | 605 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/day6McqsRound5.ts` | 53.4 KB | 605 | `406b8e0` (2026-11-15) |
| `src/data/bootcamp/day6/index.ts` | 769 B | 25 | `406b8e0` (2026-11-15) |

### `src/data/bootcamp/day7` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day7/day7CaseStudies.ts` | 81.9 KB | 925 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/day7McqsRound1.ts` | 34.6 KB | 605 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/day7McqsRound2.ts` | 43.7 KB | 605 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/day7McqsRound3.ts` | 44.2 KB | 605 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/day7McqsRound4.ts` | 37.0 KB | 605 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/day7McqsRound5.ts` | 51.9 KB | 605 | `6b562e3` (2026-11-15) |
| `src/data/bootcamp/day7/index.ts` | 769 B | 25 | `6b562e3` (2026-11-15) |

### `src/data/bootcamp/day8` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day8/day8CaseStudies.ts` | 83.4 KB | 916 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/day8McqsRound1.ts` | 38.4 KB | 565 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/day8McqsRound2.ts` | 48.6 KB | 565 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/day8McqsRound3.ts` | 43.4 KB | 565 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/day8McqsRound4.ts` | 37.2 KB | 565 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/day8McqsRound5.ts` | 59.1 KB | 565 | `ff408a1` (2026-11-15) |
| `src/data/bootcamp/day8/index.ts` | 737 B | 25 | `ff408a1` (2026-11-15) |

### `src/data/bootcamp/day9` (7 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/bootcamp/day9/day9CaseStudies.ts` | 88.1 KB | 933 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/day9McqsRound1.ts` | 39.5 KB | 565 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/day9McqsRound2.ts` | 44.6 KB | 565 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/day9McqsRound3.ts` | 40.9 KB | 565 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/day9McqsRound4.ts` | 38.5 KB | 565 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/day9McqsRound5.ts` | 53.5 KB | 565 | `4f121c2` (2026-11-15) |
| `src/data/bootcamp/day9/index.ts` | 737 B | 25 | `4f121c2` (2026-11-15) |

### `src/data/mains` (4 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/mains/mainsBatch1.ts` | 107.0 KB | 1369 | `46802c4` (2026-11-19) |
| `src/data/mains/mainsBatch2.ts` | 139.3 KB | 1773 | `46802c4` (2026-11-19) |
| `src/data/mains/mainsBatch3.ts` | 170.0 KB | 2111 | `96d143e` (2026-11-19) |
| `src/data/mains/mainsBatch4.ts` | 155.0 KB | 1831 | `96d143e` (2026-11-19) |

### `src/data/pyqs` (4 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/data/pyqs/pyq2014.ts` | 39.5 KB | 446 | `e401e54` (2026-11-14) |
| `src/data/pyqs/pyq2018.ts` | 38.1 KB | 429 | `e401e54` (2026-11-14) |
| `src/data/pyqs/pyq2022.ts` | 40.3 KB | 437 | `e401e54` (2026-11-14) |
| `src/data/pyqs/pyq2023.ts` | 7.8 KB | 110 | `ea3d899` (2026-11-16) |

### `src/services` (13 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/services/answerEvaluatorService.ts` | 15.2 KB | 375 | `5bbabe8` (2026-11-19) |
| `src/services/arcadeAudioService.ts` | 5.4 KB | 193 | `7aac50b` (2026-11-19) |
| `src/services/bareActService.ts` | 10.6 KB | 289 | `c4ae501` (2026-11-17) |
| `src/services/caseStoryService.ts` | 3.3 KB | 97 | `75be064` (2026-11-19) |
| `src/services/dictionaryService.ts` | 6.4 KB | 196 | `b351247` (2026-11-15) |
| `src/services/flashcardPinStore.ts` | 2.8 KB | 87 | `3ce9f3d` (2026-11-18) |
| `src/services/flashcardService.ts` | 91.0 KB | 2180 | `3ce9f3d` (2026-11-18) |
| `src/services/judicialCareerService.ts` | 11.0 KB | 397 | `7aac50b` (2026-11-19) |
| `src/services/mistakesService.ts` | 2.7 KB | 109 | `a058cc1` (2026-11-16) |
| `src/services/progressVaultService.ts` | 6.9 KB | 239 | `7aac50b` (2026-11-19) |
| `src/services/readinessIndexService.ts` | 80.6 KB | 1460 | `9c25d8b` (2026-11-20) |
| `src/services/speechService.ts` | 2.7 KB | 107 | `ea3d899` (2026-11-16) |
| `src/services/tileMatcherGameService.ts` | 51.7 KB | 1375 | `fc1ea4c` (2026-11-16) |

### `src/types` (3 files)

| File | Size | Lines | Last Commit |
| :--- | ---: | ---: | :--- |
| `src/types/constitution.ts` | 2.7 KB | 112 | `c4ae501` (2026-11-17) |
| `src/types/dictionary.ts` | 341 B | 11 | `650124e` (2026-11-14) |
| `src/types/mainsQuestionTypes.ts` | 3.0 KB | 99 | `5bbabe8` (2026-11-19) |

<!-- AUTO:FILES:END -->

---

## Complete Git Commit History

<!-- AUTO:COMMITS:START -->
> Complete git history (**92** commits, newest first).

| # | Date | Commit | Files | Summary |
| ---: | :--- | :--- | ---: | :--- |
| 92 | 2026-11-21 | `5294c7c` | 3 | style(precedent-clash): optimize layout density, eliminate vertical whitespace, and enable side-by-side split screen |
| 91 | 2026-11-21 | `d32e8e2` | 6 | style: harmonize UI across Precedent Clash, Speed Hacks, Arcade, and Spotlight Search |
| 90 | 2026-11-21 | `003e2d2` | 7 | feat: enable direct node click-to-open and cross-module deep linking for Knowledge Graphs |
| 89 | 2026-11-21 | `98ed436` | 1 | docs(log): sync PROJECT_LOG.md with commit 35dec72 |
| 88 | 2026-11-21 | `35dec72` | 3 | refactor(graph): remove all gradient fog and glow filters from Knowledge Graph canvas |
| 87 | 2026-11-21 | `a7f7831` | 1 | docs(log): sync PROJECT_LOG.md with color hierarchy refactor |
| 86 | 2026-11-21 | `0d4bd48` | 4 | refactor(ui): streamline color hierarchy and restrict color accents to key statutory words |
| 85 | 2026-11-20 | `718f0ba` | 1 | docs: sync PROJECT_LOG for commit 7ff35ca |
| 84 | 2026-11-20 | `7ff35ca` | 3 | feat: upgrade Concept Web Knowledge Graph with drag physics, Path-Finder, edge relations, and fullscreen cockpit |
| 83 | 2026-11-20 | `c7096ab` | 1 | docs: sync PROJECT_LOG for commit 76d187c |
| 82 | 2026-11-20 | `76d187c` | 9 | feat: add Daily Constitutional Workout, Precedent Duel Arena, and Interactive Concept Web Graph |
| 81 | 2026-11-20 | `bda5d1d` | 1 | docs: sync PROJECT_LOG for commit d003041 |
| 80 | 2026-11-20 | `d003041` | 9 | feat: add Pocket Cheatsheet Modal, Trap-Buster Reflex Game, and Universal Command Palette deep indexing |
| 79 | 2026-11-20 | `094e7fd` | 1 | docs: refresh project log snapshot |
| 78 | 2026-11-20 | `99a2930` | 5 | feat(speed-hacks): add bidirectional article solver, constitutional majority matrix simulator, and knowledge graph navigation |
| 77 | 2026-11-20 | `593b6ff` | 1 | docs: refresh project log snapshot |
| 76 | 2026-11-20 | `363d360` | 3 | fix(speed-hacks): convert +89/+90 tiles into responsive inline expandable accordions |
| 75 | 2026-11-20 | `e952afe` | 4 | feat: embed contextual speed hacks in Bare Act Explorer and add 7 Master Cheat Codes Wall |
| 74 | 2026-11-20 | `b3963a3` | 6 | feat: add Fast-Track Constitutional Mastery Vault with Magic +89/+90 Rule & Mnemonic Engines |
| 73 | 2026-11-20 | `9c25d8b` | 6 | feat: add Constitutional Readiness Index (CRI) and 25-Part Syllabus Heatmap |
| 72 | 2026-11-19 | `12c64b5` | 2 | feat(mains-mock): add 12 multi-tier drills and custom exam paper generator |
| 71 | 2026-11-19 | `5bbabe8` | 13 | feat: add Answer Evaluator, Precedent Clash Arena, Judgment Writing Lab, and 3-Hour Mains Mock Hall |
| 70 | 2026-11-19 | `96d143e` | 4 | feat(mains): complete 100-Question Master Question Bank with Batch 3 & 4 integration across all marks tiers |
| 69 | 2026-11-19 | `46802c4` | 4 | feat(mains): expand Master Question Bank to 44 questions across 5M-20M marks tiers |
| 68 | 2026-11-19 | `a025b61` | 6 | feat(mains): add Mains PYQ bank with marks/word limits, interactive hover intel callouts, and handwritten page pacer |
| 67 | 2026-11-19 | `78c5f7d` | 3 | fix(theme): replace harsh yellow/amber with dynamic theme tokens in Real Case Stories and Bare Act Explorer |
| 66 | 2026-11-19 | `75be064` | 4 | feat(cases): expand real case law stories to 65 landmark precedents across Parts I to XXI |
| 65 | 2026-11-19 | `a15f579` | 5 | feat(cases): add 100% authentic real case law stories across Bare Act articles |
| 64 | 2026-11-19 | `7aac50b` | 15 | feat(arcade): build Constitutional Arcade with Chief Justice Bench Sim, 60s Article Blitz, Writs Emergency Room, and Judicial Career Progression |
| 63 | 2026-11-18 | `3ce9f3d` | 15 | feat: complete all 106 Amendments, ELI5 modes, Progress Vault backup, and code-split lazy loading |
| 62 | 2026-11-18 | `9e33658` | 16 | feat(flashcards): expand 5-Box Leitner SRS app-wide across all datasets, views, and all 15 Bootcamp Days |
| 61 | 2026-11-18 | `7da595c` | 4 | chore(logging): add persistent PROJECT_LOG.md, automated log:update script, and AGENTS.md logging rule |
| 60 | 2026-11-17 | `c4ae501` | 6 | feat(eli5): add plain-english breakdowns, analogies, and practical scenario toggles across Bare Act, Doctrines, and Parts views |
| 59 | 2026-11-17 | `be6170e` | 3 | feat(landing): declutter landing page to focus on Preamble and core learning gateways; make theme color swatch and save buttons compact icon-only |
| 58 | 2026-11-17 | `be52fbc` | 5 | feat(ux): reorder landing page into 4-stage learning roadmap (study material -> case law -> practice -> 15-day bootcamp) and integrate typography options into unified Theme & Typography header menu |
| 57 | 2026-11-17 | `ef6f11d` | 9 | fix(ui): audit and resolve desktop nav clipping, add Tailwind v4 @theme tokens, define core keyframe microanimations, and apply tactile micro-interactions across views |
| 56 | 2026-11-17 | `5b5bd8a` | 2 | feat: upgrade to 5-Box Leitner Spaced Repetition SRS flashcard engine with mistakes sync and keyboard controls |
| 55 | 2026-11-17 | `30a2cc8` | 2 | feat: embed dedicated Synaptic Memory Tile Matcher inside all 15 Bootcamp Days as Task 6 and Sub-Tab 6 |
| 54 | 2026-11-16 | `fc1ea4c` | 10 | feat: expand Constitutional Synaptic Tile Matcher app-wide across all parts, schedules, doctrines, amendments, bootcamp and precedents |
| 53 | 2026-11-16 | `a5532b7` | 5 | feat: implement Constitutional Synaptic Tile Matcher gamified memory blitz arena |
| 52 | 2026-11-16 | `3db5394` | 6 | feat: complete Clause-by-Clause Bare Act Explorer (Articles 1-395) with amendment diffs and footnotes |
| 51 | 2026-11-16 | `ea3d899` | 14 | feat: add Spaced Flashcards, Precedent Lineage Trees, Audio Lab & Viva, 2023 PYQs, and PWA packaging |
| 50 | 2026-11-16 | `a058cc1` | 10 | feat: add Timed Mock Simulator, Mistakes Notebook, Mains Writing Lab, Printable Revision Sheets, and Vite chunking |
| 49 | 2026-11-15 | `b351247` | 7 | feat(dictionary): add universal double-click word inspector and global modal with practical illustrative examples |
| 48 | 2026-11-15 | `51cc213` | 4 | fix(theme): harmonize Chalk theme palette with royal indigo tokens and fix low-contrast text |
| 47 | 2026-11-15 | `5eba82b` | 8 | feat(bootcamp): complete Day 15 full syllabus mock with 200 MCQs and 10 Master Comprehension Case Studies |
| 46 | 2026-11-15 | `1022b50` | 8 | feat(bootcamp): complete Day 14 with 200 MCQs and 10 Master Comprehension Case Studies |
| 45 | 2026-11-15 | `ece9ca8` | 8 | feat(bootcamp): complete Day 13 with 200 MCQs across 5 rounds and 10 comprehension case studies |
| 44 | 2026-11-15 | `4c05d96` | 8 | feat(bootcamp): complete Day 12 with 200 MCQs across 5 rounds and 10 comprehension case studies |
| 43 | 2026-11-15 | `f88f557` | 8 | feat(bootcamp): complete Day 11 with 200 MCQs across 5 rounds and 10 comprehension case studies |
| 42 | 2026-11-15 | `2096e89` | 8 | feat(bootcamp): complete Day 10 with 200 MCQs across 5 rounds and 10 comprehension case studies |
| 41 | 2026-11-15 | `4f121c2` | 8 | feat(bootcamp): complete Day 9 with 200 MCQs across 5 rounds and 10 comprehension case studies |
| 40 | 2026-11-15 | `ff408a1` | 8 | feat(bootcamp): add 200 MCQs across 5 rounds and 10 comprehension case studies for Day 8 |
| 39 | 2026-11-15 | `6b562e3` | 8 | feat(bootcamp): add 200 MCQs across 5 rounds and 10 comprehension case studies for Day 7 |
| 38 | 2026-11-15 | `406b8e0` | 8 | feat(bootcamp): add 200 MCQs across 5 rounds and 10 comprehension case studies for Day 6 |
| 37 | 2026-11-15 | `3256fe4` | 8 | feat(bootcamp): add 200 MCQs across 5 rounds and 10 comprehension case studies for Day 5 |
| 36 | 2026-11-15 | `02e0b69` | 8 | feat(bootcamp): add 200 MCQs in 5 rounds and 10 comprehension case studies for Day 4 |
| 35 | 2026-11-15 | `54059a6` | 8 | feat(bootcamp): add 200 MCQs in 5 rounds and 10 comprehension case studies for Day 3 |
| 34 | 2026-11-15 | `f4b0190` | 9 | feat(bootcamp): add 200 MCQs in 5 rounds and 10 comprehension case studies for Day 2 |
| 33 | 2026-11-15 | `6de8c28` | 11 | feat(bootcamp): add 200 MCQs in 5 rounds and 10 comprehension case studies for Day 1 with interactive drill UI and mistake notebook |
| 32 | 2026-11-15 | `196ed49` | 2 | feat: add framed model answers, word limits, and scoring rubrics to all-India master questions |
| 31 | 2026-11-15 | `ee3b990` | 2 | feat: add All-India Law and Judicial exam topic frequency matrix and master question blueprints |
| 30 | 2026-11-14 | `e401e54` | 4 | feat: complete all 24 past 10-year JKPSC Mains questions with 50-mark model answers and rubrics |
| 29 | 2026-11-14 | `0d9fb08` | 5 | feat: add dedicated JKPSC Prosecuting Officer Mains 10-Year PYQ Vault with model answers and scoring rubrics |
| 28 | 2026-11-14 | `7a96362` | 2 | feat: display real-world practical scenario and bare act text in bootcamp article dossier |
| 27 | 2026-11-14 | `58746c9` | 4 | feat: add comprehensive day study section, module deep-links, interactive article dossier reader, and all-in-one view mode |
| 26 | 2026-11-14 | `86520c9` | 9 | feat: complete 15-day JKPSC PO bootcamp with 300 MCQs, heatmap, and case problems |
| 25 | 2026-11-14 | `e980352` | 2 | feat: add classic landmark counterparts and visual evolution lineage tracks |
| 24 | 2026-11-14 | `a859fb4` | 3 | feat: integrate 2024-2025 landmark SC Constitution Bench cases across Landmark Hub and Article Cards |
| 23 | 2026-11-14 | `dcda4f9` | 1 | feat: add In re Article 370 (2023) 5-Judge Constitution Bench to Landmark Cases Hub |
| 22 | 2026-11-14 | `f3c4d68` | 1 | feat: expand legal dictionary to 215 monumental terms covering BNS, BNSS, BSA, and Constitutional Law |
| 21 | 2026-11-14 | `3fcf3c8` | 1 | chore: ignore scratch directory |
| 20 | 2026-11-14 | `0240adc` | 3 | feat: enhance Ink (pure black/cyan), Paper (rubric crimson), Chalk (royal indigo), and add Mono Pink theme |
| 19 | 2026-11-14 | `eb17fbd` | 2 | feat: wire dictionary into global search modal and active recall quiz |
| 18 | 2026-11-14 | `409818a` | 5 | feat: expand legal dictionary to 133 exhaustive terms and wire annotations across all views |
| 17 | 2026-11-14 | `9ae7353` | 2 | feat: add Magna Carta, Bill of Rights, and wire hover annotations into Part header descriptions |
| 16 | 2026-11-14 | `6b3d205` | 6 | feat: expand legal dictionary to 73 terms and wire universal hover-engine into Overview, Articles, and Landmark views |
| 15 | 2026-11-14 | `650124e` | 9 | feat: add interactive Legal Dictionary and hover-engine with real-world examples |
| 14 | 2026-11-14 | `e3546e4` | 2 | feat: complete 100% syllabus alignment with Judiciary curriculum by adding Parliamentary and Supreme Court articles (Arts 79, 80, 81, 85, 100, 102, 108, 112, 114, 134, 137) |
| 13 | 2026-11-14 | `4fb3dbf` | 9 | feat: complete 100% substantive expansion across all 25 parts of the Constitution (Parts VIII, IX-A, IX-B, X, XIII, XIV-A, XVI, XIX, XXII) |
| 12 | 2026-11-14 | `e365e73` | 8 | feat: complete Phase 4 expansion of Parts I, II, IV-A, IX, XV, XVII with deep analytical coverage |
| 11 | 2026-11-13 | `eae5768` | 8 | feat: complete Phase 3 expansion of Parts XI, XII, XIV, XVIII, XX, XXI with deep constitutional analysis |
| 10 | 2026-11-13 | `fc3e951` | 8 | feat: complete Phase 2 expansion of Part V (The Union) and Part VI (The States) with Executive Clemency SVG |
| 9 | 2026-11-13 | `a423d55` | 9 | feat: complete Phase 1 expansion of Part III (Arts 12-35) & Part IV (Arts 36-51) with Criminal-Constitutional Pipeline SVG |
| 8 | 2026-11-13 | `bbe62d6` | 2 | fix(ui): responsive navigation drawer for split-screen and collapsible country selector |
| 7 | 2026-11-13 | `d93d4f5` | 4 | fix(layout): extract view mode switcher into dedicated toolbar, fix header text wrapping, and prevent left-side nav clipping |
| 6 | 2026-11-13 | `7ebb8b7` | 10 | feat(ui): add collapsible buttons and drawers for themes, typography, topic clusters, blueprints, and navigation |
| 5 | 2026-11-13 | `19a5ef8` | 18 | fix(ui): polish vector blueprints, eliminate text leakage, and enhance responsive layout |
| 4 | 2026-11-13 | `e491e23` | 7 | Expand to 100 Landmark Constitutional Precedents across 20 topics with 8 judicial lineages |
| 3 | 2026-11-13 | `fb8f99c` | 7 | Add 50 landmark case laws (5 per topic), Precedent Lineage SVG, and interactive case law lab |
| 2 | 2026-11-13 | `dc47388` | 13 | feat: complete all 25 parts, 1-395 articles index, 1-106 amendments, and 14 tactical SVGs |
| 1 | 2026-11-13 | `3c486dd` | 51 | feat: complete modern Indian Constitution mastery app with tactile editorial SVGs and themes |
<!-- AUTO:COMMITS:END -->
