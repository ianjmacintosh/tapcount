import React from "react";
import '../App.css';

import Panel from "./Panel";
import Counter from "./Counter";
import Timer from "./Timer";
import Statistics from "./Statistics";
import Controls from "./Controls";

import { getTimeObject } from "../utilities/utilities";

class App extends React.Component {
  state = {
    count: 0,
    startTime: 0,
    elapsedTime: 0,
    isTimerActive: false,
    settingMaxCount: false,
    settingMaxTime: false,
    isPanelOpen: false,
  }

  componentWillUnmount() {
    clearInterval(this.runningTimer);
  }

  handleClick = () => {
    // Bail if the user is trying to set a max
    if (this.state.settingMaxCount || this.state.settingMaxTime) {
      this.exitMaxMode();
      return;
    }
    // Increment count
    this.setCount(this.state.count + 1);

    // Start timer if it's at 0
    if (this.state.elapsedTime === 0) {
      this.resetTime();
      this.startTimer();
    }
    // If the timer is not active, resume it
    else if (!this.state.isTimerActive) {
      this.startTimer();
    }
  }

  enterMaxMode = () => {
    this.setState({
      settingMaxCount: true,
      settingMaxTime: true
    })
  }

  exitMaxMode = () => {
    this.setState({
      settingMaxCount: false,
      settingMaxTime: false
    })
  }

  setCount = (newCount) => {
    this.setState({ count: newCount })
  }

  resetCount = () => {
    this.setCount(0);
  }

  startTimer = () => {
    this.runningTimer = setInterval(() => {
      let newElapsedTime = Date.now() - this.state.startTime;

      this.setState({
        elapsedTime: newElapsedTime
      })
    }, 100);

    this.setState({
      isTimerActive: true,
      startTime: Date.now() - this.state.elapsedTime
    })
  }

  pauseTimer = () => {
    clearInterval(this.runningTimer);
    this.setState({ isTimerActive: false })
  }

  setTime = (newTime) => {
    this.setState({ elapsedTime: newTime });
  }

  resetTime = () => {
    this.setState({
      startTime: Date.now(),
      elapsedTime: 0,
      isTimerActive: false
    })
    clearInterval(this.runningTimer);
  }

  closePanel = (e) => {
    e.stopPropagation();

    this.setState({
        isPanelOpen: false
    });
  }

  openPanel = (e) => {
    e.stopPropagation();

    this.setState({
      isPanelOpen: true
    })
  }

  render() {
    return (
      <div className="App" data-testid="app-component" onClick={this.handleClick}>
        <Panel isOpen={this.state.isPanelOpen} closePanel={this.closePanel}>
          <Statistics
            count={this.state.count}
            elapsedTime={this.state.elapsedTime}
            timeObject={getTimeObject(this.state.elapsedTime)}/>
        </Panel>
        <div className="main-area">
          <Counter
            count={this.state.count}
            setCount={this.setCount}
            settingMax={this.state.settingMaxCount}
            isTimerActive={this.state.isTimerActive}
            didTimerStart={this.state.elapsedTime !== 0}/>
          <Timer
            elapsedTime={this.state.elapsedTime}
            settingMax={this.state.settingMaxTime}
            isTimerActive={this.state.isTimerActive}
            didTimerStart={this.state.elapsedTime !== 0} />
          <Controls
            resetCount={this.resetCount}
            resetTime={this.resetTime}
            pauseTimer={this.pauseTimer}
            startTimer={this.startTimer}
            enterMaxMode={this.enterMaxMode}
            isTimerActive={this.state.isTimerActive}/>
        </div>
      </div>
    );
  }
}

export default App;
