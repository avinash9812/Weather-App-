import React, { useState } from 'react';
import './Weather.css';
import InfoBox from './InfoBox.jsx';
import SearchBox from './SearchBox.jsx';

export default function Weather() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Delhi",
    feelsLike: 18.51,
    humidity: 34,
    temp: 19.61,
    tempMax: 19.61,
    tempMin: 19.61,
    weather: "clear sky"
  });

  let updateInfo = (newinfo) => {
    setweatherInfo(newinfo);
  };

  return (
    <div className="weather-container">
      <h4>Weather App</h4>
      <InfoBox info={weatherInfo} />
      <SearchBox updateInfo={updateInfo} />
    </div>
  );
}
