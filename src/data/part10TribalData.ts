import type { ArticleItem } from '../types/constitution';

export const PART_10_TRIBAL_EXPANDED: ArticleItem[] = [
  {
    number: '244',
    title: 'Administration of Scheduled & Tribal Areas (Fifth & Sixth Schedules)',
    summary: 'Establishes a distinctive asymmetric constitutional regime for the governance of indigenous tribal communities: Clause (1) applies the Fifth Schedule to Scheduled Areas in 10 mainland States, empowering the Governor to shield tribals from general laws; Clause (2) applies the Sixth Schedule to tribal areas in Assam, Meghalaya, Tripura, and Mizoram (AMTM) creating powerful Autonomous District Councils (ADCs).',
    plainEnglish: 'Protects tribal lands, culture, and customs. In mainland tribal belts (Fifth Schedule), the Governor can stop regular laws from applying and can ban the sale of tribal land to outsiders. In northeastern tribal areas (Sixth Schedule), tribes run their own Autonomous District Councils with their own courts, taxes, and local laws.',
    textSnippet: 'The provisions of the Fifth Schedule shall apply to the administration and control of the Scheduled Areas and Scheduled Tribes in any State other than the States of Assam, Meghalaya, Tripura and Mizoram... The provisions of the Sixth Schedule shall apply to the administration of the tribal areas in the States of Assam, Meghalaya, Tripura and Mizoram.',
    realWorldScenario: 'A mining corporation obtains a commercial lease from the State Government to mine bauxite on tribal land in a Fifth Schedule area. The tribal community challenges the lease. In the landmark Samatha verdict (1997), the Supreme Court ruled that under the Fifth Schedule read with Article 244, transfer of tribal land to non-tribal private companies is completely prohibited; private mining leases on tribal soil are void ab initio.',
    prosecutionNote: 'Prosecutions for atrocities, land alienation, and unlawful dispossession of Scheduled Tribes are governed by the SC/ST (Prevention of Atrocities) Act, 1989 read with the PESA Act 1996, with special courts and mandatory arrest provisions.',
    clauses: [
      {
        clause: '244(1) The Fifth Schedule Framework (10 States)',
        explanation: 'Applies to Scheduled Areas across Andhra Pradesh, Telangana, Jharkhand, Chhattisgarh, Odisha, MP, Gujarat, Maharashtra, Rajasthan, and Himachal Pradesh.',
        example: 'Tribes Advisory Councils (TAC) with 3/4th ST legislative representation.'
      },
      {
        clause: 'Governor’s Plenary Shield (Fifth Schedule Para 5)',
        explanation: 'The Governor can direct by public notification that any Act of Parliament or State Legislature shall NOT apply to a Scheduled Area, or shall apply only with specific modifications.',
        example: 'Gubernatorial regulations barring the transfer or mortgage of tribal land.'
      },
      {
        clause: '244(2) The Sixth Schedule Framework (AMTM States)',
        explanation: 'Applies to Assam, Meghalaya, Tripura, and Mizoram, establishing autonomous constitutional enclaves with Autonomous District Councils (ADCs).',
        example: 'ADCs in Bodoland, Karbi Anglong, Khasi Hills, and Chakma territorial councils.'
      },
      {
        clause: 'PESA Act 1996 Extension',
        explanation: 'The Panchayats (Extension to the Scheduled Areas) Act, 1996 mandates prior consent of the Gram Sabha for land acquisition and mining leases in Scheduled Areas.',
        example: 'Gram Sabha sovereign rights over minor forest produce and village dispute resolution.'
      }
    ],
    exceptions: ['Governor’s regulations under Paragraph 5 of the Fifth Schedule require the assent of the President before taking legal effect.'],
    landmarkCases: [
      {
        caseName: 'Samatha v. State of Andhra Pradesh',
        year: 1997,
        bench: '3-Judge Bench (K. Ramaswamy, S. Saghir Ahmad, G.B. Pattanaik JJ - 2:1 Verdict)',
        summary: 'Held that the word "person" in Paragraph 5(2) of the Fifth Schedule includes the State Government; therefore, the State Government is prohibited from transferring or leasing tribal land in Scheduled Areas to private non-tribal entities or corporations for mining or industrial purposes.',
        significance: 'Historic environmental and indigenous rights ruling safeguarding tribal lands from corporate exploitation.'
      },
      {
        caseName: 'Orissa Mining Corporation Ltd. v. Ministry of Environment & Forests (Niyamgiri Case)',
        year: 2013,
        bench: '3-Judge Bench',
        summary: 'Aftab Alam J held that the Dongria Kondh tribal Gram Sabha has the constitutional authority under PESA Act 1996 and Forest Rights Act 2006 to decide whether bauxite mining by Vedanta on the sacred Niyamgiri hills violated their religious and cultural rights; the Gram Sabha unanimously rejected the project.',
        significance: 'Landmark decision vindicating grassroots tribal sovereignty over sacred habitats.'
      }
    ],
    doctrineLinks: ['Indigenous Land Non-Alienation', 'Tribal Self-Determination & PESA', 'Asymmetric Tribal Autonomous Enclaves']
  },
  {
    number: '244A',
    title: 'Formation of an Autonomous State Comprising Tribal Areas in Assam',
    summary: 'Inserted by the 22nd Constitutional Amendment Act 1969: Empowers Parliament by law to form an autonomous State within the State of Assam comprising certain tribal areas, and to create a local Legislature or Council of Ministers therefor.',
    plainEnglish: 'A unique constitutional mechanism that allowed Parliament to create a "sub-state" within Assam with its own assembly and council of ministers, which historically served as the transitional model for creating the full-fledged State of Meghalaya.',
    textSnippet: 'Notwithstanding anything in this Constitution, Parliament may, by law, form within the State of Assam an autonomous State comprising all or any of the tribal areas specified in Part I of the table appended to paragraph 20 of the Sixth Schedule.',
    realWorldScenario: 'During the political movements in the northeast for regional autonomy, Article 244A provided the flexible constitutional vehicle for carving out autonomous governing structures within Assam without requiring a complex constitutional amendment under Article 368.',
    prosecutionNote: 'Police and public order powers within tribal autonomous territories can be devolved to autonomous state institutions pursuant to Parliamentary enactments under Article 244A.',
    clauses: [
      {
        clause: '244A(1) Parliamentary Sub-State Formation',
        explanation: 'Enables creation of a sub-state with customized legislative and executive organs within Assam.',
        example: 'Historical genesis of the Meghalaya autonomous state arrangement.'
      },
      {
        clause: '244A(4) Non-Article 368 Exemption',
        explanation: 'Laws enacted under this Article are not deemed constitutional amendments under Article 368, enabling flexible simple majority legislation.',
        example: 'Parliamentary ease in adjusting frontier tribal autonomy.'
      }
    ],
    exceptions: ['Applies strictly to specified tribal areas in Assam under Part I of the Sixth Schedule table.'],
    landmarkCases: [
      {
        caseName: 'Edwingson Bareh v. State of Assam',
        year: 1966,
        bench: 'Constitution Bench',
        summary: 'Gajendragadkar CJ analyzed the constitutional validity of Governor’s powers and legislative adjustments in the tribal areas of Assam under Part X and the Sixth Schedule.',
        significance: 'Clarified the constitutional scope of northeastern tribal autonomous territories.'
      }
    ],
    doctrineLinks: ['Asymmetric Sub-State Federalism', 'Frontier Constitutional Adaptability']
  }
];
