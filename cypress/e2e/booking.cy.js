import cinema from "../fixtures/cinema";

describe("Booking tickets", () => {
  it("Should book a movie in an available hall", () => {
    cy.visit("/");
    cy.get(cinema.selectors.days).eq(3).click();
    cy.get(".movie").first().contains("12:00").click();
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