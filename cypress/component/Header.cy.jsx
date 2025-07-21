// cypress/component/Header.cy.jsx
import React from 'react';
import { mount } from 'cypress/react18';
import Header from '../../src/components/Header/Header';

describe('Header component', () => {
  it('should render the Header and Navigation', () => {
    mount(<Header />);
    cy.get('header').should('exist');
    cy.get('nav').should('exist'); // assume que o componente Navigation usa <nav>
  });
});
