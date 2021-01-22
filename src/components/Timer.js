import React from "react";

class Timer extends React.Component {
    render() {
        return (<div data-testid="timer-component">
            <label htmlFor="timer">Timer: </label>
            <span id="timer" data-testid="timer">00:00:00.00</span>
        </div>)
    }
}

export default Timer;