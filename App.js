import 'react-native-gesture-handler';
import * as React from 'react';
import SwitchNavigator from './src/navigation/switchNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
}
