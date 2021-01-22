import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('renders a counter that starts at 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');

  expect(count).toHaveTextContent(/^0$/);
});

test('clicking on the document increments the counter', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');

  userEvent.click(document.querySelector('body'))

  // Assert
  expect(count).toHaveTextContent(/^1$/);
});