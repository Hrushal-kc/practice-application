import React from 'react';
import {Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Btn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
      <Text style={[styles.btntext, {textAlign: 'center'}]}>
        Login with your account
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  appButtonContainer: {
    //elevation: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    // paddingVertical: 10,
    //paddingHorizontal: 12,
    padding: 17,
    alignItems: 'center',
    margin: 15,
  },

  btntext: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Btn;
