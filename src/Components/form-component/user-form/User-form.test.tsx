import React from 'react';
import { render, screen } from '@testing-library/react';
import UserForm from './User-form';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<UserForm/>);
  const input = document.getElementById("user-input");
  expect(input).toBeInTheDocument();
});
