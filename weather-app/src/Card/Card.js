import React, { memo, useContext, useEffect } from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'

import { useWeather } from '../hooks/useWeather'

import { GlobalContext } from '../App';

import './Card.css'

const CardNoMemo = ({ city, setCityCoord }) => {
  let data = useWeather(city)
  const isMain = Boolean(useMatch('/main'))
  const navigate = useNavigate()
  const { dispatch } = useContext(GlobalContext)

  useEffect(() => {
    if (data && setCityCoord) {
      setCityCoord({
        lat: data.coord.lat,
        lon: data.coord.lon
      })
    }
  }, [data, setCityCoord])

  if (!data) return null
  const { name, weather, main } = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main

  const handleOnRemove = () => {
    dispatch({
      type: 'REMOVE_CITY',
      payload: city,
    })

    navigate('/main')
  }
  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: city,
    })

    navigate('/main')
  }

  if (!isMain) {
    return (
      <div className='Card'>
        <div className='Btns'>
          <button className='EditCityBtn' onClick={handleOnEdit}>Edit</button>
          <button className='RemoveCityBtn' onClick={handleOnRemove}>x</button>
        </div>
        <div className='MainInfo'>
          <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
          <div className='City'>{name}</div>
          <div className='Description'>{description}</div>
          <div className='Temp'>{temp.toFixed()}</div>
        </div>
        <div className='Info'>
          <div>Humidity: {humidity}</div>
          <div>Feels like: {feels_like.toFixed()}</div>
        </div>
      </div>
    )
  }
  return (
    <div className='Card'>
      <div className='Btns'>
        <button className='EditCityBtn' onClick={handleOnEdit}>Edit</button>
        <button className='RemoveCityBtn' onClick={handleOnRemove}>x</button>
      </div>
      <Link to={`/city/${city.toLowerCase()}`}>
        <div className='MainInfo'>
          <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
          <div className='City'>{name}</div>
          <div className='Description'>{description}</div>
          <div className='Temp'>{temp.toFixed()}</div>
        </div>
        <div className='Info'>
          <div>Humidity: {humidity}</div>
          <div>Feels like: {feels_like.toFixed()}</div>
        </div>
      </Link>
    </div>
  )
}

export const Card = memo(CardNoMemo)
