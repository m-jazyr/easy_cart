import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';

function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Header containerStyle={styles.headerContainerStyle} />
      <Text>Orders Screen</Text>
    </View>
  );
}

export default OrdersScreen;
