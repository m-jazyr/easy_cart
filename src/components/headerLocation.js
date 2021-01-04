import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderLocation() {
  return (
    <View style={styles.headerLocationComponent}>
      <Icon name={'google-maps'} size={20} color={colors.primary} />
      <Text>LOCATION</Text>
      <Icon name={'chevron-down'} size={20} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerLocationComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HeaderLocation;
