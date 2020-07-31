import React from "react";
import PropTypes from "prop-types";
import styles from "./statistic.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statistic}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedpack: {positivePercentage}</span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
