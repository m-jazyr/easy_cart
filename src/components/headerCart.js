import * as React from 'react';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderCart() {
  return <Icon name={'cart'} size={25} color={colors.primary} />;
}

export default HeaderCart;
