import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../assets/fonts';

function CheckoutBar() {
  return (
    <View style={styles.container}>
      <Icon name={'google-maps'} size={20} style={styles.leftIcon} />
      <View style={styles.otherContainer}>
        <Text style={styles.totalText}>Total :</Text>
        <Text style={styles.priceText}>Rs 140</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </View>
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
  otherContainer: {
    flexGrow: 1,
    marginRight: 8,
    flexDirection: 'row',
  },
  totalText: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  priceText: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontFamily: fonts.montserratRegular,
    color: colors.primary,
  },
  checkoutText: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontFamily: fonts.montserratRegular,
    color: colors.white,
  },
  checkoutContainer: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 4,
    alignItems: 'center',
  },
});

export default CheckoutBar;
