import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  

} from 'react-native';
const {height, width} = Dimensions.get('screen');

const App = ( props ) => {
  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
      <TouchableOpacity onPress={() => props.navigation.naviagte('M2login')} >
        <View style={styles.arrow}>    
          <Image
            source={require('../assets/images/right.jpg')}
            style={styles.arrow1}
          />
         
        </View>
        </TouchableOpacity>
        <View style={styles.forget}>
          <Text style={styles.forget1}>Forgot Password</Text>
        </View>
        <View style={styles.here}>
          <Text style={styles.here1}>We are here to help you.</Text>
        </View>
        <View style={styles.txt}>
          <Text style={styles.txt1}>
            Please enter your registered phone number or email address. we will
            help you to retrive your password.
          </Text>
        </View>

        <View style={styles.input2}>
          <Text style={styles.phone1}>Mobile </Text>
          <TouchableOpacity onPress={() => alert('Next Page')} >
    <Text style={styles.reg}> Switch to email</Text>
    </TouchableOpacity>
        </View>
        <View>
        <TextInput
          placeholder="+91  |  9936595085"
          placeholderTextColor="grey"
          maxLength={25}
          keyboardType= 'numeric'
          style={styles.num}>
          </TextInput>
          </View>

        <View style={styles.register}>
          <TouchableOpacity
            onPress={() => alert('OK')}>
            <View style={styles.register1}>
              <Text style={styles.continue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  maincontainer: {
    height: height / 1,
    //backgroundColor:'cyan',
    backgroundColor: 'rgb(235 ,235 ,235)',
  },
  arrow: {
    height: height / 6,
    width: width / 5.6,
    // backgroundColor: 'cyan',
    justifyContent: 'center',
  },
  arrow1: {
    alignSelf: 'center',
    height: height / 19,
    width: width / 9,
    borderRadius: 10,
  },
  forget: {
    height: height / 18,
    width: width / 1.8,
    //backgroundColor:'cyan'
  },
  forget1: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  here: {
    height: height / 23,
    width: width / 1.6,
    //backgroundColor:'cyan'
  },
  here1: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    //   backgroundColor:'cyan'
  },
  txt: {
    height: height / 10,
    width: width*0.90,

    //backgroundColor: 'cyan',
  },
  txt1: {
    alignSelf: 'center',
    fontSize: 15,
  },

  input: {
    height: height / 25,
    width: width / 1.2,
    alignSelf: 'center',
    // justifyContent:'flex-end'

    //backgroundColor:'pink',
  },

  register: {
    height: height / 6,
    width: width / 1,
    alignItems: 'center',

    justifyContent: 'center',
    //alignItems:'center',
    //marginTop:50,

    //backgroundColor:'cyan'
  },
  register1: {
    // alignSelf:'center',
    backgroundColor: '#66cdaa',
    height: height / 15,
    width: width / 1.2,
    //textAlign:'center',
    //borderWidth:1,
    justifyContent: 'center',
    borderRadius: 50,
  },
  continue: {
    fontSize: 18,
    height: height / 45,
    width: width / 1.2,
    //backgroundColor:'pink',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  num: {
    height: height / 17,
    width: width / 1.1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },
  input2: {
    //backgroundColor: 'cyan',
    height: height / 25,
    width: width / 1.1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
       
  },

  phone1: {
    fontSize: 17,
    
  },
  reg: {
    textDecorationLine: 'underline',
    
  },
  
});
