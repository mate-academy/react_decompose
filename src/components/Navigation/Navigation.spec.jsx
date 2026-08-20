import Navigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    cy.mount(<Navigation />);
  });

  it('should contain About link', () => {
    cy.get('[href="#about"]').should('exist');
  });

  it('should contain Services link', () => {
    cy.get('[href="#services"]').should('exist');
  });

  it('should contain Contact link', () => {
    cy.get('[href="#contact"]').should('exist');
  });

  it('should have correct styles', () => {
    cy.get('.navigation__link').eq(0).should('have.css', 'opacity', '0.7');
  });

  it('should have styles added with media', () => {
    cy.get('.navigation__link').should(
      'have.css',
      'text-decoration-line',
      'none',
    );
  });
});
