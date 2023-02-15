import React from "react";

const EarthquakeInfo = ({ earthquake }) => {
  let magnitudeClass = "";
  let magnitude = parseFloat(earthquake.mag.toFixed(1));
  if (earthquake.mag <= 3.0) {
    magnitudeClass = "green";
  } else if (earthquake.mag >= 3.1 && earthquake.mag <= 5.0) {
    magnitudeClass = "yellow";
  } else if (earthquake.mag >= 5.1 && earthquake.mag <= 6.0) {
    magnitudeClass = "orange";
  } else if (earthquake.mag > 6.0) {
    magnitudeClass = "red";
  }

  return (
    <div className="earthquake-content">
      <div className="earthquake-info">
        <h3>{earthquake.title}</h3>
        <h3>{earthquake.depth} km</h3>
        <h3 className="date">{earthquake.date}</h3>
      </div>
      <div className={magnitudeClass}>
        <h3 className="mag">{earthquake.mag.toFixed(1)}</h3>
      </div>
    </div>
  );
};

export default EarthquakeInfo;
