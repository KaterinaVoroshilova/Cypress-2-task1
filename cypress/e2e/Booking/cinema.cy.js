describe("tests should main page cinema", () => {
  const cinema = require("../../fixtures/cinema");
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should show correct title page", () => {
    cy.get(cinema.selectors.titlePageCinema).should("be.visible");
    cy.get(cinema.selectors.days).should("have.length", 7);
  });
});