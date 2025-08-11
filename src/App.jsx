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


  const fetchData = async (Atlanta) => {
    const data = await weatherService.show(Atlanta);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
>>>>>>> f26764c16dd758357dfae5f321ba5726c1ac5ca2
  };
  setWeather(newWeatherState);
};






  console.log('State:', weather);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch onSearch={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};


console.log('State:', weather);

export default App;
