import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default RadioButton = ({ PROP, value: defaultValue, onChange, textStyles = {}}) => {

    const [value, setValue] = useState(defaultValue)

    return (
        <View>
            {PROP.map(res => {
                return (
                    <View key={res.value} style={styles.container}>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res.value);
                                onChange(res.value)
                            }}>
                            {value === res.value && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                        <Text style={[styles.radioText, textStyles]}>{res.key}</Text>
                    </View>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: 10,
        fontSize: 15,
        color: '#000',
        fontWeight: '700'
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '500',
        backgroundColor: '#F3FBFE',
    },
});