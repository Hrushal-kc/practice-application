import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    value = JSON.stringify(value);
    //"res" will get the value from the Login and signup screen when you press the button.
    await AsyncStorage.setItem('res', value);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('res');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
    // console.log("get data")
  }
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('res');
    console.log('data is erased');
  } catch (e) {
    // remove error
    alert("You can't logout now , Try again");
  }
  console.log('Done.');
};
