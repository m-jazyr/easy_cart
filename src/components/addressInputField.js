import * as React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AddressInputField({ label, value, setValue, icon, isPhone }) {
  return (
    <Input
      containerStyle={styles.container}
      labelStyle={styles.label}
      label={label}
      inputStyle={styles.inputStyle}
      inputContainerStyle={styles.inputContainer}
      keyboardType={isPhone ? 'number-pad' : 'default'}
      maxLength={isPhone ? 10 : 40}
      leftIcon={<Icon name={icon} size={20} style={styles.leftIcon} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  inputContainer: {
    height: 28,
  },
  inputStyle: {
    fontSize: 13,
    padding: 0,
    margin: 0,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  label: {
    fontSize: 11,
    textTransform: 'uppercase',
    flexGrow: 1,
    fontFamily: fonts.robotoThin,
    color: colors.grey2,
  },
  leftIcon: {
    color: colors.primary,
  },
});

export default AddressInputField;
