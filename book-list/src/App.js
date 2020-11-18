import React from 'react';
import BookContextProvider from '../src/contexts/BookContext';
import BookList from './components/BookList';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="app">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
