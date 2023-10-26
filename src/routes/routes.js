import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import HomeStack from './homeStack';
import { useAuth } from '../contexts/auth';
import Loading from '../components/loading'
import SplashScreen from 'react-native-splash-screen'

export default function Routes() {

  const { authData, loading } = useAuth();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
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