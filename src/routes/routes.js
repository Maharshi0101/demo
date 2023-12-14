import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import HomeStack from './homeStack';
import { useAuth } from '../contexts/auth';
import Loading from '../components/loading'
import SplashScreen from 'react-native-splash-screen'
import { useTheme } from '../contexts/theme';
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification, { PushNotificationObject, ReceivedNotification } from 'react-native-push-notification';

export default function Routes() {

  const { authData, loading } = useAuth();
  const { currentTheme } = useTheme();
  const [granted, setGranted] = useState(false)

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme?.primaryBackground,
    },
  };

  const requestUserPermission = () => {

    if (!granted) {
      request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS).then((result) => {
        console.log('Is Notification Permission Granted?', result);
        setGranted(true)
      });
    }

    check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
          case RESULTS.DENIED:
          case RESULTS.LIMITED:
          case RESULTS.BLOCKED:
            console.log('The permission is:', result);
            setGranted(false)
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            setGranted(true)
            break;
        }
      })
      .catch((error) => {
        console.log('Notifications Permission Error', error);
      });
  }

  useEffect(() => {
    SplashScreen.hide();
    Platform.OS === 'android' && requestUserPermission()
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      PushNotification.localNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
      });
    });

    return unsubscribe;
  }, []);

  // Register background handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  useEffect(() => {
    if (granted) {
      // Get the device token
      const getDeviceToken = async () => {
        try {
          const token = await messaging().getToken();
          console.log('FCM Token Generated', token);
        } catch (error) {
          // Handle error
          console.log('FCM Token Error', error);
        }
      };

      // Call the function to get the device token
      getDeviceToken();
    }
  }, [granted])

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navTheme}>
      {authData ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}