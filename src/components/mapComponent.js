import Geolocation from '@react-native-community/geolocation';
import * as React from 'react';
import { StyleSheet, View, Text, Platform, NativeModules, NativeEventEmitter } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { images } from '../assets/images';
import { DEFAULT_REGION, LOCATION } from '../utils/constants';
import { requestAndroidPermission } from '../utils/utilMethods';

const Geocoder = NativeModules.Geocoder;

function MapComponent({ navigation }) {
  const [latlng, setLatlng] = React.useState(DEFAULT_REGION);
  const [address, setAddress] = React.useState('');
  const eventEmitter = new NativeEventEmitter(Geocoder);

  const getLocation = () => {
    if (Platform.OS === 'ios') {
      fetchLocation();
    } else {
      requestAndroidPermission(LOCATION) ? fetchLocation() : null;
    }
  };

  const getAddress = () => {
    Platform.OS === 'android'
      ? Geocoder.getAddress(latlng.latitude, latlng.longitude)
      : null;
    // return fetch(
    //   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latlng.latitude}&longitude=${latlng.longitude}&localityLanguage=en`,
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(JSON.stringify(json));
    //     setAddress(json.locality);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
    window.eventListener = eventEmitter.addListener('success', (event) => {
      console.log(JSON.stringify(event)); // "someValue"
    });
  }, []);

  return (
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
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flexGrow: 1,
    backgroundColor: colors.grey0,
  },
  mapMarker: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -15,
    marginTop: -30,
  },
  mapLocation: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 350,
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -175,
    marginTop: -70,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mapLocationText: {
    fontSize: 12,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  mapLocationTitle: {
    fontSize: 12,
    fontFamily: fonts.robotoBold,
    color: colors.black,
  },
});

export default MapComponent;
