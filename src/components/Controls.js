import React from "react";
import PropTypes from "prop-types";

import "./Controls.css";

class Controls extends React.Component {
    static propTypes = {
        resetCount: PropTypes.func.isRequired,
        resetTime: PropTypes.func.isRequired,
        pauseTimer: PropTypes.func.isRequired,
        startTimer: PropTypes.func.isRequired,
        isTimerPaused: PropTypes.bool,
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

    handleResetBothClick = (e) => {
        e.stopPropagation();
        this.props.resetTime();
        this.props.resetCount();
    }

    handleMaxClick = (e) => {
        e.stopPropagation();
        this.props.enterMaxMode();
    }

    handlePauseButtonClick = (e) => {
        e.stopPropagation();
        if (this.props.isTimerPaused) {
            this.props.startTimer();
        } else {
            this.props.pauseTimer();
        }
    }

    render() {
        return (<div data-testid="controls-component" id="controls">
            <ul>
                {/* <li>
                    <button onClick={this.handleMaxClick} data-testid="max-button">Set Max</button>
                </li> */}
                <li>
                    <button onClick={this.handlePauseButtonClick} data-testid="pause-button">{this.props.isTimerPaused ? "Resume Timer" : "Pause Timer"}</button>
                </li>
                <li>
                    <button onClick={this.handleResetBothClick} data-testid="reset-button">Reset</button>
                </li>
            </ul>
        </div>)
    }
}

export default Controls;