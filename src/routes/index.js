import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from '../contexts/auth';
import { ThemeProvider } from '../contexts/theme';
import { LanguageProvider } from '../contexts/language';
import Routes from './routes';

export default function Providers() {
  return (
    <PaperProvider theme={theme}>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5b3a70',
    accent: '#50c878',
    background: '#f7f9fb'
  }
};