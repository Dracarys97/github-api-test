import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './Repository-form';

test('renders learn react link', () => {
  render(<List/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
