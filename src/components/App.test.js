import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the counter', () => {
  render(<App />);
  const counter = screen.getByTestId('counter');
  expect(counter).toBeInTheDocument();
});

test('renders a timer that starts at 00:00:00.00', () => {
  render(<App />);
  const timer = screen.getByTestId('timer');
  expect(timer).toBeInTheDocument();
  expect(timer).toHaveTextContent(/^00:00:00.00$/);
});

/*
App expectations:
* Shows a counter
* Counter starts at zero
* Shows a timer
* Shows a control area
* The control area has a reset button
* Tapping anywhere but the control area increments the counter
* Tapping the reset button resets the counter
*/