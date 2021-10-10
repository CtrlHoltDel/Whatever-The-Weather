import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Input = ({ locSubmit, invalidLoc }) => {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    locSubmit(location);
    setLocation('');
  };

  const onChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div id="form_container">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="location_input"
          value={location}
          onChange={onChange}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
      {invalidLoc && <div id="form_error">Error</div>}
    </div>
  );
};

export default Input;
