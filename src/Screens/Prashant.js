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

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
     
        <View style={styles.arrow}>    
        <TouchableOpacity>
          <Image
            source={require('../assets/images/pic12.jpg')}
            style={styles.arrow1}
          />
           </TouchableOpacity>
           <Image
            source={require('../assets/images/pic11.jpg')}
            style={styles.arrow2}
          />
         
        </View>
       
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
          <TouchableOpacity  >
    <Text style={styles.reg}> Change to Email</Text>
    </TouchableOpacity>
        </View>
        <View>
        <TextInput
          placeholder="+91  |  9936595085"
          placeholderTextColor="grey"
          maxLength={10}
          keyboardType= 'numeric'
          style={styles.num}>
          </TextInput>
          </View>

        <View style={styles.register}>
          

            <View style={styles.register1}>

            <TouchableOpacity  >
         <Text style={styles.otp}>Send OTP</Text>
           </TouchableOpacity>
           <TouchableOpacity>
              <Text style={styles.continue}> ➮</Text>
              </TouchableOpacity>
            </View>
         
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
    width: width / 1.05,
    // backgroundColor: 'cyan',
    justifyContent: 'space-between',
    flexDirection :'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  arrow1: {
    alignSelf: 'center',
    height: height / 19,
    width: width / 9,
    borderRadius: 10,
  },
  arrow2: {
    alignSelf: 'center',
    height: height / 9,
    width: width / 3,
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
    height: height / 3,
    width: width / 1,
    alignItems: 'center',

    justifyContent: 'center',
    //alignItems:'center',
    //marginTop:50,
    // backgroundColor:'red'
  },
  register1: {
    // alignSelf:'center',
    // backgroundColor: 'cyan',
    height: height / 14,
    width: width / 1.2,
    //borderWidth:1,
   justifyContent: 'space-between',
   flexDirection: 'row',



  },

  otp: {
        fontSize: height/40,
        fontWeight: 'bold'
     
  },
  continue: {
    fontSize: height/30,
    height: height / 20,
    width: width / 11,
    backgroundColor:'#66cdaa',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderRadius :50,
   
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
