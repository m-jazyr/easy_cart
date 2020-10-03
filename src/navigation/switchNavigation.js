import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AuthNavigator from './authNavigation';
import MainNavigator from './mainNavigation';
import { getStoredValue } from '../utils/storage';
import { mainSelector, setToken } from '../redux/mainSlice';
import { USER_TOKEN } from '../utils/constants';
import AlertDialog from '../components/alertDialog';

function SwitchNavigator() {
  const { userToken } = useSelector(mainSelector)
  const dispatch = useDispatch();
  
  const fetchToken = async () => {
    let authToken = await getStoredValue(USER_TOKEN);
    dispatch(setToken(authToken));
  };

  React.useEffect(() => {
    fetchToken();
  }, []);

  return (
    <NavigationContainer>
      <AlertDialog />
      {userToken != null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default SwitchNavigator;
