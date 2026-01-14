import React from 'react';
import { mount } from '@cypress/react18';
import TestedArticle from './Article';

describe('Article component', () => {
  beforeEach(() => {
    mount(<TestedArticle />);
  });

  it('should exist', () => {
    cy.get('.article').should('exist');
  });

  it('should have title', () => {
    cy.get('.article__title').should('exist');
  });

  it('should have text', () => {
    cy.get('.article__paragraph, .article__text').should('exist');
  });
});
