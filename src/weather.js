import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function cityWeather(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: " Thursday, 11:37",
    });
  }
  if (weatherInfo.ready) {
    return (
      <div>
        <div className="container">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  className="form-control shadow-sm"
                  id="search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm w-100"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-info w-100" id="current-location">
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <br />
          <div className="border">
            <div className="city">
              <span id="cities">
                {weatherInfo.city} {""}{" "}
              </span>
              <span className="temperature" id="temp">
                {Math.round(weatherInfo.temperature)}
              </span>
              <span className="units">
                <a href="/" id="celcius-link" className="active">
                  °C{" "}
                </a>
                |{" "}
                <a href="/" id="farenheit-link">
                  °F{" "}
                </a>
              </span>
            </div>
            <div className="search" id="date">
              {weatherInfo.date}
            </div>
            <div className="icon">
              <img
                src={weatherInfo.iconUrl}
                alt={weatherInfo.description}
                id="icon"
              />
            </div>
            <div className="description text-capitalize" id="description">
              {weatherInfo.description}
            </div>
            <div className="moreinfo">
              <span className="humidity" id="humidity">
                Humidity: {weatherInfo.humidity}%
              </span>
              <span className="wind" id="wind">
                Wind: {Math.round(weatherInfo.wind)}km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(cityWeather);
    return "loading...";
  }
}
