import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  
  ImageBackground,
} from 'react-native';
import CommonBtn from '../../components/CommonButton';
import {Formik} from 'formik';
import * as yup from 'yup';
import landing from '../../../assets/landingPage.jpg';
import {login} from '../Service/auth';
import {storeData} from '../../utilities/AsyncStorage';

const Login = ({navigation}) => {
  const validitionButton = async (values) => {
    console.log(values);
    const res = await login({
      email: values.email,
      password: values.password,
    });
    if (res.user) {
      storeData(res);
      navigation.navigate('BottomTabs');
      alert('Login in Successful');
    } else {
      alert('enter correct creditionals');
    }
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <ImageBackground source={landing} style={[style.image, {opacity: 0.9}]}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            padding: 10,
            fontSize: 30,
            marginBottom: 20,
            color: 'white',
          }}>
          Login Page
        </Text>
        <View style={[style.maincontainer, {flexDirection: 'column'}]}>
          <View style={style.inputcontainer}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={validitionButton}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={style.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                  <TextInput
                    name="password"
                    placeholder="Password"
                    style={style.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />

                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
                  <CommonBtn
                    onPress={handleSubmit}
                    title="LogIn"
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
  },

  maincontainer: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  inputcontainer: {
    height: 200,
    width: 300,
    padding: 10,
    borderRadius: 10,
    opacity: 0.9,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Login;
