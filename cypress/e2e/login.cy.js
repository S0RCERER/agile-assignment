/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let movies;
describe("Login", () => {
    
    describe("Login Page and Register Page", () => {
        it("Base test about login page", () => {
            cy.visit("/login");
            cy.get("p").contains("Please Log In");
            cy.get("p").contains("Please Log In");
            cy.get('button').contains("Login");
            cy.get('p').contains("Login with Google");
            cy.get('button').contains("Login with Google");
            cy.get('a').contains("Register");
        });
        it("Base test about register page", () => {
            cy.visit("/register");
            cy.get('div').contains("Enter your name:");
            cy.get('div').contains("Enter your e-mail:");
            cy.get('div').contains("Enter your password:");
        });
    });
    

})