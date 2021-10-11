import { cToF, formatDay, getImage } from '../utils/utils';


const WeekForecast = ({ daily, celsius }) => {
  return (
    <div id="daily__info">
      {daily &&
        daily.map((day, index) => {
          const {sunrise, id, day_temp, small_day} = (formatDay(day, index))
          return (
            <div
              key={`${sunrise}`}
              className="daily__info__container"
            >
              <p id="week-day">{small_day}</p>
              <img src={getImage(id)} alt="" className="daily__info__img"/>
              {celsius ? <p className="daily_info_temp">{day_temp} °C</p> : <p>{cToF(day_temp)} °F</p>}
            </div>
          );
        })}
    </div>
  );
};

export default WeekForecast;
