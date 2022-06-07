import React, { useState, useRef } from 'react'

import './Input.css';

export const Input = ({ setCities }) => {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (event) => setInputValue(event.target.value)

  const handleOnClick = () => {
    setCities((currentCities) => [...currentCities, inputValue])
    setInputValue('')
    inputRef.current.focus()
  }

  return (
    <div className="InputWrap">
      <input className='Input' onChange={handleOnChange} value={inputValue} ref={inputRef}/>
      <button className='Button' onClick={handleOnClick}>+</button>
    </div>
  )
}
