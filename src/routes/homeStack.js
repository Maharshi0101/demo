import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
import DrawerMenu from '../screens/drawerMenu';
import MyProductsScreen from '../screens/products';
import HealthInsuranceScreen from '../screens/healthInsurance';
import SettingsScreen from '../screens/settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MyProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}

function PolicyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function CalculatorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}



function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#EAD1DC',
        },
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="Home" options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#4285f4',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }} component={HomeScreen} />
    </Drawer.Navigator>
  );
}


export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#4285f4',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <Stack.Screen name="Home Initial" options={{
        headerShown: false
      }} component={DrawerStack} />
      <Stack.Screen name="Products" component={MyProductsScreen} />
      <Stack.Screen name="My Profile" component={MyProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Policy" component={PolicyScreen} />
      <Stack.Screen name="Health Insurance" component={HealthInsuranceScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
    </Stack.Navigator>
  )
}