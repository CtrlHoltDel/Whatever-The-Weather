const formatWeather = (location, main, weather) => {
  const { temp, temp_min, temp_max, humidity } = main;
  const { main: type, description } = weather[0];

  return {
    location,
    temp: (temp - 273.15).toFixed(1),
    temp_min: (temp_min - 273.15).toFixed(1),
    temp_max: (temp_max - 273.15).toFixed(1),
    humidity,
    type,
    description,
  };
};

export default formatWeather;
