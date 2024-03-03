describe("Authorization admin", () => {
  const cinema = require("../../fixtures/cinema");
  beforeEach(() => {
    cy.visit("/admin");
  });
  it("login and password valid", () => {
    cy.login(cinema.emailValid, cinema.passwordValid);
    cy.contains(cinema.adminTitlePage).should("be.visible");
  });
  
});