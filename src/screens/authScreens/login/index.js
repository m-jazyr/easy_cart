import * as React from 'react';
import { View, KeyboardAvoidingView, Text, Image } from 'react-native';
import styles from '../style';
import PhoneNumberBar from '../../../components/phoneNumberBar';
import { images } from '../../../assets/images';

function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, styles.bottomAlign]}
      behavior="padding">
      <View style={styles.businessTitleContainer}>
        <Image source={images.logo}  height={200} width={200}/>
        {/* <images.burger height={100} width={100} /> */}
        {/* <Text style={styles.businessTitle}> Shop name</Text> */}
      </View>
      <KeyboardAvoidingView style={styles.phoneNumberBar}>
        <PhoneNumberBar navigation={navigation} />
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
