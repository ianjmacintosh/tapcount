import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the counter', () => {
  render(<App />);
  const counter = screen.getByTestId('counter-component');
  expect(counter).toBeInTheDocument();
});

test('renders a timer', () => {
  render(<App />);
  const timer = screen.getByTestId('timer-component');
  expect(timer).toBeInTheDocument();
});

/*
App expectations:
* Shows a counter
* Shows a timer
* Shows a control area
* The control area has a reset button
* Tapping anywhere but the control area increments the counter
* Tapping the reset button resets the counter
*/