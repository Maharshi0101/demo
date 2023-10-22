import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import RadioButton from '../components/radioButton';

const height = Dimensions.get('screen').height

const themes = [
    {
        key: 'light',
        text: 'Light',
    },
    {
        key: 'dark',
        text: 'Dark',
    },
    {
        key: 'gray',
        text: 'Gray',
    }
];

const language = [
    {
        key: 'eng',
        text: 'English',
    },
    {
        key: 'arabic',
        text: 'Arabic',
    }
]


export default function SettingsScreen({ navigation }) {

    return (
        <View style={{ flex: 1, width: '90%', alignSelf: 'center' }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1279BE'
            }}>
                <Text style={{ padding: 10, width: '60%', fontSize: 20, fontWeight: "700" }}>Select Theme:</Text>
                <View style={{ height: '100%', borderWidth: 1, borderColor: '#1279BE', marginRight: 10 }} />
                <View style={{ padding: 10 }}>
                    <RadioButton PROP={themes} />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1279BE'
            }}>
                <Text style={{ padding: 10, width: '60%', fontSize: 20, fontWeight: "700" }}>Select Language:</Text>
                <View style={{ height: '100%', borderWidth: 1, borderColor: '#1279BE', marginRight: 10 }} />
                <View style={{ padding: 10 }}>
                    <RadioButton PROP={language} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

