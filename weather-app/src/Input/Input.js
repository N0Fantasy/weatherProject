import React, { useRef, useContext } from 'react'

import './Input.css';
import { GlobalContext } from '../App';

export const Input = () => {
  const inputRef = useRef(null)
  const { state, dispatch } = useContext(GlobalContext)
  const { inputValue, editingCity } = state

  const handleOnChange = (event) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: event.target.value
    })
  }

  const handleOnClick = () => {
    dispatch({
      type: 'ADD_CITY',
      payload: inputValue.trim().toLowerCase()
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
      payload: inputValue.trim().toLowerCase()
    })
    inputRef.current.focus()
  }

  return (
    <div className="InputWrap">
      <input className='Input' onChange={handleOnChange} value={inputValue} ref={inputRef} placeholder='Enter name of city'/>
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
