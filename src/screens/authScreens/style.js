import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingBottom: 30,
  },
  bottomAlign: {
    justifyContent: 'flex-end',
  },
  businessTitleContainer: {
    marginBottom: 160,
    alignItems: 'center',
  },
  businessTitle: {
    fontSize: 32,
    fontFamily: fonts.robotoRegular,
    color: colors.grey3,
  },
  phoneNumberBar: {
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  headerContainerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  verifyTitleContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  resendContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInputContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    marginTop: 24,
    height: 44,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  verifyButtonContainer: {
    width: '100%',
  },
  verifyTitle: {
    fontSize: 15,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  verifyNumber: {
    fontSize: 12,
    fontFamily: fonts.robotoRegular,
    color: colors.grey3,
  },
  otpRecievied: {
    fontSize: 13,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  resend: {
    fontSize: 13,
    marginLeft: 8,
    fontFamily: fonts.robotoBold,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  otpInputStyle: {
    fontSize: 14,
    marginLeft: 8,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
    textTransform: 'uppercase',
  },
  flexGrow: {
    flexGrow: 1,
  },
});

export default styles;
