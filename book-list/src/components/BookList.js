import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import {read} from 'fs'

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
       
    ) : (
        <div className="empty"></div>
    )
}

export default BookList;
