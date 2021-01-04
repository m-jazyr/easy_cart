import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { hideError, mainSelector } from '../redux/mainSlice';

function AlertDialog({ isVisible = false, message, showPositiveButton = false, postiveAction }) {
  const dispatch = useDispatch()
  const { error } = useSelector(mainSelector)

  const onNegativePressed = () => {
    dispatch(hideError())
  }
  return (
    <Overlay isVisible={error !== '' || isVisible}>
      <View style={styles.container}>
        <Text style={styles.messageText}>{error}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onNegativePressed}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          {showPositiveButton && <TouchableOpacity style={styles.button} onPress={postiveAction}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>}
        </View>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 4
  },
  button: {
    padding: 4,
    marginHorizontal: 4
  },
  messageText: {
    fontSize: 15,
    fontFamily: fonts.robotoRegular,
    color: colors.black,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: fonts.robotoBold,
    color: colors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 8
  }
});

export default AlertDialog;

