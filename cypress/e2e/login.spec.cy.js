describe('template spec', () => {

  let selectorsList = {
      userNameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text'
  };

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin');
    cy.get(selectorsList.passwordField).type('admin123');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.topBarTitle).contains('Dashboard');
  });

  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.userNameField).type('Test');
    cy.get(selectorsList.passwordField).type('Test');
    cy.get(selectorsList.loginButton).click();
    cy.get('.oxd-alert');
  });

});