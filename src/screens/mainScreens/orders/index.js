import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style';
import { Header, ListItem } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import { sampleCategories } from '../../../utils/constants';
import colors from '../../../assets/colors';
import { images } from '../../../assets/images';
import CartProductTile from '../../../components/cartProductTile';

function OrdersScreen({ navigation }) {
  const [showOrder, setShowOrder] = React.useState('');
  const renderItem = ({ item, index }) => {
    return (
      <>
        <ListItem
          onPress={() => setShowOrder(showOrder === index ? '' : index)}>
          <View style={styles.profileOptionsIcon}>
            <images.order height={25} width={25} />
          </View>
          <ListItem.Content>
            <ListItem.Title style={styles.profileOptionsText}>
              Order No: {'1263'}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.profileEditText}>
              status: {'Delivered'}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            type={'material-community'}
            name={'chevron-down'}
            color={colors.primary}
          />
        </ListItem>
        {showOrder === index && (
          <View style={styles.orderContainer}>
            <Text>{item.name}</Text>
          </View>
        )}
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<BackArrow navigation={navigation} />}
        centerComponent={<Text>My Orders</Text>}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={sampleCategories}
        renderItem={renderItem}
      />
    </View>
  );
}

export default OrdersScreen;
