import cinema from "../../fixtures/cinema";

describe("Booking tickets", () => {
  it("Should book a movie in an available hall", () => {
    cy.visit("/admin");
    cy.login(cinema.emailValid, cinema.passwordValid);
    cy.get("#hall-control > div > ul > li:nth-child(1)").then(($el) => $el.textContent).should('have.text','Зал 1');
    cy.get("#hall-control > div > ul > li:nth-child(1)").invoke('text').then((text) => {
      cy.visit("/");
      cy.get(cinema.selectors.days).eq(3).click();
      cy.get(".movie").should('contains.text', text).contains("12:00").click();
      cy.fixture("seats").then((seats) => {
        seats.forEach((seat) => {
          cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
          ).click();
        });
      });
      cy.contains(cinema.bookButton).click();
      cy.contains(cinema.bookResult).should("be.visible");
    }); 
  });
});