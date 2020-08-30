import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../assets/colors';

function BackArrow({ navigation, color }) {
  return (
    <Icon
      name="arrow-left"
      size={20}
      color={color ? color : colors.primary}
      onPress={() => navigation.goBack()}
    />
  );
}

export default BackArrow;
