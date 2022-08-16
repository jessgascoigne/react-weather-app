import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6">
          <img
            src={`./images/${props.data.icon}.png`}
            alt="current weather icon"
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
}
