import React from 'react';
import { mount } from '@cypress/react';
import Header from './Header';

describe('Header component', () => {
  beforeEach(() => {
    mount(<Header />);
  });

  it('should containt Site Name', () => {
    cy.get('h1')
      .should('contain', 'Site Name');
  });

  it('should have correct styles', () => {
    cy.get('.header')
      .should('have.css', 'position', 'sticky');

    cy.get('.header__title')
      .should('have.css', 'font-weight', '600');
  });

  it('should have styles added with media', () => {
    cy.get('.header')
      .should('have.css', 'display', 'flex');
  });
});
