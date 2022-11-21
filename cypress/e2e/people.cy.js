/* eslint-disable no-undef */
let people;
let person;

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

  describe("The person details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/1136406
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((response) => {
            person = response;
        });
    })

    beforeEach(() => {
      cy.visit(`/person/1136406`)
    })

    it(" displays the person biography, popularity and some other catagories ", () => {
      cy.get("h3").contains("Overview");
      cy.get("h3").contains("Popular Index")
      cy.get("h3").contains("Birthday")
      cy.get("h3").contains("Place Of Birth")
      cy.get("h3").contains("Also Known As")
      cy.get("p").contains(person.biography.substring(0,10))
      cy.get("p").contains(person.popularity)
      cy.get("p").contains(person.birthday)
      cy.get("p").contains(person.place_of_birth)
    });
  })

})