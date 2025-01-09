import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncHelper from '../asyncHelpers';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [Theme, setTheme] = useState("light");
    const {getItem} = AsyncHelper();

    const loadTheme = async () => {
        const savedTheme = await getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ Theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);