import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from 'react-native-elements';

import styles from '../style';
import BackArrow from '../../../components/backArrow';
import CartProductTile from '../../../components/cartProductTile';
import AddressComponentBar from '../../../components/addressComponentBar';
import CheckoutBar from '../../../components/checkoutBar';

function CartScreen({ navigation }) {
  const cart = useSelector((state) => state.cart);
  const renderCartItems = ({ item }) => {
    return <CartProductTile item={item} />;
  };

  return (
    <View style={[styles.container, styles.backgroundWhite]}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<BackArrow navigation={navigation} />}
        centerComponent={<Text>Confirm order</Text>}
      />
      <FlatList
        renderItem={renderCartItems}
        data={cart.items}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text
            style={styles.addMoreText}
            onPress={() => navigation.navigate('Products')}>
            {cart.totalCount !== 0 && '+ Add more'}
          </Text>
        )}
      />
      {cart.totalCount !== 0 && (
        <View style={styles.checkoutBottomBar}>
          <AddressComponentBar />
          <CheckoutBar />
        </View>
      )}
    </View>
  );
}

export default CartScreen;
