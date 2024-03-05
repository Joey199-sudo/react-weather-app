import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function convertTemperature() {
        if (unit === 'celsius') {
            return Math.round(props.celsius) ;
        } else {
            return Math.round((props.celsius * 9) / 5 + 32);
        }
    }

    return (
        <div className="WeatherTemperature">
            <span className="temperature">{convertTemperature()}</span>
            <span className="unit">
                {unit === 'celsius' ? (
                    <>
                        | <a href="/" onClick={convertToFahrenheit}>
                            °F
                        </a>
                    </>
                ) : (
                    <>
                        | <a href="/" onClick={convertToCelsius}>
                            °C
                        </a>
                    </>
                )}
            </span>
        </div>
    );
}
