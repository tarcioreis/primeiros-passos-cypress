import userData from "../fixtures/userData.json"

describe('template spec', () => {

  let selectorsList = {
      userNameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text'
  };

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.userName);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.topBarTitle).contains('Dashboard');
  });

  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.userNameField).type(userData.userFail.userName);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get('.oxd-alert');
  });

});