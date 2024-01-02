import React from "react";
import HourHand from "./assets/Needle";
import Needle from "./assets/Needle";
import Circle from "./assets/Circle";

function Clock({ hourRatio, minuteRatio, secondRatio }) {
  const hourRotation = (hourRatio % 12) * 30; // 12 hours, 360 degrees total, 30 degrees per hour
  const minuteRotation = (minuteRatio % 60) * 6; // 60 minutes, 360 degrees total, 6 degrees per minute

  // Create an array of numbers from 1 to 12
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="clock">
      <div className="hourHand">
        <Needle rotation={hourRotation} style={{ height: "80" }} />
      </div>
      <div className="circle">
        <Circle />
      </div>
      <div className="minutesHand">
        <Needle rotation={minuteRotation} />
      </div>

      {/* Render numbers dynamically */}
      {numbers.map((number) => (
        <React.Fragment key={number}>
          <div className={`number number${number}`}></div>
          {[1, 2, 3, 4].map((child) => (
            <div key={`${number}_${child}`} className={`number number${number}_${child} child`}></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Clock;
