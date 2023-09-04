import React from "react";
import FormattedDate from "./formatteddate";
import WeatherIcon from "./weathericon.js";
import "./index.css";

export default function WeatherSearch(props) {
  return (
    <div className="Weathersearch">
      <div className="city">
        <span id="cities">
          {props.data.city} {""}{" "}
        </span>
        <span className="temperature" id="temp">
          {Math.round(props.data.temperature)}
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
        <FormattedDate date={props.data.date} alt={props.data.description} />
      </div>
      <div>
        <WeatherIcon code={props.data.icon} size={52} />
      </div>
      <div className="description text-capitalize" id="description">
        {props.data.description}
      </div>
      <div className="moreinfo">
        <span className="humidity" id="humidity">
          Humidity: {props.data.humidity}%
        </span>
        <span className="wind" id="wind">
          Wind: {Math.round(props.data.wind)}km/h
        </span>
      </div>
    </div>
  );
}
