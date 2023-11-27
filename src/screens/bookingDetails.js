import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'
import moment from "moment";
import axios from 'axios';
import FormButton from "../components/formButton";

export default function BookingDetails({ navigation, route }) {

    const { currentTheme } = useTheme();
    const { strings } = useLanguage()

    const [bookingInfo, setBookingDetails] = useState({})

    const bookingDetails = (route && route.params && route.params.bookingDetails) || undefined

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getBookingDetails()
        }
        return () => mounted = false;
    }, [])

    console.log('bookingInfo', bookingInfo);

    async function getBookingDetails() {
        try {
            const bookingId = bookingDetails?._id
            // Set your API endpoint
            const apiUrl = `https://test-api.bupa.com.sa/bupa-organization/point/careconnectapi/booking?bookingId=${bookingId}`;
            // Define your headers
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1234',
                'X-IBM-Client-Id': 'ff2c78972b6d1ee0efb2e07a128ef1fe',
                'X-IBM-Client-Secret': '9f38c7a03dfaf209b41bedb011e15064'
            };
            const response = await axios.get(apiUrl, { headers });
            console.log('Get Booking Details------->', response?.status);
            setBookingDetails(response?.data)
        } catch (error) {
            setBookingDetails({})
            console.log('Get Booking Details Error------->', error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ width: '85%', marginTop: 10, alignSelf: 'center' }}>
                <Image
                    style={{ width: 50, height: 50, marginBottom: 10, resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../assets/success.png')} />
                <Text
                    style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, textAlign: 'center' }]}>
                    {`${strings['label.congratulations']}`}
                </Text>
                <Text
                    style={[styles.selectSpecialityText, { color: currentTheme?.primaryText, textAlign: 'center' }]}>
                    {`${strings['label.confirmedConsultation']}`}
                </Text>
            </View>
            <View style={[styles.box, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, fontSize: 16 }]}>
                    {`${strings['label.thankYou']}`}
                </Text>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, fontSize: 14 }]}>
                    {`${strings['label.appointmentConfirmation']}`} {`${bookingInfo?.patientId?.memberId}`}
                </Text>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, fontSize: 14 }]}>
                    {`${strings['label.bookingRefNo']}`} {`${bookingInfo?.meetingId}`}
                </Text>
                <View style={{ marginTop: 10, width: '100%', height: 1, borderWidth: 1, borderColor: currentTheme?.primaryText }} />
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, marginTop: 10, alignSelf: 'center' }]}>
                    {`${strings['label.consultationDateAndTime']}`}
                </Text>
                <Text style={[styles.specialityListText, { color: currentTheme?.primaryText, alignSelf: 'center' }]}>
                    {`${moment(bookingInfo?.bookingDate).format("Do MMMM, YYYY")}`} {bookingInfo?.time}
                </Text>
            </View>
            <View style={{ width: '85%', marginTop: 20, marginBottom: 15, alignSelf: 'center' }}>
                <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>
                    {`${strings['label.startConsultations']}`}
                </Text>
            </View>
            <View style={[styles.box, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, alignSelf: 'center' }]}>
                    {`${strings['label.duringConsultation']}`}
                </Text>
                <Image
                    style={{ width: 50, height: 50, marginBottom: 10, resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../assets/video-chat.png')} />
            </View>
            <View style={[styles.box, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText, alignSelf: 'center' }]}>
                    {'Doctor'}
                </Text>
                <Text style={[styles.specialityListText, { color: currentTheme?.primaryText, alignSelf: 'center' }]}>
                    {`${bookingInfo?.doctorId?.firstNameEn}`} {`${bookingInfo?.doctorId?.lastNameEn}`}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <FormButton
                    modeValue='contained'
                    title={`${strings['title.home']}`}
                    contentStyle={{ alignSelf: 'center' }}
                    buttonColor={'#0179C8'}
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    chooseSpecialityText: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },
    selectSpecialityText: {
        fontSize: 15,
        marginBottom: 10
    },
    specialityListText: {
        fontSize: 15,
    },
    box: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1279BE',
        padding: 10,
        width: '85%',
    },
    container: {
        flexGrow: 1,
        paddingBottom: 50,
        marginTop: 20
    },
    slotContainer: {
        marginRight: 10,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1279BE'
    },
    buttonContainer: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center'
    }
})