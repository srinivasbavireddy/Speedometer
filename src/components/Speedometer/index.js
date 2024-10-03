import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onApplyBreak = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    let {speed} = this.state
    if (speed < 0) {
      speed = 0
    } else if (speed > 200) {
      speed = 200
    }

    return (
      <div className="speedometer-container">
        <h1 className="title">SPEEDOMETER</h1>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer"
          />
        </div>
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="accelerate-button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="apply-break-button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer