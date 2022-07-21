import React from 'react';
import { render, screen } from '@testing-library/react';
import Repositories from './Repositories';

test('renders learn react link', () => {
  render(<Repositories/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
