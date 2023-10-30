import React from "react";
import { View, Text, Image, Dimensions } from 'react-native'
import configData from "../json/configData.json";

const { height } = Dimensions.get('screen');

export default function AboutUs({ navigation, route }) {

  const items = (configData)?.menu?.items

  const menuItem = items.filter((data) => data.title === route?.name)

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: '100%', height: height / 4, resizeMode: 'cover' }}
        source={{ uri: `data:image/png;base64,${menuItem[0]?.image?.data}` }} />
      <Text style={{ textAlign: 'center', padding: 15 }}>{menuItem[0]?.content}</Text>
    </View>
  );
}