**ReportPortal**: 
**use Playwright_TS folder**

update API key in: /Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Playwright_TS/playwright.config.ts
run via Playwright VS code plugin for example following test: Login in /Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Playwright_TS/tests/Playwright.spec.ts



**Notes for Setup of Playwright**

https://playwright.dev/docs/intro
https://playwright.dev/docs/auth


npm init playwright@latest

Created a Playwright Test project at C:\Visual_Studio_Code_Projects\Automation_Testing_League\Playwright

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭

npx playwright test Playwright.spec.js --headed --project="Google Chrome"
npx playwright show-report

API:
https://www.lambdatest.com/learning-hub/playwright-api-testing



