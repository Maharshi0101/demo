import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import HomeStack from './homeStack';
import { useAuth } from '../contexts/auth';
import Loading from '../components/loading'
import SplashScreen from 'react-native-splash-screen'
import { useTheme } from '../contexts/theme';

export default function Routes() {

  const { authData, loading } = useAuth();
  const { currentTheme } = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme?.primaryBackground,
    },
  };


  useEffect(() => {
    SplashScreen.hide();
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navTheme}>
      {authData ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}