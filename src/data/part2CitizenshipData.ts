import type { ArticleItem } from '../types/constitution';

export const PART_2_CITIZENSHIP_EXPANDED: ArticleItem[] = [
  {
    number: '5',
    title: 'Citizenship at Commencement (Domicile, Birth & Residence)',
    summary: 'Conferred citizenship on 26 January 1950 upon every person having domicile in the territory of India who fulfilled one of three conditions: born in India, either parent born in India, or ordinarily resident in India for at least five years preceding commencement.',
    plainEnglish: 'When the Constitution came into effect on 26 January 1950, you became an Indian citizen if you had your permanent home (domicile) in India and were born in India, had a parent born in India, or had lived here for 5 years.',
    textSnippet: 'At the commencement of this Constitution, every person who has his domicile in the territory of India and—(a) who was born in the territory of India; or (b) either of whose parents was born in the territory of India; or (c) who has been ordinarily resident in the territory of India for not less than five years... shall be a citizen of India.',
    realWorldScenario: 'A person born in undivided India before 1950 lived continuously in Bombay with the intention of making it their permanent home. On 26 January 1950, they automatically acquired Indian citizenship by virtue of domicile and birth under Article 5.',
    prosecutionNote: 'Prosecutions under the Foreigners Act, 1946 or Passport (Entry into India) Act require proving that the accused is a "foreigner". Under Section 9 of the Foreigners Act, the burden of proving that a person is not a foreigner lies on the accused person.',
    clauses: [
      {
        clause: 'Mandatory Foundation: Indian Domicile',
        explanation: 'Requires permanent residence combined with an intention to reside indefinitely (animus manendi). In Pradeep Jain (1984), the Supreme Court ruled that India has only ONE single domicile—the domicile of India—and there is no concept of state domicile.',
        example: 'No separate domicile of Punjab, Bengal, or Kashmir; only Indian domicile.'
      },
      {
        clause: '5(a)-(c) The Three Alternative Gateways',
        explanation: 'Domicile must be coupled with either: (a) birth in India; (b) parental birth in India; or (c) 5 years ordinary residence immediately preceding 26 Jan 1950.',
        example: 'Foreigners residing in India from 1945 to 1950 qualifying under 5(c).'
      }
    ],
    exceptions: ['Article 5 was a one-time snapshot freezing citizenship status strictly on 26 January 1950; all subsequent citizenship acquisition is governed by the Citizenship Act, 1955.'],
    landmarkCases: [
      {
        caseName: 'Pradeep Jain v. Union of India',
        year: 1984,
        bench: '3-Judge Bench',
        summary: 'Bhagwati J authoritatively held that there is only one domicile in India—the domicile of the country—and it is legally incorrect to speak of a state domicile; citizenship and domicile are pan-Indian.',
        significance: 'Cemented the unitary nature of Indian citizenship and domicile.'
      },
      {
        caseName: 'D.P. Joshi v. State of Madhya Bharat',
        year: 1955,
        bench: '5-Judge Bench',
        summary: 'Venkatarama Ayyar J distinguished between citizenship and domicile, holding that regional residential qualifications for university fee concessions do not violate Article 15 or create state citizenship.',
        significance: 'Distinguished residential classification from constitutional citizenship.'
      }
    ],
    doctrineLinks: ['Single Domicile of India', 'Commencement Snapshot Rule']
  },
  {
    number: '6',
    title: 'Citizenship Rights of Persons Migrated from Pakistan',
    summary: 'Addressed post-partition migration by conferring Indian citizenship on individuals who migrated from territories now in Pakistan to India, dividing them into two cohorts based on the cutoff date of 19 July 1948 (introduction of the permit system).',
    plainEnglish: 'Created special citizenship rules for refugees fleeing Pakistan during partition. If you arrived in India before 19 July 1948, you became a citizen automatically after 6 months; if you arrived after that date, you had to register officially with the government.',
    textSnippet: 'Notwithstanding anything in article 5, a person who has migrated to the territory of India from the territory now included in Pakistan shall be deemed to be a citizen of India at the commencement of this Constitution.',
    realWorldScenario: 'A Hindu or Sikh refugee family displaced from West Punjab during partition crossed the border into Delhi in September 1947 and resided there permanently. Under Article 6(b)(i), having migrated before 19 July 1948, they automatically became Indian citizens at the commencement of the Constitution.',
    prosecutionNote: 'Proof of partition migration and registration certificates under Article 6 remain relevant evidentiary defense documents in historic legacy citizenship disputes under the Foreigners Act.',
    clauses: [
      {
        clause: '6(a) Ancestral Lineage Precondition',
        explanation: 'The migrant, or either of their parents, or any of their grandparents must have been born in India as defined in the Government of India Act 1935 (undivided India).',
        example: 'Proving ancestral birth in pre-partition Lahore, Karachi, or Dhaka.'
      },
      {
        clause: '6(b)(i) Migration Before 19 July 1948',
        explanation: 'Automatic deemed citizenship if the person was ordinarily resident in India since their migration date.',
        example: 'Early partition refugees automatically naturalized.'
      },
      {
        clause: '6(b)(ii) Migration After 19 July 1948 (Registration Track)',
        explanation: 'Required formal application and registration by an appointed government officer after at least six months of continuous residence preceding the application.',
        example: 'Permit system compliance for late migrants.'
      }
    ],
    exceptions: ['Migrants who arrived after 19 July 1948 who failed to register before 26 January 1950 did not acquire citizenship under this Article.'],
    landmarkCases: [
      {
        caseName: 'Shanno Devi v. Mangal Sain',
        year: 1961,
        bench: '3-Judge Bench',
        summary: 'Held that the word "migrated" in Article 6 means moving to India with the intention of residing permanently, not temporary travel.',
        significance: 'Interpreted "migration" as requiring permanent residential intent.'
      }
    ],
    doctrineLinks: ['Partition Refugee Assimilation', 'Permit System Cutoff']
  },
  {
    number: '7',
    title: 'Deemed Cessation of Rights of Migrants to Pakistan',
    summary: 'Deemed that any person who migrated from the territory of India to territories now included in Pakistan after 1 March 1947 ceased to be a citizen of India, overriding Articles 5 and 6, with an exception for those who returned under a valid permit for resettlement or permanent return.',
    plainEnglish: 'If someone left India for Pakistan after 1 March 1947, they permanently lost their Indian citizenship, even if they were born in India. The only exception was if they returned to India with an official government permit for permanent resettlement.',
    textSnippet: 'Notwithstanding anything in articles 5 and 6, a person who has after the first day of March, 1947, migrated from the territory of India to the territory now included in Pakistan shall not be deemed to be a citizen of India.',
    realWorldScenario: 'An individual born in Lucknow moved to Karachi in April 1947 with their family. In 1951, they entered India on a temporary Pakistani passport and visa, and refused to leave. Can they claim Indian citizenship under Article 5 based on birth? No! Under Article 7, having migrated to Pakistan after 1 March 1947, their Indian citizenship stood extinguished.',
    prosecutionNote: 'Prosecutions for overstaying temporary visas under Section 14 of the Foreigners Act frequently invoke Article 7 to refute defense claims of birth-based Indian citizenship.',
    clauses: [
      {
        clause: 'Non-Obstante Overriding Clause',
        explanation: 'Article 7 explicitly overrides both Article 5 (domicile) and Article 6 (refugees).',
        example: 'Extinguishment of rights even if born on Indian soil.'
      },
      {
        clause: 'Resettlement Permit Proviso',
        explanation: 'Allows deemed citizenship under Article 6(b)(ii) if the person returned to India under a lawful permit for resettlement or permanent return issued by competent authority.',
        example: 'Government-sanctioned rehabilitation returns.'
      }
    ],
    exceptions: ['Temporary visits to Pakistan without intention to abandon Indian residence do not constitute migration under Article 7 (Bhirumal).'],
    landmarkCases: [
      {
        caseName: 'State of Bihar v. Kumar Amar Singh',
        year: 1955,
        bench: '5-Judge Bench',
        summary: 'Held that an Indian woman who went to Pakistan in July 1948 leaving her husband behind in India "migrated" under Article 7, and the common-law rule that a wife’s domicile follows her husband could not override Article 7.',
        significance: 'Established the strict supremacy of Article 7 over private international law.'
      }
    ],
    doctrineLinks: ['Extinguishment of Nationality', 'Overriding Partition Bar']
  },
  {
    number: '8',
    title: 'Citizenship of Persons of Indian Origin Residing Outside India',
    summary: 'Confers citizenship upon persons of Indian origin residing outside India (PIOs), provided they or either of their parents or grandparents were born in undivided India and they are registered as an Indian citizen by the diplomatic or consular representative of India.',
    plainEnglish: 'Allowed Indians living abroad (in London, Rangoon, Nairobi, Fiji) when the Constitution was drafted to claim Indian citizenship by registering at their local Indian Embassy or High Commission.',
    textSnippet: 'Any person who or either of whose parents or any of whose grandparents was born in India as defined in the Government of India Act, 1935... and who is ordinarily residing in any country outside India... shall be deemed to be a citizen of India if he has been registered as a citizen of India by the diplomatic or consular representative of India.',
    realWorldScenario: 'An Indian merchant residing in London whose parents were born in undivided India applies to the Indian High Commission in London to be registered as an Indian citizen before 1950. Upon registration, they became a constitutional citizen under Article 8.',
    prosecutionNote: 'Diplomatic registration under Article 8 forms the historical root of Overseas Citizen of India (OCI) and consular registration provisions under the modern Citizenship Act.',
    clauses: [
      {
        clause: 'Diplomatic Consular Registration Mandate',
        explanation: 'Requires formal registration through an Indian embassy, high commission, or consulate abroad.',
        example: 'Overseas Indian diaspora registration.'
      }
    ],
    exceptions: ['Does not apply to persons residing in Pakistan, which was governed exclusively by Articles 6 and 7.'],
    landmarkCases: [
      {
        caseName: 'Kulathil Mammu v. State of Kerala',
        year: 1966,
        bench: 'Constitution Bench',
        summary: 'Analyzed the global diaspora scope of Article 8 in contrast with the partition-specific provisions of Articles 6 and 7.',
        significance: 'Demarcated diaspora registration from partition migration.'
      }
    ],
    doctrineLinks: ['Diaspora Citizenship Gateway', 'Consular Sovereign Registration']
  },
  {
    number: '9',
    title: 'Prohibition of Dual Citizenship (Voluntary Acquisition of Foreign Nationality)',
    summary: 'Codifies the strict single-citizenship principle of the Indian Republic: Any person who voluntarily acquires the citizenship of a foreign State ceases immediately to be an Indian citizen, and cannot claim citizenship under Articles 5, 6, or 8.',
    plainEnglish: 'India strictly forbids dual citizenship. The moment an Indian citizen takes up a passport or citizenship of another country (like the US, UK, or Canada), their Indian citizenship is automatically and instantly extinguished.',
    textSnippet: 'No person shall be a citizen of India by virtue of article 5, or be deemed to be a citizen of India by virtue of article 6 or article 8, if he has voluntarily acquired the citizenship of any foreign State.',
    realWorldScenario: 'An Indian citizen moves abroad, naturalizes as a British citizen, and obtains a British passport. They attempt to vote in an Indian parliamentary election or hold agricultural land reserved for citizens. Can they do so? No! Under Article 9, voluntary acquisition of British citizenship instantly extinguished their Indian citizenship by operation of constitutional law.',
    prosecutionNote: 'A criminal offense: Traveling on an Indian passport after acquiring foreign citizenship is punishable under Section 12 of the Passports Act, 1967. India does not permit dual citizenship; OCI (Overseas Citizen of India) is merely a lifelong multi-entry visa card, not constitutional citizenship.',
    clauses: [
      {
        clause: 'Automatic Instant Cessation',
        explanation: 'Extinguishment occurs by operation of law upon voluntary acquisition of foreign nationality without requiring judicial trial.',
        example: 'Taking oath of allegiance to a foreign sovereign state.'
      },
      {
        clause: 'The "Voluntary" Requirement',
        explanation: 'The foreign citizenship must be acquired voluntarily (not through automatic operation of marriage or minor dependency against will).',
        example: 'Applying for and taking a foreign passport.'
      }
    ],
    exceptions: ['OCI (Overseas Citizen of India) cards granted under Section 7A of the Citizenship Act 1955 are statutory immigration privileges, NOT dual citizenship (no voting rights, no right to hold constitutional posts, no public service eligibility).'],
    landmarkCases: [
      {
        caseName: 'State of U.P. v. Rehmatullah',
        year: 1971,
        bench: 'Constitution Bench',
        summary: 'Held that whether an Indian citizen has voluntarily acquired foreign citizenship under Article 9 and Section 9(2) of the 1955 Act is an issue that can ONLY be decided by the Central Government, and courts cannot decide this question without a central finding.',
        significance: 'Exclusive central executive jurisdiction over cessation of citizenship.'
      },
      {
        caseName: 'Bhagwati Prasad Dixit v. Rajeev Gandhi',
        year: 1986,
        bench: '2-Judge Bench',
        summary: 'Reaffirmed that under Article 9 read with Section 9(2) of the Citizenship Act, the High Court hearing an election petition has no jurisdiction to determine whether a person lost Indian citizenship without the Central Government’s decision.',
        significance: 'Barred collateral challenges to citizenship in election petitions.'
      }
    ],
    doctrineLinks: ['Strict Single Citizenship', 'Prohibition of Dual Nationality', 'Exclusive Central Forum Rule']
  },
  {
    number: '10',
    title: 'Continuance of the Rights of Citizenship',
    summary: 'Guarantees that every person who is or is deemed to be a citizen of India under the preceding articles shall continue to be a citizen, subject to the provisions of any law that may be made by Parliament.',
    plainEnglish: 'Once you are a citizen of India, the government cannot arbitrarily strip you of your citizenship by an executive order. Your citizenship can only be modified or revoked by an Act passed by Parliament.',
    textSnippet: 'Every person who is or is deemed to be a citizen of India under any of the foregoing provisions of this Part shall, subject to the provisions of any law that may be made by Parliament, continue to be such citizen.',
    realWorldScenario: 'An executive circular attempts to cancel citizenship of a minority group based on administrative suspicion. The circular is invalid because under Article 10, constitutional citizenship continues unless altered by a valid Parliamentary statute.',
    prosecutionNote: 'Citizenship deprivation under Section 10 of the Citizenship Act, 1955 requires proof of fraud, false representation, or disloyalty to the Constitution, with quasi-judicial inquiry safeguards.',
    clauses: [
      {
        clause: 'Constitutional Continuity Shield',
        explanation: 'Citizenship is a continuing right protected against arbitrary executive revocation.',
        example: 'Protection against executive statelessness.'
      }
    ],
    exceptions: ['Parliament has plenary legislative power under Article 11 to enact laws providing for termination or deprivation of citizenship.'],
    landmarkCases: [
      {
        caseName: 'Ebrahim Vazir Mavat v. State of Bombay',
        year: 1954,
        bench: '5-Judge Bench',
        summary: 'Struck down a provision of the Influx from Pakistan (Control) Act that permitted the expulsion of an Indian citizen, holding that a law cannot arbitrarily destroy the right of an Indian citizen to reside in India under Art 10.',
        significance: 'Protected citizens against arbitrary executive deportation.'
      }
    ],
    doctrineLinks: ['Continuance of Nationality', 'Legislative Precondition for Deprivation']
  },
  {
    number: '11',
    title: 'Parliament to Regulate the Right of Citizenship by Law',
    summary: 'Confers plenary, untrammeled constituent authority upon Parliament to regulate the acquisition, termination, and all other matters relating to citizenship, clarifying that nothing in Articles 5 to 10 limits this legislative power.',
    plainEnglish: 'Articles 5 to 10 only settled who was an Indian citizen on day one (26 Jan 1950). Parliament was given complete supreme authority to pass future laws deciding how people can become or stop being Indian citizens.',
    textSnippet: 'Nothing in the foregoing provisions of this Part shall derogate from the power of Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship.',
    realWorldScenario: 'Pursuant to Article 11, Parliament enacted the comprehensive Citizenship Act, 1955, providing 5 modes of acquiring citizenship (Birth, Descent, Registration, Naturalization, and Incorporation of Territory), as well as subsequent amendments like the Citizenship (Amendment) Act, 2019 (CAA).',
    prosecutionNote: 'Prosecuting illegal migrants under Section 14 of the Foreigners Act relies on statutory definitions in the Citizenship Act 1955 enacted pursuant to Article 11.',
    clauses: [
      {
        clause: 'Plenary Parliamentary Competence',
        explanation: 'Parliament’s authority over nationality is plenary and not constrained by the transitional provisions of Articles 5 to 10.',
        example: 'Enactment and amendment of the Citizenship Act, 1955.'
      },
      {
        clause: 'Acquisition and Termination Framework',
        explanation: 'Encompasses all modes of citizenship acquisition, renunciation, termination, and deprivation.',
        example: 'Section 3-6 of Citizenship Act 1955.'
      }
    ],
    exceptions: ['Laws made by Parliament under Article 11 are still subject to judicial review and cannot violate the Basic Structure or Fundamental Rights (Arts 14, 21).'],
    landmarkCases: [
      {
        caseName: 'Izhar Ahmad Khan v. Union of India',
        year: 1962,
        bench: '5-Judge Bench',
        summary: 'Gajendragadkar J upheld Section 9(2) of the Citizenship Act 1955 and Rule 3 of Schedule III (raising a conclusive presumption of voluntary acquisition of foreign nationality on obtaining a foreign passport), holding that Parliament has plenary power under Art 11.',
        significance: 'Validated parliamentary rules of evidence in citizenship cessation.'
      },
      {
        caseName: 'Assam Sanmilita Mahasangha v. Union of India',
        year: 2024,
        bench: '5-Judge Constitution Bench',
        summary: 'Chandrachud CJI and majority upheld the constitutional validity of Section 6A of the Citizenship Act, 1955 (introducing the March 25, 1971 cutoff for Assam), confirming that Parliament possesses broad legislative power under Article 11 to fashion asymmetric citizenship rules.',
        significance: 'Recent landmark validating Section 6A of the Citizenship Act and parliamentary competence under Article 11.'
      }
    ],
    doctrineLinks: ['Plenary Parliamentary Competence over Nationality', 'Asymmetric Citizenship Regimes']
  }
];
