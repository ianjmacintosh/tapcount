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
  const counterReset = screen.getByTestId('reset-button');
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
    resetButton = screen.getByTestId('reset-button'),
    app = screen.getByTestId('app-component');

  userEvent.click(app);
  jest.advanceTimersByTime(1000);

  expect(time).not.toHaveTextContent(/^00:00:00.0$/);
  userEvent.click(resetButton);

  expect(time).toHaveTextContent(/^00:00:00.0$/);
})

test('pause button stops timer', () => {
  // Arrange
  // Load the component
  render(<App />)

  // Store the useful pieces in memory
  let app = screen.getByTestId('app-component'),
    pauseButton = screen.getByTestId('pause-button'),
    getElapsedTime = () => parseInt(screen.getByTestId('time').getAttribute('data-elapsedtime'), 10);

  // Act
  // Click the app area to start the timer
  expect(getElapsedTime()).toEqual(0);
  userEvent.click(app);

  // Assert
  // The pause button invites user to pause
  expect(pauseButton).toHaveTextContent(/^Pause Timer$/);

  // Clicking it stops the timer
  jest.advanceTimersByTime(1000);
  expect(getElapsedTime()).toEqual(1000);

  userEvent.click(pauseButton);
  jest.advanceTimersByTime(5000);
  expect(getElapsedTime()).toEqual(1000);

  // The pause button invites user to resume
  expect(pauseButton).toHaveTextContent(/^Resume Timer$/);

  // Clicking it again starts the timer where it left off
  userEvent.click(pauseButton);
  jest.advanceTimersByTime(1000);
  expect(getElapsedTime()).toEqual(2000);
})

test('counting resumes a paused timer', () => {
  // Arrange
  // Load the component
  render(<App />)

  // Store the useful pieces in memory
  let app = screen.getByTestId('app-component'),
    pauseButton = screen.getByTestId('pause-button'),
    getElapsedTime = () => parseInt(screen.getByTestId('time').getAttribute('data-elapsedtime'), 10);

  // Act
  // Click the app area to start the timer
  expect(getElapsedTime()).toEqual(0);
  userEvent.click(app);

  // Assert
  // The pause button invites user to pause
  expect(pauseButton).toHaveTextContent(/^Pause Timer$/);

  // Clicking it stops the timer
  jest.advanceTimersByTime(1000);
  expect(getElapsedTime()).toEqual(1000);

  userEvent.click(pauseButton);
  jest.advanceTimersByTime(5000);
  expect(getElapsedTime()).toEqual(1000);

  // Clicking the app again starts the timer where it left off
  userEvent.click(app);
  jest.advanceTimersByTime(1000);
  expect(getElapsedTime()).toEqual(2000);

  // The pause button is aware that the timer has resumed
  expect(pauseButton).toHaveTextContent(/^Pause Timer$/);
})

// test('max button applies "ready-to-edit" styles to count and time', () => {
//   render(<App />);

//   const maxButton = screen.getByTestId('max-button'),
//       count = screen.getByTestId('count'),
//       time = screen.getByTestId('time');

//     expect(count).not.toHaveClass('editable');
//     expect(time).not.toHaveClass('editable');

//   userEvent.click(maxButton);

//   expect(count).toHaveClass('editable');
//   expect(time).toHaveClass('editable');
// })

// test('"ready-to-edit" styles can be removed from count and time', () => {
//   render(<App />);

//   const app = screen.getByTestId('app-component'),
//     maxButton = screen.getByTestId('max-button'),
//       count = screen.getByTestId('count'),
//       time = screen.getByTestId('time');

//     expect(count).not.toHaveClass('editable');
//     expect(time).not.toHaveClass('editable');

//   userEvent.click(maxButton);

//   expect(count).toHaveClass('editable');
//   expect(time).toHaveClass('editable');

//   userEvent.click(app);

//   expect(count).not.toHaveClass('editable');
//   expect(time).not.toHaveClass('editable');
// })