// Judicial Career & Gamification Progression Service for SAMVIDHAN
// Tracks XP, Judicial Ranks (Intern -> CJI), Badges, Streaks, and Arcade High Scores

export interface JudicialRank {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  emblem: string;
  tagline: string;
  perk: string;
}

export const JUDICIAL_RANKS: JudicialRank[] = [
  {
    level: 1,
    title: 'Law Student / Intern',
    minXP: 0,
    maxXP: 499,
    emblem: '📜',
    tagline: 'Initiating Constitutional Inquiries & Foundations',
    perk: 'Access to Basic Case Law Briefs & Articles'
  },
  {
    level: 2,
    title: 'Junior Advocate',
    minXP: 500,
    maxXP: 1499,
    emblem: '⚖️',
    tagline: 'Drafting Submissions, Writs & Bail Applications',
    perk: 'Article Blitz Streak Multipliers Unlocked'
  },
  {
    level: 3,
    title: 'Advocate-on-Record (AoR)',
    minXP: 1500,
    maxXP: 3499,
    emblem: '🖋️',
    tagline: 'Entitled to Act and Plead Before the Supreme Court of India',
    perk: 'Writs Emergency Room Special Directives'
  },
  {
    level: 4,
    title: 'Senior Advocate (Silk)',
    minXP: 3500,
    maxXP: 6999,
    emblem: '🏛️',
    tagline: 'Designated by the Full Court for Distinguished Constitutional Mastery',
    perk: 'Chief Justice Bench Deliberation Matrix'
  },
  {
    level: 5,
    title: 'High Court Judge',
    minXP: 7000,
    maxXP: 11999,
    emblem: '🛡️',
    tagline: 'Guarding Fundamental Rights under Article 226 across State Jurisdiction',
    perk: 'Inherent Powers & Prerogative Writ Master'
  },
  {
    level: 6,
    title: 'Supreme Court Justice',
    minXP: 12000,
    maxXP: 19999,
    emblem: '⭐',
    tagline: 'Sitting on Division & Constitution Benches under Article 32 & 141',
    perk: 'Constitutional Ratio Decidendi Authority'
  },
  {
    level: 7,
    title: 'Chief Justice of India (CJI)',
    minXP: 20000,
    maxXP: Infinity,
    emblem: '👑',
    tagline: 'Master of the Roster & Supreme Custodian of the Sovereign Constitution',
    perk: 'Grand Constitution Bench Convener'
  }
];

export interface ArcadeBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'bench' | 'blitz' | 'writs' | 'matcher' | 'general';
}

export const ARCADE_BADGES: ArcadeBadge[] = [
  {
    id: 'bench-first',
    title: 'First Gavel Strike',
    description: 'Adjudicate and deliver your first Constitution Bench judgment.',
    icon: '⚖️',
    category: 'bench'
  },
  {
    id: 'bench-master',
    title: 'Guardian of Basic Structure',
    description: 'Successfully resolve 5 high-stakes Constitution Bench petitions.',
    icon: '🏛️',
    category: 'bench'
  },
  {
    id: 'bench-flawless',
    title: 'Unanimous Accord',
    description: 'Deliver a 5-0 unanimous constitution bench decree with perfect jurisprudence.',
    icon: '🌟',
    category: 'bench'
  },
  {
    id: 'blitz-rookie',
    title: 'Rapid Jurist',
    description: 'Score 10 or more correct articles in a single 60s Article Blitz round.',
    icon: '⚡',
    category: 'blitz'
  },
  {
    id: 'blitz-master',
    title: 'Article Sniper',
    description: 'Score 20 or more correct articles in a single 60s Article Blitz round.',
    icon: '🎯',
    category: 'blitz'
  },
  {
    id: 'blitz-streak',
    title: 'Lightning Recall',
    description: 'Achieve a continuous 7x correct streak in Article Blitz without errors.',
    icon: '🔥',
    category: 'blitz'
  },
  {
    id: 'writs-protector',
    title: 'Writs Defender',
    description: 'Stamp 5 emergency citizen petitions with the correct prerogative writ.',
    icon: '🛡️',
    category: 'writs'
  },
  {
    id: 'writs-perfection',
    title: 'Prerogative Master',
    description: 'Complete the Writs Emergency Room with 100% accuracy.',
    icon: '📜',
    category: 'writs'
  },
  {
    id: 'matcher-speed',
    title: 'Synaptic Master',
    description: 'Clear an 8-pair Synaptic Memory board in under 45 seconds.',
    icon: '🧠',
    category: 'matcher'
  },
  {
    id: 'streak-3',
    title: 'Constitutional Habit',
    description: 'Maintain an active constitutional study & practice streak of 3 days.',
    icon: '✨',
    category: 'general'
  },
  {
    id: 'xp-5000',
    title: 'Distinguished Silk',
    description: 'Surpass 5,000 career XP through arcade mastery and legal drills.',
    icon: '🎖️',
    category: 'general'
  },
  {
    id: 'escape-master',
    title: 'Master Vault Locksmith',
    description: 'Breach and escape the Vault of Article 368 in under 4 minutes.',
    icon: '🔐',
    category: 'general'
  },
  {
    id: 'moot-silk',
    title: 'Designated Senior Counsel',
    description: 'Win a 5-Judge Constitution Bench Moot Showdown with at least a 3:2 majority decree.',
    icon: '🏛️',
    category: 'general'
  },
  {
    id: 'assembly-architect',
    title: 'Constituent Assembly Architect',
    description: 'Steer the Republic through all 10 Central Hall crises to adopt the 1950 Constitution.',
    icon: '📜',
    category: 'general'
  },
  {
    id: 'mystery-sleuth',
    title: 'Constitutional Sleuth',
    description: 'Crack the LexSamvidhan mystery article puzzle within 6 tries.',
    icon: '🎯',
    category: 'general'
  },
  {
    id: 'socratic-jurist',
    title: 'Socratic Jurist',
    description: 'Successfully resolve a high-stakes constitutional paradox before the Cross-Examiner with 80%+ Socratic Depth.',
    icon: '🧠',
    category: 'general'
  },
  {
    id: 'cji-sworn',
    title: 'Oath of the Chief Justice',
    description: 'Reach Level 7 and ascend to the office of Chief Justice of India.',
    icon: '👑',
    category: 'general'
  }
];

export interface PlayerCareerProfile {
  xp: number;
  currentRankLevel: number;
  benchSolvedIds: string[];
  articleBlitzHighScore: number;
  articleBlitzTotalGames: number;
  writsSolvedCount: number;
  writsTotalGames: number;
  tileMatcherBestTimeSec: number;
  tileMatcherTotalGames: number;
  unlockedBadgeIds: string[];
  streakDays: number;
  lastActiveDate: string;
}

const STORAGE_KEY = 'samvidhan_judicial_career_v1';

const DEFAULT_PROFILE: PlayerCareerProfile = {
  xp: 0,
  currentRankLevel: 1,
  benchSolvedIds: [],
  articleBlitzHighScore: 0,
  articleBlitzTotalGames: 0,
  writsSolvedCount: 0,
  writsTotalGames: 0,
  tileMatcherBestTimeSec: 0,
  tileMatcherTotalGames: 0,
  unlockedBadgeIds: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10)
};

export function getCareerProfile(): PlayerCareerProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveCareerProfile(profile: PlayerCareerProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save judicial career profile', e);
  }
}

export function getCurrentRank(xp: number): JudicialRank {
  for (let i = JUDICIAL_RANKS.length - 1; i >= 0; i--) {
    if (xp >= JUDICIAL_RANKS[i].minXP) {
      return JUDICIAL_RANKS[i];
    }
  }
  return JUDICIAL_RANKS[0];
}

export function getNextRank(currentLevel: number): JudicialRank | null {
  const next = JUDICIAL_RANKS.find((r) => r.level === currentLevel + 1);
  return next || null;
}

export interface AwardResult {
  profile: PlayerCareerProfile;
  gainedXP: number;
  leveledUp: boolean;
  newRank: JudicialRank;
  newBadges: ArcadeBadge[];
}

export function awardCareerXP(amount: number, reason: string): AwardResult {
  const profile = getCareerProfile();
  const oldRank = getCurrentRank(profile.xp);
  
  // Update streak if a new day
  const today = new Date().toISOString().slice(0, 10);
  if (profile.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (profile.lastActiveDate === yesterday) {
      profile.streakDays += 1;
    } else {
      profile.streakDays = 1;
    }
    profile.lastActiveDate = today;
  }

  profile.xp += amount;
  const newRank = getCurrentRank(profile.xp);
  const leveledUp = newRank.level > oldRank.level;
  profile.currentRankLevel = newRank.level;

  const newBadges: ArcadeBadge[] = [];

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !profile.unlockedBadgeIds.includes(id)) {
      profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) newBadges.push(b);
    }
  };

  // General badges
  checkBadge('streak-3', profile.streakDays >= 3);
  checkBadge('xp-5000', profile.xp >= 5000);
  checkBadge('cji-sworn', newRank.level >= 7);

  saveCareerProfile(profile);

  return {
    profile,
    gainedXP: amount,
    leveledUp,
    newRank,
    newBadges
  };
}

export function recordBenchJudgment(petitionId: string, unanimous: boolean): AwardResult {
  const profile = getCareerProfile();
  if (!profile.benchSolvedIds.includes(petitionId)) {
    profile.benchSolvedIds.push(petitionId);
  }
  saveCareerProfile(profile);

  const res = awardCareerXP(unanimous ? 300 : 200, 'Delivered Constitution Bench Decree');
  
  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('bench-first', res.profile.benchSolvedIds.length >= 1);
  checkBadge('bench-master', res.profile.benchSolvedIds.length >= 5);
  checkBadge('bench-flawless', unanimous);

  saveCareerProfile(res.profile);
  return res;
}

export function recordBlitzResult(score: number, maxStreak: number): AwardResult {
  const profile = getCareerProfile();
  profile.articleBlitzTotalGames += 1;
  if (score > profile.articleBlitzHighScore) {
    profile.articleBlitzHighScore = score;
  }
  saveCareerProfile(profile);

  const xpEarned = Math.max(50, score * 20 + maxStreak * 10);
  const res = awardCareerXP(xpEarned, 'Completed 60s Article Blitz');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('blitz-rookie', score >= 10);
  checkBadge('blitz-master', score >= 20);
  checkBadge('blitz-streak', maxStreak >= 7);

  saveCareerProfile(res.profile);
  return res;
}

export function recordWritsResult(solvedInSession: number, perfect: boolean): AwardResult {
  const profile = getCareerProfile();
  profile.writsTotalGames += 1;
  profile.writsSolvedCount += solvedInSession;
  saveCareerProfile(profile);

  const xpEarned = solvedInSession * 30 + (perfect ? 150 : 0);
  const res = awardCareerXP(xpEarned, 'Writs Emergency Room Clearance');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('writs-protector', res.profile.writsSolvedCount >= 5);
  checkBadge('writs-perfection', perfect);

  saveCareerProfile(res.profile);
  return res;
}

export function recordMatcherResult(timeSeconds: number): AwardResult {
  const profile = getCareerProfile();
  profile.tileMatcherTotalGames += 1;
  if (profile.tileMatcherBestTimeSec === 0 || timeSeconds < profile.tileMatcherBestTimeSec) {
    profile.tileMatcherBestTimeSec = timeSeconds;
  }
  saveCareerProfile(profile);

  const xpEarned = 100 + (timeSeconds < 45 ? 100 : 50);
  const res = awardCareerXP(xpEarned, 'Synaptic Matcher Victory');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('matcher-speed', timeSeconds <= 45);

  saveCareerProfile(res.profile);
  return res;
}

export function recordEscapeRoomResult(timeSeconds: number, flawless: boolean): AwardResult {
  const xpEarned = 350 + (timeSeconds < 240 ? 150 : 50) + (flawless ? 100 : 0);
  const res = awardCareerXP(xpEarned, 'Vault of Article 368 Breach');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('escape-master', timeSeconds <= 240);

  saveCareerProfile(res.profile);
  return res;
}

export function recordMootCourtResult(caseId: string, won: boolean, unanimous: boolean): AwardResult {
  const xpEarned = won ? (unanimous ? 500 : 400) : 100;
  const res = awardCareerXP(xpEarned, won ? 'Constitution Bench Moot Victory' : 'Constitution Bench Moot Submission');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  if (won) {
    checkBadge('moot-silk', true);
  }

  saveCareerProfile(res.profile);
  return res;
}

export function recordAssemblyRPGResult(alignmentRate: number): AwardResult {
  const xpEarned = 500 + alignmentRate * 5;
  const res = awardCareerXP(xpEarned, 'Constituent Assembly 1946-49 Session');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('assembly-architect', alignmentRate >= 50);

  saveCareerProfile(res.profile);
  return res;
}

export function recordMysteryGameResult(attemptsUsed: number, isWon: boolean): AwardResult {
  const xpEarned = isWon ? 250 + (7 - attemptsUsed) * 40 : 50;
  const res = awardCareerXP(xpEarned, isWon ? 'LexSamvidhan Mystery Cracked' : 'LexSamvidhan Deduction Practice');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  if (isWon) {
    checkBadge('mystery-sleuth', true);
  }

  saveCareerProfile(res.profile);
  return res;
}

export function recordSocraticTutorResult(paradoxId: string, depthScorePct: number): AwardResult {
  const xpEarned = Math.round(200 + depthScorePct * 3);
  const res = awardCareerXP(xpEarned, 'Socratic Constitutional Synthesis');

  const checkBadge = (id: string, condition: boolean) => {
    if (condition && !res.profile.unlockedBadgeIds.includes(id)) {
      res.profile.unlockedBadgeIds.push(id);
      const b = ARCADE_BADGES.find((x) => x.id === id);
      if (b) res.newBadges.push(b);
    }
  };

  checkBadge('socratic-jurist', depthScorePct >= 75);

  saveCareerProfile(res.profile);
  return res;
}
