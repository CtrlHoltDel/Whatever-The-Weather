const ScaleToggleButton = ({ props }) => {
  const { scaleToggle, celsius } = props;
  return (
    <button onClick={scaleToggle}>
      {celsius ? (
        <div>
          <span className="selectedScale">°C</span> / °F
        </div>
      ) : (
        <div>
          °C / <span className="selectedScale">°F</span>
        </div>
      )}
    </button>
  );
};

export default ScaleToggleButton;
