import { useState } from "react";
import reactLogo from "./assets/react.svg";
import pgsqlLogo from "./assets/pgsql.svg";
import djangoLogo from "./assets/django.svg";

import "./App.css";

function App() {
  const [time, SetTime] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/map/time");
      if (response.ok) {
        const jsonResponse = await response.json();
        SetTime(jsonResponse.time);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={pgsqlLogo} className="logo react" alt="PostgreSQL logo" />
        <img src={djangoLogo} className="logo react" alt="Django logo" />
      </div>
      <h2>React + PostgreSQL + Django</h2>
      <div>
        <button onClick={handleClick}>Request Date:Time from PGSQL DB</button>
        <h3>{time}</h3>
      </div>
    </>
  );
}

export default App;
