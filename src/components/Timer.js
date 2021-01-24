import React from "react";
import PropTypes from "prop-types";

import "./Timer.css"

class Timer extends React.Component {
    componentDidMount() {
        this.updateTimeState(this.props.elapsedTime);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.elapsedTime !== this.props.elapsedTime) {
            this.updateTimeState(this.props.elapsedTime)
        }
    }

    static propTypes = {
        elapsedTime: PropTypes.number,
        settingMax: PropTypes.bool
    }

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    }

    updateTimeState = (millisecondsElapsed) => {
        let remainderTime = millisecondsElapsed;

        let hours = Math.floor(remainderTime / (60 * (60 * 1000)));
        remainderTime -= hours * 60 * 60 * 1000;

        let minutes = Math.floor(remainderTime / (60 * 1000));
        remainderTime -= minutes * 60 * 1000;

        let seconds = Math.floor(remainderTime / 1000);
        remainderTime -= seconds * 1000;

        let milliseconds = Math.round(remainderTime / 100);

        this.setState({
            hours,
            minutes,
            seconds,
            milliseconds
        });
    }

    render() {
        return (<div data-testid="timer-component">
            <time id="time" data-testid="time" data-elapsedtime={this.props.elapsedTime} className={this.props.settingMax ? "editable" : ""}>
                <span data-testid="hours">{this.state.hours < 10 ? "0" + this.state.hours : this.state.hours}</span>:
                <span data-testid="minutes">{this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes}</span>:
                <span data-testid="seconds">{this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</span>.
                <span data-testid="milliseconds">{this.state.milliseconds === 10 ? "0" : this.state.milliseconds}</span>
            </time>
        </div>);
    }
}

export default Timer;