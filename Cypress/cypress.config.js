const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'https://demo.reportportal.io/api/v1',
    apiKey: 'XXX',
    launch: 'Cypress',
    project: 'default_personal',
    description: 'Cypress Demo',
    // attributes: [
    //   {
    //     key: 'attributeKey',
    //     value: 'attributeValue',
    //   },
    //   {
    //     value: 'anotherAttributeValue',
    //   },
    // ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
      // implement node event listeners here
    },
    // specPattern: [
    //   // "cypress/e2e/spec2.cy.js",
    //   // "cypress/e2e/spec3.cy.js",
    //   // "cypress/e2e/spec1.cy.js",
    // ]
  },
});
