import React from 'react';
import Statistics from "./Statistics";

class Feedback extends React.Component {
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

  countTotalFeedback() {
    const arrayDataCount = Object.values(this.state);
    return arrayDataCount.reduce((acc, item) => {
      return acc + item;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

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

        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        
      </div>
    );
  }
}

export default Feedback;
