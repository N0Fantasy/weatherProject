import React from 'react'

import './CardList.css'

import { Card } from '../Card/Card'
import { withGlobalState } from '../hocs/withGlobalState'

const CardListNoState = ({ state }) => {
    return (
        <div className='cardList'>
          {
            state.cities.map(city => <Card key={city} city={city}/>)
          }        
        </div>
    )
}

export const CardList = withGlobalState(CardListNoState)