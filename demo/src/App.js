import React, { useState } from 'react'
import './App.css';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      Showing the power of redux with facebook app

      <Login setUser={setUser}/>
    </div>
  );
}

export default App;
