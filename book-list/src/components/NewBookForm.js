import React, {useContext, useState } from 'react'
import {BookContext} from '../contexts/BookContext'

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOk', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
   
    useContext(BookContext) 
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Book title" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Book author" value={author}
            onChange={(e) => setAuthor(e.target.value)} />
        <input type="submit" value="Add book"/>
        </form>
    )
}

export default NewBookForm;
