import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codemapping = ["01d", "CLEAR_DAY", "01n", "CLEAR_NIGHT"];
  return (
    <ReactAnimatedWeather
      icon="CLEAR_NIGHT"
      color="red"
      size={64}
      animate={true}
    />
  );
}
