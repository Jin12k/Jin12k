// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Image, View, Text, TouchableOpacity , Keyboard } from 'react-native';
// import OtpStyles from './OtpStyles';
// import { create } from '../../helpers/PlatformSpecificStyles';
// import { Screens } from '../../helpers/Screens';
// import {
//     CodeField,
//     Cursor,
//     useBlurOnFulfill,
//     useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
// import Actions from "./OtpverificationActions";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import RNOtpVerify from 'react-native-otp-verify';

// const CELL_COUNT = 6;

// export const Otpverification = (props) => {

//     const [seconds, setSeconds] = useState(30)

//     const [value, setValue] = useState('');
//     const [otpError, setOtpError] = useState()
//     const [verify, setverify] = useState(false)
//     const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
//     const [aloo, getCellOnLayoutHandler] = useClearByFocusCell({
//         value,
//         setValue,
//     });
//     const [message, setmessage] = useState('Enter code')
//     const [remessage, setremessage] = useState('We have sent you an SMS on')

//     useEffect(() => {
//         if (props.token) {
//             props.navigation.replace(Screens.CITY)
//         }
//     }, [props?.token])

//     useEffect(() => {
//         if (props?.error) {
//             setOtpError(true)
//         }
//     }, [props?.error])

//     const regx = /^[0-9]\d{5}$/;

//     useEffect(() => {
//         if (seconds > 0) {
//             setTimeout(() => setSeconds(seconds - 1), 1000);
//         } else {
//             setverify(true)
//             setSeconds('00');
//         }
//     });

//     const otpHandler = (message: string) => {
//         console.log(message , "message ")
//         const otp = /(\d{6})/g.exec(message)[1];
//         console.log(otp , "otp message")
//         // this.setState({ otp });
//         setValue(otp)
//         RNOtpVerify.removeListener();
//         Keyboard.dismiss();8750873038
//     }

//     useEffect(() => {
//         RNOtpVerify.getHash()
//             .then(console.log)
//             .catch(console.log);

//         RNOtpVerify.getOtp()
//             .then(p => RNOtpVerify.addListener(otpHandler))
//             .catch(p => console.log(p));

//             return () => RNOtpVerify.removeListener();;
//     }, [])

    

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.maindiv}>
//                 <View style={styles.topnav}>
//                     <View style={styles.head}>
//                         <MaterialCommunityIcons
//                             onPress={(e) => { setOtpError(), props.navigation.goBack() }}
//                             style={styles.icon}
//                             name="arrow-left"
//                             backgroundColor="#3b5998"
//                         />
//                         <Text style={styles.navheading}>OTP Verification</Text>
//                     </View>
//                 </View>
//                 <View style={styles.section}>
//                     <View style={styles.row}>
//                         <View style={styles.row}>
//                             <Text style={styles.subheading}>Enter the 6-digit OTP sent to</Text>
//                             <Text style={styles.subheading}>+91 {props.phoneNumber?.phone_number}</Text>
//                         </View>
//                         <View style={styles.inputsection}>
//                             <View style={styles.unputsubsection}>
//                                 <View style={styles.inputfield}>
//                                     <CodeField
//                                         ref={ref}
//                                         {...aloo}
//                                         value={value}
//                                         onChangeText={setValue}
//                                         cellCount={CELL_COUNT}
//                                         rootStyle={styles.codeFiledRoot}
//                                         keyboardType="number-pad"
//                                         renderCell={({ index, symbol, isFocused }) => (
//                                             <Text
//                                                 required
//                                                 key={index}
//                                                 style={[[otpError ? styles.wrongcell : styles.cell], isFocused && styles.focusCell]}
//                                                 onLayout={getCellOnLayoutHandler(index)}>
//                                                 {symbol || (isFocused ? <Cursor /> : null)}
//                                             </Text>
//                                         )}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.row}>
//                             <View style={styles.newsection}>
//                                 <View>
//                                     <Text style={styles.text}>Didn't receive the code?</Text>
//                                     {/* <Text style={styles.terms}>Get OTP on call</Text> */}
//                                 </View>
//                                 <View style={styles.resendotp}>

//                                     <TouchableOpacity onPress={() => { setOtpError(false); props.reSendOtp(props.phoneNumber?.phone_number); setmessage("Re-Enter code"); setremessage('We have again sent you an SMS on'); setSeconds(30); setverify(false) }}>
//                                         {verify ?
//                                             <Text style={styles.resend}>Resend</Text>
//                                             : null}
//                                     </TouchableOpacity>
//                                     <TouchableOpacity onPress={() => { setOtpError(false); props.reSendOtp(props.phoneNumber?.phone_number); setmessage("Re-Enter code"); setremessage('We have again sent you an SMS on') }}>
//                                         <Text style={styles.resend}>00:{seconds}</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.section}>
//                     <View style={styles.row}>
//                         <TouchableOpacity
//                             style={value.length == 6 ? styles.buttonActive : styles.buttonInactive}
//                             onPress={() => {
//                                 if (value) {
//                                     props.getUserData(props.phoneNumber?.phone_number, value);
//                                     setValue('')
//                                 } else {
//                                     alert("Please Enter Otp")
//                                 }
//                             }}>
//                             <Text style={styles.buttontext}>Continue</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }
// let styles = create(OtpStyles);

// const mapStateToProps = (state) => ({
//     UserDetails: state.user?.userData,
//     token: state.user?.userData?.token,
//     username: state.user?.userData?.username,
//     phoneNumber: state?.userLogin?.phoneNumber,
//     error: state.user?.errorOtp
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUserData: (phoneNumber, otp) => {
//             dispatch(Actions.getUserData(phoneNumber, otp));
//         },
//         reSendOtp: (mobileNumber) => {
//             dispatch(Actions.reSendOtp(mobileNumber));
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Otpverification)

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import OtpStyles from './OtpStyles';
import { create } from '../../helpers/PlatformSpecificStyles';
import { Screens } from '../../helpers/Screens';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Actions from "./OtpverificationActions";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CELL_COUNT = 6;

export const Otpverification = (props) => {

    const [seconds, setSeconds] = useState(30)

    const [value, setValue] = useState('');
    const [otpError, setOtpError] = useState()
    const [verify, setverify] = useState(false)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [aloo, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [message, setmessage] = useState('Enter code')
    const [remessage, setremessage] = useState('We have sent you an SMS on')

    useEffect(() => {
        if (props.token) {
            props.navigation.replace(Screens.CITY)
        }
    }, [props?.token])

    useEffect(() => {
        if (props?.error) {
            setOtpError(true)
        }
    }, [props?.error])

    const regx = /^[0-9]\d{5}$/;

    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setverify(true)
          setSeconds('00');
        }
      });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.maindiv}>
                <View style={styles.topnav}>
                    <View style={styles.head}>
                        <MaterialCommunityIcons
                            onPress={(e) => { setOtpError() , props.navigation.goBack() }}
                            style={styles.icon}
                            name="arrow-left"
                            backgroundColor="#3b5998"
                        />
                        <Text style={styles.navheading}>OTP Verification</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Text style={styles.subheading}>Enter the 6-digit OTP sent to</Text>
                            <Text style={styles.subheading}>+91 {props.phoneNumber?.phone_number}</Text>
                        </View>
                        <View style={styles.inputsection}>
                            <View style={styles.unputsubsection}>
                                <View style={styles.inputfield}>
                                    <CodeField
                                        ref={ref}
                                        {...aloo}
                                        value={value}
                                        onChangeText={setValue}
                                        cellCount={CELL_COUNT}
                                        rootStyle={styles.codeFiledRoot}
                                        keyboardType="number-pad"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                required
                                                key={index}
                                                style={[ [otpError? styles.wrongcell   : styles.cell ], isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.newsection}>
                                <View>
                                    <Text style={styles.text}>Didn't receive the code?</Text>
                                    {/* <Text style={styles.terms}>Get OTP on call</Text> */}
                                </View>
                                <View style={styles.resendotp}>
                                    
                                    <TouchableOpacity onPress={() => { setOtpError(false); props.reSendOtp(props.phoneNumber?.phone_number); setmessage("Re-Enter code"); setremessage('We have again sent you an SMS on') ; setSeconds(30); setverify(false) }}>
                                    { verify ? 
                                        <Text style={styles.resend}>Resend</Text>
                                        : null }
                                    </TouchableOpacity> 
                                    <TouchableOpacity onPress={() => { setOtpError(false); props.reSendOtp(props.phoneNumber?.phone_number); setmessage("Re-Enter code"); setremessage('We have again sent you an SMS on') }}>
                                        <Text style={styles.resend}>00:{seconds}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.row}>
                            <TouchableOpacity
                                style={value.length == 6 ? styles.buttonActive : styles.buttonInactive}
                                onPress={() => {
                                    if (value) {
                                        props.getUserData(props.phoneNumber?.phone_number, value);
                                        setValue('')
                                    } else {
                                        alert("Please Enter Otp")
                                    }
                                }}>
                                <Text style={styles.buttontext}>Continue</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
let styles = create(OtpStyles);

const mapStateToProps = (state) => ({
    UserDetails: state.user?.userData,
    token: state.user?.userData?.token,
    username: state.user?.userData?.username,
    phoneNumber: state?.userLogin?.phoneNumber,
    error: state.user?.errorOtp
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (phoneNumber, otp) => {
            dispatch(Actions.getUserData(phoneNumber, otp));
        },
        reSendOtp: (mobileNumber) => {
            dispatch(Actions.reSendOtp(mobileNumber));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Otpverification)
