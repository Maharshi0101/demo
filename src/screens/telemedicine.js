import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'

export default function Telemedicine({ navigation, route }) {
    const { currentTheme } = useTheme();
    const { strings } = useLanguage()
    const specialityList = (route && route.params && route.params.details) || undefined

    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.chooseSpeciality']}`}</Text>
                <Text style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.selectSpeciality']}`}</Text>
            </View>
            <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>{`${strings['title.specialityList']}`}</Text>
            <FlatList
                data={specialityList}
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Choose Doctor') }}
                            style={styles.box}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[styles.titleText, { color: currentTheme?.primaryText }]}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
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
    titleText: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '600'
    }
})