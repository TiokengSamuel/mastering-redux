import React, { useState } from 'react'
import uuid from 'uuid'
import { NewSongForm } from './NewSongForm';


export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This wild Darkness', id: 3 },
    ]);

    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuid()}])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
            <NewSongForm/>
        </div>
    )
}
