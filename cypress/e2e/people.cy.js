/* eslint-disable no-undef */
let people;

describe("People page tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
          people = response.results;
      });
  })

  describe("Popular People Page", () => {
    beforeEach(() => {
      cy.visit("/person")
    })

    it("displays 20 famous people", () => {
      cy.get(".MuiCardContent-root").should("have.length", 20);
    });

    it("displays people's names", () => {
      cy.get(".MuiCardContent-root").each(($card, index) => {
        cy.wrap($card).find("p").contains(people[index].name);
      });
    });
    
  })
})