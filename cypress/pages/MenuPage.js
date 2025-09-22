class MenuPage {

    menuSelectors() {
        const selectors = {
            adminLink: '[href="/web/index.php/admin/viewAdminModule"]',
            pimLink: '[href="/web/index.php/pim/viewPimModule"]',
            leaveLink: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeLink: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentLink: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceLink: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardLink: '[href="/web/index.php/dashboard/index"]'
        }

        return selectors;
    }

    accessAdminPage() {
        cy.get(this.menuSelectors().adminLink).click();
    }

    accessPIMPage() {
        cy.get(this.menuSelectors().pimLink).click();
    }

    accessLeavePage() {
        cy.get(this.menuSelectors().leaveLink).click();
    }

    accessTimePage() {
        cy.get(this.menuSelectors().timeLink).click();
    }

    accessRecruitmentPage() {
        cy.get(this.menuSelectors().recruitmentLink).click();
    }

    accessMyInfoPage() {
        cy.get(this.menuSelectors().myInfoLink).click();
    }

    accessPerformancePage() {
        cy.get(this.menuSelectors().performanceLink).click();
    }

    checkDashboardPage() {
        cy.get(this.menuSelectors().dashboardLink).should('contain', 'Dashboard');
    }

}

export default MenuPage;