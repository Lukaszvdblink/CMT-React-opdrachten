import './App.css'
import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';

function App() {
 const [weather, setWeather] = useState();
 const [city, setCity] = useState('oslo')
 const [input, setInput] = useState('')

 const apiKey = "653685a1a12b47f3cb252e46696f9f24"

  useEffect(() => {
    
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await response.json();
        console.log(weatherData)
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [city]); 
  function inputHandler(e) {
    e.preventDefault();
    setCity(input);
  }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={inputHandler}>zoek</button>
      {weather ? (
       <WeatherInfo city={weather.name} temp={weather.main.temp} feels={weather.main.feels_like} humidity={weather.main.humidity} wind={weather.wind.speed}  />

  ) : (
         <p>Het weer is aan het laden</p>
      )}
    </div>

    );
  
};


export default App
