import { useState, useEffect } from 'react'
import { API_KEY } from '../settings'

export const useWeather = (city) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 404 || res.status === 400) {
          const filtredCities = JSON.parse(localStorage.cities).filter(cityT => cityT !== city)
          localStorage.setItem('cities', JSON.stringify(filtredCities))
          
          return null
        } else {
          return null
        }
      })
      .then(setData)
  }, [city])

  return data
}
