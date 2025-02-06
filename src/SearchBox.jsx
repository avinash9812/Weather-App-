import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'; 

export default function SearchBox({updateInfo}) {
    let [City, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d423265c2fb379be4449a557b4d01d01";
    
    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            cityName: jsonResponse.name, 
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(City);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined"
                    required value={City} 
                    onChange={handleChange}
                />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
