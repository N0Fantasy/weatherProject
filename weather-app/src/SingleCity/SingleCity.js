import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useForecast } from "../hooks/useForecast"

import { Card } from "../Card/Card"
import { DailyCard } from "../DailyCard/DailyCard"

import './SingleCity.css'

export const SingleCity = () => {
    const [cityCoord, setCityCoord] = useState(null)

    const params = useParams()
    const data = useForecast(cityCoord)
    const { city } = params

    return (
        <div className="SingleCityForecast">
            <Card city={city} setCityCoord={setCityCoord} />

            {data &&
                <div className="DailyCards">
                    {data.daily.map(dailyCard => <DailyCard key={dailyCard.dt} dailyCard={dailyCard} />)}
                </div>
            }

            <Link to='/main' className='ToMain'>To main</Link>
        </div>
    )
}