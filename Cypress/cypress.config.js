const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: [
    //   // "cypress/e2e/spec2.cy.js",
    //   // "cypress/e2e/spec3.cy.js",
    //   // "cypress/e2e/spec1.cy.js",
    // ]
  },
});
