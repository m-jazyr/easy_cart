import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import { sampleCategories } from '../../../utils/constants';
import CartProductTile from '../../../components/cartProductTile';
import AddressComponentBar from '../../../components/addressComponentBar';
import CheckoutBar from '../../../components/checkoutBar';

function CartScreen({ navigation }) {
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
        data={sampleCategories}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <Text style={styles.addMoreText}>+ Add more</Text>
        )}
      />
      <View style={styles.checkoutBottomBar}>
        <AddressComponentBar />
        <CheckoutBar />
      </View>
    </View>
  );
}

export default CartScreen;
