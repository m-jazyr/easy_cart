import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigation';
import MainNavigator from './mainNavigation';

function SwitchNavigator() {
  return (
    <NavigationContainer>
      {/* <MainNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default SwitchNavigator;
