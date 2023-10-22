import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Button, FlatList, Image, Text } from 'react-native'

const data = [
  {
    id: 1,
    title: "Health Insurance",
    image: require('../assets/health-insurance.png'),
    navigate: 'Health Insurance'
  },
  {
    id: 2,
    title: "Life Insurance",
    image: require('../assets/life-insurance.png'),
    navigate: 'Notifications'
  },
  {
    id: 3,
    title: "Vehicle Insurance",
    image: require('../assets/car-insurance.png'),
    navigate: 'Settings'
  }
];


export default function MyProductsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => { navigation.navigate(item.navigate) }}
            style={{
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
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ width: 35, height: 35 }}
                source={item.image}
              />
              <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '700' }}>{item.title}</Text>
            </View>
            <Image
              style={{ width: 20, height: 20, tintColor: '#1279BE' }}
              source={require('../assets/right-arrow.png')}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}