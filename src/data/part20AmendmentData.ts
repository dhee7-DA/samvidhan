import type { ArticleItem } from '../types/constitution';

export const PART_20_AMENDMENT_EXPANDED: ArticleItem[] = [
  {
    number: '368',
    title: 'Power of Parliament to Amend the Constitution & The Basic Structure Doctrine',
    summary: 'Establishes the constituent power of Parliament to amend the Constitution by addition, variation, or repeal, delineating the two tracks of amendment under Article 368(2) and subject to the paramount judicial limitation of the Basic Structure Doctrine.',
    plainEnglish: 'Parliament has the constituent power to update and change the Constitution, but it cannot use this power to destroy the foundational pillars of Indian democracy—such as free elections, judicial independence, federalism, secularism, and fundamental rights (the Basic Structure Doctrine).',
    textSnippet: 'Notwithstanding anything in this Constitution, Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article.',
    realWorldScenario: 'Parliament passes a constitutional amendment by a 100% unanimous vote in both Houses abolishing judicial review and declaring that elections can be postponed indefinitely by the ruling cabinet. Can the Supreme Court strike down this constitutional amendment? YES! In Kesavananda Bharati (1973) and Minerva Mills (1980), the Supreme Court ruled that Parliament’s constituent power is not unlimited; any amendment that damages or emasculates the Basic Structure is null and void.',
    prosecutionNote: 'Statutory penal reforms (such as replacing IPC with BNS or CrPC with BNSS) are ordinary legislative enactments under Concurrent List Entry 1, requiring simple majority. However, any structural change affecting the constitutional rights of the accused (e.g., trying to abolish Article 20 protection against self-incrimination) would require a constitutional amendment subject to Basic Structure scrutiny.',
    clauses: [
      {
        clause: '368(1) Constituent Amending Power',
        explanation: 'Inserted by the 24th Amendment 1971: Affirms that Parliament amends the Constitution in exercise of its "constituent power", which is distinct from ordinary lawmaking power.',
        example: 'Passing the 106th Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam).'
      },
      {
        clause: '368(2) Track 1: Special Majority Alone',
        explanation: 'Bill must be passed in each House by a majority of the total membership of that House AND by a majority of not less than two-thirds of the members present and voting. Both Houses must pass it separately; no joint sitting is permissible!',
        example: 'Amending Fundamental Rights (Part III) or Directive Principles (Part IV).'
      },
      {
        clause: '368(2) Proviso (Track 2: Federal Special Majority + State Ratification)',
        explanation: 'If the amendment touches federal provisions (Presidential elections, High Court/Supreme Court powers, 7th Schedule legislative lists, representation of States in Parliament, or Article 368 itself), it must also be ratified by resolutions passed by the legislatures of not less than one-half of the States.',
        example: 'Ratification of the 101st Amendment (GST) and 99th Amendment (NJAC) by state assemblies.'
      },
      {
        clause: '368(4)-(5) Struck Down Clauses (Minerva Mills)',
        explanation: 'Clauses (4) and (5) were inserted by the 42nd Amendment 1976 to declare that no constitutional amendment could be questioned in any court and that Parliament’s constituent power was unlimited. The Supreme Court in Minerva Mills (1980) struck down clauses (4) and (5) as unconstitutional because judicial review is part of the Basic Structure.',
        example: 'Preserving the judicial check on legislative constituent power.'
      }
    ],
    exceptions: ['Ordinary amendments outside Article 368: Creating new states (Art 2/3), abolishing state legislative councils (Art 169), and 5th/6th Schedule amendments can be passed by simple majority and are explicitly declared "not deemed to be amendments under Article 368".'],
    landmarkCases: [
      {
        caseName: 'Kesavananda Bharati v. State of Kerala',
        year: 1973,
        bench: '13-Judge Bench (Largest in Indian History, 7:6 Verdict)',
        summary: 'Sikri CJ and the majority held that while Parliament can amend any part of the Constitution including Fundamental Rights under Article 368, its constituent power does not include the power to alter, destroy, or emasculate the "Basic Structure" of the Constitution.',
        significance: 'Formulated the Basic Structure Doctrine, the ultimate sheet-anchor of Indian constitutionalism.'
      },
      {
        caseName: 'Indira Nehru Gandhi v. Raj Narain',
        year: 1975,
        bench: 'Constitution Bench',
        summary: 'Struck down Article 329A(4) (inserted by 39th Amendment to place the election of the Prime Minister beyond judicial challenge), holding that free and fair elections, democracy, and the rule of law are part of the Basic Structure.',
        significance: 'First case where a constitutional amendment was actually struck down using the Basic Structure doctrine.'
      },
      {
        caseName: 'Minerva Mills Ltd. v. Union of India',
        year: 1980,
        bench: '5-Judge Bench',
        summary: 'Chandrachud CJ held that a limited amending power is itself a basic feature of the Constitution; Parliament cannot convert its limited amending power into an absolute, unlimited power. Struck down Article 368(4) and (5).',
        significance: 'Confirmed that the harmony between Fundamental Rights and DPSPs is part of the Basic Structure.'
      },
      {
        caseName: 'I.R. Coelho v. State of Tamil Nadu',
        year: 2007,
        bench: '9-Judge Bench',
        summary: 'Sabharwal CJ ruled that all laws inserted into the Ninth Schedule after April 24, 1973 (date of Kesavananda Bharati verdict) are subject to judicial review; if any Ninth Schedule law infringes the Basic Structure through the Golden Triangle (Articles 14, 19, 21), it will be struck down.',
        significance: 'Ended the absolute Ninth Schedule constitutional immunity loophole.'
      }
    ],
    doctrineLinks: ['Basic Structure Doctrine', 'Constituent Power vs Legislative Power', 'Ninth Schedule Scrutiny Threshold']
  }
];
