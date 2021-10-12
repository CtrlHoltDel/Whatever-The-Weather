import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { cToF } from '../utils/utils';

const CurrWeather = ({ weather, celsius }) => {
  const { location, temp, temp_min, temp_max, description, img } = weather;
  return (
    <div id="current_info">
      <div id="current_info_header">
        <h2>{location}</h2>
        <div id="curr_desc_img">
          <img src={img} alt="" />
          <p id="current_description">{description}</p>
        </div>
      </div>
      <p id="current_temp">{celsius ? `${temp} °C` : `${cToF(temp)} °F`}</p>
      <div id="extra_temp_info">
        <p id="current_temp_max">
          <FaTemperatureHigh className="tempIcon" />
          {celsius ? `${temp_max} °C` : `${cToF(temp_max)} °F`}
        </p>
        <p id="current_temp_min">
          <FaTemperatureLow className="tempIcon" />
          {celsius ? `${temp_min} °C` : `${cToF(temp_min)} °F`}
        </p>
      </div>
    </div>
  );
};

export default CurrWeather;
