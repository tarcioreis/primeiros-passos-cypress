class LinksPage {

    selectors = {
        myInfoLink: '[href="/web/index.php/pim/viewMyDetails"]'
    }

    accessMyInfo() {
        cy.get(this.selectors.myInfoLink).click();
    }

}

export default LinksPage;