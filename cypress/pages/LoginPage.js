class LoginPage {

    selectorsLogin() {
        const selectorsList = {
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
            myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]'
        }

        return selectorsList;
    }

    accessLoginPage() {
        cy.visit('/auth/login');
    }

    loginSuccessUser(userName, password) {
        cy.get(this.selectorsLogin().userNameField).type(userName);
        cy.get(this.selectorsLogin().passwordField).type(password);
        cy.get(this.selectorsLogin().loginButton).click();
    }
}

export default LoginPage;