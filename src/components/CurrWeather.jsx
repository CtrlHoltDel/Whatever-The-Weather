import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

const CurrWeather = ({ weather, celsius }) => {
  const { location, temp, temp_min, temp_max, description, img } = weather;
  const cToF = (c) => {
    return (c * 1.8 + 32).toFixed(1);
  };

  return (
    <div className="curr_info">
      <div id="curr_info_header">
        <h2>{location}</h2>
        <img src={img} alt="" />
      </div>
      <p id="curr_description">{description}</p>
      <p id="curr_temp">{celsius ? `${temp} °C` : `${cToF(temp)} °F`}</p>
      <div id="extra_temp_info">
        <p id="curr_temp_max">
          <FaTemperatureHigh className="tempIcon" />
          {celsius ? `${temp_max} °C` : `${cToF(temp_max)} °F`}
        </p>
        <p id="curr_temp_min">
          <FaTemperatureLow className="tempIcon" />
          {celsius ? `${temp_min} °C` : `${cToF(temp_min)} °F`}
        </p>
      </div>
    </div>
  );
};

export default CurrWeather;