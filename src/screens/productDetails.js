import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import FormButton from "../components/formButton";

const data = [
    {
        id: 1,
        title: 'Approved hospitals and clinics network',
        value: 'NWM'
    },
    {
        id: 2,
        title: 'Overall Max. Limit per member',
        value: '5,00,00'
    },
    {
        id: 3,
        title: 'Hospitalization costs and same-day cases.',
        value: 'Covered'
    },
    {
        id: 4,
        title: 'Level of accommodation within the network',
        value: 'Covered'
    },
    {
        id: 5,
        title: 'Out-patient department costs',
        value: 'Covered'
    },
    {
        id: 6,
        title: '-(Natural childbirth, prenatal and postnatal care)',
        value: 'SAR 15,000'
    },
    {
        id: 7,
        title: 'Pre-existing and chronic diseases',
        value: 'Covered up to the maximum annual benefit limit'
    },
    {
        id: 8,
        title: 'Pshychiatric Treatment',
        value: 'Covered up to SR 50,000 per insurance cover period.'
    },
    {
        id: 9,
        title: 'Hearing aid costs',
        value: 'Covered up to SAR 6,000 for total claims for both ears over the policy term'
    },
    {
        id: 10,
        title: 'Consulting an in-network doctor',
        value: 'Covered'
    }
]

export default function ProductDetails({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.viewContainer} />
            {data.map((item) => {
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
