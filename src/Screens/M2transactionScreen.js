import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

const { height, width } = Dimensions.get('screen');
const App = () => {
  return (
    <SafeAreaView>

      <ScrollView style={styles.mainContainer}>


        <View style={styles.topIcon}>
          <TouchableOpacity>
            <View style={styles.imgCon}>
              <Image
                source={require('../assets/images/right.jpg')}
                style={styles.imgSize}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.topTxt}>Transactions</Text>
          <TouchableOpacity onPress={() => alert('Click')}>
            <View>
              <Image
                source={require('../assets/images/pic21.jpg')}
                style={styles.imgSizes}
              />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.secTitle}>
          <Text style={styles.secTxt}>Today</Text>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic2.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic3.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.secTitle}>
          <Text style={styles.secTxt}>06 Aug 2021</Text>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic4.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic5.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic2.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic2.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic3.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.secTitle}>
          <Text style={styles.secTxt}>06 Aug 2021</Text>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic4.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic5.jpg')}
                style={styles.imgSize}
                resizeMode='stretch'
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={styles.conTainer}>
          <View style={styles.designCon}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/pic1.jpg')}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={styles.redFour}>
                <Text style={styles.fourTxt}>$ 204</Text>
                <Text style={styles.cyanTxt}>Deposited</Text>
              </View>
              <View style={styles.redFour}>
                <Text style={styles.fiveTxt}>D,$934 BTC</Text>
                <Text style={styles.fiveTxt}>Aug 19,2021</Text>
              </View>
            </View>
          </View>
        </View>



      </ScrollView>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    height: height / 1.15,
    width: width / 1,
    backgroundColor: 'white',
  },
  topIcon: {
    //   backgroundColor: 'cyan',
    height: height / 9,
    width: width / 1.1,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  topTxt: {
    fontSize: height / 30,
    fontWeight: 'bold',
    width: width / 1.9,
    //textAlign: 'center'
  },
  imgCon: {
    //backgroundColor:'red',
    height: height / 15,
    width: width / 3.5,
    justifyContent: 'center'

  },
  imgSize: {
    height: height / 20,
    width: width / 10,
    borderRadius: 10,
    borderWidth: 0.2
  },
  imgSizes: {
    height: height / 50,
    width: width / 15,
    borderRadius: 10,
  },


  secTitle: {
    height: height / 25,
    width: width * 0.89,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  secTxt: {
    fontSize: width / 25,

    color: 'grey',

  },



  designCon: {
    backgroundColor: '#f0ffff',
    height: height / 14,
    width: width * 0.94,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 15,
    paddingTop: 10,
  },

  redFour: {
    //backgroundColor: 'red',
    height: height / 35,
    width: width * 0.75,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  fourTxt: {
    alignSelf: 'center',
  },
  fiveTxt: {
    alignSelf: 'center',
    color: 'grey',
  },

  imgContainer: {
    //backgroundColor:'red',
    height: height / 17,
    width: width / 7,
  },
  cyanTxt: {
    color: 'cyan',
  },
  conTainer: {
    //backgroundColor:'red',
    height: height / 11,
    width: width / 1,
  },

});
