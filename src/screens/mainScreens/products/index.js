import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from 'react-native-elements';

import styles from '../style';
import { sampleProducts } from '../../../utils/constants';
import BackArrow from '../../../components/backArrow';
import BottomCartSummary from '../../../components/bottomCartSummary';
import ProductTile from '../../../components/productTile';

function ProductsScreen({ navigation }) {
  const cart = useSelector((state) => state.cart);

  const renderCategories = ({ item }) => {
    return <ProductTile item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<BackArrow navigation={navigation} />}
        containerStyle={styles.headerContainerStyle}
      />
      <FlatList
        style={[
          styles.productListContainer,
          cart.totalCount !== 0 && styles.bottomMargin,
        ]}
        numColumns={2}
        renderItem={renderCategories}
        data={sampleProducts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text>Products</Text>}
        ListFooterComponent={() => <View style={styles.dummmyListFooter} />}
      />
      <BottomCartSummary navigation={navigation} />
    </View>
  );
}

export default ProductsScreen;
