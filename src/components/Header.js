import ScaleToggleButton from './ScaleToggle.js';

const Header = (props) => {
  return (
    <header>
      <h1>Whatever the Weather</h1>
      <ScaleToggleButton props={props} />
    </header>
  );
};

export default Header;
