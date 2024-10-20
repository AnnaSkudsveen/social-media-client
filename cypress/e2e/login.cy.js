import { cy } from "cypress";

// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("https://example.cypress.io");
//   });
// });

describe("Login Form", () => {
  it("should allow user to log in with valid credentials", () => {
    // Visit the login page
    cy.visit("/index.html");

    cy.get('button[data-auth="login"]').first().click();

    // Enter valid username and password
    cy.get("#loginEmail").click().type("testeranna@stud.noroff.no");

    cy.get("#loginPassword").click().type("valid_password");

    // Submit the login form
    cy.get('#loginForm button[type="submit"]')
      .should("have.text", "Login")
      .click();

    // Assert that the user is logged in
    cy.url().should("include", "view=profile"); // Assuming your dashboard URL
  });
});
