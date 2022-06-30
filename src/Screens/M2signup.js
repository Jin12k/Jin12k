import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,

} from 'react-native';
const { height, width } = Dimensions.get('window');

const App = () => {
  const [isSelected, setisSelected] = useState(null);

  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const [Name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);


  const _namevalidate = name => {
    var nameRegex =
      /^([a-zA-Z ]){2,30}$/
    if (name === '') {
      setErrorName('*Please enter Name.');
    } else if (!nameRegex.test(name)) {
      setErrorName('*Please enter valid Name.');
    } else {
      setErrorName(null);
      setErrorName(true);

    }
  };


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
    if (Name === '') {
      setErrorName('*Please enter name.');
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


        <View style={styles.Containet}>
          <TouchableOpacity onPress={() => alert('Back')} >
            <Text style={styles.btnt}> ← </Text>
            {/* <Image source={require('./arrowwhite.png')}/> */}
          </TouchableOpacity>

        </View>

        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTxt}>Sign Up</Text>

        </View>
        <View style={styles.txtCon}>
        <View style={styles.ipContainer}>
          <TextInput
            style={styles.txtInputStyling}
            placeholder="Enter Full Name"
            placeholderTextColor="grey"
            keyboardType="email-address"
            maxLength={50}
            onChangeText={txt => {
              setName(txt), _namevalidate(txt);
            }}
            autoCapitalize="none"
          />
        </View>

        {errorName != null ? (
          <View
            style={styles.emailCon}>
            <Text style={styles.emailTxt}>
              {errorName}
            </Text>
          </View>
        ) : null}


        <View style={styles.pass}>
          <TouchableOpacity onPress={() => alert('Option')} >
            <Text style={styles.forgot}>Select User Type </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ipContainer}>
          <TextInput
            style={styles.txtInputStyling}
            placeholder="Enter email address "
            placeholderTextColor="grey"
            keyboardType="email-address"
            maxLength={50}
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
          <View style={styles.ipContainer}>
            <TextInput
              style={styles.txtInputStyling}
              placeholder="Enter password"
              placeholderTextColor="grey"
              keyboardType="default"
              maxLength={16}
              secureText="true"
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

        <View style={styles.ipContainer}>
          <TextInput
            style={styles.txtInputStyling}
            placeholder="Phone Number"
            placeholderTextColor="grey"
            keyboardType="email-address"
            maxLength={50}
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

          </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnTouchContainer}
            onPress={() => Submit()}>
            <Text style={styles.btnTxt}>Register</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.accountContainer}>
          <Text>
            have an account?
            <TouchableOpacity onPress={() => alert('Not Connected')}>
              <Text style={styles.sign}> Login</Text>
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

  HeaderContainer: {
    height: height / 15,
    width: width / 1.1,
    justifyContent: 'center',
    //backgroundColor: 'cyan',
  },
  HeaderTxt: {
    fontSize: height / 35,
    fontWeight: '500',
  },
  headTxt: {
    color: '#615e5e',
  },

  ipContainer: {
    height: height / 15,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  txtInputStyling: {

    fontSize: height / 50,
    width: width * 0.9,
    height: height / 18,
    borderRadius: 5,
    borderWidth: 0.1,
    backgroundColor: '#e0ffff',
    paddingHorizontal: 15,
  },
  btnContainer: {
    height: height / 6,
    width: width / 1,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'red',
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
    height: height / 12,
    width: width * 0.9,
    justifyContent: 'center',
    //  backgroundColor: 'cyan'

  },
  forgot: {
    // backgroundColor: 'red',
    fontSize: height / 50,
    width: width * 0.9,
    height: height / 15,
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: '#e0ffff',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  accountContainer: {
    height: height / 10,
    width: width / 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //backgroundColor: 'red'
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
  },
  cross: {
    backgroundColor: 'red',
    height: height / 30,
    width: width / 1,
    justifyContent: 'center',


  },
  Containet:
  {
    height: height / 20, width: width / 8, backgroundColor: '#66cdaa', alignSelf: "flex-start", borderRadius: 10, left: height / 50,
  },

  btnt: {
    fontSize: 30,
    bottom: 8,


  },
  txtCon: {
    // backgroundColor: 'cyan',
    height: height / 2,
    width: width / 1,
    alignItems: 'center'

  }

});

