import userData from "../fixtures/userData.json"

describe('template spec', () => {

  let selectorsList = {
      userNameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
      myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]'
  };

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.userName);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.topBarTitle).contains('Dashboard');
  });

  it('Login - fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.userNameField).type(userData.userFail.userName);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get('.oxd-alert');
  });

  // Novo cenário - Alterar informações do usuário

  it.only('User info update - Success', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.userNameField).type(userData.userSuccess.userName);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.topBarTitle).contains('Dashboard');
    cy.get(selectorsList.myInfoLink).click();
  });

});