import React from "react";

import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <div className="row current-temp-container">
        <div className="col-6 temp-column">
          <h5 className="current-temp">{Math.round(props.data.temperature)}</h5>
        </div>
        <div className="col-6 units-column">
          <h5>
            <a href="/" className="fahrenheit active-link">
              °F
            </a>
          </h5>
          <h5>
            <a href="/" className="celsius non-active-link">
              °C
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
