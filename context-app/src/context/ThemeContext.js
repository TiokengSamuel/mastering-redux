import React, { createContext } from 'react'

export const ThemeContext = createContext();


 class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {}
    }
    render() {
        return ();
    }
}

export default ThemeContextProvider
