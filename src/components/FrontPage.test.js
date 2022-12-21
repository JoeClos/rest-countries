import { render, screen } from '@testing-library/react';
import FrontPage from './FrontPage';

test('renders learn react link', () => {
  render(<FrontPage />);
  const linkElement = screen.getByText(/Population/i);
  expect(linkElement).toBeInTheDocument();
});