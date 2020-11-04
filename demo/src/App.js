import React, { useState } from 'react'
import './App.css';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h1>Showing the power of redux with facebook app</h1>

      <Login setUser={setUser}/>
    </div>
  );
}

export default App;
