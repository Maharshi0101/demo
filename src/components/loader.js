import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class Loader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#1279BE" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;