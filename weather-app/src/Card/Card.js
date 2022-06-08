import React, { memo } from 'react'

import { useWeather } from '../hooks/useWeather';

import './Card.css';

export const Card = memo(({ city }) => {
  const data = useWeather(city)

  if (!data) return null
  const { name, weather, main} = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main

  return (
    <div className="Card">
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
