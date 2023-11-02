import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Providers from './src/routes';
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/store/store'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'bottom', 'left']}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Providers />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}