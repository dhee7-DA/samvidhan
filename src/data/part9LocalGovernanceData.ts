import type { ArticleItem } from '../types/constitution';

export const PART_9_PANCHAYATS_EXPANDED: ArticleItem[] = [
  {
    number: '243',
    title: 'Definitions (Gram Sabha, Panchayat & District)',
    summary: 'Establishes foundational definitions for local rural self-governance under the 73rd Amendment 1992, defining District, Gram Sabha, Intermediate level, Panchayat, and Village.',
    plainEnglish: 'Defines the basic building blocks of village democracy. A Gram Sabha is a body consisting of all registered voters in a village, functioning as the primary democratic assembly.',
    textSnippet: '"Gram Sabha" means a body consisting of persons registered in the electoral rolls relating to a village comprised within the area of Panchayat at the village level.',
    realWorldScenario: 'In a remote village, the Panchayat council attempts to pass a developmental budget without convening the Gram Sabha. Can they do so? No! Under Article 243A, the Gram Sabha is the sovereign direct democracy forum of all adult villagers, empowered to approve village plans and social audits.',
    prosecutionNote: 'Offenses involving misappropriation of village panchayat funds are investigated under the Prevention of Corruption Act, with Sarpanches and Panchayat Secretaries recognized as "public servants" under BNS Section 2(28).',
    clauses: [
      {
        clause: '243(b) Gram Sabha',
        explanation: 'The assembly of all registered voters in the village; direct participatory democracy.',
        example: 'Village social audit meetings and beneficiary selection.'
      },
      {
        clause: '243(d) Panchayat',
        explanation: 'An institution of self-government constituted under Article 243B for rural areas.',
        example: 'Village, block, and district panchayats.'
      }
    ],
    exceptions: ['Exempted areas under Article 243M: Scheduled Areas (Fifth Schedule governed by PESA Act 1996), tribal areas of Sixth Schedule, and certain hill areas.'],
    landmarkCases: [
      {
        caseName: 'Bhanumati v. State of U.P.',
        year: 2010,
        bench: '2-Judge Bench',
        summary: 'Ganguly J held that the 73rd Amendment introduced decentralized, participatory democracy as a constitutional mandate, ending the era of bureaucratic centralization over local bodies.',
        significance: 'Validated constitutional elevation of Panchayati Raj institutions.'
      }
    ],
    doctrineLinks: ['Democratic Decentralization', 'Subsidiarity Principle']
  },
  {
    number: '243B',
    title: 'Constitution of Panchayats (Mandatory 3-Tier System)',
    summary: 'Mandates the constitution of a uniform three-tier Panchayati Raj system in every State: at the village, intermediate (block/taluka), and district levels, with an exemption for intermediate level in states having a population not exceeding twenty lakhs.',
    plainEnglish: 'Every State must set up a three-level local government: Gram Panchayat at the village, Panchayat Samiti at the block level, and Zilla Parishad at the district level. Smaller states with under 20 lakh people can skip the middle level.',
    textSnippet: 'There shall be constituted in every State, Panchayats at the village, intermediate and district levels in accordance with the provisions of this Part.',
    realWorldScenario: 'A state government with a population of 6 crore attempts to abolish the district-level Zilla Parishad to save administrative costs. Is this permissible? No! Article 243B(1) makes the three-tier structure mandatory for all states having a population exceeding 20 lakhs.',
    prosecutionNote: 'Prosecutions under state Panchayat Acts for election malpractices or illegal disqualification of elected representatives derive their constitutional jurisdiction from Article 243B.',
    clauses: [
      {
        clause: '243B(1) Mandatory 3-Tier Hierarchy',
        explanation: 'Village level (Gram Panchayat), Intermediate level (Block/Samiti), and District level (Zilla Parishad).',
        example: 'Standard rural governance hierarchy across Indian states.'
      },
      {
        clause: '243B(2) Small State Exemption',
        explanation: 'States with a population not exceeding 2 million (20 lakhs) may choose not to constitute intermediate-level Panchayats.',
        example: 'Sikkim, Goa, and small northeastern states.'
      }
    ],
    exceptions: ['States having less than 2 million population are exempt from the intermediate tier.'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Pradhan Sangh Kshettra Samiti',
        year: 1995,
        bench: '2-Judge Bench',
        summary: 'Upheld the constitutional validity of state legislative demarcations creating village panchayat units under Article 243B, holding that territorial reorganization is an executive-legislative function.',
        significance: 'Affirmed administrative flexibility in demarcating local panchayat boundaries.'
      }
    ],
    doctrineLinks: ['Three-Tier Federal Subsidiarity', 'Mandatory Democratic Tiering']
  },
  {
    number: '243D',
    title: 'Reservation of Seats (Women, SC/ST & The Triple Test)',
    summary: 'Mandates seat reservations for Scheduled Castes and Scheduled Tribes in proportion to their population, provides an ironclad constitutional mandate that not less than one-third of all seats and chairperson offices must be reserved for women, and allows state legislation for OBC reservations subject to the "Triple Test".',
    plainEnglish: 'Guarantees social justice at the grassroots. At least 33% (one-third) of all panchayat seats and Sarpanch posts must be reserved for women. SC and ST communities receive seats matching their population share.',
    textSnippet: 'Not less than one-third (including the number of seats reserved for women belonging to the Scheduled Castes and the Scheduled Tribes) of the total number of seats to be filled by direct election in every Panchayat shall be reserved for women.',
    realWorldScenario: 'A state holds panchayat elections reserving only 20% of seats for women. The election notification is unconstitutional! Article 243D(3) establishes an irreducible constitutional minimum of 33.33% (many states like Bihar, MP, and Maharashtra have raised this to 50% by state law).',
    prosecutionNote: 'Falsifying caste certificates to contest a reserved Panchayat seat under Article 243D constitutes cheating, forgery, and an electoral crime prosecuted under Sections 318, 336 BNS and state panchayat penal provisions.',
    clauses: [
      {
        clause: '243D(1)-(2) Proportional SC/ST Quotas',
        explanation: 'Reservation of seats for SCs and STs in proportion to their population in the panchayat area.',
        example: 'Direct demographic representation in local bodies.'
      },
      {
        clause: '243D(3) Mandatory 1/3rd Women Reservation',
        explanation: 'Irreducible floor: At least one-third of all seats to be filled by direct election must be reserved for women.',
        example: 'Historic empowerment of over 1.4 million elected women representatives.'
      },
      {
        clause: '243D(4) Chairperson Offices Reservation',
        explanation: 'Offices of Chairpersons (Sarpanch, Pradhan, Adhyaksha) reserved for SCs, STs, and women by rotation.',
        example: 'Rotational reservation of Sarpanch posts.'
      },
      {
        clause: '243D(6) Backward Classes (OBC) Enabling Clause',
        explanation: 'Authorizes states to reserve seats for backward classes (OBCs), strictly subject to the Supreme Court\'s "Triple Test".',
        example: 'Dedicated commission, empirical inquiry, and 50% total cap.'
      }
    ],
    exceptions: ['Article 243M(3A) inserted by the 83rd Amendment: No reservation for Scheduled Castes is required in Arunachal Pradesh, which is entirely tribal.'],
    landmarkCases: [
      {
        caseName: 'K. Krishna Murthy v. Union of India',
        year: 2010,
        bench: '5-Judge Bench',
        summary: 'Balakrishnan CJ upheld Article 243D, laying down the "Triple Test" for OBC reservations in local bodies: (1) Set up a dedicated commission to conduct empirical inquiry into political backwardness; (2) Specify the proportion of reservation required; (3) Ensure total reservation does not breach the 50% ceiling.',
        significance: 'Leading Constitution Bench authority governing local body political reservations.'
      },
      {
        caseName: 'Vikas Kishanrao Gawali v. State of Maharashtra',
        year: 2021,
        bench: '3-Judge Bench',
        summary: 'Khanwilkar J struck down OBC reservations in Maharashtra local bodies that exceeded the 50% ceiling and were notified without complying with the Triple Test empirical inquiry.',
        significance: 'Enforced the strict non-negotiability of the Triple Test.'
      }
    ],
    doctrineLinks: ['Grassroots Gender Empowerment', 'The Triple Test Doctrine', 'Proportional Social Representation']
  },
  {
    number: '243E',
    title: 'Duration of Panchayats (Ironclad 5-Year Term)',
    summary: 'Guarantees a fixed five-year term of office for every Panchayat from the date appointed for its first meeting; mandates that elections to constitute a new Panchayat must be completed before the expiration of its 5-year duration, or within six months of dissolution.',
    plainEnglish: 'A Panchayat serves for exactly 5 years. State governments cannot arbitrarily delay local elections or appoint bureaucrats to run villages indefinitely. Elections must be conducted before the 5-year term ends.',
    textSnippet: 'Every Panchayat, unless sooner dissolved under any law for the time being in force, shall continue for five years from the date appointed for its first meeting and no longer... An election to constitute a Panchayat shall be completed before the expiration of its duration.',
    realWorldScenario: 'A state government issues an executive order postponing panchayat elections for two years citing administrative inconvenience, appointing special officers to run village councils. The Supreme Court in Kishan Singh Tomar ruled this unconstitutional: the 5-year term is an ironclad command; elections cannot be stalled.',
    prosecutionNote: 'Elected panchayat office bearers removed before their 5-year term expires can only be removed through due process after a fair hearing, not by arbitrary executive order.',
    clauses: [
      {
        clause: '243E(1) Fixed 5-Year Term',
        explanation: 'Mandatory 5-year term calculated from the date of the first official meeting.',
        example: 'Prevents prolonged postponement of grassroots democracy.'
      },
      {
        clause: '243E(3)(a) Expiry Election Mandate',
        explanation: 'Elections must be completed BEFORE the 5-year tenure expires.',
        example: 'Timely election schedules published by State Election Commissions.'
      },
      {
        clause: '243E(3)(b) 6-Month Dissolution Rule',
        explanation: 'If a panchayat is dissolved prematurely, fresh elections must be held within 6 months, and the newly elected body serves only the remainder of the term.',
        example: 'Bypolls held within 180 days for the residual tenure.'
      }
    ],
    exceptions: ['Where the remainder of the period for which the dissolved Panchayat would have continued is less than six months, it is not necessary to hold an election.'],
    landmarkCases: [
      {
        caseName: 'Kishan Singh Tomar v. Municipal Corp. of Ahmedabad',
        year: 2006,
        bench: '5-Judge Bench',
        summary: 'Held that the mandate of Article 243E and 243U is absolute; State governments and State Election Commissions are constitutionally bound to hold local elections before the expiry of the 5-year term, and cannot plead executive excuses.',
        significance: 'Made timely local elections a non-derogable constitutional obligation.'
      }
    ],
    doctrineLinks: ['Fixed Term Local Democracy', 'Non-Derogable Election Calendar']
  },
  {
    number: '243K',
    title: 'Elections to the Panchayats (The State Election Commission)',
    summary: 'Vests the superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to the Panchayats in an independent State Election Commission headed by a State Election Commissioner appointed by the Governor, who can only be removed in like manner as a High Court Judge.',
    plainEnglish: 'Creates an independent election watchdog for villages and towns (the State Election Commission). The Commissioner cannot be sacked by the state government at will; they enjoy the same removal security as a High Court judge.',
    textSnippet: 'The superintendence, direction and control of the preparation of electoral rolls for, and the conduct of, all elections to the Panchayats shall be vested in a State Election Commission consisting of a State Election Commissioner to be appointed by the Governor.',
    realWorldScenario: 'A Chief Minister becomes angry with the State Election Commissioner for ordering free and fair security deployment and attempts to terminate the Commissioner through a cabinet order. The termination is void! Under Article 243K(2), the State Election Commissioner cannot be removed from office except in like manner and on the like grounds as a Judge of a High Court.',
    prosecutionNote: 'Electoral offenses committed during Panchayat polls (booth capturing, voter intimidation, bribery) are investigated by police and prosecuted under BNS and State Panchayat Acts under the direct superintendence of the State Election Commission.',
    clauses: [
      {
        clause: '243K(1) Plenary Electoral Superintendence',
        explanation: 'Exclusive constitutional authority to prepare electoral rolls, delimit wards, and conduct local elections.',
        example: 'State Election Commission issuing model code of conduct for local polls.'
      },
      {
        clause: '243K(2) High Court Removal Security',
        explanation: 'Guarantees constitutional independence: Removable only via Parliamentary impeachment like a High Court Judge.',
        example: 'Security of tenure preventing political intimidation.'
      }
    ],
    exceptions: ['Courts are barred under Article 243O from interfering in the ongoing election process once the election notification is issued.'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Sachiv, Rajya Nirvachan Ayog',
        year: 1999,
        bench: '2-Judge Bench',
        summary: 'Held that the State Election Commission enjoys powers on par with the Election Commission of India under Article 324 regarding local elections, and the State Government must provide necessary police force and staff.',
        significance: 'Equated the constitutional stature of the State Election Commission with the ECI.'
      }
    ],
    doctrineLinks: ['Independent Local Election Watchdog', 'High Court Judge Removal Protection']
  },
  {
    number: '243O',
    title: 'Bar to Interference by Courts in Electoral Matters',
    summary: 'Prohibits courts from questioning the validity of any law relating to the delimitation of constituencies or the allotment of seats, and mandates that no election to any Panchayat shall be called in question except by an election petition presented to such authority and in such manner as provided by state law.',
    plainEnglish: 'Once the election process starts, courts cannot stop the polls or interfere with ward boundaries. Any complaint about cheating or corrupt practices must wait until after the election, and must be filed through a formal Election Petition.',
    textSnippet: 'Notwithstanding anything in this Constitution... the validity of any law relating to the delimitation of constituencies... shall not be called in question in any court; no election to any Panchayat shall be called in question except by an election petition.',
    realWorldScenario: 'A candidate whose nomination paper is rejected by the Returning Officer approaches the High Court under Article 226 seeking a stay on the village panchayat election. The High Court will dismiss the writ petition at the threshold: Under Article 243O(b), elections cannot be stalled midway; the aggrieved candidate must file an Election Petition before the designated tribunal after results are declared.',
    prosecutionNote: 'Prosecution for corrupt electoral practices or booth capture is pursued under criminal law independently, but the setting aside of the election result can only be ordered by the Election Tribunal hearing an Election Petition under Article 243O.',
    clauses: [
      {
        clause: '243O(a) Delimitation Immunity',
        explanation: 'Bar on questioning the validity of laws relating to delimitation of constituencies or allotment of seats.',
        example: 'Preventing litigation from stalling boundary notifications.'
      },
      {
        clause: '243O(b) Exclusive Election Petition Route',
        explanation: 'Post-election challenge through a formal election petition before the statutory tribunal.',
        example: 'Filing an election petition before the District Munsif / Civil Judge.'
      }
    ],
    exceptions: ['The constitutional bar applies to interrupting the ongoing election process; post-election, High Courts retain writ review under Article 226 over the final decision of the Election Tribunal.'],
    landmarkCases: [
      {
        caseName: 'Anugrah Narain Singh v. State of U.P.',
        year: 1996,
        bench: '3-Judge Bench',
        summary: 'Held that the bar in Article 243O and 243ZG is absolute; High Courts under Article 226 cannot interdict, stay, or interfere with an ongoing local body election once the notification is issued.',
        significance: 'Ironclad rule preventing judicial stalling of grassroots elections.'
      }
    ],
    doctrineLinks: ['Non-Intervention in Ongoing Elections', 'Exclusive Election Petition Jurisdiction']
  }
];
