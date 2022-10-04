import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Btn from '../../components/loginButton';
import Btn1 from '../../components/signupButton';

import landpage from '../../../assets/landingPage.jpg';
import {getData} from '../../utilities/AsyncStorage';

const Welcome = ({navigation}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    isDataPresent();
  }, []);

  const isDataPresent = async () => {
    const viewdata = await getData();
    setData(viewdata);

    if (data == '') {
      console.log('no data');
    } else {
      console.log('data');
      navigation.navigate('BottomTabs');
    }
  };

  const handlePress = () => {
    navigation.navigate('Login');
  };

  const btn1Press = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={landpage}
          resizeMode="cover"
          style={styles.image}>
          <Text style={[styles.text, {textAlign: 'left'}]}>
            {' '}
            Experience the {'\n'} easiest a way to get{'\n'}
            <Text style={styles.boldtext}> great food </Text>Delivered
          </Text>
          <Btn onPress={handlePress} />
          <Btn1 onPress={btn1Press} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
  text: {
    color: 'black',
    fontSize: 30,
    lineHeight: 44,
    //textAlign: "center",
    padding: 20,
    marginTop: 100,
  },

  boldtext: {
    color: 'black',
    fontSize: 30,
    lineHeight: 44,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Welcome;
