import React from "react";

import "./spinner.styles.scss";

const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default withSpinner;
