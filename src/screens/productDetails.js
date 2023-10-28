import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native'
import FormButton from "../components/formButton";


export default function ProductDetails({ navigation, route }) {

    const detailsData = (route && route.params && route.params.details) || undefined

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ 
                textAlign: 'center', 
                fontSize: 16, 
                fontWeight:'700',
                marginBottom: 10
            }}>{route?.params?.title}</Text>
            <View style={styles.viewContainer} />
            {detailsData.map((item) => {
                return (
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                    }}
                                    source={require('../assets/check-mark.png')}
                                />
                                <Text style={{ marginLeft: 5, fontSize: 14 }}>{item.title}</Text>

                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontSize: 12, fontWeight: '700' }}>{item.value}</Text>
                            </View>
                        </View>
                        <View style={{ borderColor: 'grey', borderWidth: 0.5, marginTop: 20, marginBottom: 20 }} />
                    </View>
                )
            })
            }
            <View style={styles.buttonContainer}>
                <FormButton
                    modeValue='contained'
                    title='Buy Now'
                    buttonColor={'#0179C8'}
                    onPress={() => {
                        //TODO
                        Alert.alert('Add to Cart', 'Under Maintenance', [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 50,
        marginTop: 20
    },
    viewContainer: {
        borderColor: 'grey',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        marginBottom: 20
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center'
    }
})
