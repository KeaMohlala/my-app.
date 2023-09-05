import React from "react";
import WeatherIcon from "./weathericon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}
  let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast" id="forecast">
      <div className="row">
        <div className="col-12">
          <div className="forecast-date">Saturday</div>
          <div className="weather-forecast">
            <span className="weather-forecast-min"> 12°C </span>|
            <span className="weather-forecast-max"> 35°C </span>
          </div>
          <div>
            <span className="weather-forecast-icon">
              <WeatherIcon code="01d" size={35} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
