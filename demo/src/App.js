import React from 'react'
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      Showing the power of redux with facebook app

      <Login/>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
