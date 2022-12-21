import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<div data-testid="card" />);
  const linkElement = screen.getByTestId('card');
  expect(linkElement).toBeInTheDocument();
});