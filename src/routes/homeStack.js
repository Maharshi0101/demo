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
    <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="Products" component={MyProductsScreen} />
      <Drawer.Screen name="My Profile" component={MyProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Policy" component={PolicyScreen} />
      <Drawer.Screen name="Health Insurance" component={HealthInsuranceScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} /> */}
    </Drawer.Navigator>
  );
}


export default function HomeStack() {
  return (
    <Stack.Navigator>
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