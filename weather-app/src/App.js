import React from 'react';

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { useCities } from './hooks/useCities';

function App() {
  const [cities, setCities] = useCities()
  
  return (
    <div className="Main">
      <Input setCities={setCities}/>
      <CardList cities={cities}/>
    </div>
  );
}

export default App;
