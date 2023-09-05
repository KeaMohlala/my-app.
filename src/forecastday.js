import React from "react";
import WeatherIcon from "./weathericon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-date">{day()}</div>
      <div className="weather-forecast">
        <span className="weather-forecast-min"> {minTemperature()}°C </span>|
        <span className="weather-forecast-max"> {maxTemperature()}°C </span>
      </div>
      <div>
        <span className="weather-forecast-icon">
          <WeatherIcon code={props.data.weather[0].icon} size={35} />
        </span>
      </div>
    </div>
  );
}
