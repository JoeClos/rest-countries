import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<input data-testid="search-input" />);
  const linkElement = screen.getByTestId("search-input");
  expect(linkElement).toBeInTheDocument();
});