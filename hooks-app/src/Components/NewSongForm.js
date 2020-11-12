import React, { useState } from 'react'

export const NewSongForm = () => {
    useState('');
    return (
        <div>
            <form onSubmit={}>
                <label>Song name: </label>
                <input type="text" required onChange={e => {}}/>
                <input type="submit" value="add song" />
            </form>
        </div>
    )
}
