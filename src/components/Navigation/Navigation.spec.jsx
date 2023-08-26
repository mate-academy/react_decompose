import React from 'react';
import { mount } from '@cypress/react';
import TestedNavigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    mount(<TestedNavigation />);
  });

  it('should contain Sticky Header', () => {
    cy.get('.navigation__text')
      .should('have.text', 'Sticky Header!');
  });

  it('should have correct styles', () => {
    cy.get('.navigation')
      .should('have.css', 'background-color', 'rgb(255, 127, 80)');

    cy.get('.navigation__text')
      .should('have.css', 'text-align', 'center');
  });
});
