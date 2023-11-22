import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'

export default function Telemedicine({ navigation }) {
    const { currentTheme } = useTheme();
    const { strings } = useLanguage()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 10, alignSelf: 'center' }}>
                <Text style={[styles.chooseSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.chooseSpeciality']}`}</Text>
                <Text style={[styles.selectSpecialityText, { color: currentTheme?.primaryText }]}>{`${strings['title.selectSpeciality']}`}</Text>
            </View>
            <Text style={[styles.specialityListText, { color: currentTheme?.primaryText }]}>{`${strings['title.specialityList']}`}</Text>
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
    }
})