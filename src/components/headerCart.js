import * as React from 'react';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Badge } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import fonts from '../assets/fonts';

function HeaderCart({ navigation }) {
  const cart = useSelector((state) => state.cart);
  return (
    <View style={styles.buttonContainer}>
      <Icon
        name={'cart-outline'}
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate('Cart')}
      />
      {cart.totalCount !== 0 && (
        <Badge
          value={cart.totalCount}
          textStyle={styles.badgeText}
          badgeStyle={styles.badgeStyle}
          containerStyle={styles.containerStyle}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    height: 42,
    width: 32,
  },
  badgeText: {
    fontSize: 9,
    fontFamily: fonts.montserratRegular,
    color: colors.white,
  },
  badgeStyle: {
    backgroundColor: colors.secondary,
  },
  containerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default HeaderCart;
