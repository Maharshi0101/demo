import React from "react";
import { View, Text, Image, Dimensions } from 'react-native'
// import configData from "../json/configData.json";
import configEngData from '../json/configData_en.json'
import configArData from '../json/configData_ar.json'
import { useSelector } from "react-redux";
import { useTheme } from '../contexts/theme';

const { height } = Dimensions.get('screen');

export default function AboutUs({ navigation, route }) {

  const appLanguage = useSelector((state) => state?.langs?.appLanguage)
  const items = appLanguage === 'en' ? configEngData?.menu?.items : configArData?.menu?.items

  const menuItem = items.filter((data) => data.name === route?.name)
  const { currentTheme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: '100%', height: height / 4, resizeMode: 'cover' }}
        source={{ uri: `data:image/png;base64,${menuItem[0]?.image?.data}` }} />
      <Text style={{ textAlign: 'center', padding: 15, color: currentTheme?.primaryText }}>{menuItem[0]?.content}</Text>
    </View>
  );
}