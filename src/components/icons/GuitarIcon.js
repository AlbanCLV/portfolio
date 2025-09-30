import React from 'react';

const GuitarIcon = ({ size = 48, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.9 2 10 2.9 10 4V6H8C6.9 6 6 6.9 6 8V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V8C18 6.9 17.1 6 16 6H14V4C14 2.9 13.1 2 12 2ZM12 4V6H12V4ZM8 8H16V20H8V8ZM9 10V18H11V10H9ZM13 10V18H15V10H13Z"
      fill={color}
    />
    <circle cx="10" cy="12" r="0.5" fill={color} />
    <circle cx="10" cy="14" r="0.5" fill={color} />
    <circle cx="10" cy="16" r="0.5" fill={color} />
    <circle cx="14" cy="12" r="0.5" fill={color} />
    <circle cx="14" cy="14" r="0.5" fill={color} />
    <circle cx="14" cy="16" r="0.5" fill={color} />
  </svg>
);

export default GuitarIcon;