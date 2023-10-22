import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import FormButton from '../components/formButton.js';
import FormInput from '../components/formInput.js';
import { useAuth } from '../contexts/auth';

const { width } = Dimensions.get('screen');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, isLoading] = useState(false);
  const auth = useAuth();

  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/bupa.png')}
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
          title='Login'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          buttonColor={'#1279BE'}
          onPress={() => {
            // TODO
            if (email && password) { signIn() }
          }}
        />
        <FormButton
          title='Sign up here'
          modeValue='text'
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Signup')}
        />
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
    fontSize: 16,
    color: '#1279BE'
  },
  tinyLogo: {
    marginTop: 10,
    width: width / 1.8,
    height: 120,
    marginBottom: 20
  },
});