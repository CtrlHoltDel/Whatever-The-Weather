import './style/App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Info from './components/Info';
import { getWeather } from './actions';
import formatWeather from './utils/utils';

function App() {
  const [weather, setWeather] = useState({});
  const [invalidLoc, setInvalidLoc] = useState(false);

  useEffect(() => {
    const setCurrentWeather = async () => {
      const { location, main, weather } = await getWeather('Doncaster');
      setWeather(formatWeather(location, main, weather));
    };

    setCurrentWeather();
  }, []);

  const locSubmit = async (loc) => {
    const { location, main, weather, error } = await getWeather(loc);
    if (error) {
      setInvalidLoc(true);
      return;
    } else {
      setWeather(formatWeather(location, main, weather));
      setInvalidLoc(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Input locSubmit={locSubmit} invalidLoc={invalidLoc} />
      <Info weather={weather} />
    </div>
  );
}

export default App;
