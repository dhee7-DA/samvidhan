export interface ConnectionCategory {
  id: string;
  colorLevel: 'yellow' | 'green' | 'blue' | 'purple'; // Yellow: Easiest -> Purple: Tricky Traps
  title: string; // e.g. "Provisions Requiring 50% State Ratification under Art 368"
  description: string; // Detailed educational explanation
  items: [string, string, string, string]; // Exactly 4 items
  landmarkRef: string;
}

export interface ConnectionsPuzzle {
  id: string;
  puzzleDate?: string;
  puzzleTitle: string;
  categories: [
    ConnectionCategory, // Yellow
    ConnectionCategory, // Green
    ConnectionCategory, // Blue
    ConnectionCategory  // Purple
  ];
}

export const CONNECTIONS_PUZZLES: ConnectionsPuzzle[] = [
  {
    id: 'connections-daily-1',
    puzzleTitle: 'Pillars of the Republic (Set 1)',
    categories: [
      {
        id: 'cat-1-yellow',
        colorLevel: 'yellow',
        title: 'Articles Requiring State Ratification (Art 368(2) Proviso)',
        description:
          'These provisions alter the federal balance and require ratification by resolution of legislatures of not less than one-half of the States before Presidential assent.',
        items: ['Article 54', 'Article 73', 'Article 162', 'Article 241'],
        landmarkRef: 'Article 368(2) Proviso (Clauses a to e)'
      },
      {
        id: 'cat-1-green',
        colorLevel: 'green',
        title: 'Fundamental Rights That Apply to All Persons (Including Foreigners)',
        description:
          'Unlike Articles 15, 16, 19, 29, and 30 (citizens only), these fundamental human rights are guaranteed to every person on Indian soil.',
        items: ['Article 14', 'Article 20', 'Article 21', 'Article 25'],
        landmarkRef: 'State of Arunachal Pradesh v. Khudiram Chakma (1994)'
      },
      {
        id: 'cat-1-blue',
        colorLevel: 'blue',
        title: 'Pivotal Reforms Introduced by the 44th Amendment Act (1978)',
        description:
          'Passed post-Emergency by the Morarji Desai government to undo 42nd Amendment distortions and restore democratic safeguards.',
        items: [
          'Armed Rebellion Clause',
          'Right to Property Demotion (Art 300A)',
          'Non-Suspendable Articles 20 & 21',
          'Cabinet Written Advice under Art 352'
        ],
        landmarkRef: '44th Constitutional Amendment Act, 1978'
      },
      {
        id: 'cat-1-purple',
        colorLevel: 'purple',
        title: 'Prerogative Writs That DO NOT Lie Against Private Individuals',
        description:
          'While Habeas Corpus and Quo Warranto can reach private detentions or non-state usurpers, these writs run strictly against public authorities, tribunals, or courts.',
        items: ['Mandamus', 'Certiorari', 'Prohibition', 'Injunction under Art 226'],
        landmarkRef: 'Praga Tools Corporation v. C.A. Imanual (1969)'
      }
    ]
  },
  {
    id: 'connections-daily-2',
    puzzleTitle: 'Supreme Court Doctrine & Precedents (Set 2)',
    categories: [
      {
        id: 'cat-2-yellow',
        colorLevel: 'yellow',
        title: 'Components of the Basic Structure Doctrine',
        description:
          'Identified across landmark rulings as unamendable core features forming the foundational architectural identity of the Constitution.',
        items: ['Democracy', 'Secularism', 'Rule of Law', 'Judicial Review'],
        landmarkRef: 'Kesavananda Bharati (1973) & Minerva Mills (1980)'
      },
      {
        id: 'cat-2-green',
        colorLevel: 'green',
        title: 'Unenumerated Rights Discovered Inside Article 21',
        description:
          'The Supreme Court expanded "life and personal liberty" beyond mere animal existence into a vast reservoir of fundamental human entitlements.',
        items: ['Right to Privacy', 'Right to Clean Environment', 'Right to Die with Dignity', 'Right to Speedy Trial'],
        landmarkRef: 'Puttaswamy (2017), M.C. Mehta (1988), Common Cause (2018), Hussainara Khatoon (1979)'
      },
      {
        id: 'cat-2-blue',
        colorLevel: 'blue',
        title: 'Landmark Precedents Delivered by 9-Judge (or larger) Benches',
        description:
          'These monumental constitutional benches resolved historical crises with massive multi-judge collegiums.',
        items: ['Kesavananda Bharati (13)', 'Golaknath (11)', 'Indra Sawhney (9)', 'S.R. Bommai (9)'],
        landmarkRef: 'Supreme Court Constitution Bench Roster History'
      },
      {
        id: 'cat-2-purple',
        colorLevel: 'purple',
        title: 'Constitutional Offices Holding Office During "Pleasure of the President"',
        description:
          'Unlike Supreme Court Judges, CAG, and CEC who enjoy constitutional tenure security (impeachment-like removal), these holders can be relieved at pleasure.',
        items: ['Attorney General for India', 'Governor of a State', 'Union Ministers', 'Solicitor General (Statutory)'],
        landmarkRef: 'B.P. Singhal v. Union of India (2010)'
      }
    ]
  },
  {
    id: 'connections-daily-3',
    puzzleTitle: 'Federal Architecture & Parliamentary Traps (Set 3)',
    categories: [
      {
        id: 'cat-3-yellow',
        colorLevel: 'yellow',
        title: 'Types of Majorities Required in the Constitution',
        description:
          'The Constitution specifies seven distinct procedural thresholds depending on the gravity of the legislative or constituent action.',
        items: ['Simple Majority', 'Effective Majority', 'Special Majority under Art 368', 'Special Majority under Art 61'],
        landmarkRef: 'Articles 100, 67, 368, and 61'
      },
      {
        id: 'cat-3-green',
        colorLevel: 'green',
        title: 'Seventh Schedule Union List Exclusive Subjects (List I)',
        description:
          'Matters of vital national interest where Parliament has exclusive jurisdiction under Article 246(1).',
        items: ['Atomic Energy', 'Defence of India', 'Foreign Affairs', 'Banking & Currency'],
        landmarkRef: 'Seventh Schedule, List I (Entries 1, 6, 10, 36)'
      },
      {
        id: 'cat-3-blue',
        colorLevel: 'blue',
        title: 'Articles Governing Parliamentary and Legislative Privileges',
        description:
          'Powers, privileges, and immunities shielding legislators and their collective proceedings from court interference.',
        items: ['Article 105', 'Article 194', 'Article 121', 'Article 211'],
        landmarkRef: 'Sita Soren v. Union of India (2024)'
      },
      {
        id: 'cat-3-purple',
        colorLevel: 'purple',
        title: 'Non-Justiciable Constitutional Provisions (Outside Art 32/226 Judicial Injunction)',
        description:
          'Clauses expressly shielded by the Constitution from judicial enforcement or justiciability.',
        items: ['Part IV Directive Principles', 'Article 74(2) Cabinet Advice', 'Article 122 Parliamentary Proceedings', 'Article 212 State Legislative Proceedings'],
        landmarkRef: 'Article 37, Article 74(2), S.R. Bommai (1994)'
      }
    ]
  }
];

export function getTodayConnectionsPuzzle(): ConnectionsPuzzle {
  const now = new Date();
  const dayIndex = (now.getUTCDate() + now.getUTCMonth()) % CONNECTIONS_PUZZLES.length;
  return CONNECTIONS_PUZZLES[dayIndex];
}

export function getRandomConnectionsPuzzle(): ConnectionsPuzzle {
  const index = Math.floor(Math.random() * CONNECTIONS_PUZZLES.length);
  return CONNECTIONS_PUZZLES[index];
}
