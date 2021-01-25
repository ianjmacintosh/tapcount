import React from "react";
import PropTypes from "prop-types";

import './Average.css';

class Average extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        elapsedTime: PropTypes.number,
    }

    lastMeasurementTime = Date.now();

    average() {
        let count = this.props.count,
            elapsedTime = this.props.elapsedTime,
            average = 0;

        if (elapsedTime !== 0) {
            average = Math.round((count / elapsedTime * 1000 * 60 * 1000) / 1000);
        }

        return average;
    }

    render() {
        return (<div className="average" data-testid="average-component">
            Speed: {this.average()}/min
        </div>);
    }
}

export default Average;