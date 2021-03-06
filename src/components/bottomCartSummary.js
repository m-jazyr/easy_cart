import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../assets/colors';
import fonts from '../assets/fonts';

function BottomCartSummary({ navigation }) {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.totalCount !== 0 && (
        <View style={styles.bottomCartSummary}>
          <Icon name={'cart'} size={20} color={colors.grey3} />
          <Text style={styles.unitText}>{cart.totalCount} Item : </Text>
          <Text style={styles.priceText}>Rs {cart.totalPrice}</Text>
          <TouchableOpacity
            style={styles.viewCartButton}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.viewCartText}>View cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bottomCartSummary: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  viewCartButton: {
    right: 0,
    position: 'absolute',
    marginRight: 16,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 12,
  },
  viewCartText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.montserratBold,
    fontWeight: 'bold',
  },
  unitText: {
    fontSize: 11,
    marginStart: 8,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  priceText: {
    fontSize: 12,
    fontFamily: fonts.montserratRegular,
    color: colors.primary,
  },
});

export default BottomCartSummary;
