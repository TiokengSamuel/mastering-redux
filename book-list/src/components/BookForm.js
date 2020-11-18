import React, {useContext, useState } from 'react'
import {BookContext} from '../context/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    useContext(BookContext)
    return (
        <div>
            
        </div>
    )
}

export default NewBookForm;
