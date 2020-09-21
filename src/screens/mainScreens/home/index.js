import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import { sampleCategories } from '../../../utils/constants';
import HeaderLocation from '../../../components/headerLocation';
import HeaderCart from '../../../components/headerCart';

function HomeScreen({ navigation }) {
  const renderCategories = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryTileContainer}
        onPress={() => navigation.navigate('Products')}>
        <item.image height={50} width={50} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        leftComponent={<HeaderLocation navigation={navigation} />}
        rightComponent={<HeaderCart navigation={navigation} />}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.categoryListContainer}
        numColumns={2}
        renderItem={renderCategories}
        data={sampleCategories}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <Text>Category</Text>}
      />
    </View>
  );
}

export default HomeScreen;
