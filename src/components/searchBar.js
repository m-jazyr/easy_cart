import * as React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { SearchBar } from 'react-native-elements';

function SearchBarComponent() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SearchBar
      lightTheme={true}
      round={true}
      placeholder={'Search for item'}
      value={searchQuery}
      returnKeyType={'search'}
      onChangeText={(text) => setSearchQuery(text)}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputStyle}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainer: {
    backgroundColor: colors.searchBg,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  inputStyle: {
    fontSize: 14,
    height: 50,
    padding: 0,
    margin: 0,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
});

export default SearchBarComponent;
