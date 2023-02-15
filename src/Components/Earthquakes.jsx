import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import EarthquakeInfo from "./EartquakeInfo";


const Earthquakes = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  async function getData() {
    try {
      const response = await axios.get(
        "https://api.orhanaydogdu.com.tr/deprem/live.php"
      );
      setEarthquakes(response.data.result)
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return <div>
    <ul className="earthquake-container">
        {earthquakes.slice(0, 100).map((earthquake, idx)=>(
        <li className="earthquake"><EarthquakeInfo earthquake={earthquake} key={idx}/></li>
        ))}
    </ul>
  </div>;
};

export default Earthquakes;
