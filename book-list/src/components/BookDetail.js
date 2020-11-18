import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export const BookDetail = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    return (
        <li>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    )
}
