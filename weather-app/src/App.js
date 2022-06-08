import React from 'react';

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { useCities } from './hooks/useCities';

function App() {
  const [cities, dispatch] = useCities()
  
  return (
    <div className="Main">
      <Input dispatch={dispatch}/>
      <CardList cities={cities} dispatch={dispatch}/>
    </div>
  );
}

export default App;
