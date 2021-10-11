import React from 'react';
import CurrWeather from './CurrWeather';
import WeekForecast from './WeekForecast';

const Info = ({ weather, celsius }) => {
  const { daily } = weather;

  console.log(weather);

  return (
    <div id="body_container" className="content">
      <CurrWeather weather={weather} celsius={celsius} />
      <WeekForecast daily={daily} />
    </div>
  );
};

export default Info;
