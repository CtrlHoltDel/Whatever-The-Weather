import CurrentWeather from './CurrentWeather';
import LocSearch from './LocSearch';

const Header = ({ onSearch }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <LocSearch onSearch={onSearch} />
    </header>
  );
};

export default Header;
