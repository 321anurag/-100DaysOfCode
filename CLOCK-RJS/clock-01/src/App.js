import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  let time = showTime();
  const [clock, setClock] = useState(time);
  useEffect(() => {
    // Update the document title using the browser API
    setInterval(() => setClock(showTime()), 1000);
  }, []);

  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm;
    am_pm = "AM";

    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    return currentTime;
  }
  return (
    <div className="App">
      <div className="Clock">{clock}</div>
    </div>
  );
}

export default App;
