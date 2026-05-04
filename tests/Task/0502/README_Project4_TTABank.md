# Project4_TTABank Test

Purpose
- Describe the `Project4_TTABank.spec.ts` test and how to run it locally.

Test file
- `Project4_TTABank.spec.ts` (located in this folder)

Prerequisites
- Node.js >= 16
- Playwright installed (`npm install` should install dependencies)

How to run

```bash
# run the single spec
npx playwright test tests/Task/0502/Project4_TTABank.spec.ts

# show the Playwright HTML report afterwards
npx playwright show-report
```

Reporter
- This project uses a custom reporter `CustomTTAReporter.ts` which writes a real-time HTML report to `tta-report/`.
- The generated report for the last run is in `tta-report/` (open with `npx playwright show-report` or open the HTML file directly).

Expected result
- The test `TTABank login functionality` should pass and a TTA HTML report will be generated at `tta-report/report_<timestamp>.html`.

Notes
- If you need the test to run headless or with a specific browser, set Playwright CLI options or update `playwright.config.ts`.
- For debugging, run with `npx playwright test --headed --debug`.
