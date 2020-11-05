import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        const { isLightTheme, light, dark} = this.context;
        return (
            
            <nav>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
