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
    isTimerPaused: false
  }

  componentWillUnmount() {
    clearInterval(this.runningTimer);
  }

  handleClick = () => {
    // Increment count
    this.setCount(this.state.count + 1);

    // Start timer if it's at 0
    if (this.state.elapsedTime === 0) {
      this.resetTime();
      this.startTimer();
    }
    // If the timer is active but paused, resume it
    else if (this.state.isTimerPaused) {
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
      isTimerPaused: false,
      startTime: Date.now() - this.state.elapsedTime,
      timerActive: true
    })

    this.runningTimer = setInterval(() => {
      let newElapsedTime = Date.now() - this.state.startTime;

      this.setState({
        elapsedTime: newElapsedTime
      })
    }, 100);
  }

  pauseTimer = () => {
    this.setState({ isTimerPaused: true })
    clearInterval(this.runningTimer);
  }

  setTime = (newTime) => {
    this.setState({ elapsedTime: newTime });
  }

  resetTime = () => {
    this.setState({
      timerActive: false,
      startTime: Date.now(),
      elapsedTime: 0
    })
    clearInterval(this.runningTimer);
    this.setTime(0);
  }

  render() {
    return (
      <div className="App" data-testid="app-component" onClick={this.handleClick}>
        <Counter count={this.state.count} setCount={this.setCount} />
        <Timer elapsedTime={this.state.elapsedTime} />
        <Controls
          resetCount={this.resetCount}
          resetTime={this.resetTime}
          pauseTimer={this.pauseTimer}
          startTimer={this.startTimer}
          isTimerPaused={this.state.isTimerPaused}/>
      </div>
    );
  }
}

export default App;
