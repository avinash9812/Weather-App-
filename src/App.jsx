import { useState } from 'react';
import SearchBox from './SearchBox';
import './App.css';
import './Weather.css';
function App() {
  const [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && (
        <div className="WeatherInfo">
          <h2>{weatherInfo.cityName}</h2>
          <p>Temperature: {weatherInfo.temp}°C</p>
          <p>Min Temp: {weatherInfo.tempMin}°C</p>
          <p>Max Temp: {weatherInfo.tempMax}°C</p>
          <p>Humidity: {weatherInfo.humidity}%</p>
          <p>Feels Like: {weatherInfo.feelsLike}°C</p>
          <p>Weather: {weatherInfo.weather}</p>
        </div>
      )}
    </div>
  );
}

export default App;

