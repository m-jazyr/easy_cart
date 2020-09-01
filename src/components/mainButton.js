import * as React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Button } from 'react-native-elements';

function MainButton({ title, onPress, disabled, style }) {
  return (
    <Button
      title={title}
      containerStyle={style}
      buttonStyle={styles.buttonContainer}
      titleStyle={styles.buttonText}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: fonts.montserratRegular,
    color: colors.white,
  },
});

export default MainButton;
