import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function cityWeather(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
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
              <span id="cities">Johannesburg {""} </span>
              <span className="temperature" id="temp">
                (Math.round(temperature))
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
              Thursday, 11:37
            </div>
            <div className="icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="clear"
                id="icon"
              />
            </div>
            <div className="description" id="description">
              Clear
            </div>
            <div className="moreinfo">
              <span className="humidity" id="humidity">
                Humidity: 0%
              </span>
              <span className="wind" id="wind">
                Wind: 5km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
    let city = "Johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(cityWeather);
    return "loading...";
  }
}
