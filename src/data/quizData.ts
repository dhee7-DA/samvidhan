import type { QuizQuestion } from '../types/constitution';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which of the following Fundamental Rights CANNOT be suspended even during the proclamation of a National Emergency under Article 352?',
    options: [
      'Articles 19 and 20',
      'Articles 20 and 21',
      'Articles 21 and 22',
      'Articles 14 and 19'
    ],
    correctIndex: 1,
    explanation: 'By virtue of the 44th Constitutional Amendment Act, 1978, the President cannot suspend the right to move the court for the enforcement of Fundamental Rights guaranteed under Article 20 (Protection against conviction) and Article 21 (Right to life and personal liberty) under Article 359.',
    articleRef: 'Article 359',
    difficulty: 'Foundational',
    topic: 'Emergency Provisions'
  },
  {
    id: 'q2',
    question: 'Which prerogative writ can be sought by any interested citizen without having to prove direct personal locus standi?',
    options: [
      'Mandamus',
      'Certiorari',
      'Quo-Warranto',
      'Prohibition'
    ],
    correctIndex: 2,
    explanation: 'Quo-Warranto ("By what authority") tests whether an individual has usurped a substantive public office created by statute. Unlike other writs which require an aggrieved petitioner, Quo-Warranto can be invoked by any citizen as a relator.',
    articleRef: 'Articles 32 and 226',
    difficulty: 'Intermediate',
    topic: 'Fundamental Rights & Writs'
  },
  {
    id: 'q3',
    question: 'In which landmark case did the Supreme Court hold that the balance between Fundamental Rights (Part III) and Directive Principles (Part IV) is an essential feature of the Basic Structure?',
    options: [
      'Sajjan Singh v. State of Rajasthan (1965)',
      'Minerva Mills Ltd. v. Union of India (1980)',
      'Golak Nath v. State of Punjab (1967)',
      'Shankari Prasad v. Union of India (1951)'
    ],
    correctIndex: 1,
    explanation: 'In Minerva Mills (1980), CJI Y.V. Chandrachud observed that the Indian Constitution is founded on the bedrock of the balance between Part III and Part IV. To give absolute primacy to one over the other is to upset the harmonious equilibrium of the constitutional chariot.',
    articleRef: 'Article 368 and Part III/IV',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Basic Structure & Doctrines'
  },
  {
    id: 'q4',
    question: 'Under Article 3, when a Bill for the reorganization of state boundaries is referred by the President to the affected State Legislature for its views, what is the constitutional effect of the State Legislature\'s opinion?',
    options: [
      'It is legally binding on Parliament',
      'Parliament can only proceed if the State Legislature passes a unanimous resolution',
      'Parliament is not bound by the views of the State Legislature and may accept or reject them',
      'The Bill lapses if the State Legislature rejects it within 30 days'
    ],
    correctIndex: 2,
    explanation: 'Under Article 3, the President must refer the Bill to the affected State Legislature for its views within a specified period, but Parliament is NOT bound by the State Legislature’s opinion. India is an indestructible Union of destructible States.',
    articleRef: 'Article 3',
    difficulty: 'Intermediate',
    topic: 'Union & Territory'
  },
  {
    id: 'q5',
    question: 'Which constitutional mechanism permits Parliament to enact legislation on a subject listed exclusively in the State List (List II) during peace time?',
    options: [
      'When the President issues an executive ordinance under Article 123',
      'When the Rajya Sabha passes a resolution supported by 2/3 of members present and voting under Article 249',
      'When the Lok Sabha passes a simple majority resolution in public interest',
      'When the NITI Aayog recommends legislative action'
    ],
    correctIndex: 1,
    explanation: 'Under Article 249, if the Council of States (Rajya Sabha) declares by resolution supported by not less than two-thirds of members present and voting that it is necessary in the national interest, Parliament can enact laws with respect to that matter in the State List for up to one year at a time.',
    articleRef: 'Article 249',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Centre-State Relations'
  },
  {
    id: 'q6',
    question: 'The "Creamy Layer" principle for excluding socially advanced individuals among Other Backward Classes (OBCs) from reservation was formulated in which landmark judgment?',
    options: [
      'M. Nagaraj v. Union of India (2006)',
      'Indra Sawhney v. Union of India (1992)',
      'Jarnail Singh v. Lachhmi Narain Gupta (2018)',
      'Ashoka Kumar Thakur v. Union of India (2008)'
    ],
    correctIndex: 1,
    explanation: 'In the 9-Judge Bench Mandal verdict (Indra Sawhney v. Union of India, 1992), the Supreme Court upheld 27% reservation for backward classes but directed that the socially and economically advanced members among them ("creamy layer") must be weeded out.',
    articleRef: 'Article 16(4)',
    difficulty: 'Intermediate',
    topic: 'Fundamental Rights & Equality'
  },
  {
    id: 'q7',
    question: 'The Doctrine of Pith and Substance is primarily invoked in Indian Constitutional Law to resolve which legal dilemma?',
    options: [
      'Conflicts between Fundamental Rights and Directive Principles',
      'Apparent encroachment between the legislative lists of the Seventh Schedule',
      'Disputes between the President and the Council of Ministers',
      'Contempt of court proceedings against civil servants'
    ],
    correctIndex: 1,
    explanation: 'The Doctrine of Pith and Substance examines the true nature, character, and primary substance of an enactment. If the core subject matter legitimately falls within the enacting legislature\'s competence, incidental trespassing into an adjoining list under the Seventh Schedule does not invalidate the statute.',
    articleRef: 'Article 246',
    difficulty: 'Judiciary/UPSC Level',
    topic: 'Constitutional Doctrines'
  },
  {
    id: 'q8',
    question: 'What is the maximum period within which a proclamation of National Emergency (Article 352) must be approved by both Houses of Parliament?',
    options: [
      '14 days by Simple Majority',
      '1 month (30 days) by Special Majority',
      '2 months by Simple Majority',
      '6 months by Special Majority'
    ],
    correctIndex: 1,
    explanation: 'Following the 44th Amendment 1978, a proclamation of National Emergency must be approved by resolutions of both Houses of Parliament within one month (30 days) by a Special Majority (majority of total membership + 2/3 of members present and voting).',
    articleRef: 'Article 352(4)',
    difficulty: 'Foundational',
    topic: 'Emergency Provisions'
  }
];
