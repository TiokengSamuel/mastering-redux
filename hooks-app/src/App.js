import React from 'react'
import { SongList } from './Components/SongList';

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
