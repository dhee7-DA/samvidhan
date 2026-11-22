export interface ConstitutionalArticleItem {
  articleNumber: number;
  articleLabel: string; // e.g. "Article 21"
  part: string; // e.g. "Part III"
  partTitle: string; // e.g. "Fundamental Rights"
  category:
    | 'Right to Equality'
    | 'Right to Freedom'
    | 'Right against Exploitation'
    | 'Freedom of Religion'
    | 'Cultural & Educational'
    | 'Constitutional Remedies'
    | 'Directive Principles'
    | 'Fundamental Duties'
    | 'Union Executive'
    | 'Parliament & Legislation'
    | 'Federal Judiciary (SC)'
    | 'State Executive & Governor'
    | 'High Courts & Subordinate Judiciary'
    | 'Panchayats & Municipalities'
    | 'Centre-State Relations'
    | 'Finance & Property'
    | 'Civil Services & Public Commissions'
    | 'Elections & Franchise'
    | 'Official Language'
    | 'Emergency Provisions'
    | 'Constitutional Amendments';
  justiciability: 'Justiciable (Part III)' | 'Non-Justiciable (Part IV)' | 'Constitutional Right (Non-Part III)' | 'Duty / Procedure';
  leadPrecedent: string; // e.g. "Maneka Gandhi v. Union of India (1978)"
  keywords: string[];
  cadClue: string;
  latinMaximOrDoctrine: string;
  benchQuoteHint: string;
  summaryExplanation: string;
}

export const CONSTITUTIONAL_ARTICLES_POOL: ConstitutionalArticleItem[] = [
  {
    articleNumber: 12,
    articleLabel: 'Article 12',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'R.D. Shetty v. Airport Authority of India (1979)',
    keywords: ['State', 'Instrumentality', 'Agency', 'Local Authority', 'Article 12'],
    cadClue: 'Dr. Ambedkar clarified that "State" binds every authority possessing the power to make laws, bye-laws, or orders.',
    latinMaximOrDoctrine: 'Doctrine of Agency and Instrumentality of State',
    benchQuoteHint: '"Whether a corporation is an instrumentality of government must be determined through cumulative functional and financial control tests."',
    summaryExplanation: 'Defines "State" for the enforcement of Fundamental Rights under Part III, including the Union and State executives, legislatures, and all local or other authorities within India.'
  },
  {
    articleNumber: 13,
    articleLabel: 'Article 13',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Kesavananda Bharati v. State of Kerala (1973)',
    keywords: ['Judicial Review', 'Laws inconsistent with FRs', 'Doctrine of Eclipse', 'Severability', 'Void'],
    cadClue: 'The fundamental touchstone ensuring no pre-constitutional or post-constitutional enactment violates human liberties.',
    latinMaximOrDoctrine: 'Doctrine of Severability & Doctrine of Eclipse',
    benchQuoteHint: '"All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void."',
    summaryExplanation: 'Constitutionalizes judicial review by declaring that laws inconsistent with or in derogation of Fundamental Rights shall be void to the extent of inconsistency.'
  },
  {
    articleNumber: 14,
    articleLabel: 'Article 14',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'E.P. Royappa v. State of Tamil Nadu (1974)',
    keywords: ['Equality before Law', 'Equal Protection', 'Non-Arbitrariness', 'Intelligible Differentia', 'Nexus'],
    cadClue: 'Borrowed the British concept of equality before law and the American 14th Amendment clause of equal protection of the laws.',
    latinMaximOrDoctrine: 'Rule of Law & New Concept of Equality (Anti-Arbitrariness)',
    benchQuoteHint: '"Equality is a dynamic concept with many aspects and dimensions and it cannot be cribbed, cabined and confined within traditional and doctrinaire limits."',
    summaryExplanation: 'Guarantees equality before the law and the equal protection of the laws to all persons within the territory of India.'
  },
  {
    articleNumber: 15,
    articleLabel: 'Article 15',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'State of Madras v. Champakam Dorairajan (1951)',
    keywords: ['Prohibition of Discrimination', 'Religion', 'Race', 'Caste', 'Sex', 'Place of Birth', 'Special Provisions for Women & SC/ST'],
    cadClue: 'Spearheaded by Dr. Ambedkar to eradicate millennia of social ostracism and access restrictions to wells, tanks, and public places.',
    latinMaximOrDoctrine: 'Substantive Equality & Affirmative Action',
    benchQuoteHint: '"The state shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them."',
    summaryExplanation: 'Prohibits state discrimination against citizens on grounds only of religion, race, caste, sex, or place of birth, while permitting special affirmative provisions for women, children, and socially/educationally backward classes.'
  },
  {
    articleNumber: 16,
    articleLabel: 'Article 16',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Indra Sawhney v. Union of India (1992)',
    keywords: ['Public Employment', 'Equal Opportunity', 'Reservations', 'Creamy Layer', '50% Ceiling'],
    cadClue: 'Debated fiercely between those championing pure formal merit and those demanding adequate representation for backward classes.',
    latinMaximOrDoctrine: 'Principle of Adequate Representation & Creamy Layer Exclusion',
    benchQuoteHint: '"Reservations under Article 16(4) are not an exception to Article 16(1), but an emphatic restatement of substantive equality of opportunity."',
    summaryExplanation: 'Guarantees equality of opportunity in matters of public employment, authorizing reservations for backward classes not adequately represented in state services.'
  },
  {
    articleNumber: 17,
    articleLabel: 'Article 17',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Equality',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'People’s Union for Democratic Rights (Asiad Workers) (1982)',
    keywords: ['Abolition of Untouchability', 'Offence punishable by law', 'Protection of Civil Rights Act'],
    cadClue: 'Central Hall erupted in historic cheers of "Mahatma Gandhi ki Jai!" when this article was adopted without dissent.',
    latinMaximOrDoctrine: 'Absolute Horizontal Fundamental Right against Private Persons',
    benchQuoteHint: '"Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law."',
    summaryExplanation: 'Abolishes untouchability and forbids its practice in any form, enforceable against both the State and private individuals.'
  },
  {
    articleNumber: 19,
    articleLabel: 'Article 19',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Freedom',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Shreya Singhal v. Union of India (2015)',
    keywords: ['Six Freedoms', 'Speech & Expression', 'Peaceful Assembly', 'Associations', 'Movement', 'Residence', 'Profession', 'Reasonable Restrictions'],
    cadClue: 'Drafted to guarantee the bedrock democratic freedoms of citizens, subject to strictly enumerated reasonable restrictions under clauses (2) to (6).',
    latinMaximOrDoctrine: 'Doctrine of Proportionality & Chilling Effect',
    benchQuoteHint: '"Any restriction on freedom of speech and expression under Article 19(2) must not be arbitrary, excessive, or beyond the narrow heads enumerated."',
    summaryExplanation: 'Guarantees 6 fundamental freedoms to citizens (speech, assembly, association, movement, residence, profession) subject to reasonable restrictions.'
  },
  {
    articleNumber: 20,
    articleLabel: 'Article 20',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Freedom',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Selvi v. State of Karnataka (2010)',
    keywords: ['Ex-Post Facto Law', 'Double Jeopardy', 'Self-Incrimination', 'Narco-Analysis', 'Brain Mapping'],
    cadClue: 'Protected so sacredly by the 44th Amendment (1978) that it cannot be suspended even during a National Emergency under Article 359.',
    latinMaximOrDoctrine: 'Nemo debet bis vexari & Nemo tenetur seipsum accusare',
    benchQuoteHint: '"Compulsory administration of narco-analysis and polygraph violates the right against self-incrimination guaranteed under Article 20(3)."',
    summaryExplanation: 'Provides three protections against criminal prosecution: prohibition of ex-post facto penal laws, protection against double jeopardy, and privilege against self-incrimination.'
  },
  {
    articleNumber: 21,
    articleLabel: 'Article 21',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Freedom',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Maneka Gandhi v. Union of India (1978)',
    keywords: ['Protection of Life and Personal Liberty', 'Procedure Established by Law', 'Substantive Due Process', 'Dignity', 'Privacy'],
    cadClue: 'Sir B.N. Rau replaced "Due Process" with "Procedure Established by Law" after consulting Justice Felix Frankfurter; the Supreme Court expanded it 30 years later.',
    latinMaximOrDoctrine: 'Golden Triangle (Articles 14, 19, 21) & Substantive Fairness',
    benchQuoteHint: '"Procedure depriving a person of life or personal liberty must not be arbitrary, fanciful or oppressive; otherwise it’d be no procedure at all and the requirement of Article 21 would not be satisfied."',
    summaryExplanation: 'Guarantees that no person shall be deprived of his life or personal liberty except according to procedure established by law, judicialized into a vast reservoir of unenumerated rights including privacy, clean environment, and dignity.'
  },
  {
    articleNumber: 211, // Special representation for 21A
    articleLabel: 'Article 21A',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Freedom',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Society for Unaided Private Schools v. Union of India (2012)',
    keywords: ['Right to Education', 'Free & Compulsory Education', 'Age 6 to 14', '86th Amendment', 'RTE Act'],
    cadClue: 'Elevated from Directive Principle Article 45 to a Fundamental Right by the 86th Constitutional Amendment Act in 2002.',
    latinMaximOrDoctrine: 'Fundamental Human Right to Primary Literacy',
    benchQuoteHint: '"The state shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine."',
    summaryExplanation: 'Mandates the State to provide free and compulsory education to all children aged 6 to 14 years as a Fundamental Right.'
  },
  {
    articleNumber: 22,
    articleLabel: 'Article 22',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Right to Freedom',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'D.K. Basu v. State of West Bengal (1997)',
    keywords: ['Protection against Arrest & Detention', 'Grounds of Arrest', '24 Hours Magistrate', 'Legal Practitioner', 'Preventive Detention'],
    cadClue: 'Ambedkar described this clause as a painful necessity to constitutionalize safeguards around preventive detention.',
    latinMaximOrDoctrine: 'Habeas Corpus Safeguards & Custodial Rights',
    benchQuoteHint: '"Every person arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours of such arrest."',
    summaryExplanation: 'Guarantees procedural safeguards upon arrest (informed of grounds, right to counsel, production before magistrate within 24 hours) and regulates preventive detention regimes.'
  },
  {
    articleNumber: 25,
    articleLabel: 'Article 25',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Freedom of Religion',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Indian Young Lawyers Association (Sabarimala) (2018)',
    keywords: ['Freedom of Conscience', 'Profess, Practice & Propagate Religion', 'Public Order, Morality & Health', 'Social Reform'],
    cadClue: 'Guarantees equal religious freedom to all persons, explicitly subject to public order, health, morality, and other provisions of Part III.',
    latinMaximOrDoctrine: 'Essential Religious Practices Test & Constitutional Morality',
    benchQuoteHint: '"Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion."',
    summaryExplanation: 'Guarantees freedom of conscience and the right freely to profess, practice, and propagate religion, subject to public order, morality, health, and state social reform legislation.'
  },
  {
    articleNumber: 32,
    articleLabel: 'Article 32',
    part: 'Part III',
    partTitle: 'Fundamental Rights',
    category: 'Constitutional Remedies',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'Bandhua Mukti Morcha v. Union of India (1984)',
    keywords: ['Right to Constitutional Remedies', 'Heart & Soul of Constitution', 'Prerogative Writs', 'Public Interest Litigation (PIL)', 'Locus Standi'],
    cadClue: 'Dr. Ambedkar famously proclaimed: "If I was asked to name any particular article in this Constitution as the most important... I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it."',
    latinMaximOrDoctrine: 'Ubi jus ibi remedium & Basic Structure Doctrine',
    benchQuoteHint: '"The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed."',
    summaryExplanation: 'Guarantees the right to move the Supreme Court for enforcement of Fundamental Rights by issuing writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.'
  },
  {
    articleNumber: 39,
    articleLabel: 'Article 39',
    part: 'Part IV',
    partTitle: 'Directive Principles',
    category: 'Directive Principles',
    justiciability: 'Non-Justiciable (Part IV)',
    leadPrecedent: 'Minerva Mills v. Union of India (1980)',
    keywords: ['Adequate Means of Livelihood', 'Ownership of Material Resources', 'Common Good', 'Equal Pay for Equal Work', 'Prevention of Wealth Concentration'],
    cadClue: 'Clause (b) and (c) became the socialist engine of Indian land reforms and bank nationalization under Article 31C.',
    latinMaximOrDoctrine: 'Distributive Justice & Primacy of Social Common Good',
    benchQuoteHint: '"The State shall direct its policy towards securing that the ownership and control of the material resources of the community are so distributed as best to subserve the common good."',
    summaryExplanation: 'Key Directive Principle requiring the State to distribute material resources for common good, prevent concentration of wealth, and ensure equal pay for equal work.'
  },
  {
    articleNumber: 44,
    articleLabel: 'Article 44',
    part: 'Part IV',
    partTitle: 'Directive Principles',
    category: 'Directive Principles',
    justiciability: 'Non-Justiciable (Part IV)',
    leadPrecedent: 'Mohd. Ahmed Khan v. Shah Bano Begum (1985)',
    keywords: ['Uniform Civil Code', 'Civil Code for the Citizens', 'Territory of India', 'Gender Justice', 'Family Law'],
    cadClue: 'Minoo Masani, Hansa Mehta, and Rajkumari Amrit Kaur wrote a fiery minute of dissent demanding it be placed in Part III instead of Part IV.',
    latinMaximOrDoctrine: 'Civic Secularism & Uniformity in Civil Law',
    benchQuoteHint: '"The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India."',
    summaryExplanation: 'Directive Principle obligating the State to endeavour to secure a Uniform Civil Code for all citizens throughout India.'
  },
  {
    articleNumber: 50,
    articleLabel: 'Article 50',
    part: 'Part IV',
    partTitle: 'Directive Principles',
    category: 'Directive Principles',
    justiciability: 'Non-Justiciable (Part IV)',
    leadPrecedent: 'Supreme Court Advocates-on-Record Assn (Second Judges) (1993)',
    keywords: ['Separation of Judiciary from Executive', 'Public Services of the State', 'Judicial Independence'],
    cadClue: 'Emanated from decades of Congress resolutions protesting district collectors acting as both executive magistrates and trial judges.',
    latinMaximOrDoctrine: 'Trias Politica & Independence of Judiciary',
    benchQuoteHint: '"The State shall take steps to separate the judiciary from the executive in the public services of the State."',
    summaryExplanation: 'Directs the State to take steps to separate the judiciary from the executive in public services to safeguard judicial neutrality.'
  },
  {
    articleNumber: 51,
    articleLabel: 'Article 51A', // Representing 51A
    part: 'Part IVA',
    partTitle: 'Fundamental Duties',
    category: 'Fundamental Duties',
    justiciability: 'Duty / Procedure',
    leadPrecedent: 'M.C. Mehta v. Union of India (1988)',
    keywords: ['11 Fundamental Duties', 'Abide by Constitution & Flag', 'Cherish Noble Ideals', 'Scientific Temper', 'Environmental Protection'],
    cadClue: 'Not in original 1950 Constitution; inserted by 42nd Amendment (1976) on Swaran Singh Committee recommendations, inspired by USSR constitution.',
    latinMaximOrDoctrine: 'Civic Responsibility & Correlative Character of Rights and Duties',
    benchQuoteHint: '"It shall be the duty of every citizen of India to develop the scientific temper, humanism and the spirit of inquiry and reform."',
    summaryExplanation: 'Enumerates 11 fundamental duties of Indian citizens, including abiding by the Constitution, protecting natural environment, developing scientific temper, and providing education to children.'
  },
  {
    articleNumber: 53,
    articleLabel: 'Article 53',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Union Executive',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Shamsher Singh v. State of Punjab (1974)',
    keywords: ['Executive Power of the Union', 'Vested in President', 'Supreme Command of Defence Forces'],
    cadClue: 'Nehru emphasized that the President is the constitutional figurehead of the nation, while real executive power resides in the Council of Ministers.',
    latinMaximOrDoctrine: 'Constitutional Head & Responsible Parliamentary Executive',
    benchQuoteHint: '"The executive power of the Union shall be vested in the President and shall be exercised by him either directly or through officers subordinate to him."',
    summaryExplanation: 'Vests executive power of the Union in the President, exercised in accordance with the Constitution (on aid and advice of the Council of Ministers under Art 74).'
  },
  {
    articleNumber: 72,
    articleLabel: 'Article 72',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Union Executive',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Kehar Singh v. Union of India (1989)',
    keywords: ['Pardoning Power of President', 'Pardon, Reprieve, Respite, Remit', 'Suspension of Death Sentence', 'Court-Martial'],
    cadClue: 'Retained from royal prerogative powers to act as an ultimate safety valve against judicial errors and excessive severity.',
    latinMaximOrDoctrine: 'Executive Clemency & Judicial Review of Clemency',
    benchQuoteHint: '"The President shall have the power to grant pardons, reprieves, respites or remissions of punishment or to suspend, remit or commute the sentence of any person convicted of any offence."',
    summaryExplanation: 'Empowers the President to grant pardons, reprieves, respites, or remissions of punishment, or to commute sentences in court-martial cases, Union offenses, and death penalty cases.'
  },
  {
    articleNumber: 74,
    articleLabel: 'Article 74',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Union Executive',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'S.R. Bommai v. Union of India (1994)',
    keywords: ['Council of Ministers with Prime Minister', 'Aid and Advise President', 'Binding Advice', 'Reconsideration Clause (44th Amendment)'],
    cadClue: 'Amended by 42nd Amendment (1976) to make advice explicitly binding, softened by 44th Amendment (1978) allowing the President to return advice once for reconsideration.',
    latinMaximOrDoctrine: 'Westminster Cabinet Government & Democratic Accountability',
    benchQuoteHint: '"There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice."',
    summaryExplanation: 'Mandates a Council of Ministers with the Prime Minister at the head to aid and advise the President, whose advice is binding (subject to one return for reconsideration).'
  },
  {
    articleNumber: 124,
    articleLabel: 'Article 124',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Federal Judiciary (SC)',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Supreme Court Advocates-on-Record (NJAC Case) (2015)',
    keywords: ['Establishment of Supreme Court', 'Appointment of Judges', 'Consultation with CJI', 'Impeachment / Removal', 'Age of 65'],
    cadClue: 'Ambedkar explicitly rejected giving the Chief Justice an absolute individual veto or letting the Executive pick judges without consultation.',
    latinMaximOrDoctrine: 'Independence of Judiciary & Collegium Jurisprudence',
    benchQuoteHint: '"Every Judge of the Supreme Court shall be appointed by the President by warrant under his hand and seal on the recommendation of the National Judicial Appointments Commission / Collegium consultation."',
    summaryExplanation: 'Governs the establishment and constitution of the Supreme Court of India, judicial qualifications, appointments, and removal procedures.'
  },
  {
    articleNumber: 136,
    articleLabel: 'Article 136',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Federal Judiciary (SC)',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Pritam Singh v. The State (1950)',
    keywords: ['Special Leave to Appeal (SLP)', 'Discretionary Appellate Jurisdiction', 'Any Court or Tribunal', 'Grave Injustice'],
    cadClue: 'Conceived as an extraordinary plenary jurisdiction to correct gross miscarriages of justice across any tribunal in India.',
    latinMaximOrDoctrine: 'Plenary Discretionary Power of Last Resort',
    benchQuoteHint: '"Notwithstanding anything in this Chapter, the Supreme Court may, in its discretion, grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India."',
    summaryExplanation: 'Grants extraordinary discretionary power to the Supreme Court to grant special leave to appeal from any judgment or order passed by any court or tribunal in India (except armed forces).'
  },
  {
    articleNumber: 141,
    articleLabel: 'Article 141',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Federal Judiciary (SC)',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Bengal Immunity Co. v. State of Bihar (1955)',
    keywords: ['Law Declared by Supreme Court', 'Binding on All Courts', 'Ratio Decidendi', 'Stare Decisis', 'Prospective Overruling'],
    cadClue: 'Institutes the binding doctrine of judicial precedent across the entirety of India’s integrated court hierarchy.',
    latinMaximOrDoctrine: 'Stare decisis et non quieta movere',
    benchQuoteHint: '"The law declared by the Supreme Court shall be binding on all courts within the territory of India."',
    summaryExplanation: 'Declares that the law laid down by the Supreme Court is binding on all courts within the territory of India, embodying the doctrine of precedent.'
  },
  {
    articleNumber: 142,
    articleLabel: 'Article 142',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Federal Judiciary (SC)',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Union Carbide Corporation v. Union of India (Bhopal Gas) (1991)',
    keywords: ['Complete Justice', 'Inherent Powers of Supreme Court', 'Enforcement of Decrees', 'Article 142 Relief'],
    cadClue: 'Designed as an equitable safety valve allowing the apex court to craft novel remedies whenever statutory rules fall short of total fairness.',
    latinMaximOrDoctrine: 'Fiat justitia ruat caelum & Equitable Inherent Jurisdiction',
    benchQuoteHint: '"The Supreme Court in the exercise of its jurisdiction may pass such decree or make such order as is necessary for doing complete justice in any cause or matter pending before it."',
    summaryExplanation: 'Empowers the Supreme Court to pass any decree or order necessary for doing "complete justice" in any pending cause or matter.'
  },
  {
    articleNumber: 143,
    articleLabel: 'Article 143',
    part: 'Part V',
    partTitle: 'The Union',
    category: 'Federal Judiciary (SC)',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'In re Special Courts Bill (1979)',
    keywords: ['Advisory Jurisdiction', 'Presidential Reference', 'Question of Law or Fact', 'Public Importance'],
    cadClue: 'Adapted from Section 213 of the Government of India Act 1935, permitting the President to obtain the Supreme Court’s consultative opinion.',
    latinMaximOrDoctrine: 'Advisory Opinion & Non-Binding Consultative Wisdom',
    benchQuoteHint: '"If at any time it appears to the President that a question of law or fact has arisen, or is likely to arise, which is of such a nature and of such public importance that it is expedient to obtain the opinion of the Supreme Court upon it, he may refer the question to that Court for consideration."',
    summaryExplanation: 'Confers advisory jurisdiction on the Supreme Court, authorizing the President to refer questions of law or public importance for opinion.'
  },
  {
    articleNumber: 200,
    articleLabel: 'Article 200',
    part: 'Part VI',
    partTitle: 'The States',
    category: 'State Executive & Governor',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'State of Punjab v. Principal Secretary to Governor (2023)',
    keywords: ['Assent to Bills', 'Governor’s Assent', 'Withhold Assent', 'Reserve for President', 'Return Bill as soon as possible'],
    cadClue: 'Intended to make the Governor a bridge between legislature and executive; recent constitutional showdowns centered on "as soon as possible".',
    latinMaximOrDoctrine: 'Constitutional Head & Prevention of Gubernatorial Pocket Veto',
    benchQuoteHint: '"The expression \'as soon as possible\' in Article 200 conveys a constitutional imperative of promptitude; the Governor cannot sit indefinitely on bills duly passed by an elected assembly."',
    summaryExplanation: 'Governs the Governor’s options when a state bill is presented (assent, withhold assent, return with message, or reserve for Presidential consideration under Art 201).'
  },
  {
    articleNumber: 226,
    articleLabel: 'Article 226',
    part: 'Part VI',
    partTitle: 'The States',
    category: 'High Courts & Subordinate Judiciary',
    justiciability: 'Justiciable (Part III)',
    leadPrecedent: 'L. Chandra Kumar v. Union of India (1997)',
    keywords: ['Writ Jurisdiction of High Courts', 'For any other purpose', 'Habeas Corpus', 'Basic Structure', 'Wider than Article 32'],
    cadClue: 'Deliberately phrased with "and for any other purpose" to give High Courts wider reach than the Supreme Court’s Article 32.',
    latinMaximOrDoctrine: 'Plenary Constitutional Supervision & Inherent Judicial Review',
    benchQuoteHint: '"The power of judicial review over legislative actions vests in the High Courts under Article 226 and in this Court under Article 32. This is an integral and essential feature of the Constitution, constituting part of its basic structure."',
    summaryExplanation: 'Empowers High Courts to issue prerogative writs for the enforcement of Fundamental Rights and "for any other purpose" (legal rights).'
  },
  {
    articleNumber: 246,
    articleLabel: 'Article 246',
    part: 'Part XI',
    partTitle: 'Relations between Union & States',
    category: 'Centre-State Relations',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna (1947)',
    keywords: ['Seventh Schedule Lists', 'Union List (List I)', 'State List (List II)', 'Concurrent List (List III)', 'Pith and Substance'],
    cadClue: 'Allocates legislative competencies across the three legislative lists of the Seventh Schedule with federal non-obstante clauses.',
    latinMaximOrDoctrine: 'Doctrine of Pith and Substance & Federal Competence',
    benchQuoteHint: '"Notwithstanding anything in clauses (2) and (3), Parliament has exclusive power to make laws with respect to any of the matters enumerated in List I in the Seventh Schedule."',
    summaryExplanation: 'Distributes subject-matter legislative competencies between Parliament and State Legislatures across the Union, State, and Concurrent Lists.'
  },
  {
    articleNumber: 300, // Representing 300A
    articleLabel: 'Article 300A',
    part: 'Part XII',
    partTitle: 'Finance, Property, Contracts & Suits',
    category: 'Finance & Property',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'K.T. Plantation Pvt. Ltd. v. State of Karnataka (2011)',
    keywords: ['Right to Property', 'No deprivation save by authority of law', '44th Amendment (1978)', 'Human Right', 'Eminent Domain'],
    cadClue: 'Created by the 44th Constitutional Amendment Act (1978) to demote the Right to Property from a Fundamental Right (Art 31) to a constitutional right.',
    latinMaximOrDoctrine: 'Eminent Domain & Procedural Legality',
    benchQuoteHint: '"No person shall be deprived of his property save by authority of law."',
    summaryExplanation: 'Guarantees that no person shall be deprived of property save by authority of law; recognized by the SC as a constitutional right and a basic human right.'
  },
  {
    articleNumber: 324,
    articleLabel: 'Article 324',
    part: 'Part XV',
    partTitle: 'Elections',
    category: 'Elections & Franchise',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Anoop Baranwal v. Union of India (Election Commission) (2023)',
    keywords: ['Election Commission of India', 'Superintendence, Direction & Control', 'Conduct of Elections', 'Plenary Electoral Powers'],
    cadClue: 'Ambedkar insisted on an independent constitutional Election Commission completely insulated from executive ministry control.',
    latinMaximOrDoctrine: 'Plenary Electoral Reservoir (Mohinder Singh Gill)',
    benchQuoteHint: '"The superintendence, direction and control of the preparation of the electoral rolls for, and the conduct of, all elections to Parliament and to the Legislature of every State... shall be vested in an Election Commission."',
    summaryExplanation: 'Vests superintendence, direction, and control of parliamentary and state elections in an independent Election Commission of India.'
  },
  {
    articleNumber: 352,
    articleLabel: 'Article 352',
    part: 'Part XVIII',
    partTitle: 'Emergency Provisions',
    category: 'Emergency Provisions',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Minerva Mills v. Union of India (1980)',
    keywords: ['Proclamation of Emergency', 'War, External Aggression, Armed Rebellion', 'Cabinet Written Advice', 'Special Majority Parliamentary Approval'],
    cadClue: '44th Amendment replaced "internal disturbance" with "armed rebellion" and mandated written advice of the Union Cabinet to prevent unilateral emergency declarations.',
    latinMaximOrDoctrine: 'Salus populi suprema lex esto & Judicial Review of Proclamation',
    benchQuoteHint: '"If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may... make a declaration to that effect."',
    summaryExplanation: 'Authorizes the President to proclaim a National Emergency on grounds of war, external aggression, or armed rebellion upon written advice of the Cabinet.'
  },
  {
    articleNumber: 356,
    articleLabel: 'Article 356',
    part: 'Part XVIII',
    partTitle: 'Emergency Provisions',
    category: 'Emergency Provisions',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'S.R. Bommai v. Union of India (1994)',
    keywords: ['President’s Rule', 'Failure of Constitutional Machinery in States', 'Governor’s Report', 'Judicial Review', 'Federalism as Basic Structure'],
    cadClue: 'Dr. Ambedkar famously expressed hope that Article 356 would remain a "dead letter"; it was subsequently invoked over 100 times.',
    latinMaximOrDoctrine: 'Federal Guarantee & Judicial Scrutiny of Objective Material',
    benchQuoteHint: '"The proclamation under Article 356 is subject to judicial review. The dissolution of the Legislative Assembly cannot take place before parliamentary approval is secured."',
    summaryExplanation: 'Authorizes the President to assume all or any functions of a state government upon the breakdown of constitutional machinery in that state.'
  },
  {
    articleNumber: 368,
    articleLabel: 'Article 368',
    part: 'Part XX',
    partTitle: 'Amendment of the Constitution',
    category: 'Constitutional Amendments',
    justiciability: 'Constitutional Right (Non-Part III)',
    leadPrecedent: 'Kesavananda Bharati v. State of Kerala (1973)',
    keywords: ['Power of Parliament to Amend Constitution', 'Special Majority', 'Ratification by Half States', 'Basic Structure Doctrine', 'Clause (4) & (5) Struck Down'],
    cadClue: 'Drafted to ensure the Indian Constitution is neither unalterably rigid like the US Constitution nor completely flexible like the British Parliament.',
    latinMaximOrDoctrine: 'Constituent Power vs Legislative Power & Basic Structure Doctrine',
    benchQuoteHint: '"Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution... but it cannot alter or destroy the Basic Structure of the Constitution."',
    summaryExplanation: 'Lays down the procedure and power of Parliament to amend the Constitution by special majority (and state ratification for federal provisions), bounded by the Basic Structure doctrine.'
  }
];

export interface GuessEvaluation {
  guessArticle: ConstitutionalArticleItem;
  numberMatch: 'CORRECT' | 'HIGHER' | 'LOWER';
  partMatch: 'EXACT' | 'NEAR' | 'WRONG';
  categoryMatch: 'EXACT' | 'WRONG';
  justiciabilityMatch: 'EXACT' | 'WRONG';
  leadPrecedentMatch: 'EXACT' | 'WRONG';
  isVictory: boolean;
}

export function evaluateGuess(
  guessedArticle: ConstitutionalArticleItem,
  targetArticle: ConstitutionalArticleItem
): GuessEvaluation {
  const isVictory = guessedArticle.articleNumber === targetArticle.articleNumber;

  // Number comparison
  let numberMatch: 'CORRECT' | 'HIGHER' | 'LOWER' = 'CORRECT';
  if (guessedArticle.articleNumber < targetArticle.articleNumber) {
    numberMatch = 'HIGHER'; // Target is higher
  } else if (guessedArticle.articleNumber > targetArticle.articleNumber) {
    numberMatch = 'LOWER'; // Target is lower
  }

  // Part comparison
  let partMatch: 'EXACT' | 'NEAR' | 'WRONG' = 'WRONG';
  if (guessedArticle.part === targetArticle.part) {
    partMatch = 'EXACT';
  } else if (
    (guessedArticle.part === 'Part III' && targetArticle.part === 'Part IV') ||
    (guessedArticle.part === 'Part IV' && targetArticle.part === 'Part III') ||
    (guessedArticle.part === 'Part IV' && targetArticle.part === 'Part IVA') ||
    (guessedArticle.part === 'Part V' && targetArticle.part === 'Part VI') ||
    (guessedArticle.part === 'Part VI' && targetArticle.part === 'Part V')
  ) {
    partMatch = 'NEAR';
  }

  const categoryMatch =
    guessedArticle.category === targetArticle.category ? 'EXACT' : 'WRONG';
  const justiciabilityMatch =
    guessedArticle.justiciability === targetArticle.justiciability ? 'EXACT' : 'WRONG';
  const leadPrecedentMatch =
    guessedArticle.leadPrecedent === targetArticle.leadPrecedent ? 'EXACT' : 'WRONG';

  return {
    guessArticle: guessedArticle,
    numberMatch,
    partMatch,
    categoryMatch,
    justiciabilityMatch,
    leadPrecedentMatch,
    isVictory
  };
}

export function getDailyMysteryArticle(): ConstitutionalArticleItem {
  // Deterministic daily hash based on UTC date
  const now = new Date();
  const dateStr = `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % CONSTITUTIONAL_ARTICLES_POOL.length;
  return CONSTITUTIONAL_ARTICLES_POOL[index];
}

export function getRandomMysteryArticle(): ConstitutionalArticleItem {
  const index = Math.floor(Math.random() * CONSTITUTIONAL_ARTICLES_POOL.length);
  return CONSTITUTIONAL_ARTICLES_POOL[index];
}
