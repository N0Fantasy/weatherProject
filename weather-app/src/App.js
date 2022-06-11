import React from 'react';

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { useCities } from './hooks/useCities';

export const GlobalContext = React.createContext()

function App() {
  const [state, dispatch] = useCities()
  
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input/>
        <CardList/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
