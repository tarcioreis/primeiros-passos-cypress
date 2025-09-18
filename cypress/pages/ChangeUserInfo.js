class ChangeUserInfo {

    userInfoSelectors() {

        let option = 27;
        let martialOption = 3;
        let bloodType = 3;

        const selectors = {
            myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]',
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

        return selectors;
    }

    updateUserInfo() {
        cy.get(this.userInfoSelectors().myInfoLink).click();
        cy.get(this.userInfoSelectors().firstNameField).clear().type("José");
        cy.get(this.userInfoSelectors().middleNameField).clear().type("Santos");
        cy.get(this.userInfoSelectors().lastNameField).clear().type("Silva");
        cy.get(this.userInfoSelectors().employeeIdField).eq(4).clear().type("123456789");
        cy.get(this.userInfoSelectors().otherIdField).eq(5).clear().type("ABC123");
        cy.get(this.userInfoSelectors().driverLicenseField).eq(6).clear().type("12345678");
        cy.get(this.userInfoSelectors().genericDateField).eq(0).clear().type("2025-10-09");
        cy.get(this.userInfoSelectors().closeButtonDate).click();
        cy.get(this.userInfoSelectors().genericSelection).eq(0).click();
        cy.get(this.userInfoSelectors().nationalityOption).click();
        cy.get(this.userInfoSelectors().genericSelection).eq(1).click();
        cy.get(this.userInfoSelectors().martialOption).click();
        cy.get(this.userInfoSelectors().genericDateField).eq(1).clear().type('2025-09-14');
        cy.get(this.userInfoSelectors().genericGenderField).eq(0).click();
        cy.get(this.userInfoSelectors().genericSelection).eq(2).click();
        cy.get(this.userInfoSelectors().bloodTypeOption).click();
        cy.get(this.userInfoSelectors().inputTextTest).clear().type('Just testing');
        cy.get(this.userInfoSelectors().saveButton).eq(1).click();
        cy.get('body').should('contain', 'Successfully Saved');
        //cy.get('.oxd-toast');
    }

}

export default ChangeUserInfo;