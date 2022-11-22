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
        it("Should be able to log in and display current user on homepage", () => {
            cy.visit("/login");
            cy.get('#outlined-required').type(`114514@mail.com`);
            cy.get('#outlined-password-input').type(`hyxc37301`);
            cy.get(':nth-child(4) > button').click();
            cy.get('.MuiTypography-p').contains("114514@mail.com")
        });
        it("Should be able to logout the current user when clicked the log out button", () => {
            cy.get('.MuiToolbar-root > :nth-child(9)').click();
            cy.get('.MuiTypography-p').contains("Please Log In");
        });

        it("Should navigate to the register page when the register button on login page is clicked", () => {
            cy.visit("/login");
            cy.get("a").eq(0).click();
            cy.get('div').contains("Enter your name:");
        });
    });

})