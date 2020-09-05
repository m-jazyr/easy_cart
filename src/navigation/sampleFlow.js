import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AuthNavigator from './authNavigation';
import MainNavigator from './mainNavigation';
const Stack = createStackNavigator();

const SampleFlow = () => {
  return (
    <>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </>
  );
};

export default SampleFlow;
