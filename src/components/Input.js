import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

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
    <div id="form_container" className="content">
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="location_input"
          value={location}
          onChange={onChange}
        />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
      {invalidLoc && <div id="form_error">Invalid Location</div>}
    </div>
  );
};

export default Input;
