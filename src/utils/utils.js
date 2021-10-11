import clear from '../images/weather-icons/clear.png';
import cloudy from '../images/weather-icons/cloudy.png';
import rain from '../images/weather-icons/rain.png';
import storm from '../images/weather-icons/storm.png';
import snow from '../images/weather-icons/snow.png';
import mist from '../images/weather-icons/mist.png';

const getImage = (id) => {
  //https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

  if (id < 300) {
    return storm;
  } else if (id < 400) {
    return rain;
  } else if (id < 600) {
    return snow;
  } else if (id === 701) {
    return mist;
  } else if (id === 711) {
    return 'Smoke';
  } else if (id === 721) {
    return 'Haze';
  } else if (id < 800) {
    return 'Misc';
  } else if (id === 800) {
    return clear;
  } else {
    return cloudy;
  }
};

const formatWeather = (location, main, weather) => {
  const { temp, temp_min, temp_max, humidity } = main;
  const { main: type, description, id } = weather[0];

  const img = getImage(id);

  return {
    location,
    temp: (temp - 273.15).toFixed(1),
    temp_min: (temp_min - 273.15).toFixed(1),
    temp_max: (temp_max - 273.15).toFixed(1),
    humidity,
    type,
    description,
    img,
  };
};

export default formatWeather;
