import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage.js"
import ChangeUserInfo from "../pages/ChangeUserInfo.js"
import LinksPage from "../pages/LinksPage.js"

const loginPage = new LoginPage();
const changeUserInfo = new ChangeUserInfo();
const linksPage = new LinksPage();

describe('template spec', () => {

  // objeto de seletores para login e dashboard
  let selectorsList = {
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
            myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]'
        }

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

    // login
    loginPage.accessLoginPage();
    loginPage.loginSuccessUser(userData.userSuccess.userName, userData.userSuccess.password);
    linksPage.accessMyInfo();
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    //cy.get(selectorsList.topBarTitle).contains('Dashboard');

    // update user
    changeUserInfo.updateUserInfo();
  });

});