import React from "react";
import '../App.css';
import Counter from "./Counter";
import Timer from "./Timer";
import Controls from "./Controls";

class App extends React.Component {
  state = {
    count: 0,
    startTime: 0,
    elapsedTime: 0,
    timerActive: false
  }

  componentWillUnmount() {
    clearInterval(this.runningTimer);
  }

  handleClick = () => {
    // Increment count
    this.setCount(this.state.count + 1);

    // Start timer
    if (!this.state.timerActive) {
      this.startTimer();
    }
  }

  setCount = (newCount) => {
    this.setState({ count: newCount })
  }

  resetCount = () => {
    this.setCount(0);
  }

  startTimer = () => {
    this.setState({
      timerActive: true
    })
    this.setState({
      startTime: Date.now(),
      elapsedTime: 0
    });

    this.runningTimer = setInterval(() => {
      let newElapsedTime = Date.now() - this.state.startTime;

      this.setState({
        elapsedTime: newElapsedTime
      })
    }, 100);
  }

  setTime = (newTime) => {
    this.setState({ elapsedTime: newTime });
  }

  resetTime = () => {
    this.setState({
      timerActive: false
    })
    clearInterval(this.runningTimer);
    this.setTime(0);
  }

  render() {
    return (
      <div className="App" data-testid="app-component" onClick={this.handleClick}>
        <Counter count={this.state.count} setCount={this.setCount} />
        <Timer elapsedTime={this.state.elapsedTime} />
        <Controls resetCount={this.resetCount} resetTime={this.resetTime}/>
      </div>
    );
  }
}

export default App;
