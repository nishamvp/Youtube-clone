import React from "react";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_15_152)">
        <path fill="#" d="M0 0H24V24H0z"></path>
        <circle
          cx="10.5"
          cy="10.5"
          r="6.5"
          stroke="#000"
          strokeLinejoin="round"
        ></circle>
        <path
          fill="#000"
          d="M19.646 20.354a.5.5 0 00.708-.708l-.708.708zm.708-.708l-5-5-.708.708 5 5 .708-.708z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_15_152">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;
