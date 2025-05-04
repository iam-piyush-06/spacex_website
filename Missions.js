import React, { useEffect, useState } from "react";
import axios from "axios";

const Missions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launches/latest")
      .then(res => setMissions([res.data]));
  }, []);

  return (
    <div>
      <h1>Latest Mission</h1>
      {missions.map((mission, index) => (
        <div key={index}>
          <h2>{mission.name}</h2>
          <p>Date: {new Date(mission.date_utc).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;