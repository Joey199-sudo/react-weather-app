import React from 'react';

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">&deg;C | &deg; F</span>
    </div>
  );
}