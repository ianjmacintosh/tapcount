import React from "react";
import '../App.css';
import Counter from "./Counter";
import Timer from "./Timer";
import Controls from "./Controls";

class App extends React.Component {
  state = {
    count: 0
  }

  setCount = (newCount) => {
    this.setState({ count: newCount })
  }

  resetCount = () => {
    this.setCount(0);
  }

  render() {
    return (
      <div className="App" data-testid="app-component">
        <Counter count={this.state.count} setCount={this.setCount} />
        <Timer />
        <Controls resetCount={this.resetCount} />
      </div>
    );
  }
}

export default App;
