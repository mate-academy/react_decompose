import React from 'react';
import { mount } from '@cypress/react';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  beforeEach(() => {
    mount(<Welcome />);
  });

  it('should contain Sticky Header', () => {
    cy.get('.welcome__text').should('have.text', 'Sticky Header!');
  });

  it('should have correct styles', () => {
    cy.get('.welcome').should(
      'have.css',
      'background-color',
      'rgb(255, 127, 80)',
    );

    cy.get('.welcome__text').should('have.css', 'text-align', 'center');
  });
});
