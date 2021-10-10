const Header = ({ scaleToggle, celsius }) => {
  return (
    <header>
      <h1>Whatever the Weather</h1>
      <button onClick={scaleToggle}>
        {celsius ? (
          <div>
            <span style={{ fontWeight: 600 }}>°C</span> / °F
          </div>
        ) : (
          <div>
            °C / <span style={{ fontWeight: 600 }}>°F</span>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;
