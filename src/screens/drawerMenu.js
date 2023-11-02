import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import FormButton from '../components/formButton';
import { useAuth } from '../contexts/auth';
// import configData from '../json/configData.json'
import configEngData from '../json/configData_en.json'
import configArData from '../json/configData_ar.json'
import { useTheme } from '../contexts/theme';
import { useLanguage } from "../contexts/language";
import { useSelector } from "react-redux";

// Create a custom component for your drawer menu
export default DrawerMenu = ({ navigation }) => {

    const auth = useAuth();
    const appLanguage = useSelector((state) => state?.langs?.appLanguage)
    const data = appLanguage === 'en' ? configEngData : configArData
    const { currentTheme } = useTheme();
    const { strings } = useLanguage()
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
                    data={data?.menu?.items}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    key={item.id}
                                    style={{ width: '90%', margin: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                    onPress={() => navigation.navigate(item?.name)}
                                >
                                    <Text style={{
                                        textAlign: 'left',
                                        marginLeft: 20,
                                        fontSize: 20,
                                        color: currentTheme?.primaryText
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
                        )
                    }}
                />
            </View>
            <View style={{ width: '80%', alignSelf: 'center' }}>
                <FormButton
                    modeValue='contained'
                    title={`${strings['label.logout']}`}
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
