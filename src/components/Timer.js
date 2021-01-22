import React from "react";

class Timer extends React.Component {
    render() {
        return (<div data-testid="timer-component">
            <label htmlFor="timer">Timer: </label>
            <span id="time" data-testid="time">00:00:00.00</span>
        </div>);
    }
}

export default Timer;