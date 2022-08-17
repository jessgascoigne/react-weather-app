import React, { useState } from "react";

import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("imperial");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="CurrentTemp">
        <div className="row current-temp-container">
          <div className="col-6 temp-column">
            <h5 className="current-temp">
              {Math.round(props.data.temperature)}
            </h5>
          </div>
          <div className="col-6 units-column">
            <h5>
              <a
                href="/"
                className="fahrenheit active-link"
                onClick={showFahrenheit}
              >
                °F
              </a>
            </h5>
            <h5>
              <a
                href="/"
                className="celsius non-active-link"
                onClick={showCelsius}
              >
                °C
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <div className="row current-temp-container">
          <div className="col-6 temp-column">
            <h5 className="current-temp">
              {Math.round(((props.data.temperature - 32) * 5) / 9)}
            </h5>
          </div>
          <div className="col-6 units-column">
            <h5>
              <a
                href="/"
                className="fahrenheit non-active-link"
                onClick={showFahrenheit}
              >
                °F
              </a>
            </h5>
            <h5>
              <a href="/" className="celsius active-link" onClick={showCelsius}>
                °C
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
