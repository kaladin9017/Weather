const API_KEY = "90b80c5f01e7a7845e44ceb831e8f5e8";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log("Request: ",request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
