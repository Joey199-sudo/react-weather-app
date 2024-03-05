import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search"
                                placeholder="enter a city.." 
                                className="form-control"
                                autoFocus="on"/>
                    </div>
                    <div className="col-3"> 
                        <input type="submit" 
                            value="search" 
                            className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <h1>New York </h1>
            <ul>
                <li>
                    Wednesday 8:00
                </li>
                <li>Mostly Sunny</li>
            </ul>
          <div className="row">
            <div className="col-6">
                <div className="clearfix">
                <img 
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="weather icon"
                className="float-left"/>
                <span className="temperature">6</span>
                <span className="unit">&deg;C | F</span> 
            </div>
            </div>
           < div className="col-6">
            <ul>
                
                <li>Precipitation: 15%</li>
                <li>Humidity 15%</li>
                <li>Wind: 12 km / h</li>

            </ul>
           </div>

            
          </div>

        </div>
    )
}