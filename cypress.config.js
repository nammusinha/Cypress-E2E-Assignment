const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.amazon.com.au/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env:{
    //URL:'https://www.planningportal.nsw.gov.au/'
   // URL:'https://www.planning.nsw.gov.au/policy-and-legislation/housing/faster-assessments-program/council-league-table'
     URL:'https://www.amazon.com.au/'
  }
});
