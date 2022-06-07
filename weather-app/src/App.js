import React, { useState } from 'react';

import './App.css';

import { Input } from './Input/Input';
import { Card } from './Card/Card';

function App() {
  const [cities, setCities] = useState([]);
  
  return (
    <div className="Main">
      <Input setCities={setCities}/>
      <div className='cardList'>
        {
          cities.map(city => <Card key={city} city={city}/>)
        }        
      </div>
    </div>
  );
}

export default App;
