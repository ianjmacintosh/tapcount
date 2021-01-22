import React from "react";
import PropTypes from "prop-types";

class Timer extends React.Component {
    static propTypes = {
        elapsedTime: PropTypes.number
    }
    getFormattedTime = (milliseconds) => {
        let formattedTime = {
            seconds: milliseconds % 1000
        }

        if (milliseconds === 0) {
            return `00:00:00.00`;
        } else {
            return `00:00:${formattedTime.seconds}.00`;
        }
    }

    render() {
        return (<div data-testid="timer-component">
            <label htmlFor="timer">Timer: </label>
            <span id="time" data-testid="time">{this.getFormattedTime(this.props.elapsedTime)}</span>
        </div>);
    }
}

export default Timer;