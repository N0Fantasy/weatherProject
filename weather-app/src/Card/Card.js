import React, { memo, useContext } from 'react'

import { useWeather } from '../hooks/useWeather'
import { GlobalContext } from '../App';

import './Card.css'

export const Card = memo(({ city }) => {
  const data = useWeather(city)
  const { dispatch } = useContext(GlobalContext)

  if (!data) return null
  const { name, weather, main} = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main

  const handleOnRemove = () => {
    dispatch({
      type: 'REMOVE_CITY',
      payload: city,
    })
  }
  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: city,
    })
  }

  return (
    <div className="Card">
      <div className='Btns'>
        <button className='EditCityBtn' onClick={handleOnEdit}>Edit</button>
        <button className='RemoveCityBtn' onClick={handleOnRemove}>x</button>
      </div>
      <div className='MainInfo'>
        <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'/>
        <div className='City'>{name}</div>
        <div className='Description'>{description}</div>
        <div className='Temp'>{temp.toFixed()}</div>
      </div>
      <div className='Info'>
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like.toFixed()}</div>
      </div>
    </div>
  );
})
