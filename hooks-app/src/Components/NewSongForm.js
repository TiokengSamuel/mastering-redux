import React from 'react'

export const NewSongForm = () => {
    return (
        <div>
            <form>
                <label>Song name: </label>
                <input type="text" required/>
                <input type="submit" value="add song" />
            </form>
        </div>
    )
}
