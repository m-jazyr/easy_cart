import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabNavigation';
import AuthNavigator from './authNavigation';

function SwitchNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}

export default SwitchNavigator;
