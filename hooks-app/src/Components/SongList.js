import React, { useState } from 'react'
import {v1 as uuid} from 'uuid'
import { NewSongForm } from './NewSongForm';


export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This wild Darkness', id: 3 },
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}])
    }
    useEffect(() => {
        
    })
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong = {addSong}/>
            <button onClick = {() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}
