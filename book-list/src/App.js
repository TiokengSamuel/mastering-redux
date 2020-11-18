import React from 'react';
import BookContextProvider from '../src/contexts/BookContext';
import BookList from './components/BookList';
import NavBar from './components/Navbar';
import NewBookForm from './components/NewBookForm'


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
