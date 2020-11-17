/// <reference types="Cypress" />

describe ('Tests', () => {
    before(()=> {
        cy.visit("/");
    });

    it(`Header looks good.`, () => {
        cy.contains('Sticky Header!').should('have.attr', 'class', 'welcome__text');
        cy.contains('Site Name').should('have.attr', 'class', 'header__title');
    });

    it(`Navigation panel also.`, () => {
        cy.get('.header > .navigation').children().should('have.length', '3');
        cy.contains('About').should('have.attr', 'class', 'navigation__link').and('have.attr', 'href', '#about');
        cy.contains('Services').should('have.attr', 'class', 'navigation__link').and('have.attr', 'href', '#services');
        cy.contains('Contact').should('have.attr', 'class', 'navigation__link').and('have.attr', 'href', '#contact');
        cy.get('.article').children().should('have.length', '6');
    });

    it(`Seems like article too.`, () => {
        cy.get('.article').children().should('have.length', '6');
    });
});