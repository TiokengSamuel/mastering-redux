import React, {useContext, useState } from 'react'
import {BookContext} from '../context/BookContext'

const NewBookForm = () => {
    const { addBook } = useContext(BookContext)
    useContext(BookContext)
    return (
        <div>
            
        </div>
    )
}

export default NewBookForm;
