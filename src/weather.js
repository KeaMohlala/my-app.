import React from "react";
import axios from "axios";
import "./index.css";

export default function Weather() {
  const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  return (
    <div>
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
  );
}
