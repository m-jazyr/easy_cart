import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from './tabNavigation';
import ProductsScreen from '../screens/mainScreens/products';
import CartScreen from '../screens/mainScreens/cart';
import AddressScreen from '../screens/mainScreens/address';
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
