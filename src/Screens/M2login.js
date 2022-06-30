import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const App = () => {
  const [isSelected, setisSelected] = useState(null);

  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (mail === '') {
      setErrorEmail('*Please enter email.');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        '*Please enter a special character and length must be 8 digit.',
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid password.');
    } else {
      setErrorPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }
    return flag;
  };

  const Submit = () => {
    if (validate()) {
      alert('Login Successful!');

    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.HeaderContainer}>
          <Image
            style={styles.imageContainer}
            source={require('../assets/images/pic11.jpg')}
            resizeMode="contain"
          />
        </View>

        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTxt}>Welcome to Kanb79</Text>
          <Text style={styles.headTxt}>Keep your data safe!</Text>
        </View>

        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.txtInputStyling}
            placeholder="Enter email or phone number"
            placeholderTextColor="grey"
            keyboardType='email-address'
            maxLength={25}
            onChangeText={txt => {
              setEmail(txt), _emailvalidate(txt);
            }}
            autoCapitalize="none"
          />
        </View>

        {errorEmail != null ? (
          <View
            style={styles.emailCon}>
            <Text style={styles.emailTxt}>
              {errorEmail}
            </Text>
          </View>
        ) : null}

        <View style={styles.inpField}>
          <View style={styles.inputFieldsContainer}>
            <TextInput
              style={styles.txtInputStyling}
              placeholder="Enter password"
              placeholderTextColor="grey"
              keyboardType="default"
              maxLength={16}
              // secureTextEntry="true"
              onChangeText={txt => {
                setPassword(txt), _passwordvalidate(txt);
              }}
              autoCapitalize="none"
            />
          </View>
        </View>
        {errorPassword != null ? (
          <View style={styles.passWord}>
            <Text style={styles.passWordtxt}>{errorPassword}</Text>
          </View>
        ) : null}

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnTouchContainer}
            onPress={() => Submit()}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pass}>
          <TouchableOpacity onPress={() => alert('Forgot Password')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.acc}>
          <Text>
            Don't have an account?
            <TouchableOpacity onPress={() => alert('Not Connected')}>
              <Text style={styles.sign}>SignUp</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    height: height * 1,
    width: width * 1,
    alignItems: 'center',
  },
  imageContainer: {
    height: height / 10,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderContainer: {
    height: height / 7,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderTxt: {
    fontSize: height / 30,
    fontWeight: '700',
  },
  headTxt: {
    color: '#615e5e',
  },

  inputFieldsContainer: {
    height: height / 10,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInputStyling: {
    fontSize: height / 50,
    width: width * 0.9,
    height: height / 15,
    borderRadius: 5,
    borderWidth: 0.1,
    backgroundColor: '#e0ffff',
    paddingHorizontal: 15,
  },
  btnContainer: {
    height: height / 7,
    width: width / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTouchContainer: {
    height: height / 15,
    width: width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66cdaa',
    borderRadius: 50,
  },
  inpField: {
    //backgroundColor: 'cyan'
  },
  btnTxt: {
    fontSize: width / 15,
    fontWeight: '600',
    color: 'white',
  },
  pass: {
    height: height / 5,
    width: width / 2,
  },
  forgot: {
    fontWeight: '500',
    alignSelf: 'center',
    color: '#66cdaa',
  },
  sign: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#66cdaa',
  },
  passWord: {
    height: height * 0.02,
    width: width * 0.94,
  },
  passWordtxt: {
    color: 'red', 
    fontSize: height / 70
  },
  emailCon: {
      height: height * 0.02,
      width: width * 0.94,
    
  },
  emailTxt: {
    color: 'red', 
    fontSize: height / 70,
  }
});
