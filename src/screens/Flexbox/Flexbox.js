import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import {getData} from '../../utilities/AsyncStorage';

const Flexbox = () => {
  // const viewData = JSON.stringify(getData());

  // const [viewData, setViewData] = useState('');

  // useEffect(async () => {
  //   const data = await getData();
  //   setViewData(JSON.stringify(data));
  // },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome to the flexbox page</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.rowcontainer}>
            <Text style={{textAlign: 'center', fontSize: 30}}>
              flex-direction is Row
            </Text>
            <View style={styles.itemcontainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button3</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.columncontainer}>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 120}}>
              flex direction is column
            </Text>
            <View style={styles.columnitemcontainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.item}>
          <View style={styles.rowcontainer}>
            <Text style={{textAlign: 'center', fontSize: 30}}>
              flex-direction is flex-start and flex-wrap
            </Text>
            <View
              style={[
                styles.itemcontainer,
                {justifyContent: 'flex-start', flexWrap: 'wrap'},
              ]}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {justifyContent: 'center'}]}>
                <Text style={styles.buttontext}>button5 </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.columncontainer,
              {justifyContent: 'center', flexWrap: 'wrap'},
            ]}>
            <Text style={{textAlign: 'center', fontSize: 30, marginTop: 0}}>
              flex direction is wrap
            </Text>
            <View style={styles.columnitemcontainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>button3</Text>
              </TouchableOpacity>
            </View>
            {/* <Text>{viewData}</Text> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //borderWidth: 2,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  textContainer: {
    flex: 2,
    //borderWidth: 2,
    borderColor: 'green',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    //borderWidth: 2,
    borderColor: 'red',
  },

  item: {
    flex: 30,
    justifyContent: 'flex-start',
    padding: 5,
    // borderWidth: 2,
    borderColor: 'blue',
  },

  rowcontainer: {
    textAlign: 'center',
    // borderWidth: 2,
    padding: 5,
    flexDirection: 'column',
    marginBottom: 5,
  },

  columncontainer: {
    textAlign: 'center',
    // borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
    borderColor: 'green',
    justifyContent: 'space-evenly',
  },

  itemcontainer: {
    //borderWidth: 2,
    borderColor: 'yellow',
    padding: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    borderRadius: 5,
  },

  columnitemcontainer: {
    // borderWidth: 2,
    borderColor: 'yellow',
    padding: 10,
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: 'auto',
    width: 'auto',
    backgroundColor: '#C0C0C0',
    borderRadius : 5
  },

  button: {
    // borderWidth: 3,
    //padding : 5 ,
    height: 80,
    width: 80,
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#808080',
  },

  buttontext: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginTop: 20,
  },
});

export default Flexbox;
