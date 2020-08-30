import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { images } from '../assets/images';

const screen = Dimensions.get('window');
const productTileWidth = screen.width / 2 - screen.width * 0.1;
const productTileHeight = screen.width / 2;
const productTileMargin = screen.width * 0.025;

function ProductTile({ item }) {
  return (
    <TouchableOpacity
      style={styles.productTileContainer}
      onPress={() => Alert.alert('item.name')}>
      <View style={styles.tileImageContainer}>
        <Image
          source={images.dummy1}
          resizeMode={'cover'}
          style={styles.tileImage}
        />
        {/* <item.image height={50} width={50} /> */}
      </View>
      <View style={styles.discountBadge}>
        <Text style={styles.discountBadgeText}>10% OFF</Text>
      </View>
      <View style={styles.tileBottomPartContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <View>
          <Text style={styles.unitText}>1 kg</Text>
          <View style={styles.tilePriceContainer}>
            <View>
              <Text style={styles.priceText}>Rs 45</Text>
              <Text style={styles.discountedPrice}>Rs 45</Text>
            </View>
            <TouchableOpacity style={styles.addCartButton}>
              <Text style={styles.addCartText}>+ ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productTileContainer: {
    width: productTileWidth,
    backgroundColor: colors.white,
    marginHorizontal: productTileMargin,
    marginVertical: productTileMargin,
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
    width: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 6,
  },
  addCartText: {
    fontSize: 12,
    fontFamily: fonts.robotoRegular,
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
    flexGrow: 1,
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
  productName: {
    fontSize: 14,
    fontFamily: fonts.robotoRegular,
    textTransform: 'capitalize',
    color: colors.black,
  },
  unitText: {
    fontSize: 11,
    marginBottom: 4,
    fontFamily: fonts.montserratRegular,
    color: colors.grey5,
    textTransform: 'uppercase',
  },
  priceText: {
    fontSize: 12,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  discountedPrice: {
    fontSize: 11,
    textDecorationLine: 'line-through',
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  discountBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopEndRadius: 6,
    borderBottomStartRadius: 6,
    backgroundColor: colors.warning,
  },
  discountBadgeText: {
    fontSize: 8,
    padding: 4,
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
});

export default ProductTile;
