import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'
import telemedicine from '../json/telemedicine.json'

export default function ChooseDoctor({ navigation, route }) {
    const { currentTheme } = useTheme();
    const { strings } = useLanguage()


    const doctorCard = (data) => {
        return (
            <View style={{ width: '90%', alignSelf: 'center', marginTop: 5, marginBottom: 10 }}>
                <TouchableOpacity
                    style={[styles.cardItem, { backgroundColor: currentTheme?.primaryCard }]}
                    onPress={() => { }}
                    activeOpacity={0.9}
                >
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: `data:image/jpeg;base64,${data?.profilePic.data}` }}
                            />
                        </View>
                        <View style={{ marginLeft: 20, width: '70%' }}>
                            <Text style={styles.doctorTitleText}>{data?.firstNameEn + " " + data?.lastNameEn}</Text>
                            <Text style={styles.doctorSpecialityText}>{data?.speciality}</Text>
                            <Text style={{
                                fontSize: 14
                            }}>{data?.experience + " " + data?.experienceUnit}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image
                            style={{ marginLeft: 15, width: 30, height: 30, resizeMode: 'contain' }}
                            source={require('../assets/calendar.png')} />
                        <Text style={styles.doctorExperianceText}>{'Availble on ' + data?.availableDate + ' at ' + data?.availableTime}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 10, marginBottom: 5, alignSelf: 'center' }}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['label.chooseADoctor']}`}</Text>
                <Text style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['label.bookDoctor']}`}</Text>
                <Text style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['label.perMonthConsultations']}`}</Text>
            </View>
            <FlatList
                data={telemedicine?.doctors}
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => doctorCard(item)}
                keyExtractor={item => item.id}
            />
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
    doctorTitleText: {
        fontSize: 16,
        fontWeight: '900'
    },
    doctorSpecialityText: {
        fontSize: 14
    },
    doctorExperianceText: {
        fontSize: 16,
        width: '80%'
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardItem: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 10,
        borderRadius: 5,
    }
})