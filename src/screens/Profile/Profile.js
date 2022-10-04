import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet , Image} from 'react-native';
import CommonBtn from '../../components/CommonButton';
import {getData, removeValue} from '../../utilities/AsyncStorage';

import image from '../../../assets/landingPage.jpg'

const Profile = ({navigation}) => {
  const [data, setData] = useState(null);

  const view = async () => {
    const viewData = await getData();
    setData(viewData);
  };

  useEffect(() => {
    view();
  }, []);

  const logout = () => {
    removeValue();
    alert("Logout Successfully");
    navigation.navigate('Welcome');
  }


  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.imagecontainer}>
        <Image source={image} style={styles.image}/>
        <View >
          <Text style={styles.profiletext}>Name : {data?.user.name}</Text>
          <Text style={styles.profiletext}>age : {data?.user.age}</Text>
          <Text style={styles.profiletext}>Email: {data?.user.email}</Text>
        </View>
      </View>
      <View>
        <CommonBtn
          title="Logout"
          onPress={logout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image : {
    borderWidth : 2,
    width : 100,
    height : 100,
    borderRadius : 20
  },

  imagecontainer : {
    flexDirection : "row",
    justifyContent : "space-around",
    backgroundColor : "#D3D3D3",
    padding : 20,
    borderRadius : 10
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  profiletext: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default Profile;
