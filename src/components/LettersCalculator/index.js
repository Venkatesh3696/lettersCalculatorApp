// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  //   countLetters = () =>  ({return 0})
  state = {
    count: 0,
  }

  onChangeInput = event => {
    const inputValue = event.target.value
    this.setState({count: event.target.value.length})
    console.log(inputValue)
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <div>
            <h1 className="heading">
              Calculate the <br />
              Letters you <br />
              enter
            </h1>
            <div className="input-container">
              <label htmlFor="input" className="para">
                Enter the phrase
              </label>
              <input
                id="input"
                type="input"
                className="input"
                placeholder="Enter the phrase"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="count">
              <p className="count-para">No.of letters: {count}</p>
            </div>
          </div>
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
