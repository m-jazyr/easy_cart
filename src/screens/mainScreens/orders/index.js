import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../style';
import { Header, ListItem } from 'react-native-elements';
import BackArrow from '../../../components/backArrow';
import OrderProductTile from '../../../components/orderProductTile';
import { sampleCategories, profileOptions } from '../../../utils/constants';
import colors from '../../../assets/colors';
import { images } from '../../../assets/images';

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
            {profileOptions.map((product) => (
              <OrderProductTile item={product} />
            ))}
            <View style={styles.orderTotalContainer}>
              <Text style={styles.profilePhoneText}>Total</Text>
              <Text style={styles.profilePhoneText}>Rs 140</Text>
            </View>
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
