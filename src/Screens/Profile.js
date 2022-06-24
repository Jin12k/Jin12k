import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView
} from 'react-native'
const { height, width } = Dimensions.get('window')

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    height: height / 1,
    width: width / 1,

  },
  topContainer: {
    height: height / 10,
    width: width / 1,
    backgroundColor: 'cyan'
  },
  
})