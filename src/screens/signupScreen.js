import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../components/formButton';
import FormInput from '../components/formInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useTheme } from '../contexts/theme.js';
import { useLanguage } from '../contexts/language';

export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { strings } = useLanguage()
  const { currentTheme } = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Title style={[styles.titleText, { color: currentTheme?.primaryText }]}>{strings['title.started']}</Title>
        <FormInput
          labelName={strings['label.displayName']}
          value={displayName}
          autoCapitalize='none'
          onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
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
          title={strings['title.signUp']}
          modeValue='contained'
          buttonColor={'#1279BE'}
          labelStyle={styles.loginButtonLabel}
          onPress={() => {
            // TODO
          }}
        />
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/back-arrow.png')}
            />
          </TouchableOpacity> */}
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