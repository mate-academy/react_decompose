describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have "Welcome" component', () => {
    cy.get('.welcome');
  });

  it('should have "Sticky Header!" welcome text', () => {
    cy.get('.welcome__text').should('contain', 'Sticky Header!');
  });

  it('should have "Header" component', () => {
    cy.get('.header');
  });

  it('should have header title "Site Name"', () => {
     cy.get('.header__title').should('contain', 'Site Name');
   });

  it('should have "Navigation" component', () => {
    cy.get('.navigation__link');
  });

  it('should have navigation link "About"', () => {
    cy.get('[href="#about"]').should('contain', 'About');
  });

  it('should have navigation link "Services"', () => {
    cy.get('[href="#services"]').should('contain', 'Services');
  });

  it('should have navigation link "Contact"', () => {
    cy.get('[href="#contact"]').should('contain', 'Contact');
  });

  it('should have "Article" component', () => {
    cy.get('.article');
  });

  it('should have an article paragraph', () => {
    cy.get('.article__paragraph');
  });
});
