// WRITE TESTS HERE

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the welcome block', () => {
    cy.get('section.welcome').should('exist');
  });

  it('should have the header', () => {
    cy.get('header.header').should('exist');
  });

  it('should have the article', () => {
    cy.get('article.article').should('exist');
  });
});
