import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../assets/fonts';

function AddressComponentBar() {
  return (
    <View style={styles.container}>
      <Icon name={'google-maps'} size={20} style={styles.leftIcon} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.deliverText}>Deliver to : </Text>
          <Text style={styles.addressTitle}>Home</Text>
        </View>
        <Text style={styles.address}>Address</Text>
      </View>
      <Text style={styles.changeText}>Change</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    width: '10%',
    color: colors.primary,
  },
  locationContainer: {
    flexGrow: 1,
    marginRight: 8,
  },
  changeText: {
    fontSize: 12,
    padding: 4,
    fontFamily: fonts.montserratRegular,
    color: colors.primary,
  },
  deliverText: {
    fontSize: 10,
    fontFamily: fonts.robotoThin,
    color: colors.black,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 12,
    marginRight: 8,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
    textTransform: 'uppercase',
  },
  address: {
    fontSize: 12,
    marginRight: 8,
    fontFamily: fonts.robotoCondensedLight,
    color: colors.grey4,
  },
});

export default AddressComponentBar;
