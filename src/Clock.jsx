import React from "react";
import HourHand from "./assets/Needle";
import Needle from "./assets/Needle";
import Circle from "./assets/Circle";

function Clock({ hourRatio, minuteRatio, secondRatio }) {
  const hourRotation = (hourRatio % 12) * 30; // 12 hours, 360 degrees total, 30 degrees per hour
  const minuteRotation = (minuteRatio % 60) * 6; // 60 minutes, 360 degrees total, 6 degrees per minute

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
      <div className="number number1"></div>
      <div className="number number1_1 child"></div>
      <div className="number number1_2 child"></div>
      <div className="number number1_3 child"></div>
      <div className="number number1_4 child"></div>
      <div className="number number2"></div>
      <div className="number number2_1 child"></div>
      <div className="number number2_2 child"></div>
      <div className="number number2_3 child"></div>
      <div className="number number2_4 child"></div>
      <div className="number number3"></div>
      <div className="number number3_1 child"></div>
      <div className="number number3_2 child"></div>
      <div className="number number3_3 child"></div>
      <div className="number number3_4 child"></div>
      <div className="number number4"></div>
      <div className="number number4_1 child"></div>
      <div className="number number4_2 child"></div>
      <div className="number number4_3 child"></div>
      <div className="number number4_4 child"></div>
      <div className="number number5"></div>
      <div className="number number5_1 child"></div>
      <div className="number number5_2 child"></div>
      <div className="number number5_3 child"></div>
      <div className="number number5_4 child"></div>
      <div className="number number6"></div>
      <div className="number number6_1 child"></div>
      <div className="number number6_2 child"></div>
      <div className="number number6_3 child"></div>
      <div className="number number6_4 child"></div>
      <div className="number number7"></div>
      <div className="number number7_1 child"></div>
      <div className="number number7_2 child"></div>
      <div className="number number7_3 child"></div>
      <div className="number number7_4 child"></div>
      <div className="number number8"></div>
      <div className="number number8_1 child"></div>
      <div className="number number8_2 child"></div>
      <div className="number number8_3 child"></div>
      <div className="number number8_4 child"></div>
      <div className="number number9"></div>
      <div className="number number9_1 child"></div>
      <div className="number number9_2 child"></div>
      <div className="number number9_3 child"></div>
      <div className="number number9_4 child"></div>
      <div className="number number10"></div>
      <div className="number number10_1 child"></div>
      <div className="number number10_2 child"></div>
      <div className="number number10_3 child"></div>
      <div className="number number10_4 child"></div>
      <div className="number number11"></div>
      <div className="number number11_1 child"></div>
      <div className="number number11_2 child"></div>
      <div className="number number11_3 child"></div>
      <div className="number number11_4 child"></div>
      <div className="number number12"></div>
      <div className="number number12_1 child"></div>
      <div className="number number12_2 child"></div>
      <div className="number number12_3 child"></div>
      <div className="number number12_4 child"></div>
    </div>
  );
}

export default Clock;
