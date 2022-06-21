import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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
              <div className='header'>
                <h1>Weather Summary</h1>
              </div>
              <Input />
              <ErrorBoundary>
                <CardList />
              </ErrorBoundary>
            </div>
          } />
          <Route path='/city/:city' element={< SingleCity />} />
          <Route
            path="*"
            element={<Navigate to='/main' replace />
          } />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
