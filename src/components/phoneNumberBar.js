import * as React from 'react';
import { StyleSheet, View, Text, Platform, ActivityIndicator } from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Input } from 'react-native-elements';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import MainButton from './mainButton';
import { authSelector, showLoader, setUserNumber, callAPIFailed } from '../redux/authSlice';
import { getOtp } from '../apis/authAPIs';
import { showError } from '../redux/mainSlice';

function PhoneNumberBar({ navigation }) {
  const dispatch = useDispatch()
  const { loading } = useSelector(authSelector)
  const [number, setNumber] = React.useState('');

  const onPressContinue = async () => {
    Keyboard.dismiss();
    dispatch(showLoader());
    const response = await getOtp(number)
    if (response.status.success) {
      dispatch(setUserNumber(number));
      navigation.navigate('Verification')
    } else {
      dispatch(callAPIFailed());
      dispatch(showError(response.error.message));
    }
  };
  return (
    <View style={styles.phoneNumberBar}>
      <Input
        maxLength={10}
        autoFocus={true}
        value={number}
        onChangeText={(text) => setNumber(text)}
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.textInputContainer}
        inputStyle={styles.inputText}
        placeholder={'Enter your phone number'}
        leftIcon={<Text style={styles.inputDefaultText}>+91</Text>}
        keyboardType={'number-pad'}
      />
      <View style={styles.rightItemContainer}>
        {loading ? <ActivityIndicator /> : <MainButton
          title={'Continue'}
          onPress={onPressContinue}
          disabled={number.length < 10}
        />}
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
