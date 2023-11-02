import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Button, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native'
import FormButton from "../components/formButton";
import StarRating from "../components/starRating";
import { useTheme } from '../contexts/theme';
import { useLanguage } from '../contexts/language'

export default function MyProductsScreen({ navigation, route }) {
  const { strings } = useLanguage()
  const { currentTheme } = useTheme()
  const products = (route && route.params && route.params.details) || undefined

  const Card = ({ data, index }) => {
    return (
      <View style={{ width: '90%', marginTop: index ? 0 : 10, marginBottom: 20, alignSelf: 'center' }}>
        <View style={[styles.cardItem, { backgroundColor: currentTheme?.primaryCard }]}>
          <View style={{ width: '50%' }}>
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
              title={`${strings['label.viewDetails']}`}
              buttonColor={'green'}
              contentStyle={{
                width: 150,
                height: 40
              }}
              onPress={() => { navigation.navigate('Product Details', { title: data.class, details: data?.details }) }}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Text style={[styles.planText, { color: currentTheme?.primaryText }]}>{strings['label.plansForYou']}</Text>
      <FlatList
        data={products}
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
    margin: 15,
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
    padding: 25,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})