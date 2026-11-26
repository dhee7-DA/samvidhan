"""
SAMVIDHAN Automated Responsive & Route Smoke Check
Verifies zero runtime/console errors and zero horizontal overflow across
all sidebar routes at both split-screen (860x760) and desktop (1366x860) viewports.

Usage:
  python scripts/smoke_check.py [--url http://localhost:5173]
"""

import argparse
import sys
from playwright.sync_api import sync_playwright

SPLIT_ROUTES = [
    "Overview",
    "Articles 1–395",
    "Visual Law Lab",
    "Knowledge Graphs",
    "Arcade Hub",
]

DESKTOP_ROUTES = [
    "Overview",
    "15-Day Bootcamp",
    "Readiness Index",
    "Articles 1–395",
    "25 Parts",
    "12 Schedules",
    "Amendments",
    "Doctrines Hub",
    "Bodies Matrix",
    "Writs & Emergency",
    "7th Schedule",
    "Majorities Lab",
    "Time Limits",
    "Landmark Cases",
    "Precedent Clash",
    "Knowledge Graphs",
    "Visual Law Lab",
    "Audio & Viva",
    "Speed Hacks",
    "Legal Dictionary",
    "Global Matrix",
    "Arcade Hub",
    "Flashcards (SRS)",
    "395 Mastery Wall",
    "Mastery Quiz",
    "Socratic Examiner",
    "Exam Simulator",
    "Negative Marking",
    "Mistakes Bank",
    "Mains Writing Lab",
    "Judgment Writing",
    "Mains Mock Hall",
    "PYQs & Trends",
    "Revision Sheets",
]


def check_viewport(page, base_url: str, width: int, height: int, routes: list[str]) -> list[str]:
    failures: list[str] = []
    page.set_viewport_size({"width": width, "height": height})
    page.goto(base_url, wait_until="domcontentloaded", timeout=30000)
    page.locator("aside").first.wait_for(state="visible", timeout=20000)
    page.wait_for_timeout(350)

    for label in routes:
        btn = page.locator("aside button").filter(has_text=label).first
        if btn.count() == 0:
            failures.append(f"[{width}x{height}] Missing sidebar route: {label}")
            continue

        btn.scroll_into_view_if_needed()
        btn.click()

        # Wait for lazy Suspense fallback to finish if loading a new chunk
        loader = page.locator("text=Loading Constitutional Module...")
        if loader.count() > 0:
            loader.first.wait_for(state="hidden", timeout=10000)

        page.wait_for_timeout(260)

        if label == "Articles 1–395":
            hindi_card = page.locator("text=सरल हिंदी अर्थ").first
            try:
                hindi_card.wait_for(state="visible", timeout=8000)
            except Exception:
                failures.append(f"[{width}x{height}] Missing Hindi meaning card on Articles 1–395")

        metrics = page.evaluate(
            """() => ({
                scrollWidth: document.documentElement.scrollWidth,
                innerWidth: window.innerWidth,
                textLen: document.body.innerText.trim().length
            })"""
        )

        if metrics["textLen"] < 40:
            failures.append(f"[{width}x{height}] Empty render on route: {label}")
        if metrics["scrollWidth"] > metrics["innerWidth"]:
            failures.append(
                f"[{width}x{height}] Horizontal overflow on '{label}': "
                f"scrollWidth={metrics['scrollWidth']} > innerWidth={metrics['innerWidth']}"
            )

        print(f"  [OK] {width}x{height} {label:20s} scrollWidth={metrics['scrollWidth']}/{metrics['innerWidth']}")

    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description="SAMVIDHAN responsive & route smoke check")
    parser.add_argument("--url", default="http://localhost:5173", help="Target dev/preview URL")
    args = parser.parse_args()

    console_errors: list[str] = []
    page_errors: list[str] = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda err: page_errors.append(str(err)))

        print(f"Running SAMVIDHAN smoke check against {args.url} ...")
        failures = []
        failures.extend(check_viewport(page, args.url, 860, 760, SPLIT_ROUTES))
        failures.extend(check_viewport(page, args.url, 1366, 860, DESKTOP_ROUTES))

        browser.close()

    if console_errors:
        failures.append(f"Console errors ({len(console_errors)}): {console_errors[:3]}")
    if page_errors:
        failures.append(f"Uncaught page errors ({len(page_errors)}): {page_errors[:3]}")

    if failures:
        print("\nSMOKE CHECK FAILED:")
        for f in failures:
            print("  -", f)
        return 1

    print(f"\nALL CHECKS PASSED ({len(SPLIT_ROUTES)} split-screen + {len(DESKTOP_ROUTES)} desktop routes, 0 errors).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
