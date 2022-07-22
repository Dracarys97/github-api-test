import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from './Buttons';
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
test('renders buttons', () => {
  render(<Buttons />);
  const linkElement = screen.getByText('Users');
  expect(linkElement).toBeInTheDocument();
});

test('redirect to repositories', () => {
  render(<Buttons />);
  fireEvent.click(screen.getByText('Users'));
  expect(useRouter).toHaveBeenCalled();
});
test('redirect to repositories', () => {
  render(<Buttons />);
  fireEvent.click(screen.getByText('Repositories'));
  expect(useRouter).toHaveBeenCalled();
});
