import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        setCount: PropTypes.func.isRequired,
        settingMax: PropTypes.bool
    }

    render() {
        return (<div data-testid="counter-component">
            <label htmlFor="count">Count: </label>
            <span id="count" data-testid="count" className={this.props.settingMax ? "editable" : ""}>{this.props.count}</span>
        </div>);
    }
}

export default Counter;