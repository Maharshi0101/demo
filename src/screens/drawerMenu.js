import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import FormButton from '../components/formButton';
import { useAuth } from '../contexts/auth';
import { configData } from '../mockData'

const menuOptions = [
    {
        name: 'Home',
        title: 'Home',
        url: '/',
    },
    {
        name: 'Settings',
        title: 'Settings',
        url: '/settings',
    },
    {
        name: 'My Profile',
        title: 'My Profile',
        url: '/myProfile',
    },
    {
        name: 'Policy',
        title: 'Policy',
        url: '/policy',
    },
    {
        name: 'Notifications',
        title: 'Notifications',
        url: '/notifications',
    },
    {
        name: 'Calculator',
        title: 'Calculator',
        url: '/calculator',
    }
];

// Create a custom component for your drawer menu
export default DrawerMenu = ({ navigation }) => {
    const [menuItems, setMenuItems] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        const getMenuItems = async () => {
            setMenuItems(menuOptions);
        };

        getMenuItems();
    }, []);

    const signOut = () => {
        auth.signOut();
    };


    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10, marginBottom: 10, justifyContent: 'space-between' }}>
            <View style={{
                borderRadius: 20,
                borderWidth: 1,
                alignSelf: 'center',
                borderColor: '#1279BE',
                width: '90%',
            }}>
                <FlatList
                    data={configData?.menu?.items}
                    renderItem={({ item }) => (
                        <View style={{}}>
                            <TouchableOpacity
                                key={item.id}
                                style={{ width: '90%', margin: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                onPress={() => navigation.navigate(item.name)}
                            >
                                <Text style={{
                                    textAlign: 'left',
                                    marginLeft: 20,
                                    fontSize: 20
                                }}>{item.title}</Text>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        tintColor: '#1279BE'
                                    }}
                                    source={require('../assets/right-arrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View style={{ width: '80%', alignSelf: 'center' }}>
                <FormButton
                    modeValue='contained'
                    title='Logout'
                    buttonColor={'#1279BE'}
                    onPress={() => {
                        // TODO
                        signOut()
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
