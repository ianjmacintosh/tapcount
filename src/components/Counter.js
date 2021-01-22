import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        setCount: PropTypes.func.isRequired
    }
  componentDidMount() {
    document.addEventListener("click", this.incrementCount);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.incrementCount);
  }

  incrementCount = () => {
    this.props.setCount(this.props.count + 1);
  }

    render() {
        return (<div data-testid="counter-component">
            <label htmlFor="count">Count: </label>
            <span id="count" data-testid="count">{this.props.count}</span>
        </div>);
    }
}

export default Counter;