import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Navigation Component', () => {
  it('should render navigation links', () => {
    render(<Navigator />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('should have correct hrefs for navigation links', () => {
    render(<Navigation />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '#about');
    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink).toHaveAttribute('href', '#services');
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', '#contact');
  });
});
