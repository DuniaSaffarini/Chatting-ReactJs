import { createContext } from 'react';

import Welcoming from './components/Welcoming';
import MainChat from './components/MainChat';
import Message from './components/Message';

import './App.css';
   export const UserInfo = createContext({});

function App() {

  return (
    <div className="MainScreen">
      <div>
        <UserInfo.Provider value={{ name: 'Dunia', age: '23' }}>
          <div>
            <Welcoming />

          </div>    
        <div>
          <MainChat />
        </div>
        <Message />
        </UserInfo.Provider>
      </div>
    </div>
  );
}

export default App;
