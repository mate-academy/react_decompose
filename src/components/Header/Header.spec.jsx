import React from 'react';
import { mount } from '@cypress/react';
import Header from './Header';

describe('Header component', () => {
  it('should containt Site Name', () => {
    mount(<Header />);

    cy.get('h1')
      .should('contain', 'Site Name');
  });

  it('should contain About link', () => {
    mount(<Header />);

    cy.get('[href="#about"]')
      .should('contain', 'About');
  });

  it('should contain Services link', () => {
    mount(<Header />);

    cy.get('[href="#services"]')
      .should('contain', 'Services');
  });

  it('should contain Contact link', () => {
    mount(<Header />);

    cy.get('[href="#contact"]')
      .should('contain', 'Contact');
  });
});
