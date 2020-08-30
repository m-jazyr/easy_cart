import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import { sampleCategories } from '../../../utils/constants';
import BackArrow from '../../../components/backArrow';
import { images } from '../../../assets/images';

function ProductsScreen({ navigation }) {
  const renderCategories = ({ item }) => {
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
        <View style={styles.tileBottomPartContainer}>
          <Text>{item.name}</Text>
          <Text>1 kg</Text>
          <View style={styles.tilePriceContainer}>
            <Text>Rs 45</Text>
            <TouchableOpacity style={styles.addCartButton}>
              <Text style={styles.addCartText}>+ ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
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
      <View style={styles.bottomCartSummary}>
        <Icon name={'cart'} size={20} color={colors.white} />
        <Text>1 Item : </Text>
        <Text>Rs 40</Text>
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={styles.viewCartText}>View cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductsScreen;
