const API_KEY = process.env.REACT_APP_WEATHER;

export const getWeather = async (loc) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`
  );

  const data = await res.json();

  const {
    name,
    main: { temp, feels_like },
  } = data;

  return {
    name,
    temp: (temp - 273.15).toFixed(2),
    feels_like: (feels_like - 273.15).toFixed(2),
  };
};
