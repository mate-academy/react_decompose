import React from 'react';
import { mount } from '@cypress/react';
import Header from './Navigation';

describe('Header component', () => {
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
