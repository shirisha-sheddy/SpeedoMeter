// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        console.log(`previous speed is ${prevState.count}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onDecrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => {
        console.log(`previous speed is ${prevState.count}`)
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedmeter-img"
          alt="ispeedometer"
        />
        <h1 className="speed-heading">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrease}
          >
            Accelerate
          </button>
          <button className="break-btn" type="button" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
