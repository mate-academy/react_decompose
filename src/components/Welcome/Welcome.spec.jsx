import React from 'react';
import { mount } from '@cypress/react';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('should contain Sticky Header', () => {
    mount(<Welcome />);

    cy.get('.welcome__text')
      .should('contain', 'Sticky Header!');
  });
});
