import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../assets/colors';

const screen = Dimensions.get('window');
const categoryTileWidth = screen.width / 2 - screen.width * 0.1;
const productTileHeight = screen.width / 2;
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
  bottomCartSummary: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  viewCartButton: {
    right: 0,
    position: 'absolute',
    marginRight: 16,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 12,
  },
  viewCartText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  productTileContainer: {
    width: categoryTileWidth,
    backgroundColor: colors.white,
    marginHorizontal: categoryTileMargin,
    marginVertical: categoryTileMargin,
    height: productTileHeight,
    borderRadius: 6,
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addCartButton: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.grey0,
    borderRadius: 12,
    padding: 6,
  },
  addCartText: {
    fontSize: 12,
    color: colors.primary,
  },
  tileImageContainer: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tileImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tileBottomPartContainer: {
    padding: 4,
    justifyContent: 'space-between',
  },
  tilePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dummmyListFooter: {
    marginBottom: 60,
  },
});

export default styles;
