import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

const {height, width} = Dimensions.get('screen');
const App = () => {

  return (
    
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.topIcon}>
         <TouchableOpacity>
            <View style={styles.imgCon}>
              <Image
                source={require('../assets/images/pic6.jpg')}
                style={styles.imgSize}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.topTxt}>Car Insurance</Text>
        </View>

        <View style={styles.secCon}>
          <Image
            source={require('../assets/images/pic20.jpg')}
            style={styles.imgSec}
          />
        </View>

        <View style={styles.xon}>
          <View style={styles.secTitle}>
            <Text style={styles.secTxt}>Policy Detail</Text>
            <Text style={styles.thirdTxt}>Date: 24-Apr-2021</Text>
          </View>
          <Text style={styles.txtUnit}> Units: 4 Unit / USD: 2200</Text>
        </View>
        <View style={styles.redFour}>
          <Text style={styles.fourTxt}>Price</Text>
          <Text style={styles.fiveTxt}>$ 526</Text>
        </View>
        <View style={styles.redFour}>
          <Text style={styles.fourTxt}>Minimum Purchase</Text>
          <Text style={styles.fiveTxt}>2-Units</Text>
        </View>
        <View style={styles.redFour}>
          <Text style={styles.fourTxt}>Payout Frequency</Text>
          <Text style={styles.fiveTxt}>Monthly</Text>
        </View>
        <View style={styles.redFour}>
          <Text style={styles.fourTxt}>Currency Type</Text>
          <Text style={styles.fiveTxt}>USD</Text>
        </View>
        <View style={styles.register}>
          <TouchableOpacity onPress={() => alert('Click')}>
            <View style={styles.register1}>
              <Text style={styles.continue}>Buy Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  topIcon: {
    //backgroundColor: 'cyan',
    height: height / 9,
    width: width / 1.05,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  topTxt: {
    fontSize: height / 25,
    fontWeight: '600',
    //backgroundColor:'red',
    width: width / 1.5,
  },
  imgCon: {
    //backgroundColor:'red',
    height: height / 15,
    width: width / 6,
    justifyContent: 'center',
  },
  imgSize: {
    height: height / 18,
    width: width / 8,
    borderRadius: 10,
  },
  secCon: {
    backgroundColor: 'green',
    height: height / 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgSec: {
    height: height / 4,
    width: width / 1.1,
  },
  xon: {
    height: height / 10,
    width: width * 0.9,
    //backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  secTitle: {
    height: height / 15,
    width: width * 0.9,
    //  backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  secTxt: {
    fontSize: height / 35,
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'verdana'
    
  },
  thirdTxt: {
    color: 'grey',
  },
  txtUnit: {
    color: 'grey',
  },
  redFour: {
    //backgroundColor: 'cyan',
    height: height / 25,
    width: width * 0.9,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  fourTxt: {
    alignSelf: 'center',
  },
  fiveTxt: {
    alignSelf: 'center',
  },

  register: {
    height: height / 6,
    width: width / 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //backgroundColor:'cyan'
  },
  register1: {
    backgroundColor: '#66cdaa',
    height: height / 15,
    width: width / 1.2,
    justifyContent: 'center',
    borderRadius: 50,
  },
  continue: {
    fontSize: 18,
    height: height / 35,
    width: width / 1.2,
    //backgroundColor:'pink',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    
  },
});
