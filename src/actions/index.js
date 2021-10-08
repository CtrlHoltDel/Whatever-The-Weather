import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER;

export const getWeather = (loc) => {
  return async (dispatch) => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`
    );

    console.log(result);
    console.log(dispatch);
    dispatch({
      result,
    });
  };
};
