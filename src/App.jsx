import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

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

export default App;
