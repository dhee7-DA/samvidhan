export interface CardProgressRecord {
  box: 1 | 2 | 3 | 4 | 5;
  lastReviewed: number | null;
  nextReview: number;
  reps: number;
  lapses?: number;
  pinned?: boolean;
}

export const FLASHCARD_PROGRESS_KEY = 'samvidhan_flashcard_progress_v3';
export const FLASHCARD_LEGACY_V2_KEY = 'samvidhan_flashcards_v2';
export const FLASHCARD_LEGACY_V1_KEY = 'samvidhan_flashcards_v1';

export function loadFlashcardProgressMap(): Record<string, CardProgressRecord> {
  try {
    const raw = localStorage.getItem(FLASHCARD_PROGRESS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }

    const migrated: Record<string, CardProgressRecord> = {};
    const legacyRaw =
      localStorage.getItem(FLASHCARD_LEGACY_V2_KEY) ||
      localStorage.getItem(FLASHCARD_LEGACY_V1_KEY);
    if (legacyRaw) {
      try {
        const parsedLegacy = JSON.parse(legacyRaw);
        if (Array.isArray(parsedLegacy)) {
          for (const leg of parsedLegacy) {
            if (!leg?.id) continue;
            if (leg.reps > 0 || leg.box > 1 || leg.lastReviewed || leg.lapses) {
              const targetId = leg.id === 'sch-11-12' ? 'sch-11' : leg.id;
              migrated[targetId] = {
                box: Math.min(5, Math.max(1, leg.box || 1)) as 1 | 2 | 3 | 4 | 5,
                lastReviewed: leg.lastReviewed ?? null,
                nextReview: leg.nextReview ?? 0,
                reps: leg.reps ?? 0,
                lapses: leg.lapses ?? 0,
              };
            }
          }
        }
      } catch {
        // ignore corrupted legacy payload
      }
    }
    localStorage.setItem(FLASHCARD_PROGRESS_KEY, JSON.stringify(migrated));
    return migrated;
  } catch (e) {
    console.error('Failed to load flashcard progress', e);
    return {};
  }
}

export function saveFlashcardProgressMap(map: Record<string, CardProgressRecord>): void {
  try {
    localStorage.setItem(FLASHCARD_PROGRESS_KEY, JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save flashcard progress', e);
  }
}

export function getPinnedFlashcardIds(): string[] {
  const progressMap = loadFlashcardProgressMap();
  return Object.entries(progressMap)
    .filter(([, rec]) => Boolean(rec.pinned))
    .map(([id]) => id);
}

export function togglePinFlashcardInStore(cardId: string): { pinned: boolean; pinnedIds: string[] } {
  const progressMap = loadFlashcardProgressMap();
  const existing = progressMap[cardId];
  const nextPinned = !existing?.pinned;

  progressMap[cardId] = {
    box: existing?.box ?? 1,
    lastReviewed: existing?.lastReviewed ?? null,
    nextReview: nextPinned ? 0 : (existing?.nextReview ?? 0),
    reps: existing?.reps ?? 0,
    lapses: existing?.lapses ?? 0,
    pinned: nextPinned,
  };

  saveFlashcardProgressMap(progressMap);
  return { pinned: nextPinned, pinnedIds: getPinnedFlashcardIds() };
}
