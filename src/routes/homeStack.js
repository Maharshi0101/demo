import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
import DrawerMenu from '../screens/drawerMenu';
import MyProductsScreen from '../screens/products';
import MyInsurance from '../screens/Insurance/myInsurance';
import HealthInsuranceScreen from '../screens/Insurance/healthInsurance';
import LifeInsurance from '../screens/Insurance/lifeInsurance';
import VehicleInsurance from '../screens/Insurance/vehicleInsurance'
import SettingsScreen from '../screens/settings';
import ProductDetails from '../screens/productDetails'


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

function MyNetwork({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}


function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="Home" options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0179C8',
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
        backgroundColor: '#0179C8',
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
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="My Insurance" component={MyInsurance} />
      <Stack.Screen name="Health Insurance" component={HealthInsuranceScreen} />
      <Stack.Screen name="Life Insurance" component={LifeInsurance} />
      <Stack.Screen name="Vehicle Insurance" component={VehicleInsurance} />
      <Stack.Screen name="My Network" component={MyNetwork} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  )
}