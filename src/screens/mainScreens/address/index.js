import * as React from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../style';
import { Header } from 'react-native-elements';
import MainButton from '../../../components/mainButton';
import AddressInputField from '../../../components/addressInputField';
import BackArrow from '../../../components/backArrow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { requestAndroidPermission } from '../../../utils/utilMethods';
import { DEFAULT_REGION, LOCATION } from '../../../utils/constants';
import Geolocation from '@react-native-community/geolocation';
import { images } from '../../../assets/images';

function AddressScreen({ navigation }) {
  const [latlng, setLatlng] = React.useState(DEFAULT_REGION);
  const [address, setAddress] = React.useState('');

  const getLocation = () => {
    if (Platform.OS === 'ios') {
      fetchLocation();
    } else {
      requestAndroidPermission(LOCATION) ? fetchLocation() : null;
    }
  };

  const getAddress = () => {
    return fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latlng.latitude}&longitude=${latlng.longitude}&localityLanguage=en`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json));
        setAddress(json.locality);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      setLatlng({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
    getAddress();
  };

  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.headerContainerStyle}
        centerComponent={<Text>Set delivery location</Text>}
        leftComponent={<BackArrow navigation={navigation} />}
      />
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          onRegionChangeComplete={(info) => {
            setLatlng({
              latitude: info.latitude,
              longitude: info.longitude,
              latitudeDelta: info.latitudeDelta,
              longitudeDelta: info.longitudeDelta,
            });
            getAddress();
          }}
          region={latlng}
        />
        <View style={styles.mapLocation}>
          <Text style={styles.mapLocationTitle}>Your location:</Text>
          <Text numberOfLines={1} style={styles.mapLocationText}>
            {address}
          </Text>
        </View>
        <View style={styles.mapMarker}>
          <images.pin height={30} width={30} />
        </View>
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
