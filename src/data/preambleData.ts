export interface PreambleConcept {
  term: string;
  hindiTerm: string;
  significance: string;
  sourceOfInspiration: string;
  constitutionalStatus: string;
  landmarkCases: string[];
}

export const PREAMBLE_DATA = {
  title: 'The Preamble to the Constitution of India',
  latinMaxim: 'Lex Magna et Fundamentum Reipublicae',
  originalAdoptionDate: '26th November 1949',
  enforcementDate: '26th January 1950',
  architect: 'Pandit Jawaharlal Nehru (Objective Resolution introduced Dec 13, 1946; adopted Jan 22, 1947)',
  draftingCommitteeHead: 'Dr. B.R. Ambedkar',
  
  verbatimText: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`,

  amendmentDetails: {
    amendment: '42nd Constitutional Amendment Act, 1976',
    primeMinister: 'Indira Gandhi',
    wordsAdded: ['SOCIALIST', 'SECULAR', 'and INTEGRITY'],
    before1976: 'Sovereign Democratic Republic ... unity of the Nation',
    after1976: 'Sovereign Socialist Secular Democratic Republic ... unity and integrity of the Nation',
  },

  fourCorePillars: [
    {
      title: 'Justice (न्याय)',
      scope: 'Social, Economic and Political',
      origin: 'Russian Revolution (1917)',
      description: 'Social justice eliminates caste, gender, and religion discrimination. Economic justice aims to bridge wide wealth chasms and ensure equitable distribution of material resources (Art 39(b)(c)). Political justice ensures universal equal access to political offices and adult suffrage (Art 326).',
      associatedArticles: 'Articles 14, 15, 16, 38, 39, 39A, 325, 326',
    },
    {
      title: 'Liberty (स्वतंत्रता)',
      scope: 'Thought, Expression, Belief, Faith and Worship',
      origin: 'French Revolution (1789)',
      description: 'Absence of arbitrary restraints on the activities of individuals while providing opportunities for human personality development. Liberty is not absolute license; it is bounded by reasonable restrictions to prevent social chaos.',
      associatedArticles: 'Articles 19, 21, 25, 26, 27, 28',
    },
    {
      title: 'Equality (समता)',
      scope: 'Status and Opportunity',
      origin: 'Declaration of the Rights of Man & Citizen',
      description: 'Absence of special privileges to any section of society and the provision of adequate opportunities for all without discrimination. Encompasses civic equality, political equality, and socio-economic equality.',
      associatedArticles: 'Articles 14, 15, 16, 17, 18, 325, 326',
    },
    {
      title: 'Fraternity (बंधुत्व)',
      scope: 'Dignity of the Individual & Unity and Integrity of the Nation',
      origin: 'French Revolution',
      description: 'A sense of common brotherhood among all Indians transcending regional, linguistic, or religious diversities. Emphasizes that national unity cannot be forged without guaranteeing personal dignity to every citizen.',
      associatedArticles: 'Article 51A(e), Single Citizenship (Art 9)',
    },
  ],

  keyTerms: [
    {
      term: 'SOVEREIGN',
      hindiTerm: 'सम्पूर्ण प्रभुत्व-सम्पन्न',
      meaning: 'India is neither a dependency nor a dominion of any foreign power; internally supreme and externally independent. Free to acquire foreign territory or cede territory in accordance with the Constitution.',
      keyAspects: 'Commonwealth membership is an extra-constitutional voluntary declaration that does not impair sovereignty.',
    },
    {
      term: 'SOCIALIST',
      hindiTerm: 'समाजवादी',
      meaning: 'Democratic Socialism (mixed economy where public and private sectors coexist), distinct from Communist/Marxist state-controlled socialism. Aims to end poverty, ignorance, disease, and inequality of opportunity.',
      keyAspects: 'Excel Wear v. Union of India (1978): Socialism does not mean complete nationalization; private enterprise remains protected.',
    },
    {
      term: 'SECULAR',
      hindiTerm: 'पंथनिरपेक्ष',
      meaning: 'Positive Secularism: All religions have the same status and support from the State. Not anti-religious or strict non-interference, but equal respect and state neutrality (Sarva Dharma Sambhava).',
      keyAspects: 'S.R. Bommai v. Union of India (1994): Secularism declared an inviolable part of the Basic Structure.',
    },
    {
      term: 'DEMOCRATIC',
      hindiTerm: 'लोकतंत्रात्मक',
      meaning: 'Supreme power rests with the people. Operates as an indirect representative parliamentary democracy where the Executive is answerable to the elected Legislature (Art 75(3)).',
      keyAspects: 'Includes political, social, and economic democracy as envisioned by Dr. Ambedkar.',
    },
    {
      term: 'REPUBLIC',
      hindiTerm: 'गणराज्य',
      meaning: 'The head of the state (The President of India) is always elected indirectly for a fixed term, never hereditary like the British Monarchy. All public offices are open to every citizen without discrimination.',
      keyAspects: 'No hereditary privileges; political sovereignty vested in the collective body of citizens.',
    },
  ],

  judicialEvolution: [
    {
      case: 'Berubari Union Case (1960)',
      bench: '8-Judge Bench (CJI B.P. Sinha)',
      verdict: 'The Preamble is a key to open the mind of the makers, but it is NOT part of the Constitution. Therefore, it cannot be substantive source of power or prohibition.',
      impact: 'Severely restricted the legal enforceability and role of the Preamble.',
    },
    {
      case: 'Kesavananda Bharati v. State of Kerala (1973)',
      bench: '13-Judge Bench (Largest in Indian History)',
      verdict: 'Overruled Berubari Union. Held that the Preamble IS an integral part of the Constitution. It can be amended under Article 368 provided the Basic Structure is not destroyed.',
      impact: 'Established the Preamble as the guiding light for interpreting ambiguous provisions of the Constitution.',
    },
    {
      case: 'LIC of India v. Consumer Education & Research Centre (1995)',
      bench: '3-Judge Bench',
      verdict: 'Reaffirmed that the Preamble is an integral part of the Constitution, but clarified that it is non-justiciable (not directly enforceable in a court of law on its own).',
      impact: 'Confirmed its role as an interpretive aid rather than an independent cause of action.',
    },
  ],
};
