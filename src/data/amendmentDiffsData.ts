export interface AmendmentFootnote {
  number: number;
  text: string;
  act: string;
  year: number;
  effect: 'inserted' | 'substituted' | 'omitted' | 'modified';
}

export interface ArticleDiffData {
  articleNumber: string;
  articleTitle: string;
  original1950Text: string;
  currentText: string;
  summaryOfChanges: string;
  keyAmendments: {
    act: string;
    year: number;
    clauseAffected: string;
    description: string;
    landmarkCase?: string;
  }[];
  verbatimDiffSnippet: {
    type: 'original' | 'amended' | 'added' | 'deleted';
    text: string;
    annotation?: string;
  }[];
  constitutionalImpact: string;
}

export const AMENDMENT_DIFFS_DATA: Record<string, ArticleDiffData> = {
  '15': {
    articleNumber: '15',
    articleTitle: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth',
    original1950Text: `(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.
(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—
(a) access to shops, public restaurants, hotels and places of public entertainment; or
(b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.
(3) Nothing in this article shall prevent the State from making any special provision for women and children.`,
    currentText: `(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.
(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—
(a) access to shops, public restaurants, hotels and places of public entertainment; or
(b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.
(3) Nothing in this article shall prevent the State from making any special provision for women and children.
(4) Nothing in this article or in clause (2) of article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes. [Ins. by 1st Amd. 1951]
(5) Nothing in this article or in sub-clause (g) of clause (1) of article 19 shall prevent the State from making any special provision, by law, for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes or the Scheduled Tribes in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30. [Ins. by 93rd Amd. 2005]
(6) Nothing in this article or sub-clause (g) of clause (1) of article 19 or clause (2) of article 29 shall prevent the State from making—
(a) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5); and
(b) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5) in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30, which in the case of reservation would be in addition to the existing reservations and subject to a maximum of ten per cent. of the total seats in each category. [Ins. by 103rd Amd. 2019]`,
    summaryOfChanges: 'Transformed from a pure negative non-discrimination guarantee (1950) into a multifaceted affirmative action framework through three major constitutional amendments: inserting SEBC/SC/ST reservations (1st Amd 1951), private educational institution quotas (93rd Amd 2005), and 10% EWS reservations (103rd Amd 2019).',
    keyAmendments: [
      {
        act: 'Constitution (First Amendment) Act, 1951',
        year: 1951,
        clauseAffected: 'Article 15(4)',
        description: 'Inserted to overcome the Supreme Court ruling in State of Madras v. Champakam Dorairajan (1951), permitting affirmative reservations in educational admissions.',
        landmarkCase: 'State of Madras v. Champakam Dorairajan (1951)'
      },
      {
        act: 'Constitution (Ninety-third Amendment) Act, 2005',
        year: 2005,
        clauseAffected: 'Article 15(5)',
        description: 'Empowered State to mandate reservations in private unaided educational institutions (excluding minority institutions), nullifying P.A. Inamdar (2005).',
        landmarkCase: 'Ashoka Kumar Thakur v. Union of India (2008)'
      },
      {
        act: 'Constitution (One Hundred and Third Amendment) Act, 2019',
        year: 2019,
        clauseAffected: 'Article 15(6)',
        description: 'Introduced 10% reservation in educational admissions for Economically Weaker Sections (EWS) of citizens other than SC, ST, and OBC.',
        landmarkCase: 'Janhit Abhiyan v. Union of India (2022)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: 'Original 1950 Framework: Contained only Clauses (1), (2), and (3).' },
      { type: 'added', text: '+ Clause (4): Advancement of socially and educationally backward classes or SC/ST (1st Amd 1951).' },
      { type: 'added', text: '+ Clause (5): Reservations in private aided/unaided educational institutions (93rd Amd 2005).' },
      { type: 'added', text: '+ Clause (6): 10% reservation for Economically Weaker Sections (EWS) (103rd Amd 2019).' }
    ],
    constitutionalImpact: 'Shifted Indian equality jurisprudence from formal equality (identical treatment) to substantive equality (remedial affirmative action and distributive justice).'
  },
  '19': {
    articleNumber: '19',
    articleTitle: 'Protection of certain rights regarding freedom of speech, etc.',
    original1950Text: `(1) All citizens shall have the right—
(a) to freedom of speech and expression;
(b) to assemble peaceably and without arms;
(c) to form associations or unions;
(d) to move freely throughout the territory of India;
(e) to reside and settle in any part of the territory of India;
(f) to acquire, hold and dispose of property; and
(g) to practise any profession, or to carry on any occupation, trade or business.
(2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law in so far as it relates to, or prevent the State from making any law relating to, libel, slander, defamation, contempt of court or any matter which offends against decency or morality or which undermines the security of, or tends to overthrow, the State.`,
    currentText: `(1) All citizens shall have the right—
(a) to freedom of speech and expression;
(b) to assemble peaceably and without arms;
(c) to form associations or unions [or co-operative societies];
(d) to move freely throughout the territory of India;
(e) to reside and settle in any part of the territory of India; [and]
(f) [Omitted by 44th Amd. 1978]
(g) to practise any profession, or to carry on any occupation, trade or business.
(2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality or in relation to contempt of court, defamation or incitement to an offence.`,
    summaryOfChanges: 'Crucial shifts: (1) Added "reasonable restrictions", "public order", "friendly relations with foreign States", and "incitement to an offence" to 19(2) by 1st Amd 1951; (2) Added "sovereignty and integrity of India" by 16th Amd 1963; (3) Completely omitted the fundamental right to acquire, hold, and dispose of property (Art 19(1)(f)) by 44th Amd 1978; (4) Added "co-operative societies" to 19(1)(c) by 97th Amd 2011.',
    keyAmendments: [
      {
        act: 'Constitution (First Amendment) Act, 1951',
        year: 1951,
        clauseAffected: 'Article 19(2)',
        description: 'Replaced rigid restrictions with "reasonable restrictions" and added grounds: public order, friendly foreign relations, incitement to an offence (overcoming Romesh Thappar).',
        landmarkCase: 'Romesh Thappar v. State of Madras (1950)'
      },
      {
        act: 'Constitution (Sixteenth Amendment) Act, 1963',
        year: 1963,
        clauseAffected: 'Article 19(2), (3), (4)',
        description: 'Inserted "sovereignty and integrity of India" as a permissible ground of restriction in the wake of the 1962 Sino-Indian War and separatist movements.'
      },
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 19(1)(f)',
        description: 'Omitted the fundamental right to property (19(1)(f)), permanently ending judicial invalidation of socialist land reforms under Part III.'
      },
      {
        act: 'Constitution (Ninety-seventh Amendment) Act, 2011',
        year: 2011,
        clauseAffected: 'Article 19(1)(c)',
        description: 'Inserted "or co-operative societies" into the freedom of association.'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: '1950 Text: Contained 7 freedoms including 19(1)(f) right to property.' },
      { type: 'deleted', text: '- Clause (1)(f): "to acquire, hold and dispose of property" [OMITTED by 44th Amd 1978].' },
      { type: 'added', text: '+ Clause (2): Substituted by 1st Amd 1951 adding "reasonable restrictions", "public order", "incitement to offence".' },
      { type: 'added', text: '+ Clause (2): Inserted "sovereignty and integrity of India" (16th Amd 1963).' },
      { type: 'added', text: '+ Clause (1)(c): Inserted "or co-operative societies" (97th Amd 2011).' }
    ],
    constitutionalImpact: 'Created the modern Proportionality and Reasonable Restriction standard under Article 19(2)-(6) while extinguishing private property as an inviolable Part III fundamental right.'
  },
  '21': {
    articleNumber: '21',
    articleTitle: 'Protection of life and personal liberty',
    original1950Text: `No person shall be deprived of his life or personal liberty except according to procedure established by law.`,
    currentText: `No person shall be deprived of his life or personal liberty except according to procedure established by law.
[Accompanied by Article 21A inserted by 86th Amd. 2002:
"21A. Right to education.—The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine."]`,
    summaryOfChanges: 'Text of Article 21 remained verbatim, but underwent a seismic judicial revolution from narrow formalist positivism in A.K. Gopalan (1950) to expansive substantive Due Process in Maneka Gandhi (1978), K.S. Puttaswamy (2017), and Joseph Shine (2018). Structurally augmented by Article 21A (86th Amd 2002) elevating education into an explicit fundamental right.',
    keyAmendments: [
      {
        act: 'Constitution (Eighty-sixth Amendment) Act, 2002',
        year: 2002,
        clauseAffected: 'Article 21A',
        description: 'Inserted Article 21A making free and compulsory education for children 6-14 years an enforceable Fundamental Right, resulting in the RTE Act 2009.',
        landmarkCase: 'Unni Krishnan v. State of A.P. (1993)'
      },
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 359',
        description: 'Amended Article 359 to mandate that enforcement of Article 21 can NEVER be suspended even during the gravest National Emergency (overruling ADM Jabalpur).',
        landmarkCase: 'ADM Jabalpur v. Shivkant Shukla (1976)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: 'Article 21: "No person shall be deprived of his life or personal liberty except according to procedure established by law."' },
      { type: 'added', text: '+ Article 21A: Right to free & compulsory education for children aged 6 to 14 years [Ins. by 86th Amd 2002].' },
      { type: 'added', text: '+ Shielded from emergency suspension by 44th Amd 1978 under Article 359.' }
    ],
    constitutionalImpact: 'Transformed into the paramount fountainhead of Indian constitutional rights—encompassing privacy, dignity, speedy trial, clean environment, bodily autonomy, and livelihood.'
  },
  '31': {
    articleNumber: '31',
    articleTitle: 'Compulsory acquisition of property (Repealed & Relocated to Art 300A)',
    original1950Text: `(1) No person shall be deprived of his property save by authority of law.
(2) No property, movable or immovable, including any interest in, or in any company owning, any commercial or industrial undertaking, shall be taken possession of or acquired for public purposes under any law authorising the taking of such possession or such acquisition, unless the law provides for compensation for the property taken possession of or acquired and either fixes the amount of the compensation, or specifies the principles on which, and the manner in which, the compensation is to be determined and given.`,
    currentText: `[Article 31 REPEALED by the Constitution (Forty-fourth Amendment) Act, 1978, section 6 (w.e.f. 20-6-1979).]
Transferred to Part XII, Chapter IV as Article 300A:
"300A. Persons not to be deprived of property save by authority of law.—No person shall be deprived of his property save by authority of law."`,
    summaryOfChanges: 'Abolished as a Fundamental Right in 1978 after nearly three decades of fierce litigation between the Supreme Court (Bela Banerjee, Golak Nath, Bank Nationalisation) and Parliament. Relocated to Article 300A as an ordinary constitutional and human right.',
    keyAmendments: [
      {
        act: 'Constitution (First Amendment) Act, 1951',
        year: 1951,
        clauseAffected: 'Articles 31A & 31B',
        description: 'Inserted Articles 31A and 31B (and Ninth Schedule) to insulate land reforms from Article 31 challenge.'
      },
      {
        act: 'Constitution (Twenty-fifth Amendment) Act, 1971',
        year: 1971,
        clauseAffected: 'Article 31(2) & 31C',
        description: 'Substituted word "compensation" with "amount" to eliminate judicial market-value scrutiny (overcoming R.C. Cooper).'
      },
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 31 repealed, Art 300A inserted',
        description: 'Repealed Article 31 from Part III entirely; re-enacted as Article 300A in Part XII.',
        landmarkCase: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'deleted', text: '- Entire Article 31 repealed from Part III by 44th Amd 1978.' },
      { type: 'added', text: '+ Article 300A inserted in Part XII: "No person shall be deprived of his property save by authority of law."' }
    ],
    constitutionalImpact: 'Extinguished judicial review of land reform compensation under Part III, while preserving statutory authority of law and non-arbitrary procedure under Article 300A.'
  },
  '39': {
    articleNumber: '39',
    articleTitle: 'Certain principles of policy to be followed by the State',
    original1950Text: `The State shall, in particular, direct its policy towards securing—
(a) that the citizens, men and women equally, have the right to an adequate means of livelihood;
(b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;
(c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment;
(d) that there is equal pay for equal work for both men and women;
(e) that the health and strength of workers, men and women, and the tender age of children are not abused...
(f) that childhood and youth are protected against exploitation and against moral and material abandonment.`,
    currentText: `The State shall, in particular, direct its policy towards securing—
(a) that the citizens, men and women equally, have the right to an adequate means of livelihood;
(b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;
(c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment;
(d) that there is equal pay for equal work for both men and women;
(e) that the health and strength of workers, men and women, and the tender age of children are not abused...
(f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment. [Subs. by 42nd Amd. 1976]
[Accompanied by Article 39A inserted by 42nd Amd. 1976:
"39A. Equal justice and free legal aid.—The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid..."]`,
    summaryOfChanges: '42nd Amendment Act 1976 substituted clause (f) to actively emphasize positive opportunities and dignity for children rather than passive protection, and introduced Article 39A establishing the constitutional mandate for free legal aid.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-second Amendment) Act, 1976',
        year: 1976,
        clauseAffected: 'Article 39(f) and Article 39A',
        description: 'Substituted 39(f) for holistic child welfare and inserted 39A for free legal aid and access to justice.'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'amended', text: 'Clause (f) substituted by 42nd Amd 1976 for "that childhood and youth are protected against exploitation and against moral and material abandonment".' },
      { type: 'added', text: '+ Article 39A inserted: "Equal justice and free legal aid" (NALSA foundation).' }
    ],
    constitutionalImpact: 'Provided the ideological and statutory backbone for nationalization policies, welfare legislation, and the establishment of National Legal Services Authority (NALSA).'
  },
  '51A': {
    articleNumber: '51A',
    articleTitle: 'Fundamental duties',
    original1950Text: `[Part IV-A (Fundamental Duties) DID NOT EXIST in the original 1950 Constitution.]`,
    currentText: `It shall be the duty of every citizen of India—
(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;
(b) to cherish and follow the noble ideals which inspired our national struggle for freedom;
(c) to uphold and protect the sovereignty, unity and integrity of India;
(d) to defend the country and render national service when called upon to do so;
(e) to promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women;
(f) to value and preserve the rich heritage of our composite culture;
(g) to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures;
(h) to develop the scientific temper, humanism and the spirit of inquiry and reform;
(i) to safeguard public property and to abjure violence;
(j) to strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement;
(k) who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years. [Ins. by 86th Amd. 2002]`,
    summaryOfChanges: 'Introduced by 42nd Amendment 1976 based on Swaran Singh Committee recommendations with 10 duties (a) to (j). An 11th duty (k) was added by 86th Amendment 2002 in tandem with Article 21A.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-second Amendment) Act, 1976',
        year: 1976,
        clauseAffected: 'Part IV-A (Article 51A(a)-(j))',
        description: 'Inserted entire Part IV-A with 10 fundamental duties to balance rights with civic responsibilities.'
      },
      {
        act: 'Constitution (Eighty-sixth Amendment) Act, 2002',
        year: 2002,
        clauseAffected: 'Article 51A(k)',
        description: 'Added duty (k) mandating parents/guardians to provide educational opportunities to children aged 6 to 14 years.'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'added', text: '+ Part IV-A (Article 51A(a) to (j)) inserted by 42nd Amd 1976.' },
      { type: 'added', text: '+ Clause (k) inserted by 86th Amd 2002 (parental duty for child education).' }
    ],
    constitutionalImpact: 'Although non-enforceable by direct writ, Supreme Court routinely uses 51A to interpret environmental statutes (51A(g)), dignity of women (51A(e)), and public property protection (51A(i)).'
  },
  '74': {
    articleNumber: '74',
    articleTitle: 'Council of Ministers to aid and advise President',
    original1950Text: `(1) There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President in the exercise of his functions.
(2) The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.`,
    currentText: `(1) There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice:
Provided that the President may require the Council of Ministers to reconsider such advice, either generally or otherwise, and the President shall act in accordance with the advice tendered after such reconsideration.
(2) The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.`,
    summaryOfChanges: 'Original 1950 text did not state advice was binding. 42nd Amendment Act 1976 added "who shall... act in accordance with such advice", making cabinet advice strictly mandatory. 44th Amendment Act 1978 introduced the famous Proviso permitting the President to send back advice once for reconsideration.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-second Amendment) Act, 1976',
        year: 1976,
        clauseAffected: 'Article 74(1)',
        description: 'Made ministerial advice strictly and unqualifiedly binding upon the President.'
      },
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 74(1) Proviso',
        description: 'Inserted proviso giving the President power to ask the Cabinet to reconsider advice once.'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: '1950: "...aid and advise the President in the exercise of his functions."' },
      { type: 'added', text: '+ "...who shall, in the exercise of his functions, act in accordance with such advice:" [42nd Amd 1976].' },
      { type: 'added', text: '+ "Provided that the President may require the Council of Ministers to reconsider such advice... and shall act in accordance with advice tendered after reconsideration." [44th Amd 1978].' }
    ],
    constitutionalImpact: 'Codified cabinet supremacy under the Westminster parliamentary model while providing a crucial constitutional safety brake through presidential reconsideration.'
  },
  '352': {
    articleNumber: '352',
    articleTitle: 'Proclamation of Emergency (National Emergency)',
    original1950Text: `(1) If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or internal disturbance, he may, by Proclamation, make a declaration to that effect.
(2) A Proclamation issued under clause (1)—
(a) may be revoked by a subsequent Proclamation;
(b) shall be laid before each House of Parliament;
(c) shall cease to operate at the expiration of two months unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament.`,
    currentText: `(1) If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may, by Proclamation, make a declaration to that effect...
Provided that no such Proclamation shall be issued under clause (1)... unless the decision of the Union Cabinet (that is to say, the Council consisting of the Prime Minister and other Ministers of Cabinet rank under article 75) that such a Proclamation may be issued has been communicated to him in writing.
...shall cease to operate at the expiration of one month unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament [by a special majority of total membership and 2/3 present and voting].
(4) Lok Sabha may pass a disapproval resolution by simple majority; 1/10th members may requisition a special session within 14 days.`,
    summaryOfChanges: 'Overhauled by 44th Amendment Act 1978 to eliminate emergency abuses: (1) Replaced "internal disturbance" with "armed rebellion"; (2) Mandated written decision of the Union Cabinet; (3) Reduced parliamentary approval deadline from 2 months to 1 month; (4) Upgraded approval requirement from simple majority to special majority; (5) Granted Lok Sabha power to revoke emergency by disapproval resolution.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 352 clauses (1)-(9)',
        description: 'Comprehensive democratic safeguards: replaced "internal disturbance" with "armed rebellion", mandated written Cabinet communication, 1-month limit, and special majority approval.'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'amended', text: 'Substituted "armed rebellion" for "internal disturbance".' },
      { type: 'added', text: '+ Mandatory written advice of the Union Cabinet (Cabinet rank ministers).' },
      { type: 'amended', text: 'Approval time reduced from 2 months to 1 month.' },
      { type: 'amended', text: 'Approval threshold raised from simple majority to Special Majority (majority of total + 2/3 present and voting).' },
      { type: 'added', text: '+ Lok Sabha statutory power to revoke emergency upon simple majority resolution.' }
    ],
    constitutionalImpact: 'Eradicated unilateral executive emergency declarations and immunized Indian democracy against civilian executive takeovers.'
  },
  '356': {
    articleNumber: '356',
    articleTitle: 'Provisions in case of failure of constitutional machinery in States (President\'s Rule)',
    original1950Text: `(1) If the President on receipt of report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution...`,
    currentText: `(1) If the President, on receipt of a report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution...
(5) Notwithstanding anything contained in clause (4), a resolution with respect to the continuance in force of a Proclamation approved under clause (3) for any period beyond the expiration of one year from the date of issue of such Proclamation shall not be passed by either House of Parliament unless—
(a) a Proclamation of Emergency is in operation... and
(b) the Election Commission certifies that the continuance in force of the Proclamation approved under clause (3) during the period specified in such resolution is necessary on account of difficulties in holding general elections to the Legislative Assembly...`,
    summaryOfChanges: '44th Amendment Act 1978 inserted Clause (5) curbing runaway President\'s Rule beyond 1 year, making extensions contingent on an active National Emergency and Election Commission certification of inability to hold polls. S.R. Bommai (1994) made Article 356 subject to full judicial review.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 356(5)',
        description: 'Inserted clause (5) placing 1-year ceiling unless National Emergency is active and Election Commission certifies election difficulties.',
        landmarkCase: 'S.R. Bommai v. Union of India (1994)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: 'Original 1950: Proclamation could be renewed periodically up to 3 years without external conditions.' },
      { type: 'added', text: '+ Clause (5) inserted by 44th Amd 1978: Extension beyond 1 year strictly barred unless National Emergency is in force AND Election Commission certifies difficulty in holding assembly elections.' }
    ],
    constitutionalImpact: 'Dramatically curtailed arbitrary dismissal of elected state governments, establishing the floor test on the assembly floor as the sole constitutional test of majority.'
  },
  '359': {
    articleNumber: '359',
    articleTitle: 'Suspension of the enforcement of the rights conferred by Part III during emergencies',
    original1950Text: `(1) Where a Proclamation of Emergency is in operation, the President may by order declare that the right to move any court for the enforcement of such of the rights conferred by Part III as may be mentioned in the order and all proceedings pending in any court for the enforcement of the rights so mentioned shall remain suspended for the period during which the Proclamation is in force or for such shorter period as may be specified in the order.`,
    currentText: `(1) Where a Proclamation of Emergency is in operation, the President may by order declare that the right to move any court for the enforcement of such of the rights conferred by Part III (except articles 20 and 21) as may be mentioned in the order and all proceedings pending in any court for the enforcement of the rights so mentioned shall remain suspended for the period during which the Proclamation is in force or for such shorter period as may be specified in the order.
(1A) While it is in operation, nothing in Part III shall restrict the power of the State to make any law or take executive action, provided such law contains a recital that it is in relation to the Proclamation of Emergency.`,
    summaryOfChanges: '44th Amendment Act 1978 inserted "(except articles 20 and 21)", explicitly burying the notorious majority verdict in ADM Jabalpur v. Shivkant Shukla (1976). Today, protection against retrospective penal laws, double jeopardy, self-incrimination, and life/personal liberty can NEVER be suspended.',
    keyAmendments: [
      {
        act: 'Constitution (Forty-fourth Amendment) Act, 1978',
        year: 1978,
        clauseAffected: 'Article 359(1)',
        description: 'Inserted words "(except articles 20 and 21)", permanently preserving life, liberty, and criminal justice safeguards during emergencies.',
        landmarkCase: 'ADM Jabalpur v. Shivkant Shukla (1976)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: '1950: "...enforcement of such of the rights conferred by Part III as may be mentioned in the order..."' },
      { type: 'added', text: '+ "...enforcement of such of the rights conferred by Part III (except articles 20 and 21) as may be mentioned in the order..." [44th Amd 1978].' }
    ],
    constitutionalImpact: 'Permanent preservation of the Rule of Law and the writ of Habeas Corpus during emergencies, ensuring state detention can always be scrutinized for mala fides.'
  },
  '368': {
    articleNumber: '368',
    articleTitle: 'Power of Parliament to amend the Constitution and procedure therefor',
    original1950Text: `Procedure for amendment of the Constitution:
An amendment of this Constitution may be initiated only by the introduction of a Bill for the purpose in either House of Parliament, and when the Bill is passed in each House by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting, it shall be presented to the President for his assent and upon such assent being given to the Bill, the Constitution shall stand amended in accordance with the terms of the Bill:
Provided that if such amendment seeks to make any change in—
(a) article 54, article 55, article 73, article 162 or article 241, or
(b) Chapter IV of Part V, Chapter V of Part VI, or Chapter I of Part XI, or
(c) any of the Lists in the Seventh Schedule, or
(d) the representation of States in Parliament, or
(e) the provisions of this article,
the amendment shall also require to be ratified by the Legislatures of not less than one-half of the States...`,
    currentText: `Power of Parliament to amend the Constitution and procedure therefor:
(1) Notwithstanding anything in this Constitution, Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article. [Ins. by 24th Amd. 1971]
(2) An amendment of this Constitution may be initiated only by the introduction of a Bill... passed in each House by a majority of the total membership... and by a majority of not less than two-thirds of the members present and voting... presented to the President who shall give his assent [Subs. by 24th Amd. 1971]...
(3) Nothing in article 13 shall apply to any amendment made under this article. [Ins. by 24th Amd. 1971]
(4) [No amendment... shall be called in question in any court on any ground. — Struck down as unconstitutional in Minerva Mills (1980)]
(5) [For the removal of doubts, it is hereby declared that there shall be no limitation whatever on the constituent power of Parliament to amend... — Struck down as unconstitutional in Minerva Mills (1980)]`,
    summaryOfChanges: 'Dramatic constituent evolution: (1) Retitled and Clause (1) & (3) added by 24th Amd 1971 to overturn Golak Nath (1967); (2) Kesavananda Bharati (1973) upheld 24th Amd but formulated the Basic Structure Doctrine; (3) 42nd Amd 1976 added Clauses (4) and (5) attempting to bar judicial review; (4) Minerva Mills (1980) struck down Clauses (4) and (5) as invalid infringements on the basic structure.',
    keyAmendments: [
      {
        act: 'Constitution (Twenty-fourth Amendment) Act, 1971',
        year: 1971,
        clauseAffected: 'Title, Clauses (1), (2), (3)',
        description: 'Explicitly affirmed "constituent power", made Presidential assent mandatory, and insulated amendments from Article 13.',
        landmarkCase: 'Kesavananda Bharati v. State of Kerala (1973)'
      },
      {
        act: 'Constitution (Forty-second Amendment) Act, 1976',
        year: 1976,
        clauseAffected: 'Clauses (4) and (5)',
        description: 'Attempted to oust judicial review and declare unlimited constituent power.',
        landmarkCase: 'Minerva Mills v. Union of India (1980)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'amended', text: 'Title changed from "Procedure for amendment" to "Power of Parliament to amend the Constitution and procedure therefor".' },
      { type: 'added', text: '+ Clause (1): Affirmation of constituent power to add, vary, or repeal provisions.' },
      { type: 'added', text: '+ Clause (3): Article 13 does not apply to constitutional amendments.' },
      { type: 'deleted', text: '- Clauses (4) & (5): Judicial review ouster clauses declared unconstitutional and void in Minerva Mills (1980).' }
    ],
    constitutionalImpact: 'The nucleus of Indian constitutional supremacy: Parliament holds vast constituent amending power, but cannot alter the basic features (secularism, federalism, judicial review, equality, democracy).'
  },
  '370': {
    articleNumber: '370',
    articleTitle: 'Temporary provisions with respect to the State of Jammu and Kashmir [Inoperative]',
    original1950Text: `(1) Notwithstanding anything in this Constitution,—
(a) the provisions of article 238 shall not apply in relation to the State of Jammu and Kashmir;
(b) the power of Parliament to make laws for the said State shall be limited to—
(i) those matters in the Union List and the Concurrent List which, in consultation with the Government of the State, are declared by the President to correspond to matters specified in the Instrument of Accession...
(c) the provisions of article 1 and of this article shall apply in relation to that State;
(d) such of the other provisions of this Constitution shall apply in relation to that State subject to such exceptions and modifications as the President may by order specify:
Provided that no such order which relates to the matters specified in the Instrument of Accession... shall be issued except in consultation with the Government of the State...
(3) Notwithstanding anything in the foregoing provisions of this article, the President may, by public notification, declare that this article shall cease to be operative or shall be operative only with such exceptions and modifications... Provided that the recommendation of the Constituent Assembly of the State... shall be necessary before the President issues such a notification.`,
    currentText: `[Operatively abrogated via Presidential Orders C.O. 272 (5 August 2019) and C.O. 273 (6 August 2019) issued under Article 370(1) and 370(3)].
Declaration under Article 370(3):
"All clauses of the said article 370 shall cease to be operative and that all provisions of the Constitution of India, as amended from time to time, without any modifications or exceptions, shall apply to the State of Jammu and Kashmir."
Accompanied by the Jammu and Kashmir Reorganisation Act, 2019, bifurcating the State into two Union Territories: Jammu & Kashmir (with Legislative Assembly) and Ladakh (without Legislature).`,
    summaryOfChanges: 'Originally designed as a temporary transitional mechanism pending integration. On 5-6 August 2019, President issued C.O. 272 and C.O. 273, superseding the 1954 order and rendering all clauses of Article 370 inoperative. Upheld unanimously by a 5-Judge Constitution Bench in In Re: Article 370 (2023).',
    keyAmendments: [
      {
        act: 'Constitution (Application to Jammu and Kashmir) Order, 2019 (C.O. 272 & 273)',
        year: 2019,
        clauseAffected: 'Article 370 clauses (1), (2), (3)',
        description: 'Applied entire Indian Constitution to Jammu & Kashmir and rendered Article 370 inoperative.',
        landmarkCase: 'In Re: Article 370 of the Constitution (2023)'
      }
    ],
    verbatimDiffSnippet: [
      { type: 'original', text: '1950: Asymmetric federalism limiting Parliament to Defence, Foreign Affairs, Communications unless State concurred.' },
      { type: 'amended', text: 'August 2019: C.O. 272 & 273 rendered all clauses inoperative; complete uniform application of all provisions of the Indian Constitution.' },
      { type: 'added', text: '+ Upheld unanimously by 5-Judge Constitution Bench of Supreme Court on December 11, 2023.' }
    ],
    constitutionalImpact: 'Achieved complete constitutional integration of Jammu & Kashmir into the Indian Union, ending asymmetric autonomy and separate state constitution.'
  }
};
