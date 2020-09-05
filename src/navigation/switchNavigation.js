import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigation';
import MainNavigator from './mainNavigation';
import SampleFlow from './sampleFlow';

function SwitchNavigator() {
  return (
    <NavigationContainer>
      {/* <MainNavigator /> */}
      {/* <AuthNavigator /> */}
      <SampleFlow />
    </NavigationContainer>
  );
}

export default SwitchNavigator;
