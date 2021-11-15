/// <reference types="cypress" />

context('Testing pages', () => {
    beforeEach('Visit website', () => {
        cy.visit('http://localhost:8081/');
        cy.viewport(1440, 527);
        cy.get('#input-10').type('corina');
        cy.get('#input-14').type('corina');
        cy.get('.v-btn').click();
    })
    it('Test nav bar links', () => {
        cy.get('.container > [href="/info"] > .v-btn__content').click();
        cy.get('.text-h2').contains('About us');
        cy.get('.container > [href="/contacts"] > .v-btn__content').click();
        cy.get('.text-h2').contains('Contacts');
        cy.get('.v-avatar > .v-icon').click();
        cy.get('#list-item-172').contains('Logout');
        cy.get('.pa-5 > .v-input > .v-input__control').click();
        cy.get('.container--fluid > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('have.class', 'theme--dark');
        cy.reload();
        cy.get('.container--fluid > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('have.class', 'theme--dark');
      })
    it('Test categories', () => {
        cy.get('.hidden-md-and-down > .v-item-group > :nth-child(1) > .v-expansion-panel-header').click();
        cy.get(':nth-child(26) > .v-expansion-panel-content > .v-expansion-panel-content__wrap > .v-list-item > .v-list-item__content > .v-list-item__title > .text--primary').as('subcategories');
        cy.get('@subcategories').should('have.attr', 'href');
        cy.get('@subcategories').click();
        
    })
    it('Test search', () => {
        const searchProduct1 = 'mercedes';
        const searchProduct2 = 'opel';
        cy.get('.v-input__slot').type(searchProduct1).type('{enter}');
        cy.get('.v-menu__content').should('be.visible')
        cy.get('[infinite-scroll-distance="10"]').contains(searchProduct1, { matchCase: false });
        cy.get('.v-input__slot').clear();
        cy.get('.v-input__slot').type(searchProduct2);
        cy.get('.v-menu__content').should('be.visible');
        const appendix = ' astra';
        cy.get('.v-menu__content').contains(searchProduct2 + appendix).click();
        cy.get('[infinite-scroll-distance="10"]').contains(searchProduct2 + appendix, { matchCase: false });
        cy.url().should('include', searchProduct2);
        cy.url().should('include', appendix.trim());
    })
    it('Test product details', () => {
        cy.get('.hidden-md-and-down > .v-item-group > :nth-child(1) > .v-expansion-panel-header').click();
        cy.get(':nth-child(26) > .v-expansion-panel-content > .v-expansion-panel-content__wrap > .v-list-item > .v-list-item__content > .v-list-item__title > .text--primary').as('subcategories');
        cy.get('@subcategories').click();
        cy.get('[infinite-scroll-distance="10"] > :nth-child(1) > :nth-child(7)').click();
    })
    
})