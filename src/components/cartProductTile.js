import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import Icon from 'react-native-vector-icons/Entypo';

function CartProductTile({ item }) {
  const [count, setCount] = React.useState(1);

  return (
    <View style={styles.productTileContainer}>
      <Icon name={'dot-single'} size={20} style={styles.leftIcon} />
      <View style={styles.nameContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.unitText}>1 Kg</Text>
      </View>
      <View style={styles.counterContainer}>
        <Icon
          name={'plus'}
          color={colors.primary}
          size={25}
          onPress={() => setCount(count + 1)}
        />
        <Text style={styles.countText}>{count}</Text>
        <Icon
          name={'minus'}
          color={colors.grey5}
          size={25}
          onPress={() => setCount(count - 1)}
        />
      </View>
      <Text style={styles.priceText}>Rs 40</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productTileContainer: {
    width: '95%',
    flexDirection: 'row',
    marginHorizontal: 8,
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: colors.grey0,
    height: 60,
  },
  leftIcon: {
    width: '5%',
    color: colors.primary,
  },
  nameContainer: {
    width: '55%',
  },
  counterContainer: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.grey1,
    borderRadius: 16,
    width: '18%',
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 4,
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
    marginRight: 8,
    flexGrow: 1,
    textAlign: 'right',
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
  countText: {
    fontSize: 12,
    width: 15,
    textAlign: 'center',
    fontFamily: fonts.montserratRegular,
    color: colors.black,
  },
});

export default CartProductTile;
