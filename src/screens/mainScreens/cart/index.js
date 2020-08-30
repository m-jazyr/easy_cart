import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import { sampleCategories } from '../../../utils/constants';
import CartProductTile from '../../../components/cartProductTile';
import AddressComponentBar from '../../../components/addressComponentBar';

function CartScreen({ navigation }) {
  const renderCartItems = ({ item }) => {
    return <CartProductTile item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<BackArrow navigation={navigation} />}
        centerComponent={<Text>Confirm order</Text>}
      />
      <FlatList
        renderItem={renderCartItems}
        data={sampleCategories}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.addMoreText}>+ Add more</Text>
        )}
      />
      <View style={styles.checkoutBottomBar}>
        <AddressComponentBar />
      </View>
    </View>
  );
}

export default CartScreen;
