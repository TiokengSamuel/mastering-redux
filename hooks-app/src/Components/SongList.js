import React, { useState } from 'react'

export const SongList = () => {
    useState([
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This wild Darkness', id: 3 },
    ]);
    return (
        <div className="song-list">
            <ul>
                <li>This wild darkness</li>
                <li>Memory Gospel</li>
            </ul>
        </div>
    )
}
