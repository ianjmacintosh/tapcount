import { getByTestId, render, screen } from '@testing-library/react';
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
});

test('clicking on the document starts the timer', () => {
  render(<App />);
  const time = screen.getByTestId('time'),
    app = screen.getByTestId('app-component');

  userEvent.click(app);

  expect(time).not.toHaveTextContent(/^00:00:00.00$/);
})

test('the timer doesn\'t reset if it\'s already running', () => {
  jest.useFakeTimers();
  render(<App />);
  const time = screen.getByTestId('time'),
    app = screen.getByTestId('app-component');

  // Start the timer
  userEvent.click(app);

  // Wait
  jest.advanceTimersByTime(100000); // This doesn't work as expected, but does what I need

  // Get the time
  const secondsBeforeClicking = parseInt(time.getAttribute("data-elapsedtime"), 10);

  // Click the app again
  userEvent.click(app);

  // Wait
  jest.advanceTimersByTime(100);

  // Make sure the timer isn't less than the time it was when we checked before
  const secondsAfterClicking = parseInt(time.getAttribute("data-elapsedtime"), 10);

  jest.runOnlyPendingTimers();

  expect(secondsAfterClicking).toBeGreaterThan(secondsBeforeClicking);
  jest.useRealTimers();
})