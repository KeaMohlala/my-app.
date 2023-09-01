import React from "react";

export default function Forecast() {
  return (
    <div className="forecast" id="forecast">
      <div className="row">
        <div className="col-12">
          <div className="forecast-date">Saturday</div>
          <div className="weather-forecast">
            <span className="weather-forecast-min"> 12°C </span>|
            <span className="weather-forecast-max"> 35°C </span>
            <span className="weather-forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="clear"
                id="weather-forecast-icon"
                width="42"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
