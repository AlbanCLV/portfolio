import React from 'react';

const JudoIcon = ({ size = 48, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4C7 5.1 6.1 6 5 6S3 5.1 3 4 3.9 2 5 2 7 2.9 7 4ZM9 8V7C9 6.45 8.55 6 8 6H2C1.45 6 1 6.45 1 7V8C1 8.55 1.45 9 2 9H8C8.55 9 9 8.55 9 8ZM19 4C19 5.1 18.1 6 17 6S15 5.1 15 4 15.9 2 17 2 19 2.9 19 4ZM23 8V7C23 6.45 22.55 6 22 6H16C15.45 6 15 6.45 15 7V8C15 8.55 15.45 9 16 9H22C22.55 9 23 8.55 23 8Z"
      fill={color}
    />
    <path
      d="M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10Z"
      fill={color}
    />
    <path
      d="M8 11L10.5 13.5L8 16L6 14L8 11ZM16 11L18 14L16 16L13.5 13.5L16 11Z"
      fill={color}
    />
    <path
      d="M4 15L6 17L4 19L2 17L4 15ZM20 15L22 17L20 19L18 17L20 15Z"
      fill={color}
    />
  </svg>
);

export default JudoIcon;