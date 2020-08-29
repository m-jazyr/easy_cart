import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/mainScreens/home/screen';
import ProfileScreen from '../screens/mainScreens/profile/screen';
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <SafeAreaView />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
