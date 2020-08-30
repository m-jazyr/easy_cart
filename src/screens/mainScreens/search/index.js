import * as React from 'react';
import { View } from 'react-native';
import styles from '../style';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarComponent from '../../../components/searchBar';

function SearchScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SearchBarComponent />
    </View>
  );
}

export default SearchScreen;
