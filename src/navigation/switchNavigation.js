import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AuthNavigator from './authNavigation';
import MainNavigator from './mainNavigation';
import { getStoredValue } from '../utils/storage';
import { setToken } from '../redux/mainSlice';
import { USER_TOKEN } from '../utils/constants';

function SwitchNavigator() {
  const userToken = useSelector((state) => state.main.userToken);
  const dispatch = useDispatch();
  const fetchToken = async () => {
    let authToken = await getStoredValue(USER_TOKEN);
    dispatch(setToken(authToken));
  };

  React.useEffect(() => {
    fetchToken();
  });

  return (
    <NavigationContainer>
      {userToken != null ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default SwitchNavigator;
