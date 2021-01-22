import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a counter that starts at 0', () => {
  render(<App />);
  const counter = screen.getByTestId('counter');
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent(/^0$/);
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