import userData from "../fixtures/userData.json"
import LoginPage from "../pages/LoginPage"
import ChangeUserInfo from "../pages/ChangeUserInfo";
import MenuPage from "../pages/MenuPage";

const loginPage = new LoginPage();
const changeUserInfo = new ChangeUserInfo();
const menuPage = new MenuPage();

describe('change user info', () => {

    it('User info update - Success', () => {

    // login
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password);
    menuPage.accessMyInfoPage();
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    //cy.get(selectorsList.topBarTitle).contains('Dashboard');

    // update user
    changeUserInfo.fillFullName("José", "Silva", "Santos");
    changeUserInfo.fillEmployeeDetails("123456789", "ABC123", "987-548", "2025-15-07");
    changeUserInfo.fillEmployeeDetailsTwo();
    changeUserInfo.fillEmployeeDetailsThree();
    changeUserInfo.saveButton();
  });

});