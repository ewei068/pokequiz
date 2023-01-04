import React from "react";

const StatBar = ({ label, value, maxValue }) => {
  return (
    <div className="stat-container">
      <div className="stat-label">{label}:</div>
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ width: `${(value / maxValue) * 100}%` }}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default StatBar;