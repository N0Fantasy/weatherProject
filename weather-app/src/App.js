import React, { useState } from 'react';

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';

function App() {
  const [cities, setCities] = useState([]);
  
  return (
    <div className="Main">
      <Input setCities={setCities}/>
      <CardList cities={cities}/>
    </div>
  );
}

export default App;
