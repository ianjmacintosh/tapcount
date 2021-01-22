import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    }

  componentDidMount() {
    document.addEventListener("click", this.incrementCount);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.incrementCount);
  }

  incrementCount = () => {
    let oldCount = this.state.count;
    let newCount = oldCount + 1;

    this.setState({count: newCount });
  }

    render() {
        return (<div data-testid="counter-component">
            <label htmlFor="count">Count: </label>
            <span id="count" data-testid="count">{this.state.count}</span>
        </div>);
    }
}

export default Counter;