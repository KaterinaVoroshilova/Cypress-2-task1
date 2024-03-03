describe("Authorization admin", () => {
    const cinema = require("../../fixtures/cinema");
    beforeEach(() => {
      cy.visit("/admin");
    });
  
    it("login and password invalid", () => {
      cy.login(cinema.emailInvalid, cinema.passwordInvalid);
      cy.contains(cinema.errorMessage).should("be.visible");
    });
    
  });