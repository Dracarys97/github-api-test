import React from 'react';
import { render, screen } from '@testing-library/react';
import UserForm from './User-form';

test('renders learn react link', () => {
  render(<UserForm searchFunc={}/>);
  const input = document.getElementById("user-input");
  shallow
  expect(input).toBeInTheDocument();
});
