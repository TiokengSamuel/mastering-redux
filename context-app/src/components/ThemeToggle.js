import React, { Component } from 'react'

export default class ThemeToggle extends Component {
    render() {
        return (
            <div>
                <button onClick={toggleTheme}>Toggle the theme</button>
            </div>
        )
    }
}
