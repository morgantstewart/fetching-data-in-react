
const API_KEY = 'd0611594777b41f0bce143220251108';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

import { useState } from 'react';

const show = async (Atlanta) => {
  try {
    const queryString = `&q=${Atlanta}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};





const WeatherSearch = (props) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;



export { show };
