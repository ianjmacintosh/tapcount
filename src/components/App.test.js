import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers("modern")
})

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

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
  const app = screen.getByTestId('app-component'),
    count = screen.getByTestId('count');

  userEvent.click(app)

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

test('clicking on the app starts the timer', () => {
  render(<App />);
  const time = screen.getByTestId('time'),
    app = screen.getByTestId('app-component');

  userEvent.click(app);

  expect(time).not.toHaveTextContent(/^00:00:00.00$/);
})

test('incrementing does not reset a running timer', () => {
  render(<App />);
  const time = screen.getByTestId('time'),
    app = screen.getByTestId('app-component'),
    timeMeasurement1 = parseInt(time.getAttribute("data-elapsedtime"), 10);

  expect(timeMeasurement1).toEqual(0);

  // Start the timer
  userEvent.click(app);

  // Wait 100ms
  jest.advanceTimersByTime(100);

  // Get the time
  const timeMeasurement2 = parseInt(time.getAttribute("data-elapsedtime"), 10);
  expect(timeMeasurement2).toEqual(100);

  // Click the app again
  userEvent.click(app);

  // Wait
  jest.advanceTimersByTime(100);

  // Get the time again
  const timeMeasurement3 = parseInt(time.getAttribute("data-elapsedtime"), 10);
  expect(timeMeasurement3).toEqual(200);
})

test('clicking on the reset timer button resets the timer', () => {
  render(<App />);
  const time = screen.getByTestId('time'),
    resetTimerButton = screen.getByTestId('timer-reset-button'),
    app = screen.getByTestId('app-component');

  userEvent.click(app);
  jest.advanceTimersByTime(1000);

  expect(time).not.toHaveTextContent(/^00:00:00.0$/);
  userEvent.click(resetTimerButton);

  expect(time).toHaveTextContent(/^00:00:00.0$/);
})