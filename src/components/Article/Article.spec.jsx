import React from 'react';
import { mount } from '@cypress/react';
import { Article } from './Article';

describe('Article component', () => {
  it('should contain Headline', () => {
    mount(<Article />);

    cy.get('h1')
      .should('contain', 'Headline');
  });

  it('should contain 5 paragraphs', () => {
    mount(<Article />);

    cy.get('p')
      .should('have.length', 5);
  });
});
