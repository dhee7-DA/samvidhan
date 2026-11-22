export interface TrapQuestion {
  id: string;
  topic: 'Fundamental Rights & Writs' | 'DPSPs & Duties' | 'Union Executive & Parliament' | 'Judiciary' | 'State Government' | 'Federal Relations & 7th Schedule' | 'Emergency Provisions' | 'Amendments & Bodies';
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  trapCategory: 'Word Swap' | 'False Precedent' | 'Statutory Exception' | 'Majority Confusion' | 'Unnotified Amendment';
  trapExplanation: string;
  detailedAnalysis: string;
  coreArticle: string;
}

export const TRAP_SIMULATOR_QUESTIONS: TrapQuestion[] = [
  // 1. FUNDAMENTAL RIGHTS & WRITS (1-10)
  {
    id: 'tq-1',
    topic: 'Fundamental Rights & Writs',
    question: 'Under Article 12 of the Constitution of India, which one of the following is NOT included in the expression "the State"?',
    options: [
      { key: 'A', text: 'Life Insurance Corporation of India (LIC)' },
      { key: 'B', text: 'Oil and Natural Gas Corporation (ONGC)' },
      { key: 'C', text: 'Board of Control for Cricket in India (BCCI)' },
      { key: 'D', text: 'Delhi Transport Corporation (DTC)' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Aspirants assume that because BCCI is amenable to Article 226 public law writs, it is automatically "State" under Art 12. In Zee Telefilms (2005), SC held it is NOT State.',
    detailedAnalysis: 'In Zee Telefilms v. Union of India (2005), the Supreme Court held that BCCI is not financially, functionally, or administratively dominated by the Government and is therefore not an "other authority" under Article 12, though it is amenable to High Court writ jurisdiction under Art 226 for discharging public duties.',
    coreArticle: 'Article 12'
  },
  {
    id: 'tq-2',
    topic: 'Fundamental Rights & Writs',
    question: 'Under the Constitution of India, a citizen can waive their Fundamental Rights under which of the following circumstances?',
    options: [
      { key: 'A', text: 'During an economic emergency declared under Article 360' },
      { key: 'B', text: 'By executing a written notarized agreement with the Union Government' },
      { key: 'C', text: 'In commercial arbitration disputes involving foreign direct investment' },
      { key: 'D', text: 'Under no circumstance whatsoever' }
    ],
    correctOption: 'D',
    trapCategory: 'False Precedent',
    trapExplanation: 'Candidates confuse US constitutional law (where rights can be waived) with Indian constitutional law (where waiver is strictly prohibited).',
    detailedAnalysis: 'In Basheshar Nath v. CIT (1959) and Behram Khurshed Pesikaka (1954), the Supreme Court ruled that the Doctrine of Waiver does NOT apply in India. Fundamental rights are public policy protections that no citizen can waive.',
    coreArticle: 'Article 13'
  },
  {
    id: 'tq-3',
    topic: 'Fundamental Rights & Writs',
    question: 'Under Article 15(1), the State shall not discriminate against any citizen on grounds only of:',
    options: [
      { key: 'A', text: 'Religion, race, caste, sex, place of birth or residence' },
      { key: 'B', text: 'Religion, race, caste, sex, or place of birth' },
      { key: 'C', text: 'Religion, race, caste, language, or place of birth' },
      { key: 'D', text: 'Religion, caste, descent, sex, or residence' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: 'Examiners slip "Residence" or "Language" into options. Article 15(1) contains strictly 5 grounds: Religion, Race, Caste, Sex, Place of Birth.',
    detailedAnalysis: '"Residence" is omitted from Article 15 to allow states to create educational quotas for state residents (D.P. Joshi 1955). "Residence" is only mentioned in Article 16(2) for public employment.',
    coreArticle: 'Article 15(1)'
  },
  {
    id: 'tq-4',
    topic: 'Fundamental Rights & Writs',
    question: 'Who is constitutionally empowered under Article 16(3) to make a law prescribing a residence requirement within a State prior to public appointment?',
    options: [
      { key: 'A', text: 'The Legislature of the concerned State' },
      { key: 'B', text: 'The Governor of that State acting with the State Cabinet' },
      { key: 'C', text: 'Parliament of India alone' },
      { key: 'D', text: 'The National Development Council' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Candidates assume State jobs are regulated by State Legislatures. Article 16(3) vests this power EXCLUSIVELY in Parliament.',
    detailedAnalysis: 'Article 16(3) gives this power solely to Parliament to prevent balkanization and interstate discrimination in public service employment (A.V.S. Narasimha Rao 1969).',
    coreArticle: 'Article 16(3)'
  },
  {
    id: 'tq-5',
    topic: 'Fundamental Rights & Writs',
    question: 'Which of the following Fundamental Rights under Article 19 is available to non-citizens (foreigners) visiting India?',
    options: [
      { key: 'A', text: 'Freedom of speech and expression (Art 19(1)(a))' },
      { key: 'B', text: 'Freedom of peaceable assembly without arms (Art 19(1)(b))' },
      { key: 'C', text: 'Freedom to practice any profession or trade (Art 19(1)(g))' },
      { key: 'D', text: 'None of the above' }
    ],
    correctOption: 'D',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Aspirants assume peaceful assembly or profession extends to foreigners. ALL clauses of Article 19 apply SOLELY to Indian citizens.',
    detailedAnalysis: 'The rights guaranteed under Article 19 are available ONLY to citizens of India (and not to foreign nationals, companies, or artificial persons — State Trading Corporation 1963). Articles 14, 20, 21, 22, 25, 26, 27, 28 are available to all persons.',
    coreArticle: 'Article 19'
  },
  {
    id: 'tq-6',
    topic: 'Fundamental Rights & Writs',
    question: 'The protection against Double Jeopardy under Article 20(2) of the Constitution applies when a person is prosecuted and punished before:',
    options: [
      { key: 'A', text: 'A court of law or judicial tribunal only' },
      { key: 'B', text: 'A departmental enquiry committee or administrative body' },
      { key: 'C', text: 'Customs or tax revenue authorities' },
      { key: 'D', text: 'Both departmental bodies and criminal courts' }
    ],
    correctOption: 'A',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Candidates assume departmental punishment bars a subsequent criminal trial. It DOES NOT.',
    detailedAnalysis: 'In Maqbool Hussain v. State of Bombay (1953) and Venkataraman (1954), SC held that Art 20(2) applies only to proceedings before a court of law or judicial tribunal. Departmental dismissal followed by a criminal prosecution is not double jeopardy.',
    coreArticle: 'Article 20(2)'
  },
  {
    id: 'tq-7',
    topic: 'Fundamental Rights & Writs',
    question: 'During the operation of a Proclamation of National Emergency under Article 352, the enforcement of which Fundamental Rights CANNOT be suspended by the President under Article 359?',
    options: [
      { key: 'A', text: 'Articles 14 and 19' },
      { key: 'B', text: 'Articles 19 and 21' },
      { key: 'C', text: 'Articles 20 and 21' },
      { key: 'D', text: 'Articles 21 and 22' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The 44th CAA 1978 amended Article 359 to prohibit suspension of Articles 20 and 21 under any circumstances.',
    detailedAnalysis: 'Following the ADM Jabalpur (1976) controversy, the 44th Constitutional Amendment Act 1978 amended Article 359(1) to provide that the right to move any court for the enforcement of the rights conferred by Article 20 and Article 21 CANNOT be suspended.',
    coreArticle: 'Article 359 & Arts 20, 21'
  },
  {
    id: 'tq-8',
    topic: 'Fundamental Rights & Writs',
    question: 'The prerogative writ of Quo Warranto can be filed by which of the following persons?',
    options: [
      { key: 'A', text: 'Only an aggrieved candidate who was personally denied the public office' },
      { key: 'B', text: 'Any member of the public acting in good faith, even without personal locus standi' },
      { key: 'C', text: 'Only the Attorney General or Advocate General' },
      { key: 'D', text: 'Only a registered political party' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Aspirants assume writ petitions always require personal grievance. Quo Warranto and Habeas Corpus relax locus standi completely.',
    detailedAnalysis: 'In Quo Warranto, the test is whether the usurper of a substantive public office has legal qualification. Any citizen can file Quo Warranto to challenge unlawful occupation of a public office (GD Karkare 1952).',
    coreArticle: 'Article 32 & 226'
  },
  {
    id: 'tq-9',
    topic: 'Fundamental Rights & Writs',
    question: 'Which of the following prerogative writs lies against BOTH judicial/quasi-judicial bodies AND administrative authorities affecting rights?',
    options: [
      { key: 'A', text: 'Prohibition' },
      { key: 'B', text: 'Certiorari' },
      { key: 'C', text: 'Quo Warranto' },
      { key: 'D', text: 'Both Prohibition and Certiorari' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Prohibition lies ONLY against judicial and quasi-judicial bodies. Certiorari originally lay only against judicial bodies, but since Province of Bombay v. Khushaldas Advani (1950) and Radhey Shyam (2015), Certiorari also lies against administrative authorities.',
    detailedAnalysis: 'Prohibition is preventive (stops proceedings before judgment); Certiorari is curative (quashes after decision). Crucially, Certiorari was expanded to administrative authorities affecting individual rights, whereas Prohibition remains restricted to judicial/quasi-judicial bodies.',
    coreArticle: 'Article 32 & 226'
  },
  {
    id: 'tq-10',
    topic: 'Fundamental Rights & Writs',
    question: 'Under Article 32, can an applicant directly petition the Supreme Court of India without first exhausting their remedy before the concerned High Court under Article 226?',
    options: [
      { key: 'A', text: 'No, Article 226 remedy is an absolute statutory bar' },
      { key: 'B', text: 'Yes, because Article 32 is itself a Fundamental Right and the Supreme Court is the guarantor of Part III' },
      { key: 'C', text: 'Only if the High Court Chief Justice certifies that the issue is national' },
      { key: 'D', text: 'Only during a financial emergency' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'While the Supreme Court may encourage litigants to approach High Courts first for convenience (Romesh Thappar 1950), Article 32 is itself a Fundamental Right and cannot be refused on ground of alternate remedy.',
    detailedAnalysis: 'In Romesh Thappar (1950) and Prem Chand Garg (1962), SC held that unlike Art 226 (which is discretionary), Art 32 is a guaranteed fundamental right. The Court cannot refuse to entertain an Art 32 petition if a fundamental right is violated.',
    coreArticle: 'Article 32'
  },

  // 2. DPSPs & DUTIES (11-15)
  {
    id: 'tq-11',
    topic: 'DPSPs & Duties',
    question: 'Under Article 37 of the Constitution of India, the Directive Principles of State Policy are described as:',
    options: [
      { key: 'A', text: 'Enforceable by the Supreme Court by a writ of Mandamus' },
      { key: 'B', text: 'Fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws' },
      { key: 'C', text: 'Subordinate to ordinary parliamentary statutes in case of inconsistency' },
      { key: 'D', text: 'Operative only after formal ratification by half of the State Legislatures' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: 'Candidates remember "non-justiciable" but forget the second mandatory clause: "fundamental in the governance of the country".',
    detailedAnalysis: 'Article 37 explicitly declares that DPSPs are not enforceable by any court, but they are nonetheless "fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws".',
    coreArticle: 'Article 37'
  },
  {
    id: 'tq-12',
    topic: 'DPSPs & Duties',
    question: 'Which of the following Directive Principles was added by the 42nd Constitutional Amendment Act, 1976?',
    options: [
      { key: 'A', text: 'Organisation of village panchayats (Art 40)' },
      { key: 'B', text: 'Uniform Civil Code for the citizens (Art 44)' },
      { key: 'C', text: 'Equal justice and free legal aid (Art 39A)' },
      { key: 'D', text: 'Separation of judiciary from executive (Art 50)' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The 42nd CAA added 4 DPSPs: 39(f), 39A, 43A, and 48A. Arts 40, 44, and 50 were in the original 1950 Constitution.',
    detailedAnalysis: 'The 42nd CAA 1976 inserted Article 39A (Equal justice and free legal aid), Article 43A (Participation of workers in management of industries), and Article 48A (Protection of environment and forests).',
    coreArticle: 'Article 39A'
  },
  {
    id: 'tq-13',
    topic: 'DPSPs & Duties',
    question: 'The Fundamental Duties under Article 51A of the Constitution of India were incorporated upon the recommendation of which Committee?',
    options: [
      { key: 'A', text: 'Sarkaria Commission' },
      { key: 'B', text: 'Justice Verma Committee' },
      { key: 'C', text: 'Swaran Singh Committee' },
      { key: 'D', text: 'Balwant Rai Mehta Committee' }
    ],
    correctOption: 'C',
    trapCategory: 'False Precedent',
    trapExplanation: 'Candidates confuse Swaran Singh Committee (which created them in 1976) with Verma Committee (which identified legal sanctions in 1999).',
    detailedAnalysis: 'The Swaran Singh Committee (1976) recommended the inclusion of Fundamental Duties. The 42nd CAA 1976 accepted most recommendations, though it rejected the duty to pay taxes.',
    coreArticle: 'Article 51A'
  },
  {
    id: 'tq-14',
    topic: 'DPSPs & Duties',
    question: 'Which of the following was NOT recommended by the Swaran Singh Committee regarding Fundamental Duties?',
    options: [
      { key: 'A', text: 'Inclusion of a duty to pay taxes' },
      { key: 'B', text: 'Parliament may provide for penalty or punishment for failure to perform any duty' },
      { key: 'C', text: 'No law imposing punishment on non-performance of duties shall be questioned in any court' },
      { key: 'D', text: 'A duty to promote family planning and population control' }
    ],
    correctOption: 'D',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Swaran Singh famously recommended the duty to pay taxes and penal provisions, but did NOT recommend family planning.',
    detailedAnalysis: 'Swaran Singh Committee suggested 8 duties including duty to pay taxes and penalty for non-compliance. Parliament did not accept the tax duty or the penal immunity clauses. Family planning was never part of Swaran Singh report.',
    coreArticle: 'Article 51A'
  },
  {
    id: 'tq-15',
    topic: 'DPSPs & Duties',
    question: 'The 11th Fundamental Duty under Article 51A(k) (duty of parent/guardian to provide education to child aged 6-14) was added by which Constitutional Amendment?',
    options: [
      { key: 'A', text: '42nd Amendment Act, 1976' },
      { key: 'B', text: '44th Amendment Act, 1978' },
      { key: 'C', text: '86th Amendment Act, 2002' },
      { key: 'D', text: '91st Amendment Act, 2003' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The 86th CAA 2002 was a tripartite amendment: inserted Art 21A (FR), substituted Art 45 (DPSP), and added Art 51A(k) (FD).',
    detailedAnalysis: 'The 86th CAA 2002 simultaneously transformed education into a Fundamental Right (Art 21A), an Early Childhood Care Directive (Art 45), and an 11th Fundamental Duty (Art 51A(k)).',
    coreArticle: 'Article 51A(k)'
  },

  // 3. UNION EXECUTIVE & PARLIAMENT (16-30)
  {
    id: 'tq-16',
    topic: 'Union Executive & Parliament',
    question: 'In the election of the President of India under Article 54, who among the following CANNOT vote?',
    options: [
      { key: 'A', text: 'Elected members of the Legislative Assembly of Delhi' },
      { key: 'B', text: 'Elected members of the Legislative Assembly of Puducherry' },
      { key: 'C', text: 'Nominated members of the Rajya Sabha' },
      { key: 'D', text: 'Elected members of the Legislative Assembly of Goa' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Only ELECTED members vote. Nominated MPs of Rajya Sabha/Lok Sabha and all members of State Legislative Councils cannot vote.',
    detailedAnalysis: 'Article 54 restricts the electoral college strictly to elected MPs and elected MLAs of States and UTs (Delhi and Puducherry added by 70th CAA 1992). Nominated members are strictly excluded.',
    coreArticle: 'Article 54'
  },
  {
    id: 'tq-17',
    topic: 'Union Executive & Parliament',
    question: 'Who among the following participates in the IMPEACHMENT of the President under Article 61, but does NOT participate in the ELECTION of the President under Article 54?',
    options: [
      { key: 'A', text: 'Elected members of State Legislative Assemblies' },
      { key: 'B', text: 'Nominated members of both Houses of Parliament' },
      { key: 'C', text: 'Members of State Legislative Councils' },
      { key: 'D', text: 'The Chief Justice of India' }
    ],
    correctOption: 'B',
    trapCategory: 'Majority Confusion',
    trapExplanation: 'The classic electoral-impeachment asymmetry: Nominated MPs cannot vote to elect, but CAN vote to impeach!',
    detailedAnalysis: 'Under Article 61, impeachment is conducted by both Houses of Parliament. Nominated members of Parliament participate in the investigation and voting. Conversely, State MLAs participate in election, but have zero role in impeachment.',
    coreArticle: 'Article 61 vs Article 54'
  },
  {
    id: 'tq-18',
    topic: 'Union Executive & Parliament',
    question: 'What is the sole ground specified in the Constitution for the impeachment of the President of India?',
    options: [
      { key: 'A', text: 'Proved misbehaviour or incapacity' },
      { key: 'B', text: 'Bankruptcy or moral turpitude' },
      { key: 'C', text: 'Violation of the Constitution' },
      { key: 'D', text: 'Treason against the Republic' }
    ],
    correctOption: 'C',
    trapCategory: 'Word Swap',
    trapExplanation: 'Examiners swap "proved misbehaviour" (which is for Judges, CAG, CEC) with President grounds.',
    detailedAnalysis: 'Article 61(1) states: "When a President is to be impeached for violation of the Constitution...". The Constitution does not define what acts constitute "violation of the constitution".',
    coreArticle: 'Article 61(1)'
  },
  {
    id: 'tq-19',
    topic: 'Union Executive & Parliament',
    question: 'A resolution for the removal of the Vice-President of India must be initiated in:',
    options: [
      { key: 'A', text: 'Lok Sabha only' },
      { key: 'B', text: 'Rajya Sabha only' },
      { key: 'C', text: 'Either House of Parliament' },
      { key: 'D', text: 'A Joint Sitting of Parliament presided over by the Chief Justice' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Unlike the President (who can be impeached starting in either House), the Vice-President can ONLY be removed by a resolution initiated in the RAJYA SABHA.',
    detailedAnalysis: 'Article 67(b) dictates that a resolution for removal of the Vice-President can be moved ONLY in the Council of States (Rajya Sabha), because the Vice-President is ex-officio Chairman of Rajya Sabha.',
    coreArticle: 'Article 67(b)'
  },
  {
    id: 'tq-20',
    topic: 'Union Executive & Parliament',
    question: 'The Council of Ministers is collectively responsible under Article 75(3) to:',
    options: [
      { key: 'A', text: 'The President of India' },
      { key: 'B', text: 'Both Houses of Parliament equally' },
      { key: 'C', text: 'The House of the People (Lok Sabha) only' },
      { key: 'D', text: 'The Prime Minister' }
    ],
    correctOption: 'C',
    trapCategory: 'Word Swap',
    trapExplanation: 'Ministers are collectively responsible to the LOK SABHA alone, not Parliament as a whole. A No-Confidence Motion can only be introduced in Lok Sabha.',
    detailedAnalysis: 'Article 75(3) states: "The Council of Ministers shall be collectively responsible to the House of the People." Ministers hold office during the individual pleasure of the President (Art 75(2)).',
    coreArticle: 'Article 75(3)'
  },
  {
    id: 'tq-21',
    topic: 'Union Executive & Parliament',
    question: 'Under the 91st Amendment Act, 2003, the total number of Ministers, including the Prime Minister, in the Central Council of Ministers cannot exceed:',
    options: [
      { key: 'A', text: '10% of total members of Parliament' },
      { key: 'B', text: '15% of the total number of members of the House of the People (Lok Sabha)' },
      { key: 'C', text: '15% of total members of both Houses combined' },
      { key: 'D', text: '12% of the strength of the Lok Sabha' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: '15% is computed on Lok Sabha total members, NOT both Houses of Parliament.',
    detailedAnalysis: 'Article 75(1A) specifies: "...shall not exceed fifteen per cent. of the total number of members of the House of the People."',
    coreArticle: 'Article 75(1A)'
  },
  {
    id: 'tq-22',
    topic: 'Union Executive & Parliament',
    question: 'Who decides whether a Bill is a Money Bill or not, and is this decision subject to challenge?',
    options: [
      { key: 'A', text: 'President of India, whose decision is final' },
      { key: 'B', text: 'Speaker of Lok Sabha, whose decision is final under Art 110(3)' },
      { key: 'C', text: 'Finance Minister in consultation with Comptroller and Auditor General' },
      { key: 'D', text: 'Chairman of Rajya Sabha' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Under Article 110(3), the decision of the Speaker of the House of the People is final. (Though in Rojer Mathew 2019, SC held that colourable certification can be judicially reviewed).',
    detailedAnalysis: 'Article 110(3) states: "If any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of the House of the People thereon shall be final."',
    coreArticle: 'Article 110(3)'
  },
  {
    id: 'tq-23',
    topic: 'Union Executive & Parliament',
    question: 'A Joint Sitting of both Houses of Parliament under Article 108 CANNOT be summoned for which of the following Bills?',
    options: [
      { key: 'A', text: 'An Ordinary Bill' },
      { key: 'B', text: 'A Financial Bill (Category A)' },
      { key: 'C', text: 'A Constitutional Amendment Bill' },
      { key: 'D', text: 'A Financial Bill (Category B)' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Joint sittings cannot be held for: (1) Money Bills (Rajya Sabha has no veto anyway), and (2) Constitutional Amendment Bills (must be passed by each House separately under Art 368).',
    detailedAnalysis: 'Article 368 requires independent Special Majority passage in each House. If one House rejects a Constitutional Amendment Bill, the Bill dies; no Joint Sitting is possible.',
    coreArticle: 'Article 108 vs Article 368'
  },
  {
    id: 'tq-24',
    topic: 'Union Executive & Parliament',
    question: 'Who presides over a Joint Sitting of Parliament under Article 118(4)?',
    options: [
      { key: 'A', text: 'Chairman of Rajya Sabha (Vice-President)' },
      { key: 'B', text: 'Speaker of Lok Sabha' },
      { key: 'C', text: 'President of India' },
      { key: 'D', text: 'Prime Minister' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The Chairman of Rajya Sabha (Vice-President) NEVER presides over a Joint Sitting because he is not a member of either House!',
    detailedAnalysis: 'Under Article 118(4) and the Joint Sitting Rules, the Speaker of Lok Sabha presides. If absent, Deputy Speaker of Lok Sabha presides. If also absent, Deputy Chairman of Rajya Sabha presides.',
    coreArticle: 'Article 118(4)'
  },
  {
    id: 'tq-25',
    topic: 'Union Executive & Parliament',
    question: 'Under Article 123, an Ordinance promulgated by the President has the same force and effect as an Act of Parliament, but it MUST be laid before both Houses and ceases to operate at the expiration of:',
    options: [
      { key: 'A', text: '6 months from promulgation' },
      { key: 'B', text: '6 weeks from the reassembly of Parliament' },
      { key: 'C', text: '30 days from reassembly' },
      { key: 'D', text: '60 days from promulgation' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: 'Examiners confuse candidates between "6 weeks from reassembly" and "6 months interval".',
    detailedAnalysis: 'Article 123(2)(a) explicitly mandates expiration at 6 weeks from reassembly. If both Houses reassemble on different dates, 6 weeks is counted from the later date.',
    coreArticle: 'Article 123(2)(a)'
  },

  // 4. JUDICIARY (26-33)
  {
    id: 'tq-26',
    topic: 'Judiciary',
    question: 'Under Article 124(4), a Judge of the Supreme Court can be removed from office on grounds of:',
    options: [
      { key: 'A', text: 'Violation of the Constitution only' },
      { key: 'B', text: 'Proved misbehaviour or incapacity' },
      { key: 'C', text: 'Incompetence, bias, or corruption' },
      { key: 'D', text: 'Discretion of the President on advice of the Council of Ministers' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: 'President = "Violation of Constitution"; Judges = "Proved misbehaviour or incapacity".',
    detailedAnalysis: 'Article 124(4) specifies strictly two grounds: "proved misbehaviour or incapacity". The procedure for investigation is governed by the Judges (Inquiry) Act, 1968.',
    coreArticle: 'Article 124(4)'
  },
  {
    id: 'tq-27',
    topic: 'Judiciary',
    question: 'Under Article 131, which of the following disputes CANNOT be entertained by the Supreme Court under its Original Jurisdiction?',
    options: [
      { key: 'A', text: 'A dispute between the Government of India and one or more States' },
      { key: 'B', text: 'A dispute between two or more States' },
      { key: 'C', text: 'A dispute arising out of any pre-Constitution treaty, agreement, or covenant' },
      { key: 'D', text: 'A dispute between the Union and a State regarding legislative competence' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The proviso to Article 131 expressly excludes disputes arising out of pre-Constitution treaties, covenants, or sanads.',
    detailedAnalysis: 'Article 131 proviso bars original jurisdiction over pre-constitutional treaties. Similarly, inter-state river water disputes (Art 262) and matters referred to the Finance Commission (Art 280) are excluded.',
    coreArticle: 'Article 131 Proviso'
  },
  {
    id: 'tq-28',
    topic: 'Judiciary',
    question: 'The Supreme Court’s power to review its own judgments under Article 137 is subject to:',
    options: [
      { key: 'A', text: 'Prior certification by the Attorney General' },
      { key: 'B', text: 'Any law made by Parliament or rules made under Article 145' },
      { key: 'C', text: 'Approval by a 5-Judge Constitution Bench' },
      { key: 'D', text: 'The recommendation of the Law Commission of India' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Article 137 opens: "Subject to the provisions of any law made by Parliament or any rules made under article 145...".',
    detailedAnalysis: 'Review jurisdiction under Article 137 is exercised under Supreme Court Rules (must be filed within 30 days, on grounds of error apparent on the face of the record).',
    coreArticle: 'Article 137'
  },
  {
    id: 'tq-29',
    topic: 'Judiciary',
    question: 'Under Article 141, the law declared by the Supreme Court is binding on:',
    options: [
      { key: 'A', text: 'All courts within the territory of India, including the Supreme Court itself' },
      { key: 'B', text: 'All courts within the territory of India, but not on the Supreme Court itself' },
      { key: 'C', text: 'Subordinate courts only, but not High Courts' },
      { key: 'D', text: 'Tribunals and administrative authorities only' }
    ],
    correctOption: 'B',
    trapCategory: 'False Precedent',
    trapExplanation: 'The Supreme Court is NOT bound by its own previous decisions! A larger bench can always overrule an earlier smaller bench (Bengal Immunity 1955).',
    detailedAnalysis: 'In Bengal Immunity Co. v. State of Bihar (1955), the Supreme Court ruled that Article 141 does not bind the Supreme Court itself. The Court can depart from its previous rulings to correct error and advance public welfare.',
    coreArticle: 'Article 141'
  },
  {
    id: 'tq-30',
    topic: 'Judiciary',
    question: 'Under Article 143(1), if the President refers a question of public importance to the Supreme Court for an advisory opinion:',
    options: [
      { key: 'A', text: 'The Supreme Court is bound to give its opinion' },
      { key: 'B', text: 'The Supreme Court may, for valid reasons, refuse to answer the reference' },
      { key: 'C', text: 'The opinion given becomes binding on the President as an executive order' },
      { key: 'D', text: 'The reference must be decided within 60 days' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Under Art 143(1), SC can REFUSE to answer (e.g. Ayodhya reference 1994). Only under Art 143(2) (pre-constitutional treaties) is SC bound to answer.',
    detailedAnalysis: 'In M. Ismail Faruqui (Ayodhya 1994), the Supreme Court declined to answer whether a Hindu temple originally existed before the mosque, holding that the court retains discretion under Art 143(1) to refuse an answer.',
    coreArticle: 'Article 143(1)'
  },

  // 5. STATE GOVERNMENT & GOVERNORS (31-38)
  {
    id: 'tq-31',
    topic: 'State Government',
    question: 'The Governor of a State holds office during the pleasure of:',
    options: [
      { key: 'A', text: 'The Chief Minister of the State' },
      { key: 'B', text: 'The State Legislative Assembly' },
      { key: 'C', text: 'The President of India' },
      { key: 'D', text: 'The Chief Justice of the High Court' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Article 156(1) states: "The Governor shall hold office during the pleasure of the President." The State Legislature has zero removal power over the Governor.',
    detailedAnalysis: 'The Governor has no security of tenure and can be removed by the President at any time. However, in B.P. Singhal (2010), SC held that removal cannot be arbitrary, capricious, or on mere political change of regime.',
    coreArticle: 'Article 156(1)'
  },
  {
    id: 'tq-32',
    topic: 'State Government',
    question: 'Can the pardoning power of the Governor under Article 161 pardon a death sentence?',
    options: [
      { key: 'A', text: 'Yes, Governor has concurrent power to pardon death sentences under state laws' },
      { key: 'B', text: 'No, the power to grant pardon for a death sentence belongs EXCLUSIVELY to the President under Article 72' },
      { key: 'C', text: 'Yes, but only with the consent of the Chief Justice of India' },
      { key: 'D', text: 'Governor can pardon death, but cannot commute it' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Governor can suspend, remit, or commute a death sentence, but CANNOT PARDON a death sentence. Pardon of death is exclusive to the President under Art 72.',
    detailedAnalysis: 'Article 72(1)(c) gives the President exclusive power to pardon death sentences. Governor under Art 161 can commute, suspend, or remit a death sentence, but cannot grant a full pardon to wipe out the sentence completely.',
    coreArticle: 'Article 161 vs Article 72'
  },
  {
    id: 'tq-33',
    topic: 'State Government',
    question: 'Under Article 169, when a State Legislative Assembly passes a resolution for the abolition or creation of a Legislative Council, what majority is required in the STATE ASSEMBLY?',
    options: [
      { key: 'A', text: 'Simple majority of members present and voting' },
      { key: 'B', text: 'Majority of total membership and not less than 2/3rd of members present and voting' },
      { key: 'C', text: 'Effective majority of sitting members' },
      { key: 'D', text: 'Unanimous resolution' }
    ],
    correctOption: 'B',
    trapCategory: 'Majority Confusion',
    trapExplanation: 'The Assembly requires a SPECIAL MAJORITY (Art 368 type), while Parliament subsequently passes the Act by a SIMPLE MAJORITY!',
    detailedAnalysis: 'Article 169(1) requires the State Assembly to pass the resolution by a majority of the total membership of the Assembly and by a majority of not less than two-thirds of the members present and voting.',
    coreArticle: 'Article 169(1)'
  },
  {
    id: 'tq-34',
    topic: 'State Government',
    question: 'Under the second proviso to Article 200, the Governor is MANDATED to reserve which of the following Bills for the consideration of the President?',
    options: [
      { key: 'A', text: 'Any Money Bill' },
      { key: 'B', text: 'Any Bill derogating from the constitutional powers of the High Court' },
      { key: 'C', text: 'Any Bill dealing with inter-state trade' },
      { key: 'D', text: 'Any Bill modifying the Panchayati Raj quota' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Reservation under Art 200 is generally discretionary, but the second proviso creates one MANDATORY reservation: Bills endangering High Court status.',
    detailedAnalysis: 'Article 200 second proviso: "...the Governor shall not assent to, but shall reserve for the consideration of the President, any Bill which in the opinion of the Governor would, if it became law, so derogate from the powers of the High Court as to endanger the position which that Court is designed to fill."',
    coreArticle: 'Article 200 Second Proviso'
  },

  // 6. FEDERAL RELATIONS & 7TH SCHEDULE (35-41)
  {
    id: 'tq-35',
    topic: 'Federal Relations & 7th Schedule',
    question: 'Where are the Residuary Powers of legislation and taxation vested in the Indian federal system?',
    options: [
      { key: 'A', text: 'Exclusively in the State Legislatures, as in the United States' },
      { key: 'B', text: 'Exclusively in Parliament under Article 248 and Entry 97 of the Union List' },
      { key: 'C', text: 'Concurrently in both Parliament and State Legislatures' },
      { key: 'D', text: 'In the Inter-State Council' }
    ],
    correctOption: 'B',
    trapCategory: 'Word Swap',
    trapExplanation: 'Candidates confuse US/Australian federalism (where states hold residuary powers) with Canadian/Indian federalism (where Centre holds residuary powers).',
    detailedAnalysis: 'Article 248 and Entry 97 of List I vest all residuary legislative and taxing powers in Parliament. In Union of India v. H.S. Dhillon (1971), SC held that Parliament can levy wealth tax on agricultural land under residuary powers.',
    coreArticle: 'Article 248 & Entry 97'
  },
  {
    id: 'tq-36',
    topic: 'Federal Relations & 7th Schedule',
    question: 'When Parliament enacts a law on a State List subject under Article 252 upon resolutions by two or more States, who can amend or repeal that law?',
    options: [
      { key: 'A', text: 'Any consenting State Legislature independently for its territory' },
      { key: 'B', text: 'Parliament of India alone' },
      { key: 'C', text: 'A joint session of the consenting Assemblies' },
      { key: 'D', text: 'The Governor of the State with presidential assent' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Candidates assume states that surrendered power can amend it. Article 252(2) explicitly provides that ONLY PARLIAMENT can amend or repeal it.',
    detailedAnalysis: 'Article 252(2) states that any Act so passed by Parliament may be amended or repealed by an Act of Parliament passed in like manner. Consenting states completely lose their legislative power over that subject!',
    coreArticle: 'Article 252(2)'
  },
  {
    id: 'tq-37',
    topic: 'Federal Relations & 7th Schedule',
    question: 'Under Article 253, to implement an international treaty or agreement, Parliament can make laws on any State List subject with whose consent?',
    options: [
      { key: 'A', text: 'Consent of at least half of the State Legislatures' },
      { key: 'B', text: 'Consent of the affected States' },
      { key: 'C', text: 'No consent of any State is required' },
      { key: 'D', text: 'Approval by 2/3rd majority of the Rajya Sabha' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Under Article 253, Parliament needs NO CONSENT from any State to legislate on State subjects for treaty implementation.',
    detailedAnalysis: 'Article 253 gives Parliament plenary power to legislate on any subject in any list for the whole of India to implement any treaty, agreement, or convention without needing any state permission (e.g. Environment Protection Act 1986).',
    coreArticle: 'Article 253'
  },
  {
    id: 'tq-38',
    topic: 'Federal Relations & 7th Schedule',
    question: 'If a State law on a Concurrent List subject conflicts with an earlier Central law on the same subject, how can the State law prevail in that State under Article 254(2)?',
    options: [
      { key: 'A', text: 'If passed again by a 2/3rd majority in the State Assembly' },
      { key: 'B', text: 'If reserved for the consideration of the President and received Presidential Assent' },
      { key: 'C', text: 'If certified by the Governor as being in public interest' },
      { key: 'D', text: 'State law can never prevail over Central law' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Article 254(2) is the safe-harbour exception: If reserved for and assented to by the President, the State law prevails in that State over the earlier Central law.',
    detailedAnalysis: 'Under Article 254(2), presidential assent allows the State law to override the prior inconsistent Central law in that State. However, under the proviso to Art 254(2), Parliament can still subsequently enact a fresh law overriding the State law.',
    coreArticle: 'Article 254(2)'
  },
  {
    id: 'tq-39',
    topic: 'Federal Relations & 7th Schedule',
    question: 'Which of the following subjects was NOT transferred from the State List to the Concurrent List by the 42nd Constitutional Amendment Act, 1976?',
    options: [
      { key: 'A', text: 'Education' },
      { key: 'B', text: 'Forests' },
      { key: 'C', text: 'Public Health and Sanitation' },
      { key: 'D', text: 'Weights and Measures' }
    ],
    correctOption: 'C',
    trapCategory: 'Word Swap',
    trapExplanation: 'The 42nd CAA transferred 5 subjects: Education, Forests, Wild Animals/Birds, Weights/Measures, and Administration of Justice. Public Health and Police REMAIN IN THE STATE LIST.',
    detailedAnalysis: 'Entry 6 of List II (Public health and sanitation; hospitals and dispensaries) remains exclusively in the State List.',
    coreArticle: '7th Schedule & 42nd CAA'
  },

  // 7. EMERGENCY PROVISIONS (40-45)
  {
    id: 'tq-40',
    topic: 'Emergency Provisions',
    question: 'Under Article 352(3) (inserted by the 44th Amendment Act, 1978), the President can proclaim a National Emergency only after receiving:',
    options: [
      { key: 'A', text: 'The verbal advice of the Prime Minister' },
      { key: 'B', text: 'The written decision of the Union Cabinet (Prime Minister and other Ministers of Cabinet rank)' },
      { key: 'C', text: 'A joint resolution passed by both Houses of Parliament' },
      { key: 'D', text: 'A report from the National Security Council' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Prior to 1978, PM alone could advise. The 44th CAA added Art 352(3) requiring the WRITTEN decision of the UNION CABINET. This is the only place in the Constitution where the word "Cabinet" appears!',
    detailedAnalysis: 'Article 352(3) was inserted by the 44th CAA 1978 to prevent a repeat of the 1975 emergency declared on the sole oral advice of Prime Minister Indira Gandhi without consulting her Cabinet.',
    coreArticle: 'Article 352(3)'
  },
  {
    id: 'tq-41',
    topic: 'Emergency Provisions',
    question: 'The ground of "Internal Disturbance" for proclaiming National Emergency under Article 352 was replaced with "Armed Rebellion" by which Amendment?',
    options: [
      { key: 'A', text: '42nd Amendment Act, 1976' },
      { key: 'B', text: '44th Amendment Act, 1978' },
      { key: 'C', text: '52nd Amendment Act, 1985' },
      { key: 'D', text: '86th Amendment Act, 2002' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The 44th CAA 1978 substituted "armed rebellion" for "internal disturbance" because internal disturbance was vague and misused in 1975.',
    detailedAnalysis: 'Today, Article 352 recognizes only 3 grounds: War, External Aggression, or Armed Rebellion. Under Art 358, Fundamental Rights under Art 19 are automatically suspended ONLY during war or external aggression, NOT during armed rebellion!',
    coreArticle: 'Article 352(1) & Article 358'
  },
  {
    id: 'tq-42',
    topic: 'Emergency Provisions',
    question: 'A resolution for DISAPPROVING the continuation of a National Emergency under Article 352(8) requires what majority?',
    options: [
      { key: 'A', text: 'Special Majority in both Houses of Parliament' },
      { key: 'B', text: 'Simple Majority in the Lok Sabha only' },
      { key: 'C', text: 'Effective majority in the Rajya Sabha' },
      { key: 'D', text: '2/3rd majority of members present and voting in Lok Sabha' }
    ],
    correctOption: 'B',
    trapCategory: 'Majority Confusion',
    trapExplanation: 'Approval requires Special Majority in BOTH Houses. Disapproval requires only a SIMPLE MAJORITY in the LOK SABHA alone!',
    detailedAnalysis: 'Inserted by the 44th CAA 1978, Article 352(8) gives the Lok Sabha unilateral power to revoke a National Emergency by a simple majority vote of members present and voting.',
    coreArticle: 'Article 352(8)'
  },
  {
    id: 'tq-43',
    topic: 'Emergency Provisions',
    question: 'What is the maximum period for which President’s Rule under Article 356 can be continued in a State beyond ONE YEAR without meeting the twin conditions of Art 356(5)?',
    options: [
      { key: 'A', text: 'It cannot be continued beyond 1 year under any circumstance without meeting twin conditions' },
      { key: 'B', text: 'Up to 2 years at the discretion of the Governor' },
      { key: 'C', text: 'Up to 3 years by a simple majority in Parliament' },
      { key: 'D', text: 'Up to 5 years during economic stress' }
    ],
    correctOption: 'A',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Under Art 356(5), beyond 1 year, extension requires: (1) National emergency operating in India/State, AND (2) Election Commission certifying inability to hold elections.',
    detailedAnalysis: 'The 44th CAA 1978 introduced Article 356(5) to constrain executive abuse. Beyond 1 year, the twin conditions are mandatory.',
    coreArticle: 'Article 356(5)'
  },

  // 8. AMENDMENTS & BODIES (44-50)
  {
    id: 'tq-44',
    topic: 'Amendments & Bodies',
    question: 'When a Constitution Amendment Bill passed by both Houses of Parliament is presented to the President under Article 368(2), the President:',
    options: [
      { key: 'A', text: 'Can exercise suspensive veto and return it for reconsideration' },
      { key: 'B', text: 'Can withhold assent under Article 111' },
      { key: 'C', text: 'Shall give his assent thereto (mandatory assent)' },
      { key: 'D', text: 'Can refer it to the Supreme Court for an advisory opinion' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'The 24th CAA 1971 made presidential assent mandatory for Constitution Amendment Bills: the President "shall give his assent thereto".',
    detailedAnalysis: 'The 24th CAA 1971 amended Article 368(2) by substituting the phrase "it shall be presented to the President who shall declare that he assents to the Bill or that he withholds assent" with "who shall give his assent thereto". The President has zero veto power over an amendment bill.',
    coreArticle: 'Article 368(2)'
  },
  {
    id: 'tq-45',
    topic: 'Amendments & Bodies',
    question: 'Which of the following Constitutional Amendments inserted Article 21A (Right to Education) into the Constitution of India?',
    options: [
      { key: 'A', text: '42nd Amendment Act, 1976' },
      { key: 'B', text: '44th Amendment Act, 1978' },
      { key: 'C', text: '86th Amendment Act, 2002' },
      { key: 'D', text: '93rd Amendment Act, 2005' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: '86th CAA 2002 inserted Art 21A, making free and compulsory education for children aged 6 to 14 a Fundamental Right.',
    detailedAnalysis: 'Following Mohini Jain (1992) and Unni Krishnan (1993), Parliament enacted the 86th Constitutional Amendment Act, 2002, formally elevating primary education to an enforceable fundamental right under Article 21A.',
    coreArticle: 'Article 21A & 86th CAA'
  },
  {
    id: 'tq-46',
    topic: 'Amendments & Bodies',
    question: 'The Comptroller and Auditor-General of India (CAG) is eligible for what appointment after ceasing to hold office under Article 148(4)?',
    options: [
      { key: 'A', text: 'Governor of any State' },
      { key: 'B', text: 'Chairman of the Finance Commission' },
      { key: 'C', text: 'Ineligible for any further office either under the Government of India or under the Government of any State' },
      { key: 'D', text: 'Judge of the Supreme Court of India' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Article 148(4) imposes a TOTAL, UNBREAKABLE BAR on any post-retirement government employment to ensure fearless public audit.',
    detailedAnalysis: 'Article 148(4) states: "The Comptroller and Auditor-General shall not be eligible for further office either under the Government of India or under the Government of any State after he has ceased to hold his office."',
    coreArticle: 'Article 148(4)'
  },
  {
    id: 'tq-47',
    topic: 'Amendments & Bodies',
    question: 'Under Article 324(5), an Election Commissioner or a Regional Commissioner can be removed from office ONLY:',
    options: [
      { key: 'A', text: 'By impeachment in Parliament like a Supreme Court Judge' },
      { key: 'B', text: 'On the recommendation of the Chief Election Commissioner (CEC)' },
      { key: 'C', text: 'At the unfettered pleasure of the President' },
      { key: 'D', text: 'By a resolution passed by the Rajya Sabha by simple majority' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'CEC is removed like an SC Judge (impeachment). Other Election Commissioners are removed on the RECOMMENDATION OF THE CEC (Art 324(5) second proviso)!',
    detailedAnalysis: 'In T.N. Seshan v. Union of India (1995), the Supreme Court upheld this constitutional distinction: CEC has constitutional tenure protection like an SC Judge, whereas Election Commissioners are removed by the President on the CEC’s recommendation.',
    coreArticle: 'Article 324(5)'
  },
  {
    id: 'tq-48',
    topic: 'Amendments & Bodies',
    question: 'NITI Aayog is which type of body?',
    options: [
      { key: 'A', text: 'Constitutional Body created under Article 280' },
      { key: 'B', text: 'Statutory Body established by an Act of Parliament' },
      { key: 'C', text: 'Extra-constitutional, non-statutory body created by an executive resolution of the Union Cabinet' },
      { key: 'D', text: 'Quasi-judicial appellate body' }
    ],
    correctOption: 'C',
    trapCategory: 'Word Swap',
    trapExplanation: 'NITI Aayog is NEITHER constitutional NOR statutory! It was created on Jan 1, 2015 by an Executive Cabinet Resolution replacing the Planning Commission.',
    detailedAnalysis: 'NITI Aayog does not derive power from the Constitution or any statute. It is an extra-constitutional, non-statutory think tank created by an executive resolution of the Government of India.',
    coreArticle: 'Constitutional Bodies Dossier'
  },
  {
    id: 'tq-49',
    topic: 'Amendments & Bodies',
    question: 'The 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) provides for 33% reservation for women in which of the following bodies?',
    options: [
      { key: 'A', text: 'Lok Sabha, Rajya Sabha, and State Legislative Assemblies' },
      { key: 'B', text: 'Lok Sabha, State Legislative Assemblies, and Delhi Legislative Assembly only' },
      { key: 'C', text: 'Lok Sabha and State Legislative Councils only' },
      { key: 'D', text: 'All legislative bodies and the Union Council of Ministers' }
    ],
    correctOption: 'B',
    trapCategory: 'Statutory Exception',
    trapExplanation: 'Women’s reservation applies to Lok Sabha, State Assemblies, and Delhi Assembly. It DOES NOT apply to Rajya Sabha or State Legislative Councils!',
    detailedAnalysis: 'Articles 330A, 332A, and 239AA(2)(b) provide 33% reservation for women in Lok Sabha, State Assemblies, and Delhi Assembly. Upper houses (Rajya Sabha and Vidhan Parishads) are excluded.',
    coreArticle: '106th CAA 2023 & Arts 330A, 332A'
  },
  {
    id: 'tq-50',
    topic: 'Amendments & Bodies',
    question: 'The National Commission for Backward Classes (NCBC) was conferred constitutional status under Article 338B by which Amendment Act?',
    options: [
      { key: 'A', text: '65th Amendment Act, 1990' },
      { key: 'B', text: '89th Amendment Act, 2003' },
      { key: 'C', text: '102nd Amendment Act, 2018' },
      { key: 'D', text: '105th Amendment Act, 2021' }
    ],
    correctOption: 'C',
    trapCategory: 'Statutory Exception',
    trapExplanation: '65th CAA created composite NCSC/ST; 89th CAA bifurcated NCSC (338) and NCST (338A); 102nd CAA 2018 gave constitutional status to NCBC under Art 338B.',
    detailedAnalysis: 'The 102nd CAA 2018 inserted Article 338B giving constitutional status to NCBC. The 105th CAA 2021 later clarified that states can maintain their own state OBC lists.',
    coreArticle: 'Article 338B & 102nd CAA'
  }
];
