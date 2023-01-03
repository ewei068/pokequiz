import React from "react";

const StatBar = ({ label, value, maxValue }) => {
  return (
    <>
      {label } :
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ width: `${(value / maxValue) * 100}%` }}>
          {value}
        </div>
      </div>
    </>
  );
};

export default StatBar;