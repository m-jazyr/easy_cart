import * as React from 'react';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderCart({ navigation }) {
  return (
    <Icon
      name={'cart-outline'}
      size={25}
      color={colors.primary}
      onPress={() => navigation.navigate('Cart')}
    />
  );
}

export default HeaderCart;
