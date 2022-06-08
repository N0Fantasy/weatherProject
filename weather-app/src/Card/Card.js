import React, { useState, useEffect } from 'react'
import { API_KEY } from '../settings';
import './Card.css';

export const Card = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(setData)
  }, []);
  console.log('data ', data)
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
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
}

