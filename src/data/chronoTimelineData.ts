// ChronoTimeline Game Data — High-Yield Constitutional Chronology Challenges
// Crucial for UPSC Prelims & State Judiciary chronology ordering questions

export interface ChronoItem {
  id: string;
  name: string;
  year: number;
  exactDate?: string;
  category: 'case' | 'amendment' | 'event';
  summary: string;
  ratioOrImpact: string;
  benchStrength?: string;
}

export interface ChronoTimelineChallenge {
  id: string;
  title: string;
  theme: string;
  description: string;
  items: ChronoItem[]; // In canonical chronological order
}

export const CHRONO_CHALLENGES: ChronoTimelineChallenge[] = [
  {
    id: 'basic-structure-lineage',
    title: 'Genesis of the Basic Structure Doctrine',
    theme: 'Constitutional Amendability (Article 368 vs 13)',
    description: 'Order the historic constitutional clashes that defined the limits of Parliament’s constituent amending power.',
    items: [
      {
        id: 'shankari-prasad',
        name: 'Shankari Prasad v. Union of India',
        year: 1951,
        exactDate: '5 Oct 1951',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'First challenge to 1st Constitutional Amendment and 9th Schedule.',
        ratioOrImpact: 'Supreme Court held that "law" in Article 13(2) only includes ordinary legislative law, not constituent constitutional amendments.'
      },
      {
        id: 'sajjan-singh',
        name: 'Sajjan Singh v. State of Rajasthan',
        year: 1965,
        exactDate: '30 Oct 1964',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Upheld 17th Amendment; Justice Mudholkar first coined the phrase "basic features".',
        ratioOrImpact: 'Affirmed Shankari Prasad; Mudholkar J queried whether fundamental features of the Constitution could ever be changed.'
      },
      {
        id: 'golak-nath',
        name: 'I.C. Golaknath v. State of Punjab',
        year: 1967,
        exactDate: '27 Feb 1967',
        category: 'case',
        benchStrength: '11-Judge Bench',
        summary: 'Landmark 6-5 majority reversed earlier stance; applied doctrine of prospective overruling.',
        ratioOrImpact: 'Held that Parliament has no power to amend Part III to take away or abridge any Fundamental Right.'
      },
      {
        id: 'amendment-24',
        name: '24th Constitutional Amendment Act',
        year: 1971,
        exactDate: '5 Nov 1971',
        category: 'amendment',
        summary: 'Enacted by Indira Gandhi govt to bypass the Golaknath verdict.',
        ratioOrImpact: 'Explicitly amended Article 13 and Article 368 to state that nothing in Article 13 applies to constitutional amendments.'
      },
      {
        id: 'kesavananda-bharati',
        name: 'Kesavananda Bharati v. State of Kerala',
        year: 1973,
        exactDate: '24 Apr 1973',
        category: 'case',
        benchStrength: '13-Judge Bench',
        summary: 'The greatest constitutional case in Indian history; delivered 7-6 judgment on 68th day of hearing.',
        ratioOrImpact: 'Overruled Golaknath; conceded amendability but formulated the Basic Structure Doctrine restricting amendment of foundational pillars.'
      },
      {
        id: 'minerva-mills',
        name: 'Minerva Mills v. Union of India',
        year: 1980,
        exactDate: '31 Jul 1980',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Struck down Clauses (4) and (5) of Article 368 inserted by the 42nd Amendment.',
        ratioOrImpact: 'Held that limited amending power is itself a basic feature; Parliament cannot expand limited power into absolute power.'
      }
    ]
  },
  {
    id: 'article-21-evolution',
    title: 'The Evolution of Article 21 & Due Process',
    theme: 'Personal Liberty & The Golden Triangle',
    description: 'Trace the jurisprudential metamorphosis of Article 21 from literal pedantry to holistic dignity and privacy.',
    items: [
      {
        id: 'ak-gopalan',
        name: 'A.K. Gopalan v. State of Madras',
        year: 1950,
        exactDate: '19 May 1950',
        category: 'case',
        benchStrength: '6-Judge Bench',
        summary: 'Literalist interpretation of "procedure established by law".',
        ratioOrImpact: 'Held that Articles 19 and 21 are mutually exclusive silos. Due process was intentionally omitted by Constituent Assembly.'
      },
      {
        id: 'kharak-singh',
        name: 'Kharak Singh v. State of U.P.',
        year: 1962,
        exactDate: '18 Dec 1962',
        category: 'case',
        benchStrength: '6-Judge Bench',
        summary: 'Challenged police domiciliary midnight surveillance visits.',
        ratioOrImpact: 'Subba Rao J’s dissent planted the seed that personal liberty encompasses privacy against unlawful surveillance.'
      },
      {
        id: 'adm-jabalpur',
        name: 'ADM Jabalpur v. Shivkant Shukla',
        year: 1976,
        exactDate: '28 Apr 1976',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'The Habeas Corpus Emergency case during the 1975 National Emergency.',
        ratioOrImpact: '4-1 majority held citizens had no locus standi to move court for Article 21 during emergency. H.R. Khanna J delivered heroic lone dissent.'
      },
      {
        id: 'maneka-gandhi',
        name: 'Maneka Gandhi v. Union of India',
        year: 1978,
        exactDate: '25 Jan 1978',
        category: 'case',
        benchStrength: '7-Judge Bench',
        summary: 'Impounding of passport under Section 10(3)(c) of Passports Act 1967.',
        ratioOrImpact: 'Overruled Gopalan; established the Golden Triangle (Arts 14, 19, 21). Procedure must be "just, fair, and reasonable", establishing substantive due process.'
      },
      {
        id: 'puttaswamy',
        name: 'K.S. Puttaswamy v. Union of India',
        year: 2017,
        exactDate: '24 Aug 2017',
        category: 'case',
        benchStrength: '9-Judge Bench',
        summary: 'Unanimous 9-0 judgment on constitutional privacy in the Aadhaar challenge.',
        ratioOrImpact: 'Affirmed Right to Privacy as an intrinsic fundamental right under Article 21. Explicitly overruled ADM Jabalpur and MP Sharma.'
      }
    ]
  },
  {
    id: 'affirmative-action-reservations',
    title: 'Affirmative Action & Reservation Jurisprudence',
    theme: 'Article 15 & 16 Equality Matrix',
    description: 'Order the critical milestones in India’s backward class reservation doctrines and quota ceilings.',
    items: [
      {
        id: 'champakam-dorairajan',
        name: 'State of Madras v. Champakam Dorairajan',
        year: 1951,
        exactDate: '9 Apr 1951',
        category: 'case',
        benchStrength: '7-Judge Bench',
        summary: 'Struck down Madras communal G.O. providing communal quotas in medical/engineering colleges.',
        ratioOrImpact: 'Led directly to the First Constitutional Amendment (1951) inserting Article 15(4) for advancement of socially and educationally backward classes.'
      },
      {
        id: 'balaji-quota',
        name: 'M.R. Balaji v. State of Mysore',
        year: 1963,
        exactDate: '28 Sep 1962',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Challenged Mysore executive order reserving 68% seats in educational institutions.',
        ratioOrImpact: 'First established the rule that reservations under Article 15(4) should generally remain below 50%.'
      },
      {
        id: 'indra-sawhney',
        name: 'Indra Sawhney v. Union of India (Mandal Case)',
        year: 1992,
        exactDate: '16 Nov 1992',
        category: 'case',
        benchStrength: '9-Judge Bench',
        summary: 'Upheld 27% OBC reservation based on Mandal Commission recommendations.',
        ratioOrImpact: 'Enforced strict 50% cap on total reservations; introduced Creamy Layer exclusion; excluded backward classes from promotions under 16(4).'
      },
      {
        id: 'nagaraj-consequential',
        name: 'M. Nagaraj v. Union of India',
        year: 2006,
        exactDate: '19 Oct 2006',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Upheld constitutional amendments (77th, 81st, 82nd, 85th) for SC/ST reservations in promotions.',
        ratioOrImpact: 'Stipulated state must demonstrate quantifiable data showing backwardness, inadequacy of representation, and overall administrative efficiency (Art 335).'
      },
      {
        id: 'janhit-abhiyan-ews',
        name: 'Janhit Abhiyan v. Union of India (EWS Case)',
        year: 2022,
        exactDate: '7 Nov 2022',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Challenged 103rd Constitutional Amendment Act 2019 providing 10% EWS reservation.',
        ratioOrImpact: '3-2 majority held economic criteria alone can form a valid basis for affirmative action and 50% ceiling applies only to Part III existing categories.'
      }
    ]
  },
  {
    id: 'federalism-article-356',
    title: 'Federal Balance & Article 356 Discipline',
    theme: 'Centre-State Relations & Emergency Proclamations',
    description: 'Arrange the critical judicial decisions that brought the arbitrary dismissal of elected state governments under constitutional control.',
    items: [
      {
        id: 'state-of-rajasthan',
        name: 'State of Rajasthan v. Union of India',
        year: 1977,
        exactDate: '6 May 1977',
        category: 'case',
        benchStrength: '7-Judge Bench',
        summary: 'Janata Party home minister dissolved 9 Congress state assemblies after 1977 general election.',
        ratioOrImpact: 'Held judicial review of Article 356 was extremely narrow, almost limited to subjective presidential satisfaction.'
      },
      {
        id: 'sarkaria-commission',
        name: 'Sarkaria Commission Report Submission',
        year: 1988,
        exactDate: '27 Oct 1987',
        category: 'event',
        summary: 'Comprehensive commission on Centre-State legislative and administrative balance.',
        ratioOrImpact: 'Recommended Article 356 be treated strictly as a "measure of last resort" after all constitutional warnings have failed.'
      },
      {
        id: 'sr-bommai',
        name: 'S.R. Bommai v. Union of India',
        year: 1994,
        exactDate: '11 Mar 1994',
        category: 'case',
        benchStrength: '9-Judge Bench',
        summary: 'Dismissal of Karnataka, Meghalaya, Nagaland, and BJP-ruled state assemblies post-Babri demolition.',
        ratioOrImpact: 'Brought Article 356 under comprehensive judicial review; assembly cannot be dissolved until Parliament approves; secularism held part of Basic Structure.'
      },
      {
        id: 'rameshwar-prasad',
        name: 'Rameshwar Prasad v. Union of India (Bihar Assembly)',
        year: 2006,
        exactDate: '24 Jan 2006',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Governor Buta Singh dissolved Bihar assembly before newly elected legislators even took oath.',
        ratioOrImpact: 'Declared Governor’s report mala fide and unconstitutional; held post-election horse-trading cannot be a pretext to deny floor tests.'
      }
    ]
  },
  {
    id: 'transformative-constitutionalism',
    title: 'The Transformative Constitutionalism Wave',
    theme: 'Decriminalization, Dignity & Bodily Autonomy',
    description: 'Order the groundbreaking 21st-century decisions that dismantled colonial-era moral policing and patriarchal laws.',
    items: [
      {
        id: 'nalza-transgender',
        name: 'NALSA v. Union of India',
        year: 2014,
        exactDate: '15 Apr 2014',
        category: 'case',
        benchStrength: '2-Judge Bench',
        summary: 'Recognition of transgender persons as third gender.',
        ratioOrImpact: 'Affirmed gender identity as integral to Article 21 dignity and Article 14 self-determination.'
      },
      {
        id: 'shayara-bano',
        name: 'Shayara Bano v. Union of India (Triple Talaq)',
        year: 2017,
        exactDate: '22 Aug 2017',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Constitutional challenge to Talaq-e-Biddat (instant triple talaq).',
        ratioOrImpact: '3-2 majority struck down triple talaq as "manifestly arbitrary" under Article 14 and not an essential religious practice.'
      },
      {
        id: 'navtej-johar',
        name: 'Navtej Singh Johar v. Union of India',
        year: 2018,
        exactDate: '6 Sep 2018',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Unanimous decriminalization of consensual homosexual acts between adults under Section 377 IPC.',
        ratioOrImpact: 'Struck down Section 377; held constitutional morality triumphs over popular public morality; affirmed sexual orientation as protected under Arts 14, 15, 19, 21.'
      },
      {
        id: 'joseph-shine',
        name: 'Joseph Shine v. Union of India',
        year: 2018,
        exactDate: '27 Sep 2018',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Constitutional challenge to archaic Section 497 IPC (Adultery).',
        ratioOrImpact: 'Unanimously struck down Section 497 IPC as manifestly arbitrary and patriarchal; treated women as chattel of their husbands.'
      },
      {
        id: 'sabarimala',
        name: 'Indian Young Lawyers Association v. State of Kerala',
        year: 2018,
        exactDate: '28 Sep 2018',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Ban on entry of women aged 10-50 into Sabarimala Ayyappa Temple.',
        ratioOrImpact: '4-1 majority held exclusion based on biological factors violates Article 14, 15, and 25. Indu Malhotra J dissented on religious autonomy.'
      }
    ]
  },
  {
    id: 'electoral-democracy-transparency',
    title: 'Electoral Transparency & Free and Fair Elections',
    theme: 'Article 324 & Voters’ Right to Know (Article 19(1)(a))',
    description: 'Arrange the landmark decisions that enforced candidate transparency, voting rights, and election commission independence.',
    items: [
      {
        id: 'adr-case',
        name: 'Union of India v. Association for Democratic Reforms (ADR)',
        year: 2002,
        exactDate: '2 May 2002',
        category: 'case',
        benchStrength: '3-Judge Bench',
        summary: 'Mandatory declaration of criminal antecedents, assets, and liabilities by candidates.',
        ratioOrImpact: 'Held that voter’s right to know background of candidates is a fundamental right under Article 19(1)(a).'
      },
      {
        id: 'lily-thomas',
        name: 'Lily Thomas v. Union of India',
        year: 2013,
        exactDate: '10 Jul 2013',
        category: 'case',
        benchStrength: '2-Judge Bench',
        summary: 'Challenge to Section 8(4) of Representation of the People Act 1951.',
        ratioOrImpact: 'Struck down Section 8(4); convicted MPs and MLAs disqualified immediately upon conviction of 2+ years without 3-month protection window.'
      },
      {
        id: 'nota-judgment',
        name: 'PUCL v. Union of India (NOTA Judgment)',
        year: 2013,
        exactDate: '27 Sep 2013',
        category: 'case',
        benchStrength: '3-Judge Bench',
        summary: 'Introduction of None of the Above (NOTA) option on EVMs.',
        ratioOrImpact: 'Held right to vote includes right to reject candidates; directed ECI to introduce NOTA button on ballot papers and EVMs.'
      },
      {
        id: 'anoop-baranwal',
        name: 'Anoop Baranwal v. Union of India (ECI Appointments)',
        year: 2023,
        exactDate: '2 Mar 2023',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Independent appointment mechanism for Chief Election Commissioner & ECs.',
        ratioOrImpact: 'Held CEC & ECs must be appointed by President on advice of committee comprising Prime Minister, Leader of Opposition, and CJI until Parliament enacts a law.'
      },
      {
        id: 'electoral-bonds',
        name: 'Association for Democratic Reforms v. Union of India (Electoral Bonds)',
        year: 2024,
        exactDate: '15 Feb 2024',
        category: 'case',
        benchStrength: '5-Judge Bench',
        summary: 'Constitutional challenge to anonymous Electoral Bonds scheme.',
        ratioOrImpact: 'Unanimously struck down Electoral Bonds Scheme as violative of Article 19(1)(a) right to information; directed SBI to disclose all donor/recipient data.'
      }
    ]
  }
];

export function getRandomChronoChallenge(): ChronoTimelineChallenge {
  const idx = Math.floor(Math.random() * CHRONO_CHALLENGES.length);
  return CHRONO_CHALLENGES[idx];
}

export function shuffleChronoItems(items: ChronoItem[]): ChronoItem[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Ensure it is not already in correct order
  const isIdentical = shuffled.every((item, idx) => item.id === items[idx].id);
  if (isIdentical && shuffled.length > 1) {
    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }
  return shuffled;
}
