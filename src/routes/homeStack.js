import React from 'react';
import { View, Button, Image, Text, I18nManager } from 'react-native';
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
import Telemedicine from '../screens/telemedicine';
import ChooseDoctor from '../screens/chooseDoctor';
import BookAppointment from '../screens/bookAppointment';
import BookingDetails from '../screens/bookingDetails';
import AboutUs from '../screens/aboutUs';
import Agreement from '../screens/agreement'
import InAppBrowser from '../screens/inAppBrowser';
import ManageAppointments from '../screens/manageAppointments';
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MyProfileScreen({ navigation }) {
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
      <Image
        style={{ width: '90%', height: 250, resizeMode: 'contain' }}
        source={require('../assets/maintenance.png')} />
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}

function PolicyScreen({ navigation }) {
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
      <Image
        style={{ width: '90%', height: 250, resizeMode: 'contain' }}
        source={require('../assets/maintenance.png')} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
      <Image
        style={{ width: '90%', height: 250, resizeMode: 'contain' }}
        source={require('../assets/maintenance.png')} />
    </View>
  );
}

function CalculatorScreen({ navigation }) {
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
      <Image
        style={{ width: '90%', height: 250, resizeMode: 'contain' }}
        source={require('../assets/maintenance.png')} />
    </View>
  );
}

function MyNetwork({ navigation }) {
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
      <Image
        style={{ width: '90%', height: 250, resizeMode: 'contain' }}
        source={require('../assets/maintenance.png')} />
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}


function DrawerStack() {

  const { strings } = useLanguage()
  const { currentTheme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: I18nManager?.isRTL ? 'right' : 'left',
        drawerStyle: {
          backgroundColor: currentTheme?.primaryBackground,
        },
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name={'Home'}
        options={{
          title: `${strings['title.home']}`,
          headerShown: true,
          headerStyle: {
            backgroundColor: currentTheme?.primaryHeader
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
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: currentTheme?.primaryHeader
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
      <Stack.Screen name="Products" options={{ title: `${strings['title.products']}` }} component={MyProductsScreen} />
      <Stack.Screen name="My Profile" options={{ title: `${strings['title.profile']}` }} component={MyProfileScreen} />
      <Stack.Screen name="Settings" options={{ title: `${strings['title.settings']}` }} component={SettingsScreen} />
      <Stack.Screen name="Policy" options={{ title: `${strings['title.policy']}` }} component={PolicyScreen} />
      <Stack.Screen name="Notifications" options={{ title: `${strings['title.notifications']}` }} component={NotificationsScreen} />
      <Stack.Screen name="Calculator" options={{ title: `${strings['title.calculator']}` }} component={CalculatorScreen} />
      <Stack.Screen name="My Insurance" options={{ title: `${strings['title.insurance']}` }} component={MyInsurance} />
      <Stack.Screen name="Health Insurance" options={{ title: `${strings['title.health']}` }} component={HealthInsuranceScreen} />
      <Stack.Screen name="Life Insurance" options={{ title: `${strings['title.life']}` }} component={LifeInsurance} />
      <Stack.Screen name="Vehicle Insurance" options={{ title: `${strings['title.vehicle']}` }} component={VehicleInsurance} />
      <Stack.Screen name="Telemedicine" options={{ title: `${strings['title.telemedicine']}` }} component={Telemedicine} />
      <Stack.Screen name="Choose Doctor" options={{ title: `${strings['title.chooseDoctor']}` }} component={ChooseDoctor} />
      <Stack.Screen name="Book Appointment" options={{ title: `${strings['title.bookAppointment']}` }} component={BookAppointment} />
      <Stack.Screen name="Booking Details" options={{ title: `${strings['title.bookingDetails']}` }} component={BookingDetails} />
      <Stack.Screen name="About Us" options={{ title: `${strings['title.aboutUs']}` }} component={AboutUs} />
      <Stack.Screen name="Acceptance of Agreement" options={{ title: `${strings['title.agreement']}` }} component={Agreement} />
      <Stack.Screen name="Product Details" options={{ title: `${strings['title.product.details']}` }} component={ProductDetails} />
      <Stack.Screen name="InAppBrowser" options={{ title: `${strings['title.telemedicine']}` }} component={InAppBrowser} />
      <Stack.Screen name="Manage Appointments" options={{ title: `${strings['title.manageAppointments']}` }} component={ManageAppointments} />
    </Stack.Navigator>
  )
}