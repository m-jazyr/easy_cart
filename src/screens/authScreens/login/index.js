import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="verify"
        onPress={() => navigation.navigate('Verification')}
      />
    </View>
  );
}

export default LoginScreen;
