import './App.css';

import { Input } from './Input/Input';
import { Card } from './Card/Card';

function App() {
  const cities = ['Cheboksary', 'Moscow', 'London']
  return (
    <div className="Main">
      <Input />
      <div className='cardList'>
        {
          cities.map(city => <Card key={city} city={city}/>)
        }        
      </div>
    </div>
  );
}

export default App;
