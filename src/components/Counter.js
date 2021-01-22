import React from "react";

class Counter extends React.Component {
    render() {
        return (<div data-testid="counter-component">
            <label htmlFor="count">Count: </label>
            <span id="count" data-testid="count">0</span>
        </div>);
    }
}

export default Counter;