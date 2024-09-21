**ReportPortal**: 

guide:
https://github.com/reportportal/examples-js/tree/main/example-cypress
at the beginning before 1st run: npm install
how to run: 
be in Cypress folder and run:
npm test

**Notes for Setup of Cypress**

npm install cypress --save-dev
npx cypress open

how to find elements: https://medium.com/@anshita.bhasin/locator-strategy-in-cypress-css-cheat-sheet-6a4403305375
ID: cy.get(‘#logo’)
class: cy.get(‘.input-group’)

drag and drop plugin:
npm install --save-dev @4tw/cypress-drag-drop
Add the following line in command.js:
import '@4tw/cypress-drag-drop'
v package.json musi byt:
,
    "scripts": {
      "cy:run:chrome": "cypress run --browser chrome --headed"   
  }

iframes:
https://www.lambdatest.com/blog/how-to-handle-iframes-in-cypress/
https://stackoverflow.com/questions/64606194/cypress-access-to-an-iframe-into-another-iframe
this what is bellow was not necessary:
but didn't help fully: for plugin it is also necessary: 
https://www.npmjs.com/package/cypress-iframe
npm install -D cypress-iframe
In your cypress/support/commands.js file, add the following:
import 'cypress-iframe';
// or
require('cypress-iframe');

How to run in CMD:
npm run cy:run:chrome --spec Cypress/e2e/Cypress.cy.js

Cypress API testing exmaples:
https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress/tests/api

