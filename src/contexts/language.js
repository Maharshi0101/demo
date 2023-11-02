import React, { createContext, useState, useContext, useEffect } from 'react';
import LocalizedStrings from 'react-native-localization'
import en from '../localization/en.json'
import ar from '../localization/ar.json'
import { useSelector } from 'react-redux'

const LangugaeContext = createContext({});

const strings = new LocalizedStrings({ en, ar })

const LanguageProvider = ({ children }) => {

    const appLanguage = useSelector((state) => state?.langs?.appLanguage)

    useEffect(() => {
        setAppLanguage(appLanguage);
    }, [appLanguage]);

    const setAppLanguage = async (appLanguage) => {
        strings.setLanguage(appLanguage)
    };

    return (
        <LangugaeContext.Provider value={{ strings, setAppLanguage }}>
            {children}
        </LangugaeContext.Provider>
    );
};

function useLanguage() {
    const context = useContext(LangugaeContext);

    if (!context) {
        throw new Error('useLanguage must be used within an LanguageProvider');
    }

    return context;
}

export { LangugaeContext, LanguageProvider, useLanguage };