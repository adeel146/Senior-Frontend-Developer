// HourNeedle.jsx
import React from "react";

const Needle = ({ rotation, ...rest }) => {
  return (
    <svg
      {...rest}
      width="173"
      height="105"
      viewBox="0 0 173 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform={`rotate(${rotation}, 86.5, 73)`}
        d="M86.5 73L163.738 11.4771L34.3603 132.951L9.49291 135.218L86.5 73Z"
        fill="#3A3A3A"
      />
      <path
        transform={`rotate(${rotation}, 86.5, 73)`}
        d="M86.5 73L163.738 11.4771L17.0981 111.433L9.49291 135.218L86.5 73Z"
        fill="#828282"
      />
    </svg>
  );
};

export default Needle;
