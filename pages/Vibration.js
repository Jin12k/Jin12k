
import React from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from 'react-native';
 
//Duration of the vibration
const DURATION = 1000;
 
const App = () => {
  const startVibration = () => {
    //To start the vibration for the defined Duration
    Vibration.vibrate(DURATION);
  };
 
  const stopVibration = () => {
    //To Stop the vibration
    Vibration.cancel();
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          React Native Vibration |
          Start Stop Device Vibration in React Native
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={startVibration}>
          <Text style={styles.buttonTextStyle}>
            Start Vibration
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={stopVibration}>
          <Text style={styles.buttonTextStyle}>
            Stop Vibration
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
