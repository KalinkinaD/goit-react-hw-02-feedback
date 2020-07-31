import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./section/section";
import Statistics from "./Statistic/statistic";
import Notification from "./Notification/notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositivePercentage = () => {
    const { good } = this.state;
    const PositivePercentage = ((good / this.countTotal()) * 100).toFixed();
    return Number(PositivePercentage);
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage() + "%"}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
