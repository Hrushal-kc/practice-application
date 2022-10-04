import React from 'react';
import {Button, View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Btn1 = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
        <Text style = {[styles.btntext , {textAlign : "center"}]}>Dont have an account, get one now</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    appButtonContainer: {
        //elevation: 8,
        //backgroundColor:"black",
        borderRadius: 8,
         // paddingVertical: 10,
         //paddingHorizontal: 12,
        padding : 17,
        alignItems : "center",
        margin : 15,
        borderWidth : 1 ,
        borderColor : "white",
        //opacity : hasOpacity ? 0.5 : 1.0
        
      },

    btntext : {
        color : "white" ,
        fontWeight : "bold",
        fontSize : 15
    }
});


export default Btn1;
