import React from "react";
import PropTypes from "prop-types";
import Styles from "./section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={Styles.title}>{title}</h3>
      {children}
    </>
  );
};

Selection.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
