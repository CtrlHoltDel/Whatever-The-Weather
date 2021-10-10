import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const LocSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(location);
        setLocation('');
      }}
    >
      <input
        value={location}
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  );
};

export default LocSearch;
