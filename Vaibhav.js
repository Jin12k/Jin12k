import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
 
const App = () => {
  // Parsing a random fa-apple to use it as FontAwesome Icon
  const parsedIcon = parseIconFromClassName('fab fa-apple');
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Example to use
          {'\n'}
          Font Awesome Icons
          {'\n'}
          in React Native App
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          www.aboutreact.com
        </Text>
        <FontAwesome
          style={styles.iconStyle}
          icon={SolidIcons.truck}
        />
        <Text style={styles.textStyle}>
          Solid Icon
        </Text>
        <FontAwesome
          style={styles.iconStyle}
          icon={RegularIcons.addressBook}
        />
        <Text style={styles.textStyle}>
          Regular Icon
        </Text>
        <FontAwesome
          style={styles.iconStyle}
          icon={BrandIcons.android}
        />
        <Text style={styles.textStyle}>
          Brand Icon
        </Text>
        <FontAwesome
          style={styles.iconStyle}
          icon={parsedIcon}
        />
        <Text style={styles.textStyle}>
          Parsed Icon from class name:
          </Text>
        <Text style={styles.textStyle}>
          'fab fa-apple'
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  },
  textStyle: {
    marginTop: 5,
    color: 'black',
  },
});
