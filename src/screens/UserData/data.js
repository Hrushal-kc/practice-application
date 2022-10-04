import React from 'react';

import {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const DataFetch = () => {
  const image_URL = 'https://randomuser.me/api/?results=10';
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);
  // const [image , setImage] = useState([]);


  const Data = () => {
    fetch(image_URL)
      .then((response) => response.json())
      .then((json) => {
        setTitle(json.results);
      })
      .catch((error) => alert(error));
  };
  useEffect(() => {
    Data();
  }, []);

  const renderItem = ({item}) => {
    //console.log(item.picture.medium)
    return (
      <View style={styles.dataContainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>
            Name : {item.name.title} {item.name.first}{' '}
          </Text>
          <Text style={styles.text}>Gender :{item.gender} </Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image source={{uri: item.picture.medium}} style={styles.image} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={(id, index) => index.toString()}
        data={title}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth : 2,s
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  textcontainer: {
    // borderWidth :1,
    padding: 5,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },

  image: {
    height: 100,
    width: 100,
    // borderWidth: 5,
    borderRadius: 30,
  },

  imagecontainer: {
    //borderWidth : 2 ,
    // borderColour : "red"
    justifyContent: 'flex-end',
    padding : 5
  },

  dataContainer: {
    // borderWidth : 2,
    backgroundColor: '#C0C0C0',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default DataFetch;
