import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders navigation links', () => {
  render(<Navigation />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
