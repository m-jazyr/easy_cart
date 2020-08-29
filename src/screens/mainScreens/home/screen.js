import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

export default HomeScreen;
