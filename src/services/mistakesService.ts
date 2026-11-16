export interface MistakeEntry {
  id: string; // unique key, e.g. "day-1-q-5"
  questionId: string;
  dayNumber: number;
  dayTitle: string;
  round: string | number;
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer: number;
  explanation: string;
  statutoryAnchor?: string;
  timestamp: number;
  attemptCount: number;
  mastered: boolean;
}

const STORAGE_KEY = 'samvidhan_mistakes_bank_v1';

export const getStoredMistakes = (): MistakeEntry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load mistakes bank', e);
    return [];
  }
};

export const saveMistakes = (mistakes: MistakeEntry[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
  } catch (e) {
    console.error('Failed to save mistakes bank', e);
  }
};

export const recordMistake = (
  entry: Omit<MistakeEntry, 'timestamp' | 'attemptCount' | 'mastered'>
): void => {
  const current = getStoredMistakes();
  const existingIndex = current.findIndex((m) => m.id === entry.id);

  if (existingIndex >= 0) {
    current[existingIndex] = {
      ...current[existingIndex],
      ...entry,
      timestamp: Date.now(),
      attemptCount: current[existingIndex].attemptCount + 1,
      mastered: false, // reset mastered if missed again
    };
  } else {
    current.unshift({
      ...entry,
      timestamp: Date.now(),
      attemptCount: 1,
      mastered: false,
    });
  }

  saveMistakes(current);
};

export const recordSuccess = (id: string): void => {
  const current = getStoredMistakes();
  const index = current.findIndex((m) => m.id === id);
  if (index >= 0) {
    current[index].mastered = true;
    saveMistakes(current);
  }
};

export const deleteMistake = (id: string): void => {
  const current = getStoredMistakes();
  saveMistakes(current.filter((m) => m.id !== id));
};

export const clearAllMistakes = (): void => {
  saveMistakes([]);
};

export interface MistakesStats {
  total: number;
  unmastered: number;
  mastered: number;
  byDay: Record<number, number>;
  byRound: Record<string, number>;
}

export const getMistakesStats = (): MistakesStats => {
  const current = getStoredMistakes();
  const stats: MistakesStats = {
    total: current.length,
    unmastered: current.filter((m) => !m.mastered).length,
    mastered: current.filter((m) => m.mastered).length,
    byDay: {},
    byRound: {},
  };

  current.forEach((m) => {
    stats.byDay[m.dayNumber] = (stats.byDay[m.dayNumber] || 0) + 1;
    const rKey = String(m.round);
    stats.byRound[rKey] = (stats.byRound[rKey] || 0) + 1;
  });

  return stats;
};
