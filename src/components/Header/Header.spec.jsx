import React from 'react';
import { mount } from '@cypress/react18';
import Header from './Header';

describe('Header component', () => {
  beforeEach(() => {
    cy.viewport(1280, 720); // ставимо розмір для перевірок
    mount(<Header />);
  });

  it('should contain Site Name', () => {
    cy.get('h1').should('contain', 'Site Name');
  });

  it('should contain About link', () => {
    cy.get('[href="#about"]').should('have.text', 'About');
  });

  it('should contain Services link', () => {
    cy.get('[href="#services"]').should('have.text', 'Services');
  });

  it('should contain Contact link', () => {
    cy.get('[href="#contact"]').should('have.text', 'Contact');
  });

  it('should render header structure', () => {
    cy.get('.header').should('exist');
    cy.get('.header__title').should('exist');
    cy.get('.navigation__link').should('have.length', 3);
  });

  // Якщо потрібна перевірка медіа-стилів — краще винести в e2e, бо component test це не симулює коректно
});
