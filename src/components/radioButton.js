import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
    state = {
        value: null,
    };
    render() {
        const { PROP } = this.props;
        const { value } = this.state;
        return (
            <View>
                {PROP.map(res => {
                    return (
                        <View key={res.value} style={styles.container}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.value,
                                    });
                                }}>
                                {value === res.value && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                            <Text style={styles.radioText}>{res.key}</Text>
                        </View>
                    );
                })}
                {/* <Text style={{ fontSize: 15 }}> Selected: {this.state.value} </Text> */}
            </View>
        );
    }
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