import { mount } from 'cypress/react';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('should render navigation', () => {
    mount(<Navigation />);
    cy.get('[data-cy="navigation"]').should('be.visible');
  });
});
