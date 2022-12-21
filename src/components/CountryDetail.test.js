import { render, screen } from '@testing-library/react';
import CountryDetail from './CountryDetail';
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  render(<CountryDetail />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/Back/i);
  expect(linkElement).toBeInTheDocument();
});