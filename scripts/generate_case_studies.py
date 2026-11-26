#!/usr/bin/env python3
"""
Generate 190 chapter-grounded Comprehension Case Studies per Bootcamp Day (Cases 11..200)
into public/data/case-studies/day{d}.json so every chapter has 200 Case Studies (3,000 total).

Grounds every case study in:
- Each Day's actual targetArticles, coreConcepts, landmarkEvolutionPairs, and dictionaryTerms
  from src/data/bootcamp/days1to5.ts, days6to10.ts, days11to15.ts
- Real chapter MCQs from src/data/bootcamp/day{d}/day{d}McqsRound1..5.ts
"""

import argparse
import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOTCAMP_DIR = ROOT / "src" / "data" / "bootcamp"
OUT_DIR = ROOT / "public" / "data" / "case-studies"

FORUMS = [
    ("Supreme Court of India (Article 32 Writ Jurisdiction)", "Writ Petition (Civil/Criminal)"),
    ("High Court Division Bench (Article 226 Jurisdiction)", "Writ Petition (Art. 226)"),
    ("High Court Supervisory Bench (Article 227)", "Civil Misc. Petition (Art. 227)"),
    ("Constitution Bench (Article 145(3) Reference)", "Constitutional Reference"),
    ("Special Bench / Judicial Magistrate First Class", "Criminal Misc. / Remand Application"),
    ("Civil Judge (Senior Division) / District Court", "Original Civil Suit / Declaratory Relief"),
    ("Central Administrative Tribunal / High Court Service Bench", "Service Challenge Petition"),
    ("Election Tribunal / High Court Election Bench", "Election Petition"),
]

FACT_TEMPLATES = [
    (
        "In a matter instituted before the {forum}, the Petitioner—an aggrieved citizen/association affected by a recent {actor} action—challenged the constitutionality and procedural validity of an impugned {instrument} touching upon {article} ({concept_title}). The Petitioner contended that {concept_summary} Further, relying on the evolution of doctrine through {landmark}, the Petitioner argued that the State failed to satisfy the strict constitutional threshold and acted with manifest arbitrariness."
    ),
    (
        "During proceedings before the {forum}, {actor} defended an impugned {instrument} enacted/issued in relation to {article} ({concept_title}). The Respondent maintained that public interest and administrative necessity justified the measure, whereas the Petitioner demonstrated that {concept_summary} The Bench was specifically called upon to reconcile the competing constitutional principles established in {landmark} with the Bare Act mandate of {article}."
    ),
    (
        "A constitutional dispute arose before the {forum} after {actor} enforced a directive affecting rights and duties under {article} ({concept_title}). While the Respondent invoked broad executive/legislative competence, the Petitioner produced documentary records establishing non-compliance with procedural safeguards. Counsel on both sides anchored their submissions on {landmark} and the doctrinal meaning of {term}, requiring a structured IRAC determination on maintainability and merits."
    ),
    (
        "Following a reference/petition before the {forum}, the Court examined whether {actor}'s reliance on an older precedent survived recent constitutional scrutiny under {article} ({concept_title}). In light of {concept_summary} and the authoritative ratio of {landmark}, the Bench framed core issues testing statutory applicability, constitutional limitations, and appropriate judicial relief."
    ),
]

ACTORS = [
    "State Government Department",
    "Union Ministry / Regulatory Authority",
    "District Administration & Police Authority",
    "Public Sector Undertaking / State Instrumentality",
    "Legislative Secretariat / Returning Officer",
    "University / Statutory Licensing Board",
    "Municipal Corporation / Panchayat Authority",
    "Disciplinary & Vigilance Authority",
]

INSTRUMENTS = [
    "executive notification and show-cause order",
    "statutory amendment and implementing rules",
    "administrative circular and detention/restraint order",
    "impugned legislative bill / ordinance provision",
    "disciplinary dismissal / disqualification order",
    "licensing restriction and regulatory directive",
]


def parse_day_metadata() -> dict[int, dict]:
    meta: dict[int, dict] = {}
    for fname in ["days1to5.ts", "days6to10.ts", "days11to15.ts"]:
        txt = (BOOTCAMP_DIR / fname).read_text(encoding="utf-8", errors="ignore")
        # Split by dayNumber: N
        chunks = re.split(r"(?=\bdayNumber:\s*\d+)", txt)
        for ch in chunks:
            m_day = re.match(r"dayNumber:\s*(\d+)", ch)
            if not m_day:
                continue
            d = int(m_day.group(1))
            title_m = re.search(r"title:\s*['\"]([^'\"]+)['\"]", ch)
            title = title_m.group(1) if title_m else f"Day {d} Constitutional Law"

            # targetArticles
            ta_m = re.search(r"targetArticles:\s*\[(.*?)\]", ch, re.S)
            target_articles = (
                re.findall(r"['\"]([^'\"]+)['\"]", ta_m.group(1)) if ta_m else [f"Day {d} Articles"]
            )

            # coreConcepts: title + conciseExplanation/summary
            concepts = []
            for cm in re.finditer(
                r"title:\s*['\"]([^'\"]+)['\"].*?(?:explanation|summary|description|keyPoint):\s*['\"]([^'\"]+)['\"]",
                ch,
                re.S,
            ):
                concepts.append((cm.group(1), cm.group(2)))
            if not concepts:
                for cm in re.finditer(r"title:\s*['\"]([^'\"]+)['\"]", ch):
                    concepts.append((cm.group(1), f"Core constitutional framework under {title}."))

            # landmarkEvolutionPairs
            landmarks = []
            for lm in re.finditer(
                r"(?:caseName|landmarkCase|laterCase|title):\s*['\"]([^'\"]*(?:v\.|In re|Association|Union|State)[^'\"]*)['\"]",
                ch,
            ):
                landmarks.append(lm.group(1))
            if not landmarks:
                landmarks = ["Kesavananda Bharati v. State of Kerala (1973)", "Maneka Gandhi v. Union of India (1978)"]

            # dictionaryTerms
            dt_m = re.search(r"dictionaryTerms:\s*\[(.*?)\]", ch, re.S)
            terms = re.findall(r"['\"]([^'\"]+)['\"]", dt_m.group(1)) if dt_m else ["Constitutional Morality"]

            meta[d] = {
                "title": title,
                "targetArticles": target_articles,
                "concepts": concepts[:20],
                "landmarks": list(dict.fromkeys(landmarks))[:20],
                "terms": terms,
            }
    return meta


def parse_day_mcqs(day: int) -> list[dict]:
    mcqs: list[dict] = []
    day_dir = BOOTCAMP_DIR / f"day{day}"
    for r in range(1, 6):
        p = day_dir / f"day{day}McqsRound{r}.ts"
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8", errors="ignore")
        # Extract individual MCQ object blocks
        blocks = re.split(r"(?=\{\s*\n\s*[\"']?id[\"']?\s*:)", txt)
        for b in blocks[1:]:
            q_m = re.search(r'["\']?question["\']?\s*:\s*(?:"((?:\\.|[^"\\])*)"|\'((?:\\.|[^\'\\])*)\')', b)
            opts_m = re.search(r'["\']?options["\']?\s*:\s*\[(.*?)\]', b, re.S)
            ci_m = re.search(r'["\']?correctIndex["\']?\s*:\s*(\d+)', b)
            exp_m = re.search(r'["\']?explanation["\']?\s*:\s*(?:"((?:\\.|[^"\\])*)"|\'((?:\\.|[^\'\\])*)\')', b)
            art_m = re.search(r'["\']?articleRef["\']?\s*:\s*(?:"([^"]*)"|\'([^\']*)\')', b)
            if not (q_m and opts_m and ci_m and exp_m):
                continue
            opts = [
                m1 if m1 != "" else m2
                for m1, m2 in re.findall(r'"((?:\\.|[^"\\])*)"|\'((?:\\.|[^\'\\])*)\'', opts_m.group(1))
            ]
            if len(opts) != 4:
                continue
            q_val = q_m.group(1) if q_m.group(1) is not None else q_m.group(2)
            exp_val = exp_m.group(1) if exp_m.group(1) is not None else exp_m.group(2)
            art_val = (art_m.group(1) or art_m.group(2)) if art_m else f"Day {day}"
            mcqs.append(
                {
                    "question": q_val.replace('\\"', '"').replace("\\'", "'"),
                    "options": [o.replace('\\"', '"').replace("\\'", "'") for o in opts],
                    "correctIndex": int(ci_m.group(1)),
                    "explanation": exp_val.replace('\\"', '"').replace("\\'", "'"),
                    "articleRef": art_val,
                }
            )
    return mcqs


def generate_day(day: int, day_meta: dict, day_mcqs: list[dict]) -> list[dict]:
    cases: list[dict] = []
    articles = day_meta["targetArticles"] or [f"Day {day}"]
    concepts = day_meta["concepts"] or [(day_meta["title"], "Constitutional governance & judicial review.")]
    landmarks = day_meta["landmarks"]
    terms = day_meta["terms"] or ["Constitutionalism"]

    # Ensure enough MCQs to cycle through 190 cases x 2 MCQs each = 380 assignments
    if not day_mcqs:
        day_mcqs = [
            {
                "question": f"Which constitutional provision governs {day_meta['title']}?",
                "options": [articles[0], "Article 368", "Article 370", "Article 395"],
                "correctIndex": 0,
                "explanation": f"{articles[0]} anchors this constitutional principle.",
                "articleRef": articles[0],
            }
        ]

    for idx in range(190):
        case_num = 11 + idx
        forum, proceeding = FORUMS[idx % len(FORUMS)]
        actor = ACTORS[(idx * 3 + day) % len(ACTORS)]
        instrument = INSTRUMENTS[(idx * 5 + day) % len(INSTRUMENTS)]
        article = articles[idx % len(articles)]
        concept_title, concept_summary = concepts[idx % len(concepts)]
        landmark = landmarks[idx % len(landmarks)]
        term = terms[idx % len(terms)]
        tpl = FACT_TEMPLATES[idx % len(FACT_TEMPLATES)]

        # Pick 2 distinct MCQs from the chapter pool
        q1 = day_mcqs[(idx * 2) % len(day_mcqs)]
        q2 = day_mcqs[(idx * 2 + 1) % len(day_mcqs)]

        factual_matrix = tpl.format(
            forum=forum,
            actor=actor,
            instrument=instrument,
            article=article,
            concept_title=concept_title,
            concept_summary=concept_summary,
            landmark=landmark,
            term=term,
        )

        # Clean up article display
        art_label = article if "Art" in article or "Sched" in article or "Preamble" in article else f"Article {article}"

        title = f"Case Study {case_num}: {concept_title} ({art_label} — {proceeding})"
        legal_theme = f"{day_meta['title']} • {art_label} & {term}"

        framing_questions = [
            f"1. Whether the {proceeding} before the {forum} is maintainable in light of {art_label} and constitutional remedies?",
            f"2. How does the principle of {concept_title} ({term}) apply to the impugned {instrument} issued by the {actor}?",
            f"3. What is the controlling effect of {landmark} on the validity of the State/Respondent's action and what relief follows?",
        ]

        statutory_applicability = list(
            dict.fromkeys([art_label, q1["articleRef"], q2["articleRef"], landmark])
        )[:5]

        model_answer = (
            f"1. MAINTAINABILITY & THRESHOLD ({art_label}): Under the constitutional scheme governing {day_meta['title']}, "
            f"a {proceeding} before the {forum} is maintainable where a prima facie breach of {art_label} or statutory/constitutional limits is demonstrated. "
            f"The Court evaluates threshold jurisdiction without permitting procedural technicalities to defeat substantive constitutional justice.\n\n"
            f"2. DOCTRINAL & STATUTORY ANALYSIS ({concept_title}): {concept_summary} Applying the core concept of '{term}', "
            f"the impugned {instrument} by the {actor} must satisfy legality, rational nexus, and proportionality. "
            f"As reinforced by {q1['explanation']}\n\n"
            f"3. PRECEDENT APPLICATION ({landmark}) & RELIEF: Guided by {landmark}, any executive or legislative overreach inconsistent with {art_label} "
            f"is liable to be struck down or suitably moulded by appropriate directions. Further, {q2['explanation']}"
        )

        marking_rubric = [
            {
                "criterion": f"Identification of jurisdictional maintainability & Bare Act anchor ({art_label})",
                "marks": 3,
            },
            {
                "criterion": f"Application of {concept_title} & doctrinal reasoning on {term}",
                "marks": 4,
            },
            {
                "criterion": f"Authoritative citation of {landmark} & structured operative relief",
                "marks": 3,
            },
        ]

        comprehension_mcqs = [
            {
                "id": f"d{day}-cs{case_num}-q1",
                "question": q1["question"],
                "options": q1["options"],
                "correctIndex": q1["correctIndex"],
                "explanation": q1["explanation"],
                "articleRef": q1["articleRef"],
                "testedDimension": "Article Threshold",
            },
            {
                "id": f"d{day}-cs{case_num}-q2",
                "question": q2["question"],
                "options": q2["options"],
                "correctIndex": q2["correctIndex"],
                "explanation": q2["explanation"],
                "articleRef": q2["articleRef"],
                "testedDimension": "Landmark Ratio",
            },
        ]

        cases.append(
            {
                "id": f"d{day}-cs-{case_num}",
                "caseNumber": case_num,
                "title": title,
                "legalTheme": legal_theme,
                "factualMatrix": factual_matrix,
                "framingQuestions": framing_questions,
                "statutoryApplicability": statutory_applicability,
                "modelAnswer": model_answer,
                "markingRubric": marking_rubric,
                "comprehensionMCQs": comprehension_mcqs,
            }
        )

    return cases


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--days", default="1-15", help="e.g. 1-5 or 6-10 or 11-15")
    args = parser.parse_args()

    start_s, end_s = args.days.split("-")
    start_d, end_d = int(start_s), int(end_s)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    meta = parse_day_metadata()

    total_written = 0
    for d in range(start_d, end_d + 1):
        day_mcqs = parse_day_mcqs(d)
        cases = generate_day(d, meta[d], day_mcqs)
        out_path = OUT_DIR / f"day{d}.json"
        out_path.write_text(json.dumps(cases, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        size_kb = out_path.stat().st_size / 1024
        total_written += len(cases)
        print(f"Day {d:2d}: wrote {len(cases)} extra case studies ({len(day_mcqs)} chapter MCQs pool) -> {out_path.name} ({size_kb:.1f} KB)")

    print(f"Batch {start_d}-{end_d} complete: {total_written} extra case studies generated.")


if __name__ == "__main__":
    main()
