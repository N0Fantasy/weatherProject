import React from "react"

import './DailyCard.css'

export const DailyCard = ({ dailyCard }) => {
    const { dt, weather, temp: { min, max } } = dailyCard
    const { description, icon } = weather[0]
    const currentDate = new Date(dt * 1000)

    return (
        <div className='DailyCard'>
            <div className='MainDailyInfo'>
                <div>{currentDate.toString().split(' ')[0]}</div>
                <div>{currentDate.toString().split(' ')[2]} {currentDate.toString().split(' ')[1]}</div>
                <img className='DailyIcon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
                <div className='tempIcon'>day {max.toFixed()}</div>
                <div className='tempIcon'>night {min.toFixed()}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}