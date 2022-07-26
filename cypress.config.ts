const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern:'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
    },
  },
});
