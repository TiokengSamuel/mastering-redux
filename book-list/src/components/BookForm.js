import React, {useContext, useState } from 'react'
import {BookContext} from '../context/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    useContext(BookContext)
    return (
        <form>
            <input type="text" placeholder="Book title" value={title}/>
            onChange={(e) => setTitle(e.target.value)} />
        </form>
    )
}

export default NewBookForm;
