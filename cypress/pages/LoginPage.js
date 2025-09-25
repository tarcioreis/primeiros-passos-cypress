class LoginPage {

    selectorsLogin() {
        const selectorsList = {
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            topBarTitle: '.oxd-topbar-header-breadcrumb > .oxd-text',
            location: '/web/index.php/dashboard/index',
            invalidCredentialAlert: '.oxd-alert'
        }

        return selectorsList;
    }

    accessLoginPage() {
        cy.visit('/auth/login');
    }

    loginWithUser(userName, password) {
        cy.get(this.selectorsLogin().userNameField).type(userName);
        cy.get(this.selectorsLogin().passwordField).type(password);
        cy.get(this.selectorsLogin().loginButton).click();
    }

    checkInvalidCredentialMessage() {
        cy.get(this.selectorsLogin().invalidCredentialAlert);
    }

    checkDashboardTitle() {
        cy.location('pathname').should('equal', this.selectorsLogin().location);
        cy.get(this.selectorsLogin().topBarTitle).contains('Dashboard');
    }
}

export default LoginPage;