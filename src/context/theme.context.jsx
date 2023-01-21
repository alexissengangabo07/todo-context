import { createContext, useState, useEffect } from "react";

export const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        if (theme === '' && localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'));
        }
    }, [theme])

    const toggleTheme = (themeChoice) => {
        setTheme(themeChoice);
        localStorage.setItem('theme', themeChoice);
    }

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider;