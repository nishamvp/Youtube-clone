import React, { useState } from 'react'
import { BUTTON_LIST } from '../assets/constants'

const Button = () => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <div className="flex overflow-x-auto gap-3 button-scrollbar">
      {BUTTON_LIST.map((button) => (
        <button
          key={button}
          type="button"
          className={`w-auto text-nowrap font-semibold text-lg px-4 py-2 rounded-md ${
            selectedButton === button
              ? 'text-white bg-black'
              : 'text-black bg-gray-100'
          }`}
          onClick={() => handleClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  )
}

export default Button
