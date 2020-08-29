import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import VerificationScreen from '../screens/authScreens/OTPverification';
import LoginScreen from '../screens/authScreens/login';
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
