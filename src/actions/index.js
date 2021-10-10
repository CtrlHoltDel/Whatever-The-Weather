const API_KEY = process.env.REACT_APP_WEATHER;

export const getWeather = async (loc) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`
  );

  const initialRes = await res.json();

  if (initialRes.message) {
    return { error: initialRes.message };
  }

  const { coord, main, weather } = initialRes;
  const { lat, lon } = coord;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const { daily } = await response.json();

  return { location: loc, main, weather, daily };
};
