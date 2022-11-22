/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let discoverMovies;
let discoverMovies2;
let discoverMovies30;
let upcomingMovies;
let upcomingMovies2;
let upcomingMovies30
let topRatedMovies;
let topRatedMovies2;
let topRatedMovies30

describe("Pagination tests", () => {
  before(() => {
    
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
       "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
            discoverMovies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=2`
    )
        .its("body") // Take the body of HTTP response from TMDB
        .then((response) => {
            discoverMovies2 = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=30`
    )
        .its("body") // Take the body of HTTP response from TMDB
        .then((response) => {
        discoverMovies30 = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        upcomingMovies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&page=2`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        upcomingMovies2 = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&page=30`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        upcomingMovies30 = response.results;
      });

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
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=2`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        topRatedMovies2 = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=30`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        topRatedMovies30 = response.results;
      });
  });

  describe("discover movies page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Should display pagination component on discover movies page", () => {
      cy.get(".MuiPagination-root>ul>li").should("have.length", 11)
    });

    it("Should display 20 movies on the first page", () => {
      cy.get(".MuiCardHeader-root").should("have.length", 20);
      cy.get(".MuiPagination-root>ul>li").should("have.length", 11)
    });

    it("Should display 20 movies on the second page", () => {
      cy.get(".MuiPagination-root>ul>li").eq(2).click();
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("Should display correct movies on the last page", () => {
      cy.get(':nth-child(11) > .MuiButtonBase-root').click();
      cy.get(".MuiCardHeader-root").should("have.length", discoverMovies30.length);
      cy.get(".MuiCardHeader-root").each(($card, index) => {
      cy.wrap($card).find("p").contains(discoverMovies30[index].title);
      });
    });
  })

  describe("upcoming movies page", () => {
    beforeEach(() => {
      cy.visit("/movies/upcoming");
    });
    it("Should display pagination component on upcoming movies page", () => {
      cy.get(".MuiPagination-root>ul>li").should("have.length", 11)
    });

    it("Should display 20 movies on the first page", () => {
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("Should display 20 movies on the second page", () => {
      cy.get(".MuiPagination-root>ul>li").eq(2).click();
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("Should display correct movies on the last page", () => {
      cy.get(':nth-child(11) > .MuiButtonBase-root').click();
      cy.get(".MuiCardHeader-root").should("have.length", upcomingMovies30.length);
    });
  })

  describe("top rated movies page", () => {
    beforeEach(() => {
      cy.visit("/movies/top-rated");
    });

    it("Should display pagination component on top rated movies page", () => {
      cy.get(".MuiPagination-root>ul>li").should("have.length", 11)
    });

    it("Should display 20 movies on the first page", () => {
      cy.get(".MuiCardHeader-root").should("have.length", 20);
      cy.get(".MuiCardHeader-root").each(($card, index) => {
      cy.wrap($card).find("p").contains(topRatedMovies[index].title);
      });
      cy.get(".MuiPagination-root>ul>li").should("have.length", 11)
    });

    it("Should display 20 movies on the second page", () => {
      cy.get(".MuiPagination-root>ul>li").eq(2).click();
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("dShould display correct movies on the last page", () => {
      cy.get(':nth-child(11) > .MuiButtonBase-root').click();
      cy.get(".MuiCardHeader-root").should("have.length", topRatedMovies30.length);
    });
  });

});