import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from './Buttons';


test('renders learn react link', () => {
  render(<Buttons />);
  const linkElement = screen.getByText('Users');
  expect(linkElement).toBeInTheDocument();
});
test('redirect to users', () => {
  render(<Buttons />);
  fireEvent.click(screen.getByText('Users'))
});
