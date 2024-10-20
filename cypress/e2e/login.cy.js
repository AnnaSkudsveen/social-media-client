//Remove import before testing to make cypress work
import { cy } from "cypress";

describe("Login Form", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("/index.html");

    cy.get('button[data-auth="login"]').first().click();

    cy.get("#loginEmail").click().type("testeranna@stud.noroff.no");

    cy.get("#loginPassword").click().type("valid_password");

    cy.get('#loginForm button[type="submit"]')
      .should("have.text", "Login")
      .click();

    cy.url().should("include", "view=profile");
  });
});

describe("Login Form Invalid", () => {
  it("should fail to login user with unvalid credentials", () => {
    cy.visit("/index.html");

    cy.get('button[data-auth="login"]').first().click();

    cy.get("#loginEmail").type("invalid_username");
    cy.get("#loginPassword").type("invalid_password");

    cy.get('#loginForm button[type="submit"]')
      .should("have.text", "Login")
      .click();

    cy.url().should("include", "view=profile");
  });
});
