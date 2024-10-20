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

    cy.get('button[data-auth="logout"]').first().click();

    cy.url().should("include", "");
  });
});
