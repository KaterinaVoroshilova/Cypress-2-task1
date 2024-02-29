const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: {
      openMode: 1,
      runMode: 2,
    },
    setupNodeEvents(on, config) {
    },
  },
});