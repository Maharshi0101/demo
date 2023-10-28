import React from "react";
import { View, Text } from 'react-native'
import configData from "../json/configData.json";

export default function AboutUs({ navigation, route }) {

  const items = (configData)?.menu?.items

  const menuItem = items.filter((data) => data.title === route?.name)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', padding: 15 }}>{menuItem[0]?.content}</Text>
    </View>
  );
}