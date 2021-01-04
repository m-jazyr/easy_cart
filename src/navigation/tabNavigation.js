import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/mainScreens/home';
import ProfileScreen from '../screens/mainScreens/profile';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../screens/mainScreens/search';
import colors from '../assets/colors';
import OrdersScreen from '../screens/mainScreens/orders';
// import colors from '../assets/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Category') {
              iconName = focused ? 'shape' : 'shape-outline';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'shopping' : 'shopping-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }
            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: colors.grey3,
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
