import { PermissionsAndroid } from 'react-native';
import { LOCATION } from './constants';

export const requestAndroidPermission = async (permission) => {
  let request = '';

  switch (permission) {
    case LOCATION:
      request = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
      break;
    default:
      return;
  }
  try {
    const granted = await PermissionsAndroid.request(
      request,
      // {
      //   title: 'Cool Photo App Camera Permission',
      //   message:
      //     'Cool Photo App needs access to your camera ' +
      //     'so you can take awesome pictures.',
      //   buttonNeutral: 'Ask Me Later',
      //   buttonNegative: 'Cancel',
      //   buttonPositive: 'OK',
      // },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};
