import React from "react";
import { View, Text, Image } from 'react-native'
import { useTheme } from '../../contexts/theme';
import { useLanguage } from "../../contexts/language";

export default function VehicleInsurance({ navigation }) {
    const { strings} = useLanguage()
    const { currentTheme } = useTheme()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 50, fontSize: 20, color: currentTheme?.primaryText }}>{`${strings['label.maintenance']}`}</Text>
            <Image
                style={{ width: '90%', height: 250, resizeMode: 'contain' }}
                source={require('../../assets/maintenance.png')} />
            {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
        </View>
    );
}
