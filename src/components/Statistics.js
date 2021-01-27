import React from "react";
import PropTypes from "prop-types";

import './Statistics.css';

class Statistics extends React.Component {
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
        return (<span data-testid="average-component">
            <table>
                    <caption>Session Statistics</caption>
                    <tbody>
                        <tr>
                            <th scope="row">Speed</th>
                            <td>{this.average()}/min</td>
                        </tr>
                        <tr>
                            <th scope="row">Duration</th>
                            <td>{this.props.duration}</td>
                        </tr>
                    </tbody>
                </table>
        </span>);
    }
}

export default Statistics;