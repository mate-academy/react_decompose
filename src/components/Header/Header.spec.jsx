import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders the site title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Site Name/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Header />);
    const aboutLink = screen.getByText(/About/i);
    const servicesLink = screen.getByText(/Services/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
