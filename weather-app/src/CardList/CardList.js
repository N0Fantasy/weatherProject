import React, { useContext } from 'react'

import './CardList.css'

import { Card } from '../Card/Card'
import { GlobalContext } from '../App'

export const CardList = () => {
  const { state } = useContext(GlobalContext)
  const { cities } = state

  return (
    <div className="Main">
      <div className='cardList'>
        {
          cities.map(city => <Card key={city} city={city}/>)
        }        
      </div>
    </div>
  )
}