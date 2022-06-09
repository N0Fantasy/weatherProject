import React from 'react';

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { useCities } from './hooks/useCities';

function App() {
  const [state, dispatch] = useCities()
  const { inputValue, editingCity, cities } = state
  
  return (
    <div className="Main">
      <Input inputValue = { inputValue } editingCity = { editingCity } dispatch={dispatch}/>
      <CardList cities={cities} dispatch={dispatch}/>
    </div>
  );
}

export default App;
