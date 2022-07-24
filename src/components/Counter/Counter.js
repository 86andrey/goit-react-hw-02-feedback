import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Title">Please leave feedback</h1>
        <div className="Counter__controls">
          <button type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
export default Counter;
