import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        rightComponent={<Icon name={'bell'} size={20} color={'white'} />}
      />
      <Text>Search Screen</Text>
      <Button title="profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

export default SearchScreen;
