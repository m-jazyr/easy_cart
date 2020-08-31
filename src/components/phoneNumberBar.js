import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Input } from 'react-native-elements';

function PhoneNumberBar({ navigation }) {
  return (
    <View style={styles.phoneNumberBar}>
      <Input
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.textInputContainer}
        inputStyle={styles.inputText}
        placeholder={'Enter your phone number'}
        leftIcon={<Text style={styles.inputDefaultText}>+91</Text>}
        keyboardType={'number-pad'}
      />
      <View style={styles.rightItemContainer}>
        <TouchableOpacity
          style={styles.continueButtonContainer}
          onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneNumberBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  inputContainer: {
    width: '70%',
    marginTop: 0,
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    borderBottomColor: colors.white,
    marginTop: 24,
    height: 44,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  rightItemContainer: {
    width: '30%',
  },
  continueButtonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  continueText: {
    fontSize: 12,
    fontFamily: fonts.montserratRegular,
    color: colors.white,
  },
  inputText: {
    fontSize: 15,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  inputDefaultText: {
    fontSize: 15,
    marginBottom: Platform.OS === 'ios' ? 2 : 0,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
});

export default PhoneNumberBar;
