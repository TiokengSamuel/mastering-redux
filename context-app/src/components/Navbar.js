import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/Auth/Context'

export default class Navbar extends Component {
    
    render() {
       
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(context) => {
                    const { isLightTheme, light, dark} = context;
                    const theme = isLightTheme ? light : dark;
                    return(
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
                    )
                }}   
                </ThemeContext.Consumer> 
            )}
            </AuthContext.Consumer>
            
        )
    }
}
