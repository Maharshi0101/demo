import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Button, FlatList, Image, Text } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from '../../contexts/theme';

const policyDetails = [
  {
    name: 'Policy Number',
    value: '1234567890'
  },
  {
    name: 'Insured Name',
    value: 'John Doe',
  },
  {
    name: 'Insured Date of Birth',
    value: '1980-01-01',
  },
  {
    name: 'Effective Date',
    value: '2023-01-01',
  },
  {
    name: 'Expiration Date',
    value: '2024-01-01',
  },
  {
    name: 'Premium',
    value: '$100',
  },
  {
    name: 'Deductible',
    value: '$500',
  },
  {
    name: 'Copay',
    value: '$20',
  },
  {
    name: 'Network',
    value: 'Blue Cross Blue Shield',
  }
];

export default function HealthInsurance({ navigation }) {

  const { currentTheme } = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 10 }}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: currentTheme?.primaryText }]}>Health Insurance Policy</Text>
        {policyDetails.map((item) => {
          return (
            <View style={{ borderWidth: 1, borderColor: '#1279BE', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[styles.policyDetails, { color: currentTheme?.primaryText }]}>{`${item.name} : `}</Text>
              <View style={{ height: 60, borderWidth: 1, borderColor: '#1279BE' }} />
              <Text style={{ margin: 5, width: '50%', fontSize: 15, color: currentTheme?.primaryText }}>
                {item.value}
              </Text>
            </View>
          )
        })
        }
      </View>
      <View style={{ width: '90%', marginBottom: 10, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Button title='Buy' />
        <Button title='Add to Cart' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  policyDetails: {
    fontSize: 18,
    margin: 5,
    fontWeight: '900',
    width: '40%'
  },
});