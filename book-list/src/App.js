import React from 'react';
import React from 'react';
import BookContextProvider from '../src/contexts/BookContext';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
