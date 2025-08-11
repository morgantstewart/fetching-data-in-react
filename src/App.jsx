
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState } from 'react';


const [weather, setWeather] = useState({});


const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

return (
  <main>
    <h1>Weather API</h1>
    <WeatherSearch />
  </main>
);


export default App;
