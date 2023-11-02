import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language';

const Stack = createStackNavigator();

export default function AuthStack() {
  const { strings } = useLanguage()
  const { currentTheme } = useTheme();

  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: currentTheme?.primaryHeader,
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <Stack.Screen name='Login' options={{ title: `${strings['title.login']}` }} component={LoginScreen} />
      <Stack.Screen name='Signup' options={{ title: `${strings['title.signUp']}` }} component={SignupScreen} />
    </Stack.Navigator>
  );
}