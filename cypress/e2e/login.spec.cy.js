import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage.js"

const loginPage = new LoginPage();

describe('template spec', () => {

  let option = 27;
  let martialOption = 3;
  let bloodType = 3;

  // objeto de seletores para login e dashboard
  let selectorsList = {
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
            myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]'
        }

  // objeto de seletores para alterar informações do usuário
  let changeUserInfoSelectors = {
      firstNameField: '[name="firstName"]',
      middleNameField: '[name="middleName"]',
      lastNameField: '[name="lastName"]',
      driverLicenseField: '[data-v-1f99f73c=""]',
      genericDateField: '[placeholder="yyyy-dd-mm"]',
      closeButtonDate: '.--close',
      employeeIdField: '.oxd-input',
      otherIdField: '.oxd-input',
      genericSelection: '.oxd-select-text',
      nationalityOption: `.oxd-select-dropdown > :nth-child(${option})`,
      martialOption: `.oxd-select-dropdown > :nth-child(${martialOption})`,
      bloodTypeOption: `.oxd-select-dropdown > :nth-child(${bloodType})`,
      inputTextTest: '[options=""]',
      genericGenderField: '.oxd-radio-wrapper',
      saveButton: '[type="submit"]'
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
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    //cy.get(selectorsList.topBarTitle).contains('Dashboard');

    // My info
    cy.get(selectorsList.myInfoLink).click();
    cy.get(changeUserInfoSelectors.firstNameField).clear().type("José");
    cy.get(changeUserInfoSelectors.middleNameField).clear().type("Santos");
    cy.get(changeUserInfoSelectors.lastNameField).clear().type("Silva");
    cy.get(changeUserInfoSelectors.employeeIdField).eq(4).clear().type("123456789");
    cy.get(changeUserInfoSelectors.otherIdField).eq(5).clear().type("ABC123");
    cy.get(changeUserInfoSelectors.driverLicenseField).eq(6).clear().type("12345678");
    cy.get(changeUserInfoSelectors.genericDateField).eq(0).clear().type("2025-10-09");
    cy.get(changeUserInfoSelectors.closeButtonDate).click();
    cy.get(changeUserInfoSelectors.genericSelection).eq(0).click();
    cy.get(changeUserInfoSelectors.nationalityOption).click();
    cy.get(changeUserInfoSelectors.genericSelection).eq(1).click();
    cy.get(changeUserInfoSelectors.martialOption).click();
    cy.get(changeUserInfoSelectors.genericDateField).eq(1).clear().type('2025-09-14');
    cy.get(changeUserInfoSelectors.genericGenderField).eq(0).click();
    cy.get(changeUserInfoSelectors.genericSelection).eq(2).click();
    cy.get(changeUserInfoSelectors.bloodTypeOption).click();
    cy.get(changeUserInfoSelectors.inputTextTest).clear().type('Just testing');
    cy.get(changeUserInfoSelectors.saveButton).eq(1).click();
    cy.get('body').should('contain', 'Successfully Saved');
    //cy.get('.oxd-toast');
  });

});