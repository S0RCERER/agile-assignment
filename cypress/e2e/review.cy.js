/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let movies;
let movie;
let reviews; 
describe("Review", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });
    
  describe("The Discover Movies page", () => {
    it("Should display a full review for this movie", () => {
        cy.visit(`/movies/${movies[1].id}`)
        cy.get(".MuiFab-root").contains("Reviews").click()
        cy.get(".MuiTableCell-body").contains("Full Review").click()
        cy.url().should("include", "/reviews/")
        
    });

  });

});