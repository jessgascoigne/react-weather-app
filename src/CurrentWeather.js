import React, { useState } from "react";

import "./CurrentWeather.css";

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
      <div className="CurrentWeather">
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
        <div className="row">
          <div className="col-6">
            <img
              src={`./images/${props.data.icon}.png`}
              alt={props.data.description}
              className="current-weather-image"
            />
          </div>
          <div className="col-6">
            <ul>
              <li className="feels-like-temp">
                feels like: {Math.round(props.data.feelsLike)}℉
              </li>
              <li className="humidity">humidity: {props.data.humidity}%</li>
              <li className="wind">wind: {Math.round(props.data.wind)} mph</li>
              <li className="current-weather-conditions">
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
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
        <div className="row">
          <div className="col-6">
            <img
              src={`./images/${props.data.icon}.png`}
              alt={props.data.description}
              className="current-weather-image"
            />
          </div>
          <div className="col-6">
            <ul>
              <li className="feels-like-temp">
                feels like: {Math.round(((props.data.feelsLike - 32) * 5) / 9)}℃
              </li>
              <li className="humidity">humidity: {props.data.humidity}%</li>
              <li className="wind">
                wind: {Math.round(props.data.wind * 1.609344)} km/h
              </li>
              <li className="current-weather-conditions">
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
