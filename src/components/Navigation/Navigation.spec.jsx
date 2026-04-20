import React from 'react';
import { mount } from 'cypress/react18';
import Navigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    mount(<Navigation />);
  });

  it('renders the navigation element', () => {
    cy.get('nav').should('exist');
  });

  it('renders at least one navigation link', () => {
    cy.get('nav a').should('have.length.at.least', 1);
  });

  it('ensures navigation links have valid href attributes', () => {
    cy.get('nav a').each($link => {
      cy.wrap($link).should('have.attr', 'href').and('not.match', /^\s*$/);
    });
  });

  it('contains About, Services, and Contact links', () => {
    cy.get('a[href="#about"]').should('have.text', 'About');
    cy.get('a[href="#services"]').should('have.text', 'Services');
    cy.get('a[href="#contact"]').should('have.text', 'Contact');
  });
});
