/* eslint-disable no-undef */
let topRatedMovies;
let upComingMovies;

describe("Base tests about movies lists", () => {
  before(() => {
    // Get the discover movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        topRatedMovies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&include_adult=false&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        upComingMovies = response.results;
      });
  });
 

  describe("Top Rated Movies Page", () => {
    beforeEach(()=>{
      cy.visit("/movies/top-rated")
    })

    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Top Rated Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(topRatedMovies[index].title);
      });
    });
  });

  describe("Upcoming Movies Page", () => {
    beforeEach(()=>{
      cy.visit("/movies/upcoming")
    })

    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Upcoming Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(upComingMovies[index].title);
      });
    });
  });

});