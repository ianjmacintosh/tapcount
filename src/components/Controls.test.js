import { render, screen } from '@testing-library/react';
import Controls from './Controls';

test('controls are labeled properly', () => {
    render(<Controls resetCount={jest.fn()} resetTime={jest.fn()} pauseTimer={jest.fn()} startTimer={jest.fn()} />);
    const controls = screen.getByTestId('controls-component');
    expect(controls).toBeInTheDocument();
})

// * The control area has a reset button
// * Tapping anywhere but the control area increments the counter
// * Tapping the reset button resets the counter