const CurrentWeather = ({ weather }) => {
  const { name, temp, feels_like } = weather;
  const celsius = true
  return (
    <div id="weather-info-">
      <p id="curr-loc">{name}</p>
      <p id="curr-temp">{celsius ? temp : Math.floor((temp * 1.8) + 32)}</p>
      <p id="curr-feels">{celsius ? feels_like : Math.floor((feels_like * 1.8) + 32)}</p>
    </div>
  );
};

export default CurrentWeather;
