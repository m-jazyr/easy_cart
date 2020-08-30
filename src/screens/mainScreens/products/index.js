import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import { sampleCategories } from '../../../utils/constants';
import BackArrow from '../../../components/backArrow';
import BottomCartSummary from '../../../components/bottomCartSummary';
import ProductTile from '../../../components/productTile';

function ProductsScreen({ navigation }) {
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
        style={styles.categoryListContainer}
        numColumns={2}
        renderItem={renderCategories}
        data={sampleCategories}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text>Products</Text>}
        ListFooterComponent={() => <View style={styles.dummmyListFooter} />}
      />
      <BottomCartSummary />
    </View>
  );
}

export default ProductsScreen;
