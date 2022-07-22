import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from '../../pages/users';

test('renders learn react link', () => {
  render(<Users />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
