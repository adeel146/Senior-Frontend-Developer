import React, { useState, useEffect } from "react";
import "./index.css";
import Clock from "./Clock";

const App = () => {
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const setClock = () => {
    const currentDate = new Date();
    const newSecondRatio = currentDate.getSeconds() / 60;
    const newMinuteRatio = (newSecondRatio + currentDate.getMinutes()) / 60;
    const newHourRatio = (newMinuteRatio + currentDate.getHours()) / 12;

    setSecondRatio(newSecondRatio);
    setMinuteRatio(newMinuteRatio);
    setHourRatio(newHourRatio);
  };

  return (
    <Clock
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio}
    />
  );
};

export default App;
