import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Button, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native'
import FormButton from "../components/formButton";
import StarRating from "../components/starRating";
import { configData } from "../mockData";

export default function MyProductsScreen({ navigation }) {


  const Card = ({ data }) => {
    return (
      <View style={{ width: '90%', marginTop: 20, alignSelf: 'center' }}>
        <View style={styles.cardItem}>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <Text style={[styles.text, { color: '#0179C8', fontWeight: '700' }]}>{data.class}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={styles.text}>{data.category}</Text>
              <StarRating noOfRatings={data.rating} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>{'Cover'}</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>{data.coverage + ' ' + data.currency}</Text>
            <FormButton
              modeValue='contained'
              title='View Details'
              buttonColor={'green'}
              contentStyle={{
                width: 120,
                height: 40
              }}
              onPress={() => { navigation.navigate('Product Details') }}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Text style={styles.planText}>We have these plans for you</Text>
      <FlatList
        data={configData?.home_features?.products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card data={item} />
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  planText: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  text: {
    fontSize: 15
  },
  cardItem: {
    height: 130,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})