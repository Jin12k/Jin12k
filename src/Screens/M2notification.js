import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
        <View style={styles.abc}>
          <Image
            source={require('../assets/images/pic3.jpg')}
            style={styles.img}
          />
          <Text style={styles.input}>Notifications</Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.txt1}>
          <Text style={styles.int}>
            Lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.{' '}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.in}>LogOut</Text>
          <Text style={styles.intxt}>Are you sure you want to log out</Text>
          <Text>from the app ?</Text>
        </View>
        <View style={styles.bgbtn}>
          <TouchableOpacity  style={styles.btn}>
            <Text style={styles.txt}>No</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('Yes') } style={styles.btn}>
            <Text style={styles.txt}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  maincontainer: {
    height: height / 1.55,
    width: width / 1,
    backgroundColor: 'grey',
  },
  abc: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingVertical: 10,
    //backgroundColor:'cyan',
    height: height / 12,
  },
  img: {
    //  backgroundColor:'red',
    height: height / 25,
    width: width / 8,
  },
  input: {
    fontSize: 30,

    // alignSelf: 'center',
    fontWeight: 'bold',
    //backgroundColor:'green',
    width: width / 1.43,
  },
  int: {
    //backgroundColor:'red',
    fontSize: 15,
    fontWeight: '400',
    width: width / 1,
    paddingHorizontal: 12,
    height: height / 10,
  },
  txt: {
    borderBottomWidth: 0.5,
    // paddingVertical: 22,
  },
  box: {
    backgroundColor: 'lightblue',
    height: height / 8.5,
    width: width / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  in: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 9,
  },
  intxt: {
    alignSelf: 'center',
    // backgroundColor:'green',
    width: width / 1.85,
  },
  bgbtn: {
    //backgroundColor:'red',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: width / 1,
    height: height / 10,
    paddingVertical: 15,
  },
  btn: {
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 0.2,
    borderRadius: 15,
    backgroundColor: 'aqua',
    height: height / 20,
    width: width / 4,
    alignItems: 'center',
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  txt1: {
    borderBottomWidth: 0.2,
    width: width / 1.1,
    height: height / 11,
  },
});