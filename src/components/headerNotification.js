import * as React from 'react';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderNotification() {
  return <Icon name={'bell'} size={20} color={colors.primary} />;
}

export default HeaderNotification;
