class ChangeUserInfo {

    userInfoSelectors() {

        let option = 27;
        let martialOption = 3;
        let bloodType = 3;

        const selectors = {
            //myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]',
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

    fillFullName(firstName, middleName, lastName) {
        cy.get(this.userInfoSelectors().firstNameField).clear().type(firstName);
        cy.get(this.userInfoSelectors().middleNameField).clear().type(middleName);
        cy.get(this.userInfoSelectors().lastNameField).clear().type(lastName);
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, driverLicenseExpiry) {
        cy.get(this.userInfoSelectors().employeeIdField).eq(4).clear().type(employeeId);
        cy.get(this.userInfoSelectors().otherIdField).eq(5).clear().type(otherId);
        cy.get(this.userInfoSelectors().driverLicenseField).eq(6).clear().type(driverLicenseNumber);
        cy.get(this.userInfoSelectors().genericDateField).eq(0).clear().type(driverLicenseExpiry);
        cy.get(this.userInfoSelectors().closeButtonDate).click();
    }

    fillEmployeeDetailsTwo() {
        cy.get(this.userInfoSelectors().genericSelection).eq(0).click();
        cy.get(this.userInfoSelectors().nationalityOption).click();
        cy.get(this.userInfoSelectors().genericSelection).eq(1).click();
        cy.get(this.userInfoSelectors().martialOption).click();
        cy.get(this.userInfoSelectors().genericDateField).eq(1).clear().type('2025-09-14');
        cy.get(this.userInfoSelectors().genericGenderField).eq(0).click();
    }

    fillEmployeeDetailsThree() {
        cy.get(this.userInfoSelectors().genericSelection).eq(2).click();
        cy.get(this.userInfoSelectors().bloodTypeOption).click();
        cy.get(this.userInfoSelectors().inputTextTest).clear().type('Just testing');
    }

    saveButton() {
        cy.get(this.userInfoSelectors().saveButton).eq(1).click();
        cy.get('body').should('contain', 'Successfully Saved');
    }

}

export default ChangeUserInfo;