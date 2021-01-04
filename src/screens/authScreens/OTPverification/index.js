import * as React from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import styles from '../style';
import { Header, Input } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import MainButton from '../../../components/mainButton';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, showError } from '../../../redux/mainSlice';
import { storeValue } from '../../../utils/storage';
import { USER_TOKEN } from '../../../utils/constants';
import { verifyOtp } from '../../../apis/authAPIs';
import { authSelector, callAPIFailed, hideLoader, showLoader } from '../../../redux/authSlice';

function VerificationScreen({ navigation }) {
  const dispatch = useDispatch()
  const { loading, user } = useSelector(authSelector)
  const [otp, setOtp] = React.useState('');

  const onVerifyOTP = async () => {
    Keyboard.dismiss();
    dispatch(showLoader());
    const response = await verifyOtp(otp)
    if (response.status.success) {
      dispatch(hideLoader());
      storeValue(USER_TOKEN, response.data[0].token)
      dispatch(setToken(response.data[0].token));
    } else {
      dispatch(callAPIFailed());
      dispatch(showError(response.error.message));
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<BackArrow navigation={navigation} />}
      />
      <View style={styles.flexGrow}>
        <View style={styles.verifyTitleContainer}>
          <Text style={styles.verifyTitle}>Verify mobile number</Text>
          <Text style={styles.verifyNumber}>
            Enter the OTP sent to {user.phone}
          </Text>
        </View>
        <Input
          inputContainerStyle={styles.otpInputContainer}
          inputStyle={styles.otpInputStyle}
          keyboardType={'number-pad'}
          placeholder={'Enter OTP'}
          // maxLength={4}
          value={otp}
          onChangeText={(text) => setOtp(text)}
        />
        <View style={styles.resendContainer}>
          <Text style={styles.otpRecievied}>Didn't receive OTP?</Text>
          <Text style={styles.resend}>resend</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.verifyButtonContainer}
        behavior={'padding'}
        keyboardVerticalOffset={30}>
        <MainButton
          loading={loading}
          title={'Verify and Continue'}
          disabled={otp.length < 1}
          onPress={() => onVerifyOTP()}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

export default VerificationScreen;
