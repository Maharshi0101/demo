import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'
import axios from 'axios';
import Loader from '../components/loader'

export default function Telemedicine({ navigation, route }) {

    const { currentTheme } = useTheme();
    const { strings } = useLanguage()
    const specialityList = (route && route.params && route.params.details) || undefined

    const [specialistList, setSpecialityList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getSpecialistsList()
        }
        return () => mounted = false;
    }, [])

    async function getSpecialistsList() {
        try {
            // Set your API endpoint
            const apiUrl = 'https://test-api.bupa.com.sa/bupa-organization/point/careconnectapi/speciality';
            // Define your headers
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1234',
                'X-IBM-Client-Id': 'ff2c78972b6d1ee0efb2e07a128ef1fe',
                'X-IBM-Client-Secret': '9f38c7a03dfaf209b41bedb011e15064'
            };
            const response = await axios.get(apiUrl, { headers });
            console.log('Get Speciality List------->', response?.status);
            setSpecialityList(response?.data)
            setLoading(false)
        } catch (error) {
            setSpecialityList([])
            setLoading(false)
            console.log('Get Speciality List Error------->', error);
        }
    }

    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.chooseSpeciality']}`}</Text>
                <Text style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.selectSpeciality']}`}</Text>
            </View>
            <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>{`${strings['title.specialityList']}`}</Text>
            {loading && <Loader />}
            {specialistList.length && !loading ?
                <FlatList
                    key={specialistList?.id}
                    data={specialistList}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Choose Doctor', { speciality: item }) }}
                                style={styles.box}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[styles.titleText, { color: currentTheme?.primaryText }]}>{item?.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                /> :
                <View style={{ flex: 1, marginTop: 100, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Image
                        style={{ width: 150, height: 150, resizeMode: 'contain' }}
                        source={require('../assets/no-results.png')} />
                    <Text
                        style={[styles.selectSpecialityText, { color: currentTheme?.primaryText, marginTop: 10 }]}>
                        {`${strings['label.noSpecalities']}`}
                    </Text>
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    chooseSpecialityText: {
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    selectSpecialityText: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10
    },
    specialityListText: {
        fontSize: 15,
        fontWeight: '900',
        marginLeft: 20,
        marginBottom: 10
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
    titleText: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '600'
    }
})