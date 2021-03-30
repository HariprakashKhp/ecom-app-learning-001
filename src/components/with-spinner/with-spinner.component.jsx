import React from "react";

import "./spinner.styles.scss";

const withSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;
