import React from 'react'

function HamburgerIcon({ onClick }) {
  return (
    <svg
      style={{ cursor: 'pointer' }}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="-0.5 0 13 25"
      onClick={onClick}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".8"
        d="M2 12.32h20M2 18.32h20M2 6.32h20"
      ></path>
    </svg>
  )
}

export default HamburgerIcon
