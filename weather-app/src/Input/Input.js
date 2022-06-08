import React, { useState, useRef } from 'react'

import './Input.css';

export const Input = ({ dispatch }) => {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (event) => setInputValue(event.target.value)

  const handleOnClick = () => {
    dispatch({
      type: 'ADD_CITY',
      payload: inputValue
    })
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
