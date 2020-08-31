import * as React from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import styles from '../style';
import PhoneNumberBar from '../../../components/phoneNumberBar';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Shop name</Text>
      <KeyboardAvoidingView style={styles.phoneNumberBar} behavior="padding">
        <PhoneNumberBar navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
