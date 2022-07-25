import React from 'react';
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

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
    const keyName = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className="Counter">

        <h1 className="Title">Please leave feedback</h1>
        <FeedbackOptions options={keyName} onLeaveFeedback={this.handleIncrement}/>
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        
      </div>
    );
  }
}

export default Feedback;
