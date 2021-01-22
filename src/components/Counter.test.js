import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders a counter that starts at 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');

  expect(count).toHaveTextContent(/^0$/);
});