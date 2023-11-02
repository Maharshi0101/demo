import React from "react";
import { View, Text } from 'react-native'
// import configData from "../json/configData.json";
import configEngData from '../json/configData_en.json'
import configArData from '../json/configData_ar.json'
import { useSelector } from "react-redux";
import { useTheme } from '../contexts/theme';

export default function Agreement({ navigation, route }) {

    const appLanguage = useSelector((state) => state?.langs?.appLanguage)
    const items = appLanguage === 'en' ? configEngData?.menu?.items : configArData?.menu?.items
  
    const menuItem = items.filter((data) => data.name === route?.name)
    const { currentTheme } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', padding: 15, color: currentTheme?.primaryText }}>{menuItem[0]?.content}</Text>
        </View>
    );
}