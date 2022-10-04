import React, {useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import landing from '../../../assets/landingPage.jpg';
import CommonBtn from '../../components/CommonButton';
import {signup} from '../Service/auth';
import { storeData } from '../../utilities/AsyncStorage';

// const SignUp = ({navigation}) => {
//     const handlePress = () => {
//         navigation.navigate('Welcome');
//     }

//const [counter , setcounter] = useState(0);

// useEffect(() => {
//   setTimeout(() => {
//     setcounter(() => {counter.num + 1})
//   }, );
// } , []);

// const increase = () => {
//   setcounter((prev) => prev + 1)
// }

// const decrease =() => {
//   setcounter((prev) => {
//   if(prev == 0){
//     return prev;
//   }
//   else {
//    return  prev = prev -1;
//   }
// }
//   )
// }

// return (
// <View style={style.container}>
//   {/* <Text>SignUp Page time</Text> */}
//   <TouchableOpacity
//     onPress={increase} style={style.button}><Text>+</Text></TouchableOpacity>
//   <Text style={{fontSize : 30}}>{counter}</Text>
//   <TouchableOpacity onPress={decrease} style={style.button} ><Text>_</Text></TouchableOpacity>
// </View>
//);
//};

// let style = StyleSheet.create({
//   container : {
//     flex : 1,
//     flexDirection : "row",
//     alignItems : "center",
//     margin : 50 ,
//     //padding : 30,
//     justifyContent : "space-between",
//   },

//   button : {
//     fontSize : 20,
//     borderWidth :2,
//     borderColor : "black",
//     padding : 10
//   }

// })

const SignUp = ({navigation}) => {
  const handleSubmit = async (values) => {
    const res = await signup({
      name: values.fullName,
      email: values.email,
      password: values.password,
      age: values.age,
    });
    console.log(res);
    if (res.user) {
      storeData(res);
      alert('Login Succesfull');
      navigation.navigate('BottomTabs');
    } else {
      alert('Enter a correct creditonal');
    }
  };

  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    age: yup
      .string()
      .matches(/(\d){1}\b/, 'Enter a correct age')
      .required('age is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={landing} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>
            SignUp Your Account
          </Text>
          <View style={styles.signupContainer}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                fullName: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={handleSubmit}>
              {({handleSubmit, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="age"
                    placeholder="age"
                    keyboardType="numeric"
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                  />

                  <CommonBtn
                    onPress={handleSubmit}
                    title="SIGN UP"
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default SignUp;
