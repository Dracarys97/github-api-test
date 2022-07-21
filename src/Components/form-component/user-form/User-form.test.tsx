import React from 'react';
import { render, screen } from '@testing-library/react';
import UserForm from './User-form';

test('renders learn react link', () => {
  render(<UserForm/>);
  const input = document.getElementById("user-input");
  expect(input).toBeInTheDocument();
});
