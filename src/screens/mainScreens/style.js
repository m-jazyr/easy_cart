import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

const screen = Dimensions.get('window');
const categoryTileWidth = screen.width / 2 - screen.width * 0.1;
const categoryTileMargin = screen.width * 0.025;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  categoryTileContainer: {
    width: categoryTileWidth,
    backgroundColor: colors.white,
    marginHorizontal: categoryTileMargin,
    marginVertical: categoryTileMargin,
    height: categoryTileWidth,
    borderRadius: 6,
    shadowColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryListContainer: {
    paddingHorizontal: screen.width * 0.05,
  },
  productListContainer: {
    paddingHorizontal: screen.width * 0.05,
  },
  bottomMargin: {
    marginBottom: 60,
  },
  addMoreText: {
    fontSize: 14,
    margin: 16,
    flexGrow: 1,
    textAlign: 'right',
    fontFamily: fonts.montserratRegular,
    color: colors.link,
  },
  checkoutBottomBar: {
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 20,
    backgroundColor: colors.white,
  },
  backgroundWhite: {
    backgroundColor: colors.background,
  },
  addressBottomPart: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 14,
    marginTop: 20,
  },
  addressSaveAsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    marginLeft: 16,
    paddingVertical: 4,
  },
  saveAsButton: {
    borderRadius: 20,
    borderWidth: 0.5,
    height: 28,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginHorizontal: 8,
    borderColor: colors.grey2,
  },
  saveAsButtonText: {
    fontSize: 12,
    fontFamily: fonts.montserratRegular,
    color: colors.grey2,
  },
  saveAsText: {
    marginStart: 4,
    fontSize: 11,
    textTransform: 'uppercase',
    fontFamily: fonts.robotoBold,
    color: colors.grey2,
  },
  selected: {
    borderColor: colors.primary,
    color: colors.primary,
  },
  leftIcon: {
    color: colors.primary,
  },
  profileHeader: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  profilePhoneText: {
    fontSize: 14,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  profileEditText: {
    fontSize: 11,
    fontFamily: fonts.robotoRegular,
    color: colors.link,
  },
  profileEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  profileOptionsText: {
    fontSize: 14,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  profileOptionsIcon: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  orderTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default styles;
