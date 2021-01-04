import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../assets/colors';

function BackArrow({ navigation, color }) {
  const index = navigation.canGoBack();
  return (
    <Icon
      name={index ? 'arrow-left' : null}
      size={20}
      color={color ? color : colors.primary}
      onPress={() => (index ? navigation.goBack() : null)}
    />
  );
}

export default BackArrow;
