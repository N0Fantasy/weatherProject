import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { useCities } from './hooks/useCities';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { SingleCity } from './SingleCity/SingleCity';

export const GlobalContext = React.createContext()

function App() {
  const [state, dispatch] = useCities()

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path='/main' element={
            <div className="Main">
              <Input />
              <ErrorBoundary>
                <CardList />
              </ErrorBoundary>
            </div>
          } />
          <Route path='/city/:city' element={ < SingleCity /> } />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
