import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'
import moment from "moment";
import axios from 'axios';
import FormButton from "../components/formButton";
import Loader from '../components/loader'

export default function BookAppointment({ navigation, route }) {

    const { currentTheme } = useTheme();
    const { strings } = useLanguage()

    const [note, setNote] = useState('')
    const [availableSlots, setAvailableSlots] = useState([])
    const [selectedTime, setSelectedTime] = useState(null);
    const [loading, setLoading] = useState(false)

    const details = (route && route.params && route.params.details) || undefined

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getAvailableSlots()
        }
        return () => mounted = false;
    }, [])

    async function getAvailableSlots() {
        try {
            const selectedDate = moment(details?.selectedDate).format('YYYY-MM-DD')
            const selectedDoctor = details?.doctorDetails?.doctorId
            // Set your API endpoint
            const apiUrl = `https://test-api.bupa.com.sa/bupa-organization/point/careconnectapi/slots?doctorId=${selectedDoctor}&date=${selectedDate}`;
            // Define your headers
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1234',
                'X-IBM-Client-Id': 'ff2c78972b6d1ee0efb2e07a128ef1fe',
                'X-IBM-Client-Secret': '9f38c7a03dfaf209b41bedb011e15064'
            };
            const response = await axios.get(apiUrl, { headers });
            console.log('Get Available Slots------->', response?.status);
            setAvailableSlots(response?.data?.slots)
        } catch (error) {
            setAvailableSlots([])
            console.log('Get Available Slots Error------->', error);
        }
    }

    const handleTimeSlotPress = (time) => {
        setSelectedTime(time);
    };

    renderAvailableSlots = () => {
        // Filter time slots where isBooked is false
        const availableTimeSlots = availableSlots.filter(slot => !slot.isBooked);
        return (
            availableTimeSlots.map((item) => {
                return (
                    <TouchableOpacity
                        key={item._id}
                        style={[
                            styles.slotContainer,
                            {
                                backgroundColor: (selectedTime === item.time ? 'lightblue' : 'transparent'),
                                marginBottom: 10
                            },
                        ]}
                        onPress={() => handleTimeSlotPress(item?.time)}
                    >
                        <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>{item?.time}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    async function createBooking() {
        try {
            setLoading(true)
            const currentDate = moment(details?.selectedDate).format('YYYY-MM-DD') + 'T00:00:00.000Z'
            const selectedDoctor = details?.doctorDetails?.doctorId
            // Set your API endpoint
            const apiUrl = `https://test-api.bupa.com.sa/bupa-organization/point/careconnectapi/booking`;
            // Define your headers
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1234',
                'X-IBM-Client-Id': 'ff2c78972b6d1ee0efb2e07a128ef1fe',
                'X-IBM-Client-Secret': '9f38c7a03dfaf209b41bedb011e15064'
            };
            const body = {
                "bookingDate": currentDate,
                "time": selectedTime,
                "doctorId": selectedDoctor,
                "consultationType": "videoConference",
                "textNotes": note,
            }
            const response = await axios.post(apiUrl, body, { headers });
            setLoading(false)
            navigation.navigate('Booking Details', { bookingDetails: response?.data })
            console.log('Create Booking------->', response?.data);
        } catch (error) {
            setLoading(false)
            console.log('Create Booking Error------->', error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ marginTop: 10 }}>
                <View style={styles.box}>
                    <View>
                        <Text
                            style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>
                            {`${strings['label.selectedDate']}`}
                        </Text>
                        <Text
                            style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>
                            {moment(details?.selectedDate).format('Do MMMM, YYYY')}
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text
                            style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>
                            {`${strings['label.selectedSpeciality']}`}
                        </Text>
                        <Text
                            style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>
                            {details?.speciality?.name}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.box, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>
                    {`${strings['label.selectTime']}`}
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {availableSlots?.length ? renderAvailableSlots() : <Text
                        style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>
                        {`${strings['label.noAvailableSlots']}`}
                    </Text>}
                </View>
            </View>
            <View style={{ width: '90%', marginTop: 10, padding: 10, alignSelf: 'center' }}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>
                    {`${strings['label.describeCondition']}`}
                </Text>
                <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>
                    {`${strings['label.shareWithDoctor']}`}
                </Text>
            </View>
            <View style={[styles.box, { width: '85%', flexDirection: 'column', alignItems: 'flex-start' }]}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>
                    {`${strings['label.writeNote']}`}
                </Text>
                <View
                    style={{
                        borderColor: '#000000',
                        borderBottomWidth: 0.5,
                        width: '100%',
                    }}>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={text => setNote(text)}
                        value={note}
                        style={{ padding: 10, color: currentTheme?.primaryText }}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <FormButton
                    modeValue='contained'
                    title={`${strings['label.confirmBooking']}`}
                    contentStyle={{ alignSelf: 'center' }}
                    buttonColor={'#0179C8'}
                    onPress={() => {
                        createBooking()
                        //TODO
                        // Alert.alert('Add to Cart', 'Under Maintenance', [
                        //     {
                        //         text: 'Cancel',
                        //         onPress: () => console.log('Cancel Pressed'),
                        //         style: 'cancel',
                        //     },
                        //     { text: 'OK', onPress: () => console.log('OK Pressed') },
                        // ]);
                    }}
                />
            </View>
            {loading && <Loader />}
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