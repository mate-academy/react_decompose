import React from 'react';
import { mount } from '@cypress/react18';
import Navigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    mount(<Navigation />);
  });

  it('should contain About link', () => {
    cy.get('[href="#about"]').should('have.text', 'About');
  });

  it('should contain Services link', () => {
    cy.get('[href="#services"]').should('have.text', 'Services');
  });

  it('should contain Contact link', () => {
    cy.get('[href="#contact"]').should('have.text', 'Contact');
  });

  it('should have correct styles', () => {
    cy.get('.navigation__link').should('have.css', 'opacity', '0.7');
    cy.get('.navigation__link').should('have.css', 'text-decoration', 'none');
  });
});
