import "./App.css";
import "./index.css";
import Forecast from "./forecast";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form className="search-form" id="search-form">
          <div className="row">
            <Weather />
          </div>
        </form>
        <br />
        <div className="border">
          <div className="city">
            <span id="cities">Johannesburg {""} </span>
            <span className="temperature" id="temp">
              19
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
        <Forecast />
        <small>
          <a
            href="https://github.com/KeaMohlala/react-weatherapp.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          ,by Keamogetse Mohlala
        </small>
      </div>
    </div>
  );
}
