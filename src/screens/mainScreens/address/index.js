import * as React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import MainButton from '../../../components/mainButton';
import AddressInputField from '../../../components/addressInputField';
import BackArrow from '../../../components/backArrow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AddressScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        centerComponent={<Text>Set delivery location</Text>}
        leftComponent={<BackArrow navigation={navigation} />}
      />
      <View style={styles.mapContainer}>
        <Text>map</Text>
      </View>
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardShouldPersistTaps={true}>
        <View style={styles.addressBottomPart}>
          <AddressInputField
            label={'flat, floor, building name'}
            icon={'google-maps'}
          />
          <AddressInputField
            label={'Landmark (optional)'}
            icon={'office-building'}
          />
          <AddressInputField
            label={'Contact details (optional)'}
            icon={'phone'}
            isPhone={true}
          />
          <View style={styles.addressSaveAsContainer}>
            <Icon name={'content-save'} size={20} style={styles.leftIcon} />
            <Text style={styles.saveAsText}>Save as</Text>
            <TouchableOpacity style={styles.saveAsButton}>
              <Text style={styles.saveAsButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveAsButton}>
              <Text style={styles.saveAsButtonText}>Office</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveAsButton}>
              <Text style={styles.saveAsButtonText}>Others</Text>
            </TouchableOpacity>
          </View>
          <MainButton
            title={'Next'}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default AddressScreen;
