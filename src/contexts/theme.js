import React, { useState, createContext, useContext, useEffect } from 'react';
import { light, dark, gray } from '../services/themes';
import { useSelector } from 'react-redux';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {

    const appTheme = useSelector((state) => state?.themes?.theme)

    const [currentTheme, setCurrentTheme] = useState(appTheme);

    const switchTheme = (theme) => {
        switch (theme) {
            case 'light':
                setCurrentTheme(light)
                break;
            case 'dark':
                setCurrentTheme(dark)
                break;
            case 'gray':
                setCurrentTheme(gray)
                break;
            default:
                setCurrentTheme(light)
        }


    };

    useEffect(()=>{
        switchTheme(appTheme)
    },[appTheme])

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                switchTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within an ThemeProvider');
    }

    return context;
}

export { ThemeContext, ThemeProvider, useTheme };

