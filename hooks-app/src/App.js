import React from 'react'
import { SongList } from './Components/SongList';
import uuid from 'uuid/v1'
import { NewSongForm } from './Components/NewSongForm';

function App() {
  return (
    <div className="App">
      <SongList/>
      <NewSongForm/>
    </div>
  );
}

export default App;
