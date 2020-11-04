import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  //const [user, setUser] = useState(null);
  const [state, dispatch] = useStateValue();
  return (
    <div className="App">
      <h1>Showing the power of redux with facebook app</h1>
      <h3>{state.user ?  `Logged in as ${state.user}` : 'No user is logged in'}</h3>

      <Login/>
    </div>
  );
}

export default App;
