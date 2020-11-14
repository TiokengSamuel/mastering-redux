import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext'


const BookList = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext)
    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
                <ul>
                    {books.map(book => {
                        return(
                            <li style={{ background: theme.ui }}>The way of Kings</li>
                        )
                    })}
                    
                    <li style={{ background: theme.ui }}>The name of the wind</li>
                    <li style={{ background: theme.ui }}>The final empire</li>
                </ul>
            </div>
    );
}

export default BookList;
