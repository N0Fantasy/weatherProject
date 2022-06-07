import React from 'react'
import './Card.css';

export const Card = ({ city }) => {
  return (
    <div className="Card">
      <div className='MainInfo'>
        <img className='Icon' src='https://openweathermap.org/img/wn/10d@2x.png' alt='icon'/>
        <div className='City'>{city}</div>
        <div className='Description'>Few clouds</div>
        <div className='Temp'>18</div>
      </div>
      <div className='Info'>
        <div>Humidity: 43%</div>
        <div>Feels like: 17</div>
      </div>
    </div>
  );
}

