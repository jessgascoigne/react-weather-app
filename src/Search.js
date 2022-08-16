import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import CurrentWeather from "./CurrentWeather";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
    event.target.reset();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "6e2f14a60b2f5be57b160a6148235b2f";
    let units = "imperial";
    const apiUrl = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <h1 className="city-name">{weatherData.city}</h1>
        <FormattedDate />
        <div className="row current-temp-container">
          <div className="col-6 temp-column">
            <h5 className="current-temp">
              {Math.round(weatherData.temperature)}
            </h5>
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
        <CurrentWeather data={weatherData} />
        <div className="search-wrapper">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="search-input form-control"
                  placeholder="Search for a city..."
                  autoFocus="on"
                  onChange={handleCitySearch}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  className="search form-control"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    searchCity();
  }
}
