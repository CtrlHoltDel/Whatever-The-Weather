import './style/App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Info from './components/Info';
import { getWeather } from './actions';
import formatWeather from './utils/utils';
import Footer from './components/Footer';

function App() {
  const [weather, setWeather] = useState({});
  const [invalidLoc, setInvalidLoc] = useState(false);
  const [celsius, setCelsius] = useState(true);

  useEffect(() => {
    const setCurrentWeather = async () => {
      const { location, main, weather, daily } = await getWeather('London');
      setWeather(formatWeather(location, main, weather, daily));
    };

    setCurrentWeather();
  }, []);

  const locSubmit = async (loc) => {
    const { location, main, weather, daily, error } = await getWeather(loc);
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
        <Info weather={weather} celsius={celsius} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
