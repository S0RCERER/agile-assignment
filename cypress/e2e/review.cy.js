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
    
      before(() => {
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });
      beforeEach(() => {
        cy.visit("/");
      });


  describe("Movies review page", () => {
    it("Should display a full review for this movie", () => {
        cy.visit(`/movies/${movies[1].id}`)
        cy.get(".MuiFab-root").contains("Reviews").click()
        cy.get(".MuiTableCell-body").contains("Full Review").click()
        cy.url().should("include", "/reviews/")
        
    });
  });

  describe("Review Form Page", () => {
    it("Should display the review form page with correct elements", () => {
        cy.visit(`/`)
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get("button").contains("Favorites").click();
        cy.get(".MuiSvgIcon-root[data-testid='RateReviewIcon']").click()
        cy.url().should("include", "/reviews/form")
        cy.get("h2").contains("Write a review");
        cy.get('.MuiButton-containedPrimary')
        cy.get('.MuiButton-containedSecondary')
        cy.get('#author')
        cy.get('#review')
        cy.get('#select-rating')
    });
});
  
});