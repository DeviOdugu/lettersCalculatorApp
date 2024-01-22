// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="bg">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            id="phrase"
            className="input"
            onChange={this.onChangeInputText}
          />
          <br />
          <p className="count">No.of letters: {inputText.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
