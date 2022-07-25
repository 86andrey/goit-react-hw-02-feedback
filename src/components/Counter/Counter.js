import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const e = event.target.textContent;
    this.setState(prevState => {
      return { [e]: prevState[e] + 1 };
    });
  };

  countTotalFeedback = () => {
    const arrayTotalCount = Object.values(this.state);
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return;
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Title">Please leave feedback</h1>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            bad
          </button>
        </div>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
        </div>
      </div>
    );
  }
}
export default Counter;
