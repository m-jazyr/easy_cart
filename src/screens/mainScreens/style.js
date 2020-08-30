import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../assets/colors';

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
});

export default styles;
