import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import FormButton from "../components/formButton";
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'

export default function ManageAppointments({ navigation, route }) {
    const { strings } = useLanguage()
    const { currentTheme } = useTheme()
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [upcoming, setUpcoming] = useState([]);
    const [previous, setPrevious] = useState([]);

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.touchable, {}]}
                    onPress={() => handleTabPress('Upcoming')}
                >
                    <Text style={[styles.textContainer, {
                        borderColor: currentTheme?.primaryText,
                        color: currentTheme?.primaryText,
                        backgroundColor: activeTab === 'Upcoming' ? '#0179C8' : 'transparent'
                    }]}>
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchable, {}]}
                    onPress={() => handleTabPress('Previous')}
                >
                    <Text style={[styles.textContainer, {
                        borderColor: currentTheme?.primaryText,
                        color: currentTheme?.primaryText,
                        backgroundColor: activeTab === 'Previous' ? '#0179C8' : 'transparent'
                    }]}>
                        Previous
                    </Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.imageStyle}
                source={require('../assets/no-appointments.png')}
            />
            {activeTab === 'Upcoming' ?
                <>
                    <Text style={[styles.planText, { color: currentTheme?.primaryText }]}>{strings['label.noAppointments']}</Text>
                    <View style={styles.buttonContainer}>
                        <FormButton
                            modeValue='contained'
                            title={`${strings['label.bookAppointment']}`}
                            buttonColor={'#0179C8'}
                            contentStyle={{ alignSelf: 'center' }}
                            onPress={() => { navigation.navigate('Telemedicine') }}
                        />
                    </View>
                </>
                :
                <Text style={[styles.planText, { color: currentTheme?.primaryText }]}>{strings['label.noPreAppointments']}</Text>
            }

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30
    },
    planText: {
        margin: 25,
        fontSize: 18,
        textAlign: 'center'
    },
    touchable: {
        borderWidth: 1,
        width: '50%',
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        padding: 8
    },
    imageStyle: {
        marginTop: 30,
        width: '50%',
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    buttonContainer: {
        width: '90%',
        alignSelf: 'center'
    }
})