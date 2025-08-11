
const API_KEY = 'd0611594777b41f0bce143220251108';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${d0611594777b41f0bce143220251108}`;


const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
