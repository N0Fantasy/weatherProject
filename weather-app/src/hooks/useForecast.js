import { useState, useEffect } from 'react'
import { API_KEY } from '../settings'

export const useForecast = (coord) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (coord) {
            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=alerts,current,hourly,minutely&appid=${API_KEY}&units=metric`)
                .then(res => res.json())
                .then(setData)
        }
    }, [coord])

    return data
}
