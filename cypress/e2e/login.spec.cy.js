import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage.js"

const loginPage = new LoginPage();


describe('login spec', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password);
    loginPage.checkDashboardTitle();
  });

  it.only('Login - fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.userName, userData.userFail.password);
    loginPage.checkInvalidCredentialMessage();
  });

});