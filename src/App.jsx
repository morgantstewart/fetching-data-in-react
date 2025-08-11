import * as weatherService from './services/weatherService';
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';

import { useState } from 'react';
const [weather, setWeather] = useState({});


const newWeatherState = {
  location: data.location.name,
  temperature: data.current.temp_f,
  condition: data.current.condition.text,
};





const App = () => {
  const [weather, setWeather] = useState({});
};


const fetchData = async (city) => {
  const data = await weatherService.show(city);
  const newWeatherState = {
    location: data.location.name,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
  };
  setWeather(newWeatherState);
};






return (
  <main>
    <h1>Weather API</h1>
    <WeatherSearch />
  </main>
);



console.log('State:', weather);

export default App;
