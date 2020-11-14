import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The way of the King', id: 1},
        {title: 'The final empire', id: 2},
        {title: 'The hero of ages', id: 3}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.childeren}
        </BookContext.Provider>
    )
}
