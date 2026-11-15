import type { BootcampComprehensionCaseStudy } from '../bootcampTypes';

export const DAY3_COMPREHENSION_CASE_STUDIES: BootcampComprehensionCaseStudy[] = [
  {
    "id": "d3-cs1",
    "caseNumber": 1,
    "title": "Indefinite Mobile Internet Suspension in an Exam & Protest Context",
    "legalTheme": "Internet as a Conduit for Speech & Trade, 4-Prong Proportionality Test, Procedural Safeguards",
    "factualMatrix": "Following reports of localized question paper leaks and isolated student protests in three colleges of District X, the District Magistrate issued an executive order under the Temporary Suspension of Telecom Services (Public Emergency or Public Safety) Rules, 2017 read with Section 163 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), suspending all 4G and 5G mobile internet and broadband connectivity throughout the entire district \"until further notice\". The order asserted that suspension was essential to prevent the viral circulation of rumors and to maintain public order. The order was marked \"confidential\", was neither published in regional newspapers nor uploaded to the district web portal, and was not forwarded to the State Review Committee for over 25 days. Consequently, local investigative journalists were unable to transmit news reports, and hundreds of online vendors, app-based delivery workers, and telemedicine clinics were forced to halt operations entirely for four weeks. An association of digital journalists and e-commerce traders approached the High Court under Article 226 challenging the suspension as a flagrant breach of Articles 19(1)(a) and 19(1)(g).",
    "framingQuestions": [
      "1. Whether the freedom of speech and expression and the right to carry on any trade or profession over the medium of the internet are constitutionally protected under Articles 19(1)(a) and 19(1)(g)?",
      "2. Whether an \"indefinite\" suspension of internet services satisfies the constitutional standard of the 4-prong Proportionality Test established in Anuradha Bhasin v. Union of India (2020)?",
      "3. What is the legal consequence of the executive's failure to publish the suspension order and its violation of the mandatory 5-day periodic review requirement under the Telecom Suspension Rules, 2017?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(1)(g)",
      "Article 19(2)",
      "Article 19(6)",
      "Temporary Suspension of Telecom Services Rules, 2017",
      "Section 163 BNSS",
      "Anuradha Bhasin v. Union of India (2020)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL STATUS OF INTERNET RIGHTS: In Anuradha Bhasin v. Union of India (2020), a 3-Judge Bench of the Supreme Court categorically ruled that freedom of speech and expression through the medium of the internet is an integral part of Article 19(1)(a). Similarly, the right to carry on any trade, commerce, or profession over the internet is constitutionally protected under Article 19(1)(g). The Court recognized that the internet has become the primary conduit for democratic dialogue, commerce, and education. Any governmental interference with internet access must satisfy the reasonable restrictions under Articles 19(2) and 19(6).\n\n2. ILLEGALITY OF INDEFINITE SUSPENSION & PROPORTIONALITY: In Anuradha Bhasin, the Supreme Court declared that an indefinite suspension of telecom services is per se unconstitutional. Any restriction must satisfy the four prongs of the Proportionality Test: (i) Legitimate Goal: maintaining public order is a legitimate aim, but mere localized cheating rumors do not constitute a public emergency; (ii) Suitability: shutting down the internet must have a direct nexus with quelling violence; (iii) Necessity (Minimal Impairment): the State must adopt the least restrictive measure—such as blocking specific cheating websites or throttling bandwidth to 2G—rather than a blanket blackout of the entire district; and (iv) Balancing: the devastating economic and journalistic impact of a 4-week blackout drastically outweighs the state objective. Hence, the indefinite order fails proportionality.\n\n3. PROCEDURAL INVALIDITY & MANDATORY PUBLICATION: The Supreme Court held that the State cannot keep suspension orders secret under the guise of security. Complete transparency is an imperative requirement of natural justice and Rule of Law; all suspension orders must be published immediately to enable affected citizens to seek judicial review under Article 226. Furthermore, under Rule 2(2) of the Telecom Suspension Rules, 2017, the Review Committee must convene within five working days to record a finding on whether the suspension remains necessary. A 25-day lapse without review renders the order ultra vires, void ab initio, and liable to be quashed with directions for immediate restoration of internet services.",
    "markingRubric": [
      {
        "criterion": "Identification of constitutional protection of speech and trade over internet under 19(1)(a) & 19(1)(g) (Anuradha Bhasin)",
        "marks": 4
      },
      {
        "criterion": "Application of the 4-prong Proportionality Test against indefinite blanket shutdowns",
        "marks": 3
      },
      {
        "criterion": "Analysis of mandatory order publication and breach of 5-day Review Committee timeline",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs1-q1",
        "testedDimension": "Article Threshold",
        "question": "Under which constitutional provisions did the Supreme Court in Anuradha Bhasin (2020) recognize the fundamental right to access the internet?",
        "options": [
          "Under Article 14 equality before law only",
          "Under Article 19(1)(a) (freedom of speech) and Article 19(1)(g) (freedom of trade and profession)",
          "Under Article 300A right to property",
          "Under Article 25 freedom of conscience"
        ],
        "correctIndex": 1,
        "explanation": "In Anuradha Bhasin (2020), the Supreme Court ruled that speech and trade over the internet are protected fundamental rights under Articles 19(1)(a) and 19(1)(g).",
        "articleRef": "Articles 19(1)(a) & 19(1)(g)"
      },
      {
        "id": "d3-cs1-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Why did the Supreme Court declare \"indefinite\" internet shutdowns unconstitutional in Anuradha Bhasin?",
        "options": [
          "Because the Constitution mandates that only Parliament can regulate computers",
          "Because fundamental rights cannot be suspended indefinitely, and restrictions must satisfy the test of minimal impairment and temporal proportionality",
          "Because the Central Government owns all fiber optic cables",
          "Because internet suspensions violate international tax treaties"
        ],
        "correctIndex": 1,
        "explanation": "Indefinite suspension fails the necessity and minimal impairment prongs of the proportionality doctrine, as restrictions must be strictly temporary and bounded in duration.",
        "articleRef": "Article 19(2) & Proportionality Test"
      },
      {
        "id": "d3-cs1-q3",
        "testedDimension": "Landmark Ratio",
        "question": "According to Anuradha Bhasin (2020), what is the legal obligation of the executive regarding the publication of telecom suspension orders?",
        "options": [
          "The order can be kept in secret police archives indefinitely",
          "All suspension orders must be made publicly available so that citizens can exercise their constitutional right to seek judicial review under Article 226/32",
          "Orders must only be published in the Official Gazette after one year",
          "Orders need only be communicated orally to telecom service providers"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that secret executive orders curtailing fundamental liberties are anathema to the rule of law; publication is mandatory to facilitate judicial review.",
        "articleRef": "Article 19 & Rule of Law"
      },
      {
        "id": "d3-cs1-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What is the mandatory timeline within which the Review Committee must examine an internet suspension order under the Telecom Suspension Rules, 2017?",
        "options": [
          "Within 24 hours of issuance",
          "Within 5 working days from the date of the order",
          "Within 30 calendar days",
          "Only when an affected citizen files a civil suit"
        ],
        "correctIndex": 1,
        "explanation": "Under the Telecom Suspension Rules, 2017, the Review Committee must meet and record its findings on the necessity of the suspension within 5 working days.",
        "articleRef": "Telecom Suspension Rules 2017"
      }
    ]
  },
  {
    "id": "d3-cs2",
    "caseNumber": 2,
    "title": "Anonymous Political Financing & Voter's Right to Information",
    "legalTheme": "Voter's Right to Know under Article 19(1)(a), Money in Politics, Proportionality Review of Electoral Bonds",
    "factualMatrix": "To facilitate political donations, Parliament enacted amendments to the Representation of the People Act, 1951, the Companies Act, 2013, and the Income Tax Act, 1961 through Finance Acts, establishing the \"Electoral Bond Scheme\". Under this scheme, any domestic company or individual could purchase anonymous bearer bonds from the State Bank of India (SBI) in unlimited denominations and donate them to registered political parties without disclosing the donor's identity to the public or the Election Commission of India. Furthermore, the previous statutory cap limiting corporate political donations to 7.5% of average net profits was completely removed, allowing loss-making and shell companies to funnel unlimited finances to political parties. The Union defended the scheme asserting that: (1) Anonymity was essential to protect the donor's privacy from political victimization; and (2) The scheme incentivized political funding through formal banking channels to curb black money. A non-governmental organization challenged the scheme before the Supreme Court under Article 32, contending that donor anonymity destroys the voter's fundamental Right to Information under Article 19(1)(a).",
    "framingQuestions": [
      "1. Is the voter's Right to Information regarding the sources of political party funding a fundamental right protected under Article 19(1)(a) of the Constitution?",
      "2. Does the state interest in curbing black money justify the total obliteration of voter transparency under the 4-prong Proportionality Test?",
      "3. How does the constitutional balance between the donor's right to privacy and the citizen's right to an informed vote resolve in the 2024 Constitution Bench ruling in Association for Democratic Reforms v. Union of India?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(2)",
      "Section 29C Representation of the People Act, 1951",
      "Companies Act, 2013",
      "ADR v. Union of India (2024 5-Judge Bench)"
    ],
    "modelAnswer": "1. VOTER'S RIGHT TO INFORMATION UNDER ARTICLE 19(1)(a): In Union of India v. ADR (2002) and PUCL (2003), the Supreme Court established that freedom of speech and expression includes the voter's fundamental right to cast an informed vote. In Association for Democratic Reforms v. Union of India (Feb 2024 5-Judge Constitution Bench, CJI Chandrachud), the Court unanimously held that this right to know is not limited to candidate criminal antecedents; it directly extends to knowing who finances political parties. Political parties formulate legislative policy and govern the nation. If citizens are kept blind to corporate financial contributions, they cannot detect policy corruption or quid-pro-quo contracts.\n\n2. FAILURE UNDER THE PROPORTIONALITY TEST: The Supreme Court applied the 4-prong proportionality standard: (i) Legitimate Goal: Curbing black money and protecting donor privacy are legitimate state goals; (ii) Rational Connection: Channeling donations through banking bonds has a rational nexus to curbing physical cash; (iii) Necessity / Least Restrictive Measure: The scheme failed the third prong. Curbing black money could easily be achieved through transparent banking methods (such as Electoral Trusts or publicly declared digital transfers) without granting complete secrecy. Complete anonymity was not the least intrusive measure; and (iv) Balancing: Anonymity created a profound imbalance by enabling deep-pocketed corporate donors to buy policy influence covertly while denying 900 million voters vital democratic information.\n\n3. RESOLUTION OF PRIVACY VS. TRANSPARENCY: The Constitution Bench ruled that the right to privacy of political affiliation does not extend to corporate entities or large financial contributors seeking regulatory favors. The small donor's privacy can be protected through a financial threshold, but shielding unlimited corporate funding behind a veil of secrecy directly subverts representative democracy. Consequently, the Court struck down the Electoral Bond Scheme as unconstitutional under Article 19(1)(a), declared the legislative amendments void, and directed the SBI to disclose all donor and redemption records.",
    "markingRubric": [
      {
        "criterion": "Citation and analysis of the 2024 5-Judge Bench ruling in ADR v. Union of India (Electoral Bonds)",
        "marks": 4
      },
      {
        "criterion": "Application of the 4-prong proportionality test to anonymous political financing",
        "marks": 3
      },
      {
        "criterion": "Constitutional balancing of donor privacy against the voter's Right to Know under 19(1)(a)",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs2-q1",
        "testedDimension": "Article Threshold",
        "question": "Under which provision of the Indian Constitution did the 5-Judge Constitution Bench strike down the Electoral Bond Scheme in February 2024?",
        "options": [
          "Article 19(1)(a) — violation of the voter's fundamental Right to Information",
          "Article 25 — freedom of religion",
          "Article 19(1)(c) — freedom of association only",
          "Article 300A — deprivation of property"
        ],
        "correctIndex": 0,
        "explanation": "The Supreme Court unanimously held that anonymous electoral bonds violate the voter's Right to Information under Article 19(1)(a), which is essential for participatory democracy.",
        "articleRef": "Article 19(1)(a) & Electoral Bonds (2024)"
      },
      {
        "id": "d3-cs2-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Why did the Electoral Bond Scheme fail the \"Necessity\" (minimal impairment) prong of the Proportionality Test?",
        "options": [
          "Because electoral bonds could only be purchased in physical paper form",
          "Because the objective of curbing black money could be achieved through transparent banking mechanisms (such as Electoral Trusts) without completely destroying voter transparency",
          "Because foreign corporations were barred from donating",
          "Because Parliament lacked power to enact Finance Acts"
        ],
        "correctIndex": 1,
        "explanation": "Minimal impairment mandates choosing the least intrusive measure. Black money can be curbed via transparent banking channels without cloaking donor identities in total secrecy.",
        "articleRef": "Article 19(1)(a) & Proportionality"
      },
      {
        "id": "d3-cs2-q3",
        "testedDimension": "Landmark Ratio",
        "question": "How did the Supreme Court in the 2024 Electoral Bonds case resolve the competing claim of donor privacy versus the voter's right to know?",
        "options": [
          "It held that donor privacy completely overrides public transparency",
          "It held that the right to privacy of political affiliation does not protect corporate commercial contributions made to secure governmental favors and policies",
          "It held that privacy is not a fundamental right in India",
          "It held that political parties are exempt from all constitutional scrutiny"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that corporate donations are primarily business investments to influence state policies; privacy cannot be weaponized to shield corporate money from democratic scrutiny.",
        "articleRef": "Article 19(1)(a) & Article 21 (Electoral Bonds)"
      },
      {
        "id": "d3-cs2-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What immediate consequential relief was granted by the Supreme Court upon striking down the Electoral Bond Scheme?",
        "options": [
          "All general elections were postponed indefinitely",
          "The State Bank of India was ordered to stop issuing bonds and disclose all purchase and redemption details to the Election Commission for public publication",
          "All political parties were ordered to return their funds to the Consolidated Fund of India",
          "Criminal trials were ordered against all corporate donors"
        ],
        "correctIndex": 1,
        "explanation": "The Court directed SBI to immediately cease bond sales and submit complete purchase and redemption records with alphanumeric matching codes to the ECI for public release.",
        "articleRef": "Article 32 & Article 142 Relief"
      }
    ]
  },
  {
    "id": "d3-cs3",
    "caseNumber": 3,
    "title": "Overbroad Cyber Speech Criminalization & Digital Dissent",
    "legalTheme": "Vagueness, Overbreadth, Chilling Effect, Discussion vs. Advocacy vs. Incitement",
    "factualMatrix": "A State Legislature enacted the \"State Digital Peace & Social Harmony Act, 2025\". Section 4 of the Act made it a cognizable and non-bailable criminal offense punishable with up to five years imprisonment for any person to post, share, or forward any message, image, or video on social media platforms that was \"grossly offensive, annoying, inconvenient, or likely to cause mental distress to any public official or community\". Two college students who posted a cartoon lampooning the poor maintenance of state highways and tagging the state transport minister were arrested by the cyber police at midnight under Section 4 and remanded to judicial custody. A prominent civil liberties association filed a writ petition under Article 32 challenging Section 4 as facially unconstitutional, contending that the statutory terms were identical to the invalidated Section 66A of the Information Technology Act, 2000 in Shreya Singhal v. Union of India (2015). The State Advocate General defended the law, arguing that the explosive viral reach of digital media poses unique risks to public order, justifying stringent speech restrictions.",
    "framingQuestions": [
      "1. Can a penal statute criminalize speech merely because it is \"annoying\", \"inconvenient\", or \"grossly offensive\" under the eight grounds of Article 19(2)?",
      "2. What is the constitutional significance of the \"Chilling Effect\" doctrine and the tripartite distinction between \"Discussion\", \"Advocacy\", and \"Incitement\" formulated in Shreya Singhal (2015)?",
      "3. Can the doctrine of \"severability\" or \"reading down\" be applied to save a statute that suffers from incurable vagueness and overbreadth?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(2)",
      "Information Technology Act, 2000 (Section 66A)",
      "Shreya Singhal v. Union of India (2015)"
    ],
    "modelAnswer": "1. STATUTORY INVALIDITY UNDER ARTICLE 19(2): Article 19(2) exhaustively specifies eight permissible heads of reasonable restrictions: sovereignty/integrity, security of the State, friendly relations, public order, decency/morality, contempt of court, defamation, and incitement to an offence. In Shreya Singhal v. Union of India (2015), the Supreme Court categorically held that causing \"annoyance\", \"inconvenience\", or \"mental distress\" does not fall under any of these eight heads. Speech cannot be suppressed merely because it irritates, annoys, or offends someone in power. Public order is disrupted only when public peace or the community tempo is endangered, not by satirical cartoons.\n\n2. THE CHILLING EFFECT & TRIPARTITE FREE SPEECH SPECTRUM: In Shreya Singhal, R.F. Nariman J articulated the \"Chilling Effect\" doctrine: when a criminal statute is so vaguely worded that an ordinary citizen cannot know what speech is lawful and what is criminal, citizens steer far wider of the unlawful zone and self-censor legitimate political speech out of fear of arbitrary arrest. Furthermore, the Court drew a fundamental tripartite distinction: (i) Discussion, (ii) Advocacy, and (iii) Incitement. Mere discussion or passionate advocacy of unpopular causes is fully protected under Article 19(1)(a). Speech can only be criminalized under Article 19(2) when it reaches the clear and proximate threshold of \"incitement to an offence\".\n\n3. REJECTION OF READING DOWN FOR INCURABLE VAGUENESS: Where a penal provision is inherently vague and lacks objective boundaries, courts cannot \"read it down\" because doing so would require the judiciary to rewrite the statute, usurping legislative functions. In Shreya Singhal, the Supreme Court held that Section 66A could not be saved by reading down or executive assurances of good faith enforcement. Section 4 of the State Act is a replica of Section 66A, suffers from incurable overbreadth, and must be struck down in its entirety as unconstitutional under Article 19(1)(a).",
    "markingRubric": [
      {
        "criterion": "Demonstration that \"annoyance\" or \"inconvenience\" is outside the 8 grounds of Article 19(2)",
        "marks": 4
      },
      {
        "criterion": "Detailed explanation of the Chilling Effect doctrine and Discussion vs. Advocacy vs. Incitement (Shreya Singhal)",
        "marks": 3
      },
      {
        "criterion": "Justification for rejecting reading down and striking down the overbroad statute",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs3-q1",
        "testedDimension": "Article Threshold",
        "question": "Under which landmark judgment did the Supreme Court establish that speech can only be restricted under Article 19(2) when it reaches the threshold of \"incitement\"?",
        "options": [
          "A.K. Gopalan v. State of Madras (1950)",
          "Shreya Singhal v. Union of India (2015)",
          "Minerva Mills v. Union of India (1980)",
          "Shankari Prasad v. Union of India (1951)"
        ],
        "correctIndex": 1,
        "explanation": "In Shreya Singhal (2015), the Supreme Court distinguished discussion and advocacy from incitement, ruling that Article 19(2) applies only to speech inciting offenses.",
        "articleRef": "Article 19(1)(a), 19(2) & Shreya Singhal"
      },
      {
        "id": "d3-cs3-q2",
        "testedDimension": "Legal Doctrine",
        "question": "What is meant by the \"Chilling Effect\" doctrine in constitutional free speech jurisprudence?",
        "options": [
          "The physical effect of cold weather on court proceedings",
          "The self-censorship and suppression of legitimate speech by citizens caused by vague, overbroad, or excessively punitive penal laws",
          "The mandatory cooling-off period required before filing a PIL",
          "The power of police to freeze corporate bank accounts"
        ],
        "correctIndex": 1,
        "explanation": "Chilling effect describes the inhibition or discouragement of the legitimate exercise of free speech resulting from the threat of legal sanctions under ambiguous criminal laws.",
        "articleRef": "Article 19(1)(a) & Chilling Effect"
      },
      {
        "id": "d3-cs3-q3",
        "testedDimension": "Landmark Ratio",
        "question": "Why did the Supreme Court refuse to save Section 66A IT Act by the doctrine of \"Reading Down\"?",
        "options": [
          "Because cyber laws cannot be interpreted by constitutional courts",
          "Because the provision was so fundamentally and ubiquitously vague that reading it down would require the court to rewrite the law, encroaching on legislative territory",
          "Because the President had not signed the Bill",
          "Because the law was enacted during an emergency"
        ],
        "correctIndex": 1,
        "explanation": "In Shreya Singhal, the Court held that where no intelligible core exists in the statutory text, reading down is impossible and the statute must be struck down.",
        "articleRef": "Article 13 & Shreya Singhal"
      },
      {
        "id": "d3-cs3-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What is the appropriate constitutional remedy for students arrested under a facially unconstitutional cyber speech statute?",
        "options": [
          "A writ of Habeas Corpus and Quashing of FIR under Article 226 / 32, with immediate release and declaration of the statutory provision as void ab initio",
          "Filing a civil defamation suit against the internet service provider",
          "Serving the full 5-year sentence followed by a mercy petition",
          "Applying for political asylum abroad"
        ],
        "correctIndex": 0,
        "explanation": "An arrest under an unconstitutional statute violates Articles 19(1)(a) and 21; constitutional courts must quash the FIR, order immediate release, and strike down the void law.",
        "articleRef": "Articles 19(1)(a), 21, 32 & 226"
      }
    ]
  },
  {
    "id": "d3-cs4",
    "caseNumber": 4,
    "title": "Freedom of the Press, Prior Restraint & Corporate Defamation Injunctions",
    "legalTheme": "Prior Restraint on Journalism, Pre-Trial Gag Orders, Public Corruption & Free Speech",
    "factualMatrix": "An independent digital investigative media outlet, \"The Public Chronicle\", conducted an undercover journalistic investigation into the award of a multi-billion dollar municipal solid waste management contract by the Capital City Corporation. The investigation revealed that the winning conglomerate, \"Zenith Infrastructure Ltd.\", was owned by close relatives of the Municipal Commissioner, and that counterfeit bank guarantees had been submitted to clear pre-qualification scrutiny. Before publishing the report, the journalists sent a detailed questionnaire to Zenith Infrastructure and the Commissioner seeking their comments within 48 hours. Instead of responding, Zenith Infrastructure filed a commercial defamation suit against the media outlet in a City Civil Court. Within two hours of filing, without issuing notice or giving a hearing to the media outlet, the Civil Judge passed an ex-parte ad-interim injunction restraining the media house, its editors, and all associated social media accounts from publishing, broadcasting, or circulating any article, tweet, or video concerning Zenith Infrastructure or the waste management contract until the final disposal of the suit. The media outlet petitioned the High Court under Article 227 challenging the ex-parte gag order as an unconstitutional prior restraint.",
    "framingQuestions": [
      "1. Is an ex-parte pre-trial injunction against the publication of an investigative journalistic report on public contracts a constitutionally permissible restriction under Article 19(2)?",
      "2. What principles were laid down by the Supreme Court in R. Rajagopal v. State of TN (Auto Shankar, 1994) and Bloomberg Television Production v. Zee Entertainment (2024) regarding prior restraint and SLAPP suits?",
      "3. How should constitutional courts balance the freedom of the press under Article 19(1)(a) against the corporate plaintiff's right to reputation?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(2)",
      "Order XXXIX Rules 1 & 2 CPC",
      "R. Rajagopal v. State of TN (1994)",
      "Bloomberg Television v. Zee Entertainment (2024)"
    ],
    "modelAnswer": "1. UNCONSTITUTIONALITY OF PRE-TRIAL GAG ORDERS: Freedom of the press is the cornerstone of democratic accountability under Article 19(1)(a). In Indian jurisprudence dating from Brij Bhushan (1950) to the present, pre-censorship and prior restraint are treated with deep constitutional skepticism. An ex-parte blanket injunction restraining the press from reporting on public contracts and corruption before trial is presumptively invalid under Article 19(2). Defamation can only justify post-publication damages, not pre-publication gagging, especially where public revenue and state resources are involved.\n\n2. THE BONNARD V. PERRYMAN DOCTRINE & BLOOMBERG (2024): In R. Rajagopal (Auto Shankar, 1994), the Supreme Court held that public officials cannot obtain prior injunctions to suppress publications relating to their official duties; their remedy is confined to an action for damages after publication if falsehood is proven. This was powerfully reaffirmed in Bloomberg Television Production Services v. Zee Entertainment Enterprises (2024 3-Judge Bench, CJI Chandrachud). The Court warned against Strategic Lawsuits Against Public Participation (SLAPP suits) used by wealthy corporations to stifle investigative journalism. The Court ruled that ex-parte interim injunctions against the press should be granted only in the rarest of rare cases where the defense of truth is completely bogus, and that civil courts must apply the classic Bonnard v. Perryman rule: an injunction will not be granted if the defendant intends to plead justification (truth for the public good).\n\n3. BALANCING PRESS FREEDOM & REPUTATION: A commercial entity's right to business reputation cannot be placed above the voting public's right to know about fraudulent public procurement. Where journalists have conducted bona fide research and sought official comments, imposing a blanket gag order without even issuing notice violates natural justice and Article 19(1)(a). Consequently, the High Court under Article 227 must set aside the ex-parte injunction and allow publication, leaving the plaintiff to claim damages at trial if defamation is established.",
    "markingRubric": [
      {
        "criterion": "Identification of prior restraint principles under 19(1)(a) and the rule against pre-publication gags",
        "marks": 4
      },
      {
        "criterion": "Citation and application of Bloomberg Television (2024) and R. Rajagopal (1994) on SLAPP suits",
        "marks": 3
      },
      {
        "criterion": "Application of Bonnard v. Perryman rule and balancing public scrutiny with corporate reputation",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs4-q1",
        "testedDimension": "Article Threshold",
        "question": "Under constitutional jurisprudence, how is an ex-parte pre-publication gag order on a newspaper classified?",
        "options": [
          "As a routine civil interim order",
          "As a \"Prior Restraint\" which is presumptively unconstitutional under Article 19(1)(a)",
          "As a reasonable commercial regulation under Article 19(6)",
          "As a sovereign decree under Article 300"
        ],
        "correctIndex": 1,
        "explanation": "Pre-publication injunctions restrain speech before it can be evaluated, operating as a prior restraint that carries a heavy presumption of unconstitutionality under Article 19(1)(a).",
        "articleRef": "Article 19(1)(a) & Prior Restraint"
      },
      {
        "id": "d3-cs4-q2",
        "testedDimension": "Legal Doctrine",
        "question": "What is the classic \"Bonnard v. Perryman\" rule reaffirmed in Bloomberg Television (2024) regarding defamation injunctions?",
        "options": [
          "An injunction must be granted immediately whenever a corporate plaintiff files a suit",
          "An interim injunction restraining publication should not be granted if the defendant raises a bona fide defense of justification (truth) and public interest",
          "Journalists must pay security deposits before reporting on corporations",
          "Defamation suits can only be tried by the Supreme Court"
        ],
        "correctIndex": 1,
        "explanation": "Under Bonnard v. Perryman, courts will not grant pre-trial injunctions if the publisher states an intention to prove the truth of the publication in the public interest.",
        "articleRef": "Article 19(1)(a) & Bloomberg (2024)"
      },
      {
        "id": "d3-cs4-q3",
        "testedDimension": "Landmark Ratio",
        "question": "In R. Rajagopal v. State of Tamil Nadu (Auto Shankar, 1994), what did the Supreme Court hold regarding public officials obtaining prior restraints on publications?",
        "options": [
          "Public officials can censor any publication mentioning their names",
          "Public officials and public institutions cannot obtain prior injunctions to stop publication; their remedy is solely an action for damages after publication if defamatory falsehoods are proven",
          "All autobiographies by prisoners are state property",
          "Journalists must obtain police clearance before writing about corruption"
        ],
        "correctIndex": 1,
        "explanation": "In R. Rajagopal (1994), the Supreme Court ruled that public officials cannot impose prior restraint on publications touching official conduct.",
        "articleRef": "Article 19(1)(a) & R. Rajagopal (1994)"
      },
      {
        "id": "d3-cs4-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What term did the Supreme Court in Bloomberg (2024) use to describe litigations filed by powerful corporate entities solely to intimidate journalists and suppress public criticism?",
        "options": [
          "Public Interest Litigations (PIL)",
          "Strategic Lawsuits Against Public Participation (SLAPP suits)",
          "Quo Warranto petitions",
          "Contempt of Court proceedings"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court cautioned courts against SLAPP suits, where deep-pocketed litigants use protracted litigation and interim gag orders to throttle investigative journalism.",
        "articleRef": "Article 19(1)(a) & SLAPP Suits"
      }
    ]
  },
  {
    "id": "d3-cs5",
    "caseNumber": 5,
    "title": "Right to Peaceful Protest vs. Commuters' Right to Free Movement",
    "legalTheme": "Balancing Article 19(1)(b) Assembly vs. Article 19(1)(d) Movement, Indefinite Road Blockades, Designated Protest Zones",
    "factualMatrix": "Protesting against a newly enacted agricultural marketing statute, a confederation of farmer associations launched an indefinite \"Gherao\" of the primary Arterial Expressway connecting National Capital Territory with two adjoining States. Over 10,000 demonstrators erected brick barricades, community kitchens, tents, and stage podiums directly across all eight lanes of the expressway, bringing all commercial logistics and passenger movement to a complete standstill. The blockade persisted for 65 consecutive days. As a result, daily vehicular traffic was diverted through narrow rural roads, increasing commute times by three hours, and emergency ambulances carrying cardiac patients faced severe delays. A resident commuter and an association of inter-city transport operators filed a writ petition under Article 32 seeking the removal of the blockade to restore the free movement of the public. The protest organizers contended that the right to assemble peaceably without arms under Article 19(1)(b) and to express dissent under Article 19(1)(a) gives citizens the constitutional right to choose the venue of protest to register effective grievance.",
    "framingQuestions": [
      "1. Does the fundamental right to assemble peaceably and without arms under Article 19(1)(b) include the right to block public roads and arterial highways indefinitely?",
      "2. How does constitutional law reconcile the competing rights of protesters under Article 19(1)(a)/(b) and the general public's right to free movement under Article 19(1)(d)?",
      "3. What binding principles were laid down by the Supreme Court in Amit Sahni v. Commissioner of Police (Shaheen Bagh Case, 2020) regarding designated protest sites and police enforcement?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(1)(b)",
      "Article 19(1)(d)",
      "Article 19(3)",
      "Amit Sahni v. Commissioner of Police (2020)",
      "Himat Lal K. Shah (1973)"
    ],
    "modelAnswer": "1. NO RIGHT TO INDEFINITE HIGHWAY OCCUPATION: While the right to peaceful protest is the heartbeat of a constitutional democracy under Articles 19(1)(a) and 19(1)(b), it is not an absolute right. In Amit Sahni v. Commissioner of Police (Shaheen Bagh Case, 2020 3-Judge Bench, S.K. Kaul J), the Supreme Court unequivocally ruled that public spaces and public roads cannot be occupied indefinitely for protests. Streets and expressways are constructed for vehicular transit and public locomotion; converting an arterial highway into a permanent protest encampment infringes the rights of thousands of innocent fellow citizens.\n\n2. RECONCILING COMPETING CONSTITUTIONAL FREEDOMS: The exercise of fundamental rights by one group must not extinguish the fundamental rights of another. The protesters' freedom of assembly under 19(1)(b) must be harmoniously balanced against the public's right to move freely throughout India under Article 19(1)(d) and their right to livelihood under Article 19(1)(g). When a protest physically cuts off access, delays emergency healthcare, and paralyzes commercial trade, it ceases to be a reasonable exercise of assembly and becomes an unlawful obstruction under Article 19(3).\n\n3. MANDATE OF DESIGNATED SITES & POLICE ACTION: In Amit Sahni, the Supreme Court held that protests must take place only in designated protest areas (such as Ramlila Maidan or Jantar Mantar). The administration and police authorities have a positive constitutional duty to prevent the blockage of public ways and cannot hide behind court orders to perform their statutory duties. Consequently, the Court will direct the police administration to clear the arterial expressway and facilitate the relocation of the demonstrators to a designated protest venue.",
    "markingRubric": [
      {
        "criterion": "Affirmation that public roads cannot be blocked indefinitely under Article 19(1)(b) (Amit Sahni)",
        "marks": 4
      },
      {
        "criterion": "Harmonious balancing of protesters' rights under 19(1)(a)/(b) against commuters' rights under 19(1)(d)",
        "marks": 3
      },
      {
        "criterion": "Enforcement of designated protest sites and positive duty of police authorities",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs5-q1",
        "testedDimension": "Article Threshold",
        "question": "What is the constitutional qualification attached to the right of assembly in the bare text of Article 19(1)(b)?",
        "options": [
          "Subject to municipal license fees",
          "To assemble peaceably and without arms",
          "Only inside registered auditoriums",
          "Only with magistrate's written prior consent"
        ],
        "correctIndex": 1,
        "explanation": "Article 19(1)(b) explicitly qualifies the freedom of assembly with the words \"peaceably and without arms\".",
        "articleRef": "Article 19(1)(b)"
      },
      {
        "id": "d3-cs5-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Under Amit Sahni (2020), why is the indefinite blockage of public highways for protests unconstitutional?",
        "options": [
          "Because highways are owned by the Union Ministry of Defense",
          "Because the right to protest cannot be exercised by extinguishing the public's right to locomotion under Article 19(1)(d) and causing widespread disruption to daily life",
          "Because protests against agricultural laws are barred by Article 48",
          "Because all protests require approval from the President"
        ],
        "correctIndex": 1,
        "explanation": "In Amit Sahni, the Court held that public thoroughfares cannot be hijacked indefinitely; constitutional rights must coexist harmoniously.",
        "articleRef": "Article 19(1)(b), (d) & Amit Sahni"
      },
      {
        "id": "d3-cs5-q3",
        "testedDimension": "Landmark Ratio",
        "question": "What did the Supreme Court hold in Himat Lal K. Shah (1973) regarding holding public meetings on streets?",
        "options": [
          "Public meetings on streets are prohibited forever",
          "Citizens have a right to hold meetings on public streets, but the State can regulate them by framing clear, objective rules, and unguided police discretion to ban meetings violates 19(1)(b)",
          "Meetings on streets can only be held by ruling political parties",
          "Police have sovereign immunity to ban any meeting without reasons"
        ],
        "correctIndex": 1,
        "explanation": "In Himat Lal (1973), the Constitution Bench held that streets are traditional assembly grounds; regulations must be guided by objective rules, not arbitrary police discretion.",
        "articleRef": "Article 19(1)(b) & Himat Lal"
      },
      {
        "id": "d3-cs5-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What duty did the Supreme Court impose on the administration and police in Amit Sahni (2020)?",
        "options": [
          "The police must wait for court orders before removing any road blockage",
          "The police administration has a positive statutory duty to keep public roads clear and clear unauthorized blockages without seeking judicial cover",
          "The police must join the protesters in solidarity",
          "The police must permanently seal all national highways"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court held that the police cannot abdicate responsibility or wait for court directions; it is their statutory duty to ensure roads remain open.",
        "articleRef": "Article 19(1)(d) & Amit Sahni"
      }
    ]
  },
  {
    "id": "d3-cs6",
    "caseNumber": 6,
    "title": "Trade Union Rights, Essential Services & Legality of Bandhs",
    "legalTheme": "Scope of Article 19(1)(c), Right to Form Union vs. Right to Strike, Forced Bandhs as Constitutional Torts",
    "factualMatrix": "A registered union of all public hospital employees, water supply engineers, and municipal sanitation staff called a state-wide \"Total Bandh\" to protest against a proposed pension reform bill. To enforce the shutdown, union volunteers armed with sticks picketed private railway tracks, threatened shopkeepers with property destruction if they opened their stores, and blocked government electricity grid stations. In the State Capital, city hospitals were paralyzed without emergency water or power for 36 hours, resulting in the tragic deaths of five newborn infants in neo-natal intensive care units. The State Government invoked the Essential Services Maintenance Act (ESMA), dismissed 50 union organizers from public service without a departmental inquiry, and registered FIRs under criminal provisions. The union petitioned the High Court under Article 226, arguing that the right to strike and call a bandh is an organic extension of the right to form trade unions under Article 19(1)(c) and that the immediate dismissals were unconstitutional.",
    "framingQuestions": [
      "1. Does the fundamental right to form associations or unions under Article 19(1)(c) encompass a fundamental right to go on strike or to call a bandh?",
      "2. What is the constitutional validity of a \"forced Bandh\" in light of Communist Party of India (M) v. Bharat Kumar (1998)?",
      "3. Can the State dismiss public servants engaging in an illegal strike in essential emergency services under service rules?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(c)",
      "Article 19(4)",
      "Essential Services Maintenance Act (ESMA)",
      "Article 311(2) Second Proviso (b)",
      "CPI(M) v. Bharat Kumar (1998)",
      "T.K. Rangarajan v. Govt. of TN (2003)"
    ],
    "modelAnswer": "1. NO FUNDAMENTAL RIGHT TO STRIKE: The Supreme Court has consistently held that Article 19(1)(c) guarantees only the right to form associations, unions, or co-operative societies. In All India Bank Employees' Association (1962), Kameshwar Singh (1962), and T.K. Rangarajan v. Government of Tamil Nadu (2003), the Court held that 19(1)(c) does not carry a concomitant fundamental right to achieve the union's objectives through strikes, collective cessation of work, or lock-outs. Striking is at best a regulated statutory privilege under labor statutes, never a fundamental right under Part III.\n\n2. UNCONSTITUTIONALITY OF FORCED BANDHS: In Communist Party of India (M) v. Bharat Kumar (1998 3-Judge Bench), the Supreme Court affirmed the Kerala High Court's landmark ruling that calling and enforcing a \"Bandh\" through intimidation, coercion, and force is patently unconstitutional. A forced Bandh entails psychological and physical coercion, brings public life to a halt, paralyzes hospitals, and violates the fundamental rights of other citizens under Articles 19(1)(d), 19(1)(g), and 21. Political parties and unions enforcing bandhs commit constitutional torts and can be held civilly and criminally liable for resulting damages and deaths.\n\n3. VALIDITY OF DISMISSALS IN ESSENTIAL SERVICES: Under ESMA and government service conduct rules, public servants have no right to hold society to ransom. Where striking staff abandon neo-natal ICUs and water supplies, causing human fatalities, their conduct directly breaches the Right to Life of innocent citizens under Article 21. Under Article 311(2) Second Proviso clause (b), where it is reasonably impracticable to hold an inquiry due to a state-wide shutdown, the disciplinary authority can record reasons in writing and summarily dismiss the offending employees. Consequently, the High Court will dismiss the union's petition and uphold the state action.",
    "markingRubric": [
      {
        "criterion": "Definitive citation and ratio of All India Bank Employees and T.K. Rangarajan denying right to strike",
        "marks": 4
      },
      {
        "criterion": "Application of CPI(M) v. Bharat Kumar regarding unconstitutionality and tort liability of forced Bandhs",
        "marks": 3
      },
      {
        "criterion": "Justification of dismissal under ESMA and Article 311(2) Second Proviso for endangering Article 21 lives",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs6-q1",
        "testedDimension": "Article Threshold",
        "question": "Which constitutional words were added to Article 19(1)(c) by the 97th Constitutional Amendment Act, 2011?",
        "options": [
          "\"or political parties\"",
          "\"or co-operative societies\"",
          "\"or public charitable trusts\"",
          "\"or joint stock companies\""
        ],
        "correctIndex": 1,
        "explanation": "The 97th Amendment Act, 2011 inserted the words \"or co-operative societies\" into Article 19(1)(c).",
        "articleRef": "Article 19(1)(c) & 97th Amendment"
      },
      {
        "id": "d3-cs6-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Under All India Bank Employees' Association (1962), why does the right to form a union NOT include the right to strike?",
        "options": [
          "Because strikes are governed exclusively by international maritime treaties",
          "Because the right to form an association does not guarantee that the association shall fulfill all its demands or have a constitutional right to collective stoppage of work",
          "Because unions can only be formed by agricultural laborers",
          "Because strikes are prohibited during peacetime"
        ],
        "correctIndex": 1,
        "explanation": "The Court held that the constitutional freedom is exhausted once the association is validly formed; achieving its demands through strikes is not a fundamental right.",
        "articleRef": "Article 19(1)(c) & All India Bank Employees"
      },
      {
        "id": "d3-cs6-q3",
        "testedDimension": "Landmark Ratio",
        "question": "In CPI(M) v. Bharat Kumar (1998), what distinguished an unconstitutional \"Bandh\" from a peaceful \"Hartal\"?",
        "options": [
          "A Bandh is called on weekends, whereas a Hartal is called on weekdays",
          "A Bandh involves coercion, threat of violence, and total paralysis of other citizens' fundamental rights, whereas a Hartal is purely voluntary and peaceful",
          "A Bandh is organized by student groups only",
          "A Hartal requires prior permission from the Governor"
        ],
        "correctIndex": 1,
        "explanation": "In Bharat Kumar, the Court held that the hallmark of a Bandh is physical coercion and deprivation of liberty for ordinary citizens, rendering it unconstitutional.",
        "articleRef": "Article 19 & Bharat Kumar"
      },
      {
        "id": "d3-cs6-q4",
        "testedDimension": "Judicial Remedy",
        "question": "Under T.K. Rangarajan (2003), what remedy is available to government servants who have grievances regarding service conditions instead of striking?",
        "options": [
          "Indefinite hunger strikes in front of Parliament",
          "Redressal through statutory administrative tribunals (CAT/SAT) and statutory representations provided under law",
          "Filing a criminal complaint against the Chief Minister",
          "Approaching the International Labour Organization"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that government employees have statutory redressal forums and tribunals, leaving zero justification for striking.",
        "articleRef": "Article 19(1)(c) & T.K. Rangarajan"
      }
    ]
  },
  {
    "id": "d3-cs7",
    "caseNumber": 7,
    "title": "Street Vendors' Livelihood vs. Municipal Traffic Decongestion Schemes",
    "legalTheme": "Right to Trade under Article 19(1)(g), Reasonable Restrictions under 19(6), Statutory Accommodation under Street Vendors Act 2014",
    "factualMatrix": "The Municipal Corporation of Old Delhi formulated a Comprehensive Mobility & Heritage Walk Plan for the historic Chandni Chowk area. The plan declared the entire 1.5 km heritage stretch as a \"Non-Vending, Pedestrian-Only Zone\" to prevent dangerous overcrowding and facilitate emergency fire tender movement. Simultaneously, the Corporation surveyed all 850 registered street vendors who had been hawking on that stretch, constructed two multi-level, modern \"Vending Plazas\" equipped with electricity, water, and storage facilities within 300 meters of the heritage road, and allotted stalls to all surveyed vendors through a transparent computerized draw of lots with subsidized monthly licenses. A faction of 100 street vendors refused to shift to the new plazas, arguing that customer footfall was highest on the open street pavement. They continued setting up tarpaulin stalls on the pedestrian walk. When municipal enforcement squads impounded their carts, the vendors filed a writ petition under Article 226, claiming that hawking on public pavements is a fundamental right under Article 19(1)(g) recognized in Sodan Singh (1989) and that the non-vending zone declaration was unconstitutional.",
    "framingQuestions": [
      "1. Is the right to carry on street hawking and vending a fundamental right protected under Article 19(1)(g) of the Constitution?",
      "2. Can a municipal authority validly declare certain streets as \"Non-Vending Zones\" consistent with Article 19(6) and the Street Vendors Act, 2014?",
      "3. Whether the municipal scheme providing rehabilitation in modern vending plazas within 300 meters strikes a constitutionally reasonable balance under Sodan Singh v. New Delhi Municipal Committee (1989)?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(g)",
      "Article 19(6)",
      "Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014",
      "Sodan Singh v. NDMC (1989)",
      "Maharashtra Ekta Hawkers Union (2014)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL STATUS OF STREET HAWKING: In Sodan Singh v. New Delhi Municipal Committee (1989 5-Judge Constitution Bench, L.M. Sharma J), the Supreme Court affirmed that the right to carry on trade, business, or occupation under Article 19(1)(g) includes street vending and hawking. Hawkers provide inexpensive goods to consumers and earn an honest livelihood. However, the Court emphatically held that this right is not an absolute right to occupy any particular public sidewalk or road indefinitely.\n\n2. VALIDITY OF NON-VENDING ZONES UNDER 19(6) & STATUTORY LAW: Under Article 19(6), the State is empowered to impose reasonable restrictions on trade \"in the interests of the general public\". Roads and pavements are primarily meant for pedestrian movement and vehicular traffic. Under the Street Vendors (Protection of Livelihood and Regulation of Street Vending) Act, 2014, the Town Vending Committee is statutorily authorized to declare specific heritage, security, or traffic-congested areas as \"Non-Vending Zones\", provided this is done following a survey and in accordance with statutory guidelines.\n\n3. REASONABLENESS OF THE REHABILITATION SCHEME: In Maharashtra Ekta Hawkers Union (2014), the Supreme Court held that where the municipal administration accommodates vendors in designated alternative vending zones in close proximity, the scheme satisfies both Article 19(6) and the Right to Livelihood under Article 21. Here, the Municipal Corporation conducted an exhaustive survey, constructed well-equipped vending plazas within 300 meters, and allotted stalls transparently. The refusal of a faction of vendors to relocate solely for higher commercial footfall cannot override public safety, fire accessibility, and pedestrian rights. Consequently, the High Court will uphold the municipal scheme, dismiss the petition, and direct the vendors to occupy their allotted stalls in the plaza.",
    "markingRubric": [
      {
        "criterion": "Citation of Sodan Singh (1989) recognizing hawking under 19(1)(g) subject to regulation",
        "marks": 4
      },
      {
        "criterion": "Analysis of Town Vending Committee powers and non-vending zones under Street Vendors Act, 2014",
        "marks": 3
      },
      {
        "criterion": "Constitutional reasonableness of proximity rehabilitation balancing livelihood and pedestrian safety",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs7-q1",
        "testedDimension": "Article Threshold",
        "question": "Under which provision of the Constitution is the right to carry on street vending and hawking protected?",
        "options": [
          "Article 19(1)(a) freedom of speech",
          "Article 19(1)(g) right to practice any profession or carry on trade/business",
          "Article 31 right to property",
          "Article 20(1) penal protection"
        ],
        "correctIndex": 1,
        "explanation": "In Sodan Singh (1989), the Supreme Court held that hawking on streets to earn a livelihood is protected under Article 19(1)(g).",
        "articleRef": "Article 19(1)(g) & Sodan Singh"
      },
      {
        "id": "d3-cs7-q2",
        "testedDimension": "Legal Doctrine",
        "question": "According to Sodan Singh (1989), what is the primary purpose of public pavements and sidewalks?",
        "options": [
          "To serve as permanent retail shops for anyone who arrives first",
          "To ensure safe, unobstructed passage for pedestrian commuters, making trade on sidewalks subject to reasonable regulation under Article 19(6)",
          "To be leased out to private advertising companies",
          "To provide parking for government vehicles"
        ],
        "correctIndex": 1,
        "explanation": "Sidewalks are created for public passage; hawking rights are subordinate to the primary right of the pedestrian public to unobstructed passage.",
        "articleRef": "Article 19(1)(g), 19(6) & Sodan Singh"
      },
      {
        "id": "d3-cs7-q3",
        "testedDimension": "Landmark Ratio",
        "question": "Under the Street Vendors Act, 2014, which statutory body is empowered to demarcate vending zones and non-vending zones?",
        "options": [
          "The State Public Service Commission",
          "The Town Vending Committee (TVC), comprising municipal officials, police, and elected street vendor representatives",
          "The District Sessions Judge",
          "The State Tourism Department"
        ],
        "correctIndex": 1,
        "explanation": "The Town Vending Committee (TVC) is the participatory statutory body created under the 2014 Act to survey vendors and designate vending zones.",
        "articleRef": "Street Vendors Act 2014"
      },
      {
        "id": "d3-cs7-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What is the constitutional prerequisite before street vendors can be evicted from an existing vending area under the 2014 Act?",
        "options": [
          "Immediate criminal arrest without notice",
          "Completion of a vendor survey, issuance of notice, and relocation to an alternative designated vending zone",
          "Payment of 10 years advance tax",
          "Approval from the Governor"
        ],
        "correctIndex": 1,
        "explanation": "The Street Vendors Act, 2014 mandates that no vendor shall be evicted until a survey is completed and relocation is offered according to the plan.",
        "articleRef": "Article 19(1)(g) & Street Vendors Act"
      }
    ]
  },
  {
    "id": "d3-cs8",
    "caseNumber": 8,
    "title": "State Monopoly, Trade Prohibition & Res Extra Commercium",
    "legalTheme": "Article 19(6)(ii) State Monopolies, Complete Exclusion of Citizens, Res Extra Commercium Doctrine",
    "factualMatrix": "The State of Andhra Pradesh enacted the \"AP Mining & Rare Minerals Nationalization Act, 2025\". Section 3 of the Act declared that from the appointed date, the right to mine, process, refine, and transport heavy mineral beach sands (containing titanium, ilmenite, and monazite) within the State shall vest exclusively in the \"AP State Mineral Development Corporation Ltd.\", a 100% government-owned undertaking, to the complete exclusion of all private entities. All existing private mining leases were terminated, with statutory compensation payable for unexpired capital investments. Private mining leaseholders filed writ petitions before the High Court, asserting that: (1) Monopolizing trade violates their fundamental freedom to carry on business under Article 19(1)(g); (2) Total prohibition of private enterprise is unreasonable under Article 19(6); and (3) The State cannot take over an industry without demonstrating that private operators were inefficient. Simultaneously, the State also enacted a complete prohibition on the commercial sale and manufacture of chewing tobacco (gutka) under Section 19(6), which gutka manufacturers challenged as violative of 19(1)(g).",
    "framingQuestions": [
      "1. Can the State create an exclusive commercial monopoly in favor of a State-owned corporation to the complete exclusion of private citizens under Article 19(6)(ii)?",
      "2. Does the creation of a State monopoly under Article 19(6)(ii) require the State to satisfy the test of reasonableness under Article 19(6)?",
      "3. How does the constitutional doctrine of \"Res Extra Commercium\" apply to hazardous and noxious substances like gutka/tobacco under Article 19(1)(g)?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(g)",
      "Article 19(6)(i) & (ii)",
      "1st Constitutional Amendment Act, 1951",
      "Akadasi Padhan v. State of Orissa (1963)",
      "Khoday Distilleries v. State of Karnataka (1995)",
      "Godawat Pan Masala (2004)"
    ],
    "modelAnswer": "1. CONSTITUTIONAL POWER TO CREATE STATE MONOPOLY: Prior to 1951, state nationalization schemes were frequently struck down under Article 19(1)(g). Consequently, the 1st Constitutional Amendment Act, 1951 inserted Article 19(6)(ii), which explicitly authorizes the State to make any law relating to \"the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise\". Therefore, the State of AP has unquestioned constitutional competence to create a complete mining monopoly in favor of its State corporation.\n\n2. IMMUNITY OF STATE MONOPOLY FROM ARTICLE 19(6) REASONABLENESS: In Akadasi Padhan v. State of Orissa (1963 5-Judge Constitution Bench, Gajendragadkar J), the Supreme Court ruled that the creation of a state monopoly under Article 19(6)(ii) is constitutionally presumed to be in the public interest. The essential provisions creating the monopoly—such as the complete exclusion of private citizens—cannot be challenged on the ground of unreasonableness under the first part of Article 19(6). The State is not required to justify its business efficiency or prove private inefficiency; the legislative policy decision to monopolize is immune from judicial review under 19(1)(g).\n\n3. DOCTRINE OF RES EXTRA COMMERCIUM: In State of Bombay v. R.M.D. Chamarbaugwala (1957) and Khoday Distilleries (1995), the Supreme Court held that activities inherently deleterious to public health, safety, and morality (such as gambling, illicit trade, and noxious carcinogenic consumables) are \"res extra commercium\" (outside trade and commerce). A citizen cannot claim a fundamental right under Article 19(1)(g) to manufacture or sell products that cause severe cancer and health hazards. Total prohibition of gutka is a valid exercise of police power under Article 19(6) read with the Directive Principle in Article 47. Consequently, both challenges will be dismissed by the High Court.",
    "markingRubric": [
      {
        "criterion": "Application of Article 19(6)(ii) inserted by 1st Amendment for State monopolies",
        "marks": 4
      },
      {
        "criterion": "Citation of Akadasi Padhan (1963) establishing that state monopoly is immune from reasonableness challenge",
        "marks": 3
      },
      {
        "criterion": "Explanation of Res Extra Commercium doctrine for carcinogenic substances under Article 47",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs8-q1",
        "testedDimension": "Article Threshold",
        "question": "Which constitutional amendment inserted Article 19(6)(ii) to immunize State monopolies from Article 19(1)(g) challenges?",
        "options": [
          "1st Constitutional Amendment Act, 1951",
          "24th Constitutional Amendment Act, 1971",
          "42nd Constitutional Amendment Act, 1976",
          "44th Constitutional Amendment Act, 1978"
        ],
        "correctIndex": 0,
        "explanation": "Article 19(6)(ii) was inserted by the 1st Amendment, 1951 to permit complete or partial state monopolies in trade, industry, or service.",
        "articleRef": "Article 19(6)(ii) & 1st Amendment"
      },
      {
        "id": "d3-cs8-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Under Akadasi Padhan v. State of Orissa (1963), what did the Constitution Bench hold regarding testing the reasonableness of a State monopoly?",
        "options": [
          "A State monopoly must prove higher profits than private corporations",
          "The core provision creating a state monopoly and excluding private citizens cannot be challenged as unreasonable under Article 19(6)",
          "State monopolies require approval from the Competition Commission of India",
          "Monopolies are per se unconstitutional"
        ],
        "correctIndex": 1,
        "explanation": "In Akadasi Padhan, the Court held that the essential law creating the monopoly is completely shielded from review under the first part of 19(6).",
        "articleRef": "Article 19(6)(ii) & Akadasi Padhan"
      },
      {
        "id": "d3-cs8-q3",
        "testedDimension": "Landmark Ratio",
        "question": "What is the constitutional meaning of \"Res Extra Commercium\" under Khoday Distilleries (1995)?",
        "options": [
          "International commercial trade agreements",
          "Activities that are inherently immoral, noxious, or dangerous to public health, which fall outside the protection of Article 19(1)(g)",
          "E-commerce transactions conducted without taxation",
          "Commercial contracts signed by the President under Article 299"
        ],
        "correctIndex": 1,
        "explanation": "Res extra commercium denotes matters outside lawful commerce (like liquor, gambling, trafficking); citizens cannot claim 19(1)(g) rights over them.",
        "articleRef": "Article 19(1)(g) & Res Extra Commercium"
      },
      {
        "id": "d3-cs8-q4",
        "testedDimension": "Judicial Remedy",
        "question": "Can a State monopoly under Article 19(6)(ii) be created by an executive notification without an Act of Legislature?",
        "options": [
          "Yes, by any circular signed by a Minister",
          "No, Article 19(6)(ii) explicitly requires that a monopoly excluding citizens can only be created by \"law\" (statutory enactment)",
          "Yes, during festival holidays",
          "Yes, by order of the District Magistrate"
        ],
        "correctIndex": 1,
        "explanation": "In Ram Jawaya Kapur (1955), the Court held that while the State can trade executively under Art 298, excluding private citizens requires a statutory \"law\" under 19(6)(ii).",
        "articleRef": "Article 19(6)(ii) & Ram Jawaya Kapur"
      }
    ]
  },
  {
    "id": "d3-cs9",
    "caseNumber": 9,
    "title": "Film Censorship, Public Sensibility & The \"Heckler's Veto\"",
    "legalTheme": "Prior Restraint in Cinema, Cinematograph Act Certification, S. Rangarajan \"Spark in Powder Keg\" Doctrine, Heckler's Veto",
    "factualMatrix": "A celebrated filmmaker produced a socially critical feature film titled \"Caste & Conscience\", depicting inter-caste marriages, untouchability in rural temples, and the struggle of Dalit youth against social discrimination. The Central Board of Film Certification (CBFC) examined the film through its Examining and Revising Committees and granted a \"U/A\" certificate (unrestricted public exhibition with parental guidance). Three days before the theatrical release, an influential socio-political outfit held violent demonstrations in front of cinema halls in State Y, smashing ticket counters and threatening to burn down theaters and assault theater patrons if the film was screened, alleging that the film insulted religious traditions. Fearing widespread communal riots and citing \"grave apprehension of breach of public tranquility\", the Home Department of State Y issued a notification under the State Cinemas Regulation Act suspending the exhibition of the film across all theaters in the State for two months. The filmmaker and the Film Producers Guild approached the Supreme Court under Article 32 challenging the suspension notification as a blatant surrender to mob blackmail and a violation of Article 19(1)(a).",
    "framingQuestions": [
      "1. Is the State competent to ban or suspend the screening of a motion picture that has already been cleared and certified by the CBFC under the Cinematograph Act, 1952?",
      "2. What is the constitutional doctrine of the \"Heckler's Veto\" and how was it rejected in S. Rangarajan v. P. Jagjivan Ram (1989)?",
      "3. Does the threat of violent protests by intolerant fringe groups satisfy the test of \"Public Order\" under Article 19(2) to justify state censorship?"
    ],
    "statutoryApplicability": [
      "Article 19(1)(a)",
      "Article 19(2)",
      "Cinematograph Act, 1952",
      "S. Rangarajan v. P. Jagjivan Ram (1989)",
      "Prakash Jha Productions v. Union of India (2011)",
      "Padmaavat Case (2018)"
    ],
    "modelAnswer": "1. PRE-EMPTION BY CBFC CERTIFICATION: The Cinematograph Act, 1952 is a central legislation enacted by Parliament under Entry 60 of List I. Once an expert statutory body like the CBFC has examined a film, balanced public sensibilities, and certified it for public viewing, a State Government cannot casually sit in appeal over the Central Board and impose a blanket ban. In Prakash Jha Productions v. Union of India (2011) and Viacom 18 Media (Padmaavat Case, 2018 3-Judge Bench, CJI Dipak Misra), the Supreme Court reiterated that once a film is certified by the CBFC, there is a strong constitutional presumption of validity under Article 19(1)(a), and States cannot pre-emptively ban screenings across an entire State.\n\n2. REJECTION OF THE \"HECKLER'S VETO\": In constitutional jurisprudence, the \"Heckler's Veto\" refers to the suppression of lawful speech by the government solely because intolerant opponents threaten violence or public disorder. In S. Rangarajan v. P. Jagjivan Ram (1989 3-Judge Bench, K.J. Shetty J), the Supreme Court decisively rejected this doctrine. The Court ruled: \"Freedom of expression cannot be suppressed on the account of threat of demonstration and processions or threats of violence. That would tantamount to negation of the rule of law and surrender to blackmail and intimidation. It is the duty of the State to protect the freedom of expression since it is a liberty guaranteed against the State.\" The police must arrest the mob, not muzzle the speaker.\n\n3. THE \"SPARK IN A POWDER KEG\" TEST & PUBLIC ORDER: In S. Rangarajan, the Court held that speech cannot be restricted under Article 19(2) based on remote, conjectural, or hypothetical dangers. The nexus between the expression and public violence must be proximate and direct, like a \"spark in a powder keg\". Where a film depicts social discrimination to advocate social reform, the message is noble and constitutionally aligned with Article 17. The threat of violence comes from outside lawbreakers, not from the film itself. Consequently, the Supreme Court under Article 32 will quash the State suspension notification and issue a writ of mandamus commanding the State to deploy adequate police forces to protect theaters, exhibitors, and moviegoers.",
    "markingRubric": [
      {
        "criterion": "Analysis of CBFC certification primacy under Cinematograph Act and Padmaavat precedent",
        "marks": 4
      },
      {
        "criterion": "Comprehensive definition and rejection of the \"Heckler's Veto\" under S. Rangarajan",
        "marks": 3
      },
      {
        "criterion": "Application of the \"Spark in a Powder Keg\" test and state affirmative duty to provide police protection",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs9-q1",
        "testedDimension": "Article Threshold",
        "question": "Under which Article 19(2) head do States typically attempt to justify banning certified films, and what standard must be met?",
        "options": [
          "Under \"Contempt of Court\"",
          "Under \"Public Order\", which requires a proximate and direct nexus like a spark in a powder keg (S. Rangarajan)",
          "Under \"Sovereignty\" without any judicial review",
          "Under \"Friendly relations with foreign States\""
        ],
        "correctIndex": 1,
        "explanation": "States invoke \"public order\" under 19(2), but the Supreme Court requires proof of an immediate, proximate threat to public peace, not hypothetical fear.",
        "articleRef": "Article 19(2) & S. Rangarajan"
      },
      {
        "id": "d3-cs9-q2",
        "testedDimension": "Legal Doctrine",
        "question": "What is the constitutional meaning of the \"Heckler's Veto\" in free speech law?",
        "options": [
          "The right of an audience to vote on whether a lecture should continue",
          "The unconstitutional practice of suppressing legitimate speech because of hostile or violent reactions threatened by opponents",
          "The veto power of the Governor over university speeches",
          "The power of the Censor Board to delete songs"
        ],
        "correctIndex": 1,
        "explanation": "Heckler's veto occurs when the government shuts down lawful speech simply because opponents threaten violence. Indian courts categorically reject it.",
        "articleRef": "Article 19(1)(a) & Heckler's Veto"
      },
      {
        "id": "d3-cs9-q3",
        "testedDimension": "Landmark Ratio",
        "question": "In Viacom 18 Media v. Union of India (Padmaavat Case, 2018), what did the Supreme Court order regarding State notifications banning the certified film?",
        "options": [
          "It upheld the bans in states where elections were upcoming",
          "It stayed the notifications issued by Gujarat, Rajasthan, MP, and Haryana, ruling that States have an affirmative constitutional obligation to maintain law and order and protect screenings",
          "It ordered the deletion of the character of the Queen",
          "It referred the film to an archaeological commission"
        ],
        "correctIndex": 1,
        "explanation": "In the Padmaavat ruling (2018), CJI Dipak Misra held that once CBFC certifies a film, States cannot ban exhibition based on threats of mob agitation.",
        "articleRef": "Article 19(1)(a) & Padmaavat Case"
      },
      {
        "id": "d3-cs9-q4",
        "testedDimension": "Judicial Remedy",
        "question": "When cinema owners face violent threats from fringe groups against a certified film, what affirmative mandamus does the Supreme Court issue to the State?",
        "options": [
          "Order the cinema halls to close down permanently",
          "Direct the State to provide adequate police protection to theaters and patrons to ensure safe exhibition and enforce the rule of law",
          "Order the filmmaker to pay compensation to the fringe group",
          "Cancel the cinema operating licenses"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court commands the police machinery to maintain law and order and provide armed protection to cinema theaters to protect free expression.",
        "articleRef": "Article 32 & Writ of Mandamus"
      }
    ]
  },
  {
    "id": "d3-cs10",
    "caseNumber": 10,
    "title": "Speech of Public Functionaries, Horizontal Application & Minister Liability",
    "legalTheme": "Article 19 Horizontal Enforcement, Exhaustive Character of Article 19(2), Vicarious Liability of Government for Ministers' Utterances",
    "factualMatrix": "Following a tragic, high-profile incident where a minor girl and her mother were assaulted during an armed highway robbery, a senior Cabinet Minister of the State Government addressed a packed press conference. In his speech, the Minister called the victims' complaint a \"politically motivated conspiracy manufactured by opposition parties to malign the regime\" and publicly ridiculed the victims' character. The derogatory statements were widely broadcast on news channels and social media platforms. The traumatized victims approached the Supreme Court under Article 32, seeking: (1) A declaration that public officials and ministers cannot make reckless, derogatory public statements that undermine the dignity and fair trial rights of crime victims; (2) An order holding the State Government vicariously liable in damages for the tort of constitutional defamation committed by its Minister; and (3) Directions to Parliament and courts to formulate a binding code of conduct restricting ministers' speech outside the grounds of Article 19(2). The matter was referred to a 5-Judge Constitution Bench in Kaushal Kishor v. State of Uttar Pradesh (2023).",
    "framingQuestions": [
      "1. Can fundamental rights under Articles 19 and 21 be enforced horizontally against persons or entities other than \"the State\" under Article 12?",
      "2. Can constitutional courts or the executive impose additional restrictions on the freedom of speech of Ministers or public functionaries outside the eight exhaustive grounds in Article 19(2)?",
      "3. Can a derogatory or defamatory statement made by an individual Minister be attributed vicariously to the State Government?"
    ],
    "statutoryApplicability": [
      "Article 12",
      "Article 19(1)(a)",
      "Article 19(2)",
      "Article 21",
      "Article 75(3) & 164(2)",
      "Kaushal Kishor v. State of Uttar Pradesh (2023 5-Judge Bench)"
    ],
    "modelAnswer": "1. HORIZONTAL ENFORCEABILITY OF ARTICLES 19 & 21: In Kaushal Kishor v. State of Uttar Pradesh (2023 5-Judge Constitution Bench, V. Ramasubramanian J for majority), the Supreme Court authoritatively resolved the horizontal application debate. While historically Fundamental Rights were conceived as vertical shields against state oppression under Article 12, the Court held that a fundamental right under Article 19 or Article 21 can be asserted and enforced even against persons other than the State or its instrumentalities. In modern society where non-state entities wield pervasive power, citizens can enforce their constitutional rights against private violators in appropriate legal frameworks.\n\n2. EXHAUSTIVE NATURE OF ARTICLE 19(2) GROUNDS: The Constitution Bench unanimously held that the eight grounds of reasonable restrictions enumerated in Article 19(2) are completely exhaustive. Neither the judiciary through judicial legislation nor the executive through administrative codes can create new grounds of restriction (such as \"derogatory to public morality\" or \"conduct unbecoming of a minister\") to curtail the free speech of Ministers. Ministers and MPs enjoy the same freedom of speech under 19(1)(a) as ordinary citizens, subject only to the 8 constitutional limits in 19(2). Any standard of propriety is an ethical and political responsibility under cabinet conventions, not a justiciable legal restriction.\n\n3. NO AUTOMATIC VICARIOUS LIABILITY OF STATE: Under Articles 75(3) and 164(2), the Council of Ministers is collectively responsible to the Legislature. The Supreme Court held that collective responsibility is a political concept governing parliamentary democracy; it does not translate into vicarious legal liability. A statement made by a Minister cannot be attributed vicariously to the State Government unless the statement represents the official policy decision of the Cabinet or is endorsed by the government. An individual minister making derogatory remarks acts in his personal capacity; the remedy for the aggrieved victim is an action in civil or criminal defamation against the minister personally, not an Article 32 writ against the State treasury.",
    "markingRubric": [
      {
        "criterion": "Explanation of horizontal enforceability of Articles 19 and 21 under Kaushal Kishor (2023)",
        "marks": 4
      },
      {
        "criterion": "Affirmation of the strictly exhaustive character of the 8 grounds in Article 19(2)",
        "marks": 3
      },
      {
        "criterion": "Distinction between political collective responsibility and vicarious legal liability of the State",
        "marks": 3
      }
    ],
    "comprehensionMCQs": [
      {
        "id": "d3-cs10-q1",
        "testedDimension": "Article Threshold",
        "question": "In Kaushal Kishor v. State of UP (2023), what did the 5-Judge Constitution Bench rule regarding the horizontal application of Articles 19 and 21?",
        "options": [
          "Fundamental rights can never be enforced against non-State actors under any circumstances",
          "A fundamental right under Article 19 or 21 can be enforced even against persons other than the State or its instrumentalities",
          "Horizontal application applies only to armed forces personnel",
          "Only Article 14 can be enforced horizontally"
        ],
        "correctIndex": 1,
        "explanation": "In Kaushal Kishor (2023), the majority held that Articles 19 and 21 are horizontally enforceable against non-State private entities.",
        "articleRef": "Articles 19, 21 & Kaushal Kishor"
      },
      {
        "id": "d3-cs10-q2",
        "testedDimension": "Legal Doctrine",
        "question": "Can constitutional courts create additional restrictions on the free speech of Ministers outside Article 19(2)?",
        "options": [
          "Yes, under the doctrine of constitutional morality",
          "No, the eight grounds in Article 19(2) are exhaustive, and neither courts nor executive can invent new restrictions outside 19(2)",
          "Yes, if approved by the Chief Justice of India",
          "Yes, during election campaigns"
        ],
        "correctIndex": 1,
        "explanation": "The Supreme Court ruled that Article 19(2) grounds are exhaustive and cannot be expanded for any category of citizens, including Ministers.",
        "articleRef": "Article 19(2) & Kaushal Kishor"
      },
      {
        "id": "d3-cs10-q3",
        "testedDimension": "Landmark Ratio",
        "question": "Under Kaushal Kishor (2023), when can a statement made by a Minister be attributed vicariously to the State Government?",
        "options": [
          "Whenever the Minister speaks in public wearing official khadi attire",
          "Only if the statement represents the official collective policy decision of the Cabinet; otherwise, it is a personal statement of the Minister",
          "In all criminal cases automatically",
          "Whenever the statement is broadcast on television"
        ],
        "correctIndex": 1,
        "explanation": "Vicarious liability cannot be fastened onto the State for personal utterances of a Minister unless it embodies the collective decision of the Cabinet.",
        "articleRef": "Article 164 & Kaushal Kishor"
      },
      {
        "id": "d3-cs10-q4",
        "testedDimension": "Judicial Remedy",
        "question": "What is the appropriate legal remedy for a citizen aggrieved by defamatory statements made by an individual Minister in his personal capacity?",
        "options": [
          "Filing a civil suit for damages or criminal defamation against the Minister personally in ordinary courts",
          "A writ petition seeking dissolution of the State Assembly",
          "Impeachment of the Minister before the Lok Sabha",
          "Approaching the Governor for a pocket veto"
        ],
        "correctIndex": 0,
        "explanation": "The remedy for personal defamatory comments is a tort or criminal defamation action against the individual minister under ordinary law.",
        "articleRef": "Article 19(2) & Defamation Remedies"
      }
    ]
  }
];
