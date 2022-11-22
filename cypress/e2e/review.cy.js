/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let movies;
let movie;
let reviews; 
let excerptList;
let authorList;
let idList;

describe("Review", () => {
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

    beforeEach(() => {
        cy.request(
          `https://api.themoviedb.org/3/movie/${
            movies[1].id
          }/reviews?api_key=${Cypress.env("TMDB_KEY")}`
        )
          .its("body")
          .then((review) => {
            reviews = review;
            authorList = reviews.results.map(a => a.author);
            excerptList = reviews.results.map(c => c.content);
            idList = reviews.results.map(i => i.id);
          });
        cy.visit(`/movies/${movies[1].id}`);
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
    });
  });
  
  describe("Review List", () => {
    it("Should display correct elements on the review list", () => {
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews").click();
      cy.get("th").contains("Author")
      cy.get("th").contains("Excerpt")
      cy.get("th").contains("More")
      cy.get("td").contains("Full Review")
      cy.get(".MuiTableBody-root>tr>th").each(($card, index) => {
        cy.get(':nth-child(1) > :nth-child(3) > a')
        cy.wrap($card).next().contains(excerptList[index].substring(0,10));
      });
    })

    it("should show header only if there is no review", () => {
      cy.visit(`/movies/895539`);
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews").click();
      cy.get("th").contains("Author")
      cy.get("th").contains("Excerpt")
      cy.get("th").contains("More")
      cy.get(".MuiTableBody-root>tr").should("have.length", 0);
    })
  });

});