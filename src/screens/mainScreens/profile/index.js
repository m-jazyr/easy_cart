import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header containerStyle={styles.headerContainerStyle} />
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
