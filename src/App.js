import Header from './components/Header.js';
import './style/App.css';
import { getWeather } from './actions/';
import CurrentWeather from './components/CurrentWeather.js';
import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState({
    name: '',
    temp: '',
    feels_like: '',
  });

  useEffect(() => {
    const getInitialWeather = async () => {
      const weatherInfo = await getWeather('Doncaster');
      setWeather(weatherInfo);
    };

    getInitialWeather();
  }, []);

  const onSearch = async (country) => {
    const res = await getWeather(country);

    setWeather(res);
  };

  return (
    <div className="App">
      <Header onSearch={onSearch} />
      <CurrentWeather weather={weather} />
    </div>
  );
}

export default App;
