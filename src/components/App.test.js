import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('renders controls', () => {
    render(<App />);
    const controls = screen.getByTestId('controls-component');
    expect(controls).toBeInTheDocument();
});

test('clicking on the document increments the counter', () => {
  render(<App />);
  const count = screen.getByTestId('count');

  userEvent.click(document.querySelector('body'))

  // Assert
  expect(count).toHaveTextContent(/^1$/);
});

test('clicking on the counter reset button resets the counter', () => {
  render(<App />);
  const counterReset = screen.getByTestId('counterResetButton');
  const count = screen.getByTestId('count');
  userEvent.click(counterReset);

  expect(count).toHaveTextContent(/^0$/);
})