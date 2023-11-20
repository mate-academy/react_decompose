import React from 'react';
import { mount } from '@cypress/react';
import TestedNavigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    mount(<TestedNavigation />);
  });

  it('should contain About link', () => {
    cy.get('[href="#about"]')
      .should('have.text', 'About');
  });

  it('should contain Services link', () => {
    cy.get('[href="#services"]')
      .should('have.text', 'Services');
  });

  it('should contain Contact link', () => {
    cy.get('[href="#contact"]')
      .should('have.text', 'Contact');
  });

  it('should have correct styles', () => {
    cy.get('.navigation__link')
      .eq(0).should('have.css', 'opacity', '0.7');
  });

  it('should have correct styles', () => {
    cy.get('.navigation__link')
      .eq(0).should('have.css', 'opacity', '0.7');
  });
});
