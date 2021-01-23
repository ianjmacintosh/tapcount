import React from "react";
import PropTypes from "prop-types";

class Timer extends React.Component {
    static propTypes = {
        elapsedTime: PropTypes.number
    }

    getFormattedTime = (millisecondsElapsed) => {
        let remainderTime = millisecondsElapsed;

        let hours = Math.floor(remainderTime / (60 * (60 * 1000)));
        remainderTime -= hours * 60 * 60 * 1000;

        let minutes = Math.floor(remainderTime / (60 * 1000));
        remainderTime -= minutes * 60 * 1000;

        let seconds = Math.floor(remainderTime / 1000);
        remainderTime -= seconds * 1000;

        let milliseconds = Math.round(remainderTime / 100);

        return `${hours < 10 ? "0" + hours : hours}:` +
        `${minutes < 10 ? "0" + minutes : minutes}:` +
        `${seconds < 10 ? "0" + seconds : seconds}.` +
        `${milliseconds}`;
    }

    render() {
        return (<div data-testid="timer-component">
            <label htmlFor="timer">Timer: </label>
            <span id="time" data-testid="time">{this.getFormattedTime(this.props.elapsedTime)}</span>
        </div>);
    }
}

export default Timer;