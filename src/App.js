import './style/App.css';
import { useEffect, useState } from 'react';
import { getWeather } from './actions';
import Header from './components/Header';
import Input from './components/Input';
import Info from './components/Info';
import formatWeather from './utils/utils';
import Footer from './components/Footer';
import loadingCloud from './images/loading_cloud.gif'

function App() {
  const [weather, setWeather] = useState({});
  const [invalidLoc, setInvalidLoc] = useState(false);
  const [celsius, setCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const famousCities = ['London', 'Tokyo', 'Paris', 'Rome', 'Washington', 'Berlin', 'Bangkok', 'Cape Town']
    const randomCity = famousCities[Math.floor(Math.random() * famousCities.length)]

    const setCurrentWeather = async () => {
      setIsLoading(true);
      const { location, main, weather, daily } = await getWeather(randomCity);
      setIsLoading(false);
      setWeather(formatWeather(location, main, weather, daily));
    };

    setCurrentWeather();
  }, []);

  const locSubmit = async (loc) => {
    setIsLoading(true);
    const { location, main, weather, daily, error } = await getWeather(loc);
    setIsLoading(false);
    if (error) {
      setInvalidLoc(true);
      return;
    } else {
      setWeather(formatWeather(location, main, weather, daily));
      setInvalidLoc(false);
    }
  };

  const scaleToggle = () => {
    celsius ? setCelsius(false) : setCelsius(true);
  };

  return (
    <div className="App">
      <Header scaleToggle={scaleToggle} celsius={celsius} />
      <div id="mainContainer">
        <Input locSubmit={locSubmit} invalidLoc={invalidLoc} />
        {isLoading ? (
          <div id="loading">
            <img src={loadingCloud} alt="" />
          </div>
        ) : (
          <Info weather={weather} celsius={celsius} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
