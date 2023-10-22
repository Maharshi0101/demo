import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import FormButton from '../components/formButton';
import FormInput from '../components/formInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Title style={styles.titleText}>Let's get started!</Title>
        <FormInput
          labelName='Display Name'
          value={displayName}
          autoCapitalize='none'
          onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
        />
        <FormInput
          labelName='Email'
          value={email}
          autoCapitalize='none'
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelName='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormButton
          title='Signup'
          modeValue='contained'
          buttonColor={'#1279BE'}
          labelStyle={styles.loginButtonLabel}
          onPress={() => {
            // TODO
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/back-arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 20
  },
  navButtonText: {
    fontSize: 18
  },
  navButton: {
    marginTop: 10
  },
  tinyLogo: {
    marginTop: 10,
    width: 50,
    height: 50
  },
});