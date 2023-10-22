import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Providers from './src/routes';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'bottom', 'left']}>
      <Providers />
    </SafeAreaView>
  );
}