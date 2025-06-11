// src/components/Navigation/Navigation.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Importa o componente Navigation do seu arquivo de implementação REAL
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('should render all navigation links', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('should have correct href attributes for each link', () => {
    render(<Navigation />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '#about');

    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink).toHaveAttribute('href', '#services');

    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', '#contact');
  });
});