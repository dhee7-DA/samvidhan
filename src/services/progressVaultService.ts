export interface ProgressVaultSnapshot {
  bootcampDaysCompleted: number;
  bootcampMcqsAnswered: number;
  srsTotalReviews: number;
  srsStreakDays: number;
  srsCardsStudied: number;
  srsCardsMastered: number;
  srsPinnedCount: number;
  mistakesUnmastered: number;
  mistakesMastered: number;
  bookmarkedArticlesCount: number;
  bookmarkedCasesCount: number;
  judicialRankTitle?: string;
  judicialXP?: number;
  badgesCount?: number;
  odysseyChaptersCompleted: number;
  odysseyStarsEarned: number;
  readinessDrillsCompleted: number;
  totalKeysBackedUp: number;
  estimatedSizeKB: number;
  lastBackupDate: string | null;
}

export interface ProgressBackupPayload {
  app: 'SAMVIDHAN';
  schemaVersion: 1;
  exportedAt: string;
  keyCount: number;
  data: Record<string, string>;
}

const LAST_BACKUP_KEY = 'samvidhan_last_backup_at';

function collectSamvidhanKeys(): Record<string, string> {
  const data: Record<string, string> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (key.startsWith('samvidhan_') || key.startsWith('constitution_')) {
        const val = localStorage.getItem(key);
        if (val !== null) {
          data[key] = val;
        }
      }
    }
  } catch (e) {
    console.error('Failed to read localStorage keys', e);
  }
  return data;
}

export function getStudyReadinessSnapshot(): ProgressVaultSnapshot {
  const data = collectSamvidhanKeys();
  let bootcampDaysCompleted = 0;
  let bootcampMcqsAnswered = 0;
  let srsTotalReviews = 0;
  let srsStreakDays = 0;
  let srsCardsStudied = 0;
  let srsCardsMastered = 0;
  let srsPinnedCount = 0;
  let mistakesUnmastered = 0;
  let mistakesMastered = 0;
  let bookmarkedArticlesCount = 0;
  let bookmarkedCasesCount = 0;
  let judicialRankTitle = 'Law Student / Intern';
  let judicialXP = 0;
  let badgesCount = 0;
  let odysseyChaptersCompleted = 0;
  let odysseyStarsEarned = 0;
  let readinessDrillsCompleted = 0;

  try {
    const rawOdyssey = data['samvidhan_curriculum_odyssey_v1'];
    if (rawOdyssey) {
      const parsed = JSON.parse(rawOdyssey);
      const progMap = parsed?.progressByChapter || {};
      for (const ch of Object.values<any>(progMap)) {
        const stars = Number(ch?.stars || 0);
        if (stars > 0) {
          odysseyChaptersCompleted++;
          odysseyStarsEarned += stars;
        }
      }
    }
  } catch {
    // ignore
  }

  try {
    const rawDrills = data['samvidhan_weakest_link_history_v1'];
    if (rawDrills) {
      const arr = JSON.parse(rawDrills);
      if (Array.isArray(arr)) readinessDrillsCompleted = arr.length;
    }
  } catch {
    // ignore
  }

  try {
    const rawCareer = data['samvidhan_judicial_career_v1'];
    if (rawCareer) {
      const c = JSON.parse(rawCareer);
      judicialXP = Number(c.xp || 0);
      badgesCount = Array.isArray(c.unlockedBadgeIds) ? c.unlockedBadgeIds.length : 0;
      if (c.currentRankLevel === 7) judicialRankTitle = 'Chief Justice of India';
      else if (c.currentRankLevel === 6) judicialRankTitle = 'Supreme Court Justice';
      else if (c.currentRankLevel === 5) judicialRankTitle = 'High Court Judge';
      else if (c.currentRankLevel === 4) judicialRankTitle = 'Senior Advocate';
      else if (c.currentRankLevel === 3) judicialRankTitle = 'Advocate-on-Record';
      else if (c.currentRankLevel === 2) judicialRankTitle = 'Junior Advocate';
    }
  } catch {
    // ignore
  }

  try {
    const rawBootcamp = data['samvidhan_15day_bootcamp_progress'];
    if (rawBootcamp) {
      const map = JSON.parse(rawBootcamp);
      for (const dayProg of Object.values<any>(map)) {
        const tasks = dayProg?.tasks || {};
        const doneCore = [tasks.articles, tasks.cases, tasks.terms, tasks.mcqs, tasks.caseStudy].filter(Boolean).length;
        if (doneCore >= 5) bootcampDaysCompleted++;
        if (dayProg?.mcqAnswers) {
          bootcampMcqsAnswered += Object.keys(dayProg.mcqAnswers).length;
        }
      }
    }
  } catch {
    // ignore malformed storage
  }

  try {
    const rawMetrics = data['samvidhan_srs_metrics_v1'];
    if (rawMetrics) {
      const m = JSON.parse(rawMetrics);
      srsTotalReviews = Number(m.totalReviews || 0);
      srsStreakDays = Number(m.streakDays || 0);
    }
  } catch {
    // ignore
  }

  try {
    const rawProgress = data['samvidhan_flashcard_progress_v3'];
    if (rawProgress) {
      const map = JSON.parse(rawProgress);
      for (const rec of Object.values<any>(map)) {
        if (rec?.reps > 0) srsCardsStudied++;
        if (rec?.box === 5) srsCardsMastered++;
        if (rec?.pinned) srsPinnedCount++;
      }
    }
  } catch {
    // ignore
  }

  try {
    const rawMistakes = data['samvidhan_mistakes_bank_v1'];
    if (rawMistakes) {
      const arr = JSON.parse(rawMistakes);
      if (Array.isArray(arr)) {
        mistakesUnmastered = arr.filter((m) => !m.mastered).length;
        mistakesMastered = arr.filter((m) => m.mastered).length;
      }
    }
  } catch {
    // ignore
  }

  try {
    const rawArtBm = data['samvidhan_bookmarks'];
    if (rawArtBm) {
      const arr = JSON.parse(rawArtBm);
      if (Array.isArray(arr)) bookmarkedArticlesCount = arr.length;
    }
  } catch {
    // ignore
  }

  try {
    const rawCaseBm = data['samvidhan_bookmarked_cases'];
    if (rawCaseBm) {
      const arr = JSON.parse(rawCaseBm);
      if (Array.isArray(arr)) bookmarkedCasesCount = arr.length;
    }
  } catch {
    // ignore
  }

  const serializedBytes = new Blob([JSON.stringify(data)]).size;

  return {
    bootcampDaysCompleted,
    bootcampMcqsAnswered,
    srsTotalReviews,
    srsStreakDays,
    srsCardsStudied,
    srsCardsMastered,
    srsPinnedCount,
    mistakesUnmastered,
    mistakesMastered,
    bookmarkedArticlesCount,
    bookmarkedCasesCount,
    judicialRankTitle,
    judicialXP,
    badgesCount,
    odysseyChaptersCompleted,
    odysseyStarsEarned,
    readinessDrillsCompleted,
    totalKeysBackedUp: Object.keys(data).length,
    estimatedSizeKB: Math.max(1, Math.round((serializedBytes / 1024) * 10) / 10),
    lastBackupDate: localStorage.getItem(LAST_BACKUP_KEY),
  };
}

export function buildProgressBackupPayload(): ProgressBackupPayload {
  const data = collectSamvidhanKeys();
  return {
    app: 'SAMVIDHAN',
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    keyCount: Object.keys(data).length,
    data,
  };
}

export function downloadProgressBackup(): { filename: string; keyCount: number } {
  const payload = buildProgressBackupPayload();
  const dateStamp = new Date().toISOString().slice(0, 10);
  const filename = `samvidhan-progress-backup-${dateStamp}.json`;
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  try {
    localStorage.setItem(LAST_BACKUP_KEY, payload.exportedAt);
  } catch {
    // ignore
  }

  return { filename, keyCount: payload.keyCount };
}

export function importProgressBackupJson(rawText: string): { restoredKeys: number; exportedAt?: string } {
  const parsed = JSON.parse(rawText);
  if (!parsed || typeof parsed !== 'object' || parsed.app !== 'SAMVIDHAN' || !parsed.data || typeof parsed.data !== 'object') {
    throw new Error('Invalid backup file. Please select a valid SAMVIDHAN JSON backup exported from this app.');
  }

  let restoredKeys = 0;
  for (const [key, value] of Object.entries<unknown>(parsed.data)) {
    if ((key.startsWith('samvidhan_') || key.startsWith('constitution_')) && typeof value === 'string') {
      localStorage.setItem(key, value);
      restoredKeys++;
    }
  }

  if (restoredKeys === 0) {
    throw new Error('Backup file contained no valid SAMVIDHAN progress entries.');
  }

  return {
    restoredKeys,
    exportedAt: typeof parsed.exportedAt === 'string' ? parsed.exportedAt : undefined,
  };
}
