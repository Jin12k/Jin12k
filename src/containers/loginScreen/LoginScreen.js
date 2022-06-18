import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { create } from '../../helpers/PlatformSpecificStyles';
import LoginStyles from './LoginStyles';
import TextInput from '../../baseComponents/textInput/TextInput';
import Actions from './LoginAction';
import { connect } from 'react-redux';
import { Image, View, Text, TouchableOpacity, Pressable } from 'react-native';
import Constants from './LoginConstants';
import { Screens, navigate } from '../../helpers/Screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Rightarrow from '../../staticData/svg/righttick.svg'

const LoginScreen = (props) => {
    useEffect(() => {
        if (props?.token) {
            navigate(Screens.TAB)
        }
    }, [props?.UserDetails])

    // console.log(props,"sdfad fdasf dsa fdsa dsf sdfa ")

    const [mobileNumber, setmobileNumber] = useState('');
    const [message, setmessage] = useState('')
    const [verify, setverify] = useState(false)

    const regx = /^[0-9]\d{9}$/;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.maindiv}>
                <View style={styles.topnav}>
                    <View style={styles.head}>
                        <MaterialCommunityIcons
                            onPress={(e) => { navigate(Screens.ONBOARD_SCREEN) }}
                            style={styles.icon}
                            name="arrow-left"
                            backgroundColor="#3b5998"
                        />
                        <Text style={styles.navheading}>Login</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.subheading}>Enter your mobile number</Text>
                        </View>
                        <View style={styles.inputsection}>
                            <View style={styles.unputsubsection}>
                                <View style={styles.country}>
                                    <Text style={styles.countrycode}>+91</Text>
                                </View>
                                <View style={styles.VerticleLine}>
                                </View>
                                <View style={styles.inputfield}>
                                    <TextInput
                                        require
                                        value={mobileNumber.toString()}
                                        placeholderTextColor="black"
                                        style={styles.input}
                                        autoFocus={true}
                                        onChangeText={(value) => {
                                            if (!regx.test(value)) {
                                                setverify(false)
                                                // setmessage("Invalid phone number")
                                            } else {
                                                //     setmessage("")
                                                setverify(true)
                                            }
                                            setmobileNumber(value);
                                            console.log(value)
                                        }
                                        }
                                        keyboardType="numeric"
                                        maxLength={10}
                                        placeholder={'Enter mobile number'}
                                    />
                                </View>
                                {verify ?
                                <View style={styles.conditions}>
                                    <View style={styles.condition}>
                                      
                                        <Rightarrow />
                                    </View>
                                    </View> : null}
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>By continuing, you agree to our</Text>
                            <Pressable
                            onPress={()=>{
                                navigate(Screens.TERMS_CONDITION)
                            }}
                            >
                            <Text style={styles.terms}>Terms & Conditions</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={verify ? styles.buttonActive : styles.buttonInactive}
                            onPress={() => {
                                if (regx.test(mobileNumber)) {
                                    setmobileNumber('')
                                    props.doLogin(mobileNumber, props?.navigation);
                                    setverify(false)
                                }
                                else {
                                    alert('Enter 10 Digit Mobile Number')
                                }
                            }}>
                            <Text style={styles.buttontext}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

let styles = create(LoginStyles);

const mapStateToProps = (state) => ({
    UserDetails: state?.user?.userData,
    token: state?.user?.userData?.token,
    phoneNumber: state?.userLogin?.phoneNumber,
})

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (mobileNumber, pushTo) => {
            dispatch(Actions.doLogin(mobileNumber, pushTo));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);