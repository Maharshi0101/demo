import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { configData } from "../../mockData";

export default function MyInsurance({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={configData?.home_features?.myInsurance}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { navigation.navigate(item.navigate) }}
                        style={styles.box}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={item.image}
                            />
                            <Text style={styles.titleText}>{item.title}</Text>
                        </View>
                        <Image
                            style={styles.rightArrow}
                            source={require('../../assets/right-arrow.png')}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    box: {
        marginTop: 20,
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
        fontSize: 20,
        fontWeight: '700'
    },
    tinyLogo: {
        width: 35,
        height: 35,
    },
    rightArrow: {
        width: 20,
        height: 20,
    }
})