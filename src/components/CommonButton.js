import React from 'react';
import {Text,  StyleSheet, Pressable} from 'react-native';

const CommonBtn = ({onPress , title , disAble}) => {
  return (
    <Pressable style={styles.appButtonContainer} onPress={onPress} disabled={disAble}>
      <Text style={[styles.btntext, {textAlign: 'center'}]}>
        {title}
      </Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  appButtonContainer: {
    
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 17,
    alignItems: 'center',
    margin: 15,
    opacity : 0.8
  },

  btntext: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CommonBtn;
