import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, I18nManager } from 'react-native'
import { useTheme } from '../../contexts/theme';

export default function MyInsurance({ navigation, route }) {

    const { currentTheme } = useTheme();

    const insurance = (route && route.params && route.params.details) || undefined

    return (
        <View style={styles.container}>
            <FlatList
                data={insurance}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(item.navigate) }}
                            style={styles.box}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: `${item.image}`
                                    }}
                                />
                                <Text style={[styles.titleText, { color: currentTheme?.primaryText }]}>{item.title}</Text>
                            </View>
                            <Image
                                style={[styles.rightArrow, {
                                    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
                                    tintColor: currentTheme?.iconTintColor
                                }]}
                                source={require('../../assets/right-arrow.png')}
                            />
                        </TouchableOpacity>
                    )
                }}
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