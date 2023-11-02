import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import FormButton from '../components/formButton.js';
import FormInput from '../components/formInput.js';
import { useAuth } from '../contexts/auth';
import { useSelector } from 'react-redux';
import { useTheme } from '../contexts/theme.js';
import { useLanguage } from '../contexts/language.js';

const { width } = Dimensions.get('screen');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const { currentTheme } = useTheme();
  const { strings } = useLanguage()

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
          labelName={strings['label.email']}
          value={email}
          autoCapitalize='none'
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelName={strings['label.password']}
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormButton
          title={strings['title.login']}
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          buttonColor={'#1279BE'}
          onPress={() => {
            // TODO
            if (email && password) { signIn() }
          }}
        />
        <FormButton
          title={strings['title.signUpHere']}
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