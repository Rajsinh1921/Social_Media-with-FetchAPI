import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center loading-Spinner">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
