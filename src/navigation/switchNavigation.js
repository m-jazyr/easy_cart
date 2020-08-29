import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './mainNavigation';

function SwitchNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default SwitchNavigator;
