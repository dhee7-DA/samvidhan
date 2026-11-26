#!/usr/bin/env python3
"""
Generate 200 Case Studies for each of the 25 Parts of the Constitution of India
into public/data/part-case-studies/{partId}.json (25 Parts x 200 = 5,000 Case Studies).

Grounds every case study in that exact Part's:
- Articles (number, title, explanation/summary) from src/data/part*.ts
- Part keyPrinciples & landmarkCases from src/data/partsData.ts
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "src" / "data"
OUT_DIR = ROOT / "public" / "data" / "part-case-studies"

PART_FILE_MAP = {
    "part-1": "part1TerritoryData.ts",
    "part-2": "part2CitizenshipData.ts",
    "part-3": "part3FundamentalRightsData.ts",
    "part-4": "part4DPSPData.ts",
    "part-4a": "part4aDutiesData.ts",
    "part-5": "part5UnionData.ts",
    "part-6": "part6StatesData.ts",
    "part-8": "part8UTsData.ts",
    "part-9": "part9LocalGovernanceData.ts",
    "part-9a": "part9aMunicipalitiesData.ts",
    "part-9b": "part9aMunicipalitiesData.ts",
    "part-10": "part10TribalData.ts",
    "part-11": "part11FederalData.ts",
    "part-12": "part12FinanceData.ts",
    "part-13": "part13TradeData.ts",
    "part-14": "part14ServicesData.ts",
    "part-14a": "part14aTribunalsData.ts",
    "part-15": "part15ElectionsData.ts",
    "part-16": "part16ClassesData.ts",
    "part-17": "part17LanguageData.ts",
    "part-18": "part18EmergencyData.ts",
    "part-19": "part19MiscData.ts",
    "part-20": "part20AmendmentData.ts",
    "part-21": "part21SpecialData.ts",
    "part-22": "part22ClosingData.ts",
}

FORUMS = [
    ("Supreme Court of India (Article 32)", "Writ Petition"),
    ("High Court Division Bench (Article 226)", "Constitutional Writ"),
    ("High Court Supervisory Bench (Article 227)", "Supervisory Petition"),
    ("Constitution Bench (Article 145(3))", "Constitutional Reference"),
    ("District & Sessions Court", "Original Suit / Revision"),
    ("Judicial Magistrate First Class", "Criminal Misc. Application"),
    ("Administrative / Statutory Tribunal", "Service / Regulatory Appeal"),
    ("Election Bench / High Court", "Election Petition"),
]

ACTORS = [
    "Union Ministry / Central Authority",
    "State Government Department",
    "District Collector / Executive Magistrate",
    "Municipal / Panchayat Body",
    "Statutory Commission / Regulatory Board",
    "Legislative Secretariat / Presiding Officer",
    "Public Sector Undertaking",
    "Disciplinary / Appointing Authority",
]

INSTRUMENTS = [
    "executive notification and enforcement order",
    "statutory rule and administrative circular",
    "legislative enactment / ordinance provision",
    "disciplinary / disqualification directive",
    "licensing or regulatory restriction",
    "constitutional reference / proclamation",
]

FACT_TEMPLATES = [
    "Before the {forum}, an aggrieved petitioner challenged an impugned {instrument} issued by the {actor} under {art_num} ({art_title}) of {part_num} ({part_title}). Relying on the core guarantee that {art_desc} and citing {landmark}, the petitioner sought judicial invalidation for violating constitutional limits and procedural fairness.",
    "During adjudication before the {forum}, the {actor} defended an impugned {instrument} touching {art_num} ({art_title}) in {part_num}. The petitioner demonstrated that {art_desc}, arguing that the State's action failed the constitutional standard laid down in {landmark} and undermined {principle}.",
    "A constitutional question arose before the {forum} concerning the scope of {art_num} ({art_title}) under {part_num} ({part_title}). While the {actor} invoked broad administrative discretion, the petitioner relied on {landmark} and the principle that {principle}, requiring the Bench to determine maintainability, statutory compliance, and appropriate relief.",
    "In a {proceeding} instituted before the {forum}, the Court examined whether an {instrument} by the {actor} complied with {art_num} ({art_title}). Grounded in {part_num} ({part_title}), where {art_desc}, the parties contested the binding effect of {landmark} on the factual record.",
]


def extract_str(block: str, key: str) -> str:
    m = re.search(
        rf'\b{key}\s*:\s*(?:"((?:\\.|[^"\\])*)"|\'((?:\\.|[^\'\\])*)\')',
        block,
        re.S,
    )
    if not m:
        return ""
    val = m.group(1) if m.group(1) is not None else m.group(2)
    return val.replace('\\"', '"').replace("\\'", "'").replace("\n", " ").strip()


def parse_parts_metadata() -> list[dict]:
    txt = (DATA_DIR / "partsData.ts").read_text(encoding="utf-8", errors="ignore")
    chunks = re.split(r"(?=\n  \{\s*\n\s*id:\s*['\"]part-)", txt)
    parts = []
    for ch in chunks[1:]:
        pid = extract_str(ch, "id")
        if not pid:
            continue
        part_num = extract_str(ch, "partNumber")
        title = extract_str(ch, "title")
        articles_range = extract_str(ch, "articlesRange")
        desc = extract_str(ch, "description")

        kp_m = re.search(r"keyPrinciples:\s*\[(.*?)\]", ch, re.S)
        principles = []
        if kp_m:
            principles = [
                m1 if m1 else m2
                for m1, m2 in re.findall(r'"((?:\\.|[^"\\])*)"|\'((?:\\.|[^\'\\])*)\'', kp_m.group(1))
            ]

        landmarks = []
        for lm in re.finditer(r"caseName:\s*['\"]([^'\"]+)['\"]", ch):
            landmarks.append(lm.group(1))

        parts.append(
            {
                "id": pid,
                "partNumber": part_num,
                "title": title,
                "articlesRange": articles_range,
                "description": desc,
                "principles": principles or [desc or f"Governs {part_num}: {title}."],
                "landmarks": landmarks or ["Kesavananda Bharati v. State of Kerala (1973)"],
            }
        )
    return parts


def parse_part_articles(part_id: str) -> list[dict]:
    fname = PART_FILE_MAP.get(part_id)
    if not fname:
        return []
    txt = (DATA_DIR / fname).read_text(encoding="utf-8", errors="ignore")
    # For part9aMunicipalitiesData.ts which exports both 9A and 9B
    if part_id == "part-9a" and "PART_9B_COOPERATIVES_EXPANDED" in txt:
        txt = txt.split("PART_9B_COOPERATIVES_EXPANDED")[0]
    elif part_id == "part-9b" and "PART_9B_COOPERATIVES_EXPANDED" in txt:
        txt = txt.split("PART_9B_COOPERATIVES_EXPANDED")[1]

    blocks = re.split(r"(?=\n  \{\s*\n\s*(?:id|number):)", txt)
    articles = []
    for b in blocks[1:]:
        num = extract_str(b, "number")
        title = extract_str(b, "title")
        if not (num and title):
            continue
        summary = extract_str(b, "summary") or extract_str(b, "eli5") or extract_str(b, "bareActText")
        if len(summary) > 260:
            summary = summary[:257].rsplit(" ", 1)[0] + "..."
        if not summary:
            summary = f"{num} establishes the constitutional mandate for {title}."
        articles.append({"number": num, "title": title, "summary": summary})
    return articles


def generate_part_cases(part: dict, articles: list[dict]) -> list[dict]:
    if not articles:
        articles = [
            {
                "number": part["articlesRange"],
                "title": part["title"],
                "summary": part["description"],
            }
        ]

    cases = []
    other_arts = [a["number"] for a in articles]
    fallback_distractors = ["Article 368", "Article 352", "Article 370", "Article 395"]

    for i in range(200):
        cnum = i + 1
        art = articles[i % len(articles)]
        forum, proceeding = FORUMS[i % len(FORUMS)]
        actor = ACTORS[(i * 3) % len(ACTORS)]
        instrument = INSTRUMENTS[(i * 5) % len(INSTRUMENTS)]
        landmark = part["landmarks"][i % len(part["landmarks"])]
        principle = part["principles"][i % len(part["principles"])]
        tpl = FACT_TEMPLATES[i % len(FACT_TEMPLATES)]

        art_num = art["number"] if "Art" in art["number"] else f"Article {art['number']}"
        art_desc = art["summary"]

        factual_matrix = tpl.format(
            forum=forum,
            proceeding=proceeding,
            actor=actor,
            instrument=instrument,
            art_num=art_num,
            art_title=art["title"],
            part_num=part["partNumber"],
            part_title=part["title"],
            art_desc=art_desc,
            landmark=landmark,
            principle=principle,
        )

        # Build 2 comprehension MCQs anchored to this Part's articles & principles
        distractors = [
            (f"Article {x}" if "Art" not in x else x)
            for x in other_arts
            if x != art["number"]
        ] + fallback_distractors
        d1, d2, d3 = distractors[0], distractors[1], distractors[2]
        correct_idx = i % 4
        opts1 = [d1, d2, d3]
        opts1.insert(correct_idx, art_num)

        mcq1 = {
            "id": f"{part['id']}-cs{cnum}-q1",
            "question": f"Which constitutional provision in {part['partNumber']} specifically governs '{art['title']}'?",
            "options": opts1,
            "correctIndex": correct_idx,
            "explanation": f"{art_num} ({art['title']}): {art_desc}",
            "articleRef": art_num,
        }

        correct_idx2 = (i + 1) % 4
        opts2 = [
            f"It is excluded from {part['partNumber']} judicial scrutiny",
            f"It operates only during Financial Emergency under Article 360",
            f"It overrides the Basic Structure without limitation",
        ]
        opts2.insert(correct_idx2, principle)
        mcq2 = {
            "id": f"{part['id']}-cs{cnum}-q2",
            "question": f"Under {part['partNumber']} ({part['title']}), which constitutional principle governs this dispute alongside {landmark}?",
            "options": opts2,
            "correctIndex": correct_idx2,
            "explanation": f"As established in {part['partNumber']} ({landmark}): {principle}",
            "articleRef": art_num,
        }

        cases.append(
            {
                "id": f"{part['id']}-cs-{cnum}",
                "caseNumber": cnum,
                "title": f"Case {cnum}: {art['title']} ({art_num} • {proceeding})",
                "legalTheme": f"{part['partNumber']}: {part['title']} • {art_num}",
                "factualMatrix": factual_matrix,
                "framingQuestions": [
                    f"1. Whether the {proceeding} before the {forum} is maintainable under {art_num}?",
                    f"2. Does the {actor}'s {instrument} conform to {art_num} ({art['title']})?",
                    f"3. How does {landmark} govern the constitutional validity and relief in this matter?",
                ],
                "statutoryApplicability": [art_num, part["partNumber"], landmark],
                "modelAnswer": (
                    f"1. MAINTAINABILITY: The {proceeding} before the {forum} is maintainable as it raises a direct constitutional question under {art_num} ({part['partNumber']}).\n\n"
                    f"2. SUBSTANTIVE ANALYSIS ({art_num}): {art_desc} Applying the governing principle—'{principle}'—the impugned {instrument} by the {actor} must strictly satisfy constitutional bounds.\n\n"
                    f"3. PRECEDENT ({landmark}) & RELIEF: Guided by {landmark}, any overreach inconsistent with {art_num} is liable to be quashed or suitably restrained."
                ),
                "markingRubric": [
                    {"criterion": f"Bare Act anchor ({art_num}) & maintainability", "marks": 3},
                    {"criterion": f"Application of {part['partNumber']} principles", "marks": 4},
                    {"criterion": f"Precedent reasoning ({landmark}) & relief", "marks": 3},
                ],
                "comprehensionMCQs": [mcq1, mcq2],
            }
        )
    return cases


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    parts = parse_parts_metadata()
    total = 0
    for p in parts:
        articles = parse_part_articles(p["id"])
        cases = generate_part_cases(p, articles)
        out_path = OUT_DIR / f"{p['id']}.json"
        out_path.write_text(json.dumps(cases, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        total += len(cases)
        print(f"{p['partNumber']:9s} ({p['id']:8s}): {len(articles):2d} articles -> {len(cases)} case studies ({out_path.stat().st_size/1024:.1f} KB)")
    print(f"\nDONE: {len(parts)} Parts x 200 = {total} Constitutional Part Case Studies generated.")


if __name__ == "__main__":
    main()
