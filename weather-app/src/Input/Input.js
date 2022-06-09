import React, { useRef } from 'react'

import './Input.css';

export const Input = ({ inputValue, editingCity, dispatch }) => {
  const inputRef = useRef(null)

  const handleOnChange = (event) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: event.target.value
    })
  }

  const handleOnClick = () => {
    dispatch({
      type: 'ADD_CITY',
      payload: inputValue
    })
    dispatch({
      type: 'CLEAR_INPUT',
      payload: inputValue
    })
    inputRef.current.focus()
  }

  const handleOnDone = () => {
    dispatch({
      type: 'EDIT_CITY_DONE',
      payload: inputValue
    })
    inputRef.current.focus()
  }

  return (
    <div className="InputWrap">
      <input className='Input' onChange={handleOnChange} value={inputValue} ref={inputRef}/>
      {
        editingCity
          ?
          <button className='Button' onClick={handleOnDone}>Done</button>
          :
          <button className='Button' onClick={handleOnClick}>+</button>
      }
    </div>
  )
}
