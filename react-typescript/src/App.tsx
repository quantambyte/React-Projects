import { useState } from 'react';
import './App.css';

// components
import List from './components/List';
import Form from './components/Form';

// interface
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // state
  const [people, setPeople] = useState<
    IState['people']
  >([]);

  return (
    <div className='App'>
      <h1>People To Invite</h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
