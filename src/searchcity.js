import React from "react";

export default function Searchcity() {
  return (
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
  );
}
