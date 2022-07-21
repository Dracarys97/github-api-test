import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const app = document.getElementById("app");
  expect(app).toBeInTheDocument();
});
