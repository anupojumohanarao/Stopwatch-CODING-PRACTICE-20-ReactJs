// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickStartButton = () => {
    this.timeInterval = setInterval(this.onUpdateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  onClickStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeInSeconds: 0})
  }

  onUpdateTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  clearTimerInterval = () => clearInterval(this.intervalI)

  renderTotalSeconds = () => {
    const {timeInSeconds} = this.state
    const totalSeconds = Math.floor(timeInSeconds % 60)

    if (totalSeconds < 10) {
      return `0${totalSeconds}`
    }

    return totalSeconds
  }

  renderTotalMinutes = () => {
    const {timeInSeconds} = this.state
    const totalMinutes = Math.floor(timeInSeconds / 60)

    if (totalMinutes < 10) {
      return `0${totalMinutes}`
    }

    return totalMinutes
  }

  render() {
    const {isTimeRunning} = this.state
    const mainTime = `${this.renderTotalMinutes()}:${this.renderTotalSeconds()}`

    return (
      <div className="app-container">
        <div className="main-app-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-icon"
              />
              <p className="timer">Timer</p>
            </div>
            <div className="timer-container">
              <h1 className="mainTimer">{mainTime}</h1>
              <div className="buttons-section">
                <button
                  className="green-button"
                  type="button"
                  onClick={this.onClickStartButton}
                  disabled={isTimeRunning}
                >
                  Start
                </button>
                <button
                  className="red-button"
                  type="button"
                  onClick={this.onClickStopButton}
                >
                  Stop
                </button>
                <button
                  className="yellow-button"
                  type="button"
                  onClick={this.onClickResetButton}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
