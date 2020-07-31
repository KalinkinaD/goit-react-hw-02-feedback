import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="good"
        value={good}
        className={styles.btn}
      >
        Good
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="neutral"
        value={neutral}
        className={styles.btn}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="bad"
        value={bad}
        className={styles.btn}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
