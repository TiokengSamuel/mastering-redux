import React, {useContext, useState } from 'react'
import {BookContext} from '../contexts/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    useContext(BookContext)
    return (
        <form>
            <input type="text" placeholder="Book title" value={title}/>
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Book author" value={author}/>
            onChange={(e) => setAuthor(e.target.value)} />
        <input type="submit" value="Add book"/>
        </form>
    )
}

export default NewBookForm;
