import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const ButtonList = () => {
 const isMenuOpen =  useSelector(store=>store.app.isMenuOpen)
    
  return (
    <div className={`w-screen px-4    `}>
      <Button />
    </div>
  )
}

export default ButtonList
