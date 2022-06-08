import React from 'react';

import './CardList.css'

import { Card } from '../Card/Card';

export const CardList = ({ cities, dispatch }) => (
    <div className="Main">
      <div className='cardList'>
        {
          cities.map(city => <Card key={city} city={city} dispatch={dispatch}/>)
        }        
      </div>
    </div>
)