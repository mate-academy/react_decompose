import React from 'react';
import { mount } from '@cypress/react';
import Header from './Header';

describe('Header component', () => {
  beforeEach(() => {
    mount(<Header />);
  });

  it('should contain Site Name', () => {
    cy.get('h1')
      .should('contain', 'Site Name');
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
    cy.get('.header')
      .should('have.css', 'position', 'sticky');

    cy.get('.header__title')
      .should('have.css', 'font-weight', '600');

    cy.get('.navigation__link')
      .eq(0).should('have.css', 'opacity', '0.7');
  });

  it('should have styles added with media', () => {
    cy.get('.header')
      .should('have.css', 'display', 'flex');
  });
});
