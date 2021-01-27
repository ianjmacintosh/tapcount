import React from "react";
import PropTypes from "prop-types";

import "./Controls.css";

class Controls extends React.Component {
    static propTypes = {
        resetCount: PropTypes.func.isRequired,
        resetTime: PropTypes.func.isRequired,
        pauseTimer: PropTypes.func.isRequired,
        startTimer: PropTypes.func.isRequired,
        isTimerActive: PropTypes.bool,
        enterMaxMode: PropTypes.func
    }
    handleResetCounterClick = (e) => {
        e.stopPropagation();
        this.props.resetCount();
    }

    handleResetTimerClick = (e) => {
        e.stopPropagation();
        this.props.resetTime();
    }

    handleResetButtonClick = (e) => {
        e.stopPropagation();

        this.props.pauseTimer();
        this.props.openPanel();
        // this.props.resetTime();
        // this.props.resetCount();
    }

    handleMaxClick = (e) => {
        e.stopPropagation();
        this.props.enterMaxMode();
    }

    handlePauseButtonClick = (e) => {
        e.stopPropagation();
        if (this.props.isTimerActive) {
            this.props.pauseTimer();
        } else {
            this.props.startTimer();
        }
    }

    render() {
        return (<div data-testid="controls-component" className="controls">
            <ul>
                {/* <li>
                    <button onClick={this.handleMaxClick} data-testid="max-button">Set Max</button>
                </li> */}
                <li>
                    <button onClick={this.handlePauseButtonClick} data-testid="pause-button">Start/Stop</button>
                </li>
                <li>
                    <button onClick={this.handleResetButtonClick} data-testid="reset-button">Reset</button>
                </li>
            </ul>
        </div>)
    }
}

export default Controls;