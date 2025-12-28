import React from 'react';
import { mount } from '@cypress/react18';
import TestedNavigation from './Navigation';

describe('Navigation component', () => {
  beforeEach(() => {
    mount(<TestedNavigation />);
  });

  it('should contain Navigation', () => {
    cy.get('.navigation').should('exist');
  });

  it('should contain 3 links', () => {
    cy.get('a.navigation__link').should('have.length', 3);
  });

  it('should have correct styles', () => {
    cy.get('.navigation__link')
      .should('have.css', 'display', 'inline-block')
      .should('have.css', 'opacity', '0.7')
      .should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
