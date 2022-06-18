import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { create } from '../../helpers/PlatformSpecificStyles';
import CityStyle from './CityStyle';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { StatusBar } from 'react-native';
import Actions from './CityAction';
import { Screens, navigate } from '../../helpers/Screens';
import Constants from '../../staticData/Constants';
import FirebaseActions from '../../app/FirebaseActions';


export const City = props => {
  const [city, setCity] = useState(false);
  const [pinCode, setPinCode] = useState();
  const [SelectedCity, setSelectedCity] = useState();
  const [lang, setlang] = useState()
  const [long , setlong] = useState()

  const regx = /^[0-9]\d{5}$/;

  useEffect(() => {
    props.getPincode('');
  }, []);

  let styles = create(CityStyle);

  const location_icon = {
    uri: 'https://redcliffelabsbackend.s3.amazonaws.com/media/gallary-file/None/a6154098-61c0-4d49-8737-d6495d24a9b0.png',
  };

  
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexGrow: 1 }}>
          <View style={[styles.TopContainer]}>
            <Text style={[styles.cityHeading, Constants.fontType.jMedium]}>
              Enter Pincode
            </Text>
            <Text
              style={[
                styles.TextSubHeading,
                styles.marginBottomClass,
                Constants.fontType.jRegular,
              ]}>
              Select pin code to see health package availability
            </Text>
          </View>

          <View
            style={{ backgroundColor: '#A2A2A2', height: 0.5, width: '100%' }}
          />
          <View
            style={[
              styles.BodyContainerTop,
              styles.flexViewRows,
              { paddingVertical: 2, marginHorizontal: 16 },
            ]}>
            <Text
              style={[
                styles.UseCurrentLocations,
                styles.TextHeading,
                styles.paddingAll,
                styles.citytext,
                Constants.fontType.jMedium,
                {minHeight:50}
              ]}>
              PINCODE
            </Text>
          </View>


          <View
            style={[
              styles.flexViewRowsEnterPin,
              styles.MaxHeightBox,
              { marginHorizontal: 16, justifyContent: 'space-between' },
            ]}>

            <TextInput
              style={[
                styles.EnterPincode,
                styles.MaxHeightBox,
                styles.paddingAll,
                Constants.fontType.jRegular,
              ]}
              value={pinCode}
              onChangeText={value => {

              }}
              onChangeText={(value) => {
                props.getPincode(value)
                setCity(false)
                if (!regx.test(value)) {
                  setCity(true)
                  // console.log(city, 'city error')
                } else {
                  setPinCode(value)
                }
                setPinCode(value)
              }}
              keyboardType="numeric"
              placeholder="Enter Pincode"></TextInput>
          </View>
          {SelectedCity && pinCode ?
            <View
              style={[
                styles.BodyContainerTop,
                styles.flexViewRows,
                { paddingVertical: 10, marginHorizontal: 16 },
              ]}>
              <Text style={{ color: '#E5184E' }}>{SelectedCity}{" "}{pinCode}</Text>
            </View> : null}
          <View style={[styles.Body, styles.paddingAll]}>
            <FlatList
              data={props?.cityPincodeList}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                marginHorizontal: 10,
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomColor: '#A2A2A2',
                    borderBottomWidth: 0.3,
                    width: '100%',
                  }}></View>
              )}
              ListHeaderComponent={
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={[
                      { fontSize: 16, color: '#404040' },
                      Constants.fontType.jMedium,
                    ]}>
                    <Text style={{ color: '#E5184E' }}> Please Select Option From List Below  </Text>
                  </Text>
                </View>
              }

              renderItem={({ item, index }) => (
                <ScrollView>
                  <TouchableOpacity
                    onPress={() => {
                      setPinCode(item?.pincode);

                      setSelectedCity(item?.city)

                      setCity(true)
                      props?.setCityObj(item)
                      FirebaseActions.trackEvent("Go to Main Screen", null)
                      navigate(Screens.TAB)
                    }}
                    style={[styles.CityList, styles.paddingTopandBottom]}>
                    <Text
                      style={[styles.citytext, Constants.fontType.jRegular]}>
                      {item?.city},{item?.area},{item?.pincode}
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = state => ({
  cityPincodeList: state.city?.cityPincode,
});

const mapDispatchToProps = dispatch => {
  return {
    getPincode: code => dispatch(Actions.getPincode(code)),
    setCityObj: cityObj => dispatch(Actions.setCityObj(cityObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);