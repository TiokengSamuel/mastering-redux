import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

export default class Navbar extends Component {
    
    render() {
       
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(context) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark} = context;
                    const theme = isLightTheme ? light : dark;
                    return(
                       
                    )
                }}   
                </ThemeContext.Consumer> 
            )}
            </AuthContext.Consumer>
            
        )
    }

    const Navbar = () => {
        return (
            <nav style = {{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        );
    }
    
}
