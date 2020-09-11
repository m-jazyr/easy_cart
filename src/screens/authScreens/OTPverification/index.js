import * as React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../style';
import { Header, Input } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import MainButton from '../../../components/mainButton';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../redux/mainSlice';
import { storeValue } from '../../../utils/storage';
import { USER_TOKEN } from '../../../utils/constants';

function VerificationScreen({ navigation }) {
  const [otp, setOtp] = React.useState('');
  const dispatch = useDispatch();

  const onVerifyOTP = () => {
    storeValue(USER_TOKEN, otp);
    dispatch(setToken(otp));
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
            Enter the OTP sent to {'9567664990'}
          </Text>
        </View>
        <Input
          inputContainerStyle={styles.otpInputContainer}
          inputStyle={styles.otpInputStyle}
          keyboardType={'number-pad'}
          placeholder={'Enter OTP'}
          maxLength={4}
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
          title={'Verify and Continue'}
          disabled={otp.length < 4}
          onPress={() => onVerifyOTP()}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

export default VerificationScreen;
