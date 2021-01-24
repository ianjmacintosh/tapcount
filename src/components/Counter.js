import React from "react";
import PropTypes from "prop-types";

import "./Counter.css"

class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        setCount: PropTypes.func.isRequired,
        settingMax: PropTypes.bool
    }

    render() {
        return (<div className="counter" data-testid="counter-component">
            <span id="count" data-testid="count" className={this.props.settingMax ? "editable" : ""}>{this.props.count}</span>
        </div>);
    }
}

export default Counter;