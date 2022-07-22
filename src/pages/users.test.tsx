import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Users from '../../pages/users';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  }
}));
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn()
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null)
  }));

test('goes back', () => {
  render(<Users/>);

  fireEvent.click(screen.getByTestId("back-button"));
  expect(useRouter).toHaveBeenCalled();
});
test('renders component', () => {
  render(<Users/>);

  const linkElement = document.getElementById("users");
  expect(linkElement).toBeInTheDocument();
});
