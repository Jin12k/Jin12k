// // import React, { useEffect} from 'react'
// // import { connect } from 'react-redux'
// // import { SafeAreaView } from 'react-native-safe-area-context'
// // import { create } from '../../helpers/PlatformSpecificStyles'
// // import { View, Text, Image, Pressable } from 'react-native'
// // import ProfileStyles from './ProfileStyles'
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { Screens, navigate } from '../../helpers/Screens'
// // import Actions from './ProfileAction'
// // import { Dimensions } from 'react-native';
// // import CreditCard from '../../staticData/svg/credit-card.svg'
// // import Order from '../../staticData/svg/order.svg'
// // import Location from '../../staticData/svg/location.svg'
// // import Help from '../../staticData/svg/help.svg'

// // export const ProfileScreen = (props) => {

// //     let name = props?.UserDetails?.fullname

// //     const windowHeight = Dimensions.get('window').height;

// //     useEffect(() => {
// //         props.getProfileDetails(props.token)
// //     }, [])

// //     let image = props?.UserDetails?.image

// //     console.log(props?.UserDetails , "personal details ")

// //     return (
// //         <SafeAreaView style={styles.MainContainer}>
// //             <View style={styles.TopNav}>
// //                 <MaterialCommunityIcons
// //                     onPress={(e) => { props.navigation.goBack() }}
// //                     style={{ fontSize: 25, marginRight: 10 }}
// //                     name="arrow-left"
// //                     backgroundColor="#3b5998"
// //                 />
// //                 <Text style={styles.topnavtext}>My Dashboard</Text>
// //             </View>
// //             <View style={[styles.Body, styles.paddingClass]}>
// //                 {/* <ScrollView> */}
// //                     <View style={styles.userdetail}>
// //                         <View style={styles.rowsection}>
// //                             <View >
// //                                 {image != ""  ?
// //                                     <Image
// //                                         style={{ width: 60, height: 60, borderRadius: 50 }}
// //                                         source={{ uri: `${props.UserDetails.image}` }}
// //                                     />
// //                                     :
// //                                     <Image
// //                                         style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: 'black' }}
// //                                         source={require('../../staticData/assests/head_icon.png')}
// //                                     />
// //                                 }
// //                             </View>
// //                             <View>
// //                                 <Text style={{ fontSize: 24, color: '#0E3F6C', fontWeight: 'bold', paddingHorizontal: '2%' }}> {name ? name : 'Guest'}</Text>
// //                             </View>
// //                         </View>
// //                     </View>
// //                     <View style={styles.first}>
// //                         <View style={styles.row}>
// //                             <View style={styles.firstsection}>
// //                                 <CreditCard />
// //                             </View>
// //                             <View style={styles.secondsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.EditPERSONAL_INFO)
// //                                     }}
// //                                 >
// //                                     <Text style={styles.optiontext}>Personal info</Text>
// //                                 </Pressable>
// //                             </View>
// //                             <View style={styles.thirdsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.EditPERSONAL_INFO)
// //                                     }}
// //                                 >
// //                                     <MaterialCommunityIcons name="chevron-right" size={25} color="#659AC9" />
// //                                 </Pressable>
// //                             </View>
// //                         </View>
// //                         <View style={styles.row}>
// //                             <View style={styles.firstsection}>
// //                                 <Order />
// //                             </View>
// //                             <View style={styles.secondsection}>
// //                                 <Pressable onPress={() => {
// //                                     navigate(Screens.MY_ORDER)
// //                                 }}>
// //                                     <Text style={styles.optiontext}>My Orders</Text>
// //                                 </Pressable>
// //                             </View>
// //                             <View style={styles.thirdsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.MY_ORDER)
// //                                     }}
// //                                 >
// //                                     <MaterialCommunityIcons name="chevron-right" size={25} color="#659AC9" />
// //                                 </Pressable>
// //                             </View>
// //                         </View>
// //                         <View style={styles.row}>
// //                             <View style={styles.firstsection}>
// //                                 <Location />
// //                             </View>
// //                             <View style={styles.secondsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.PROFILE_ADDRESS)
// //                                     }}
// //                                 >
// //                                     <Text style={styles.optiontext}>My Addresses</Text>
// //                                 </Pressable>
// //                             </View>
// //                             <View style={styles.thirdsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.ADD_ADDRESS)
// //                                     }}
// //                                 >
// //                                     <MaterialCommunityIcons name="chevron-right" size={25} color="#659AC9" />
// //                                 </Pressable>
// //                             </View>
// //                         </View>
// //                         <View style={styles.row}>
// //                             <View style={styles.firstsection}>
// //                                 <Help />
// //                             </View>
// //                             <View style={styles.secondsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.HELP)
// //                                     }}
// //                                 >
// //                                     <Text style={styles.optiontext}>Help & Support</Text>
// //                                 </Pressable>
// //                             </View>
// //                             <View style={styles.thirdsection}>
// //                                 <Pressable
// //                                     onPress={() => {
// //                                         navigate(Screens.HELP)
// //                                     }}
// //                                 >
// //                                     <MaterialCommunityIcons name="chevron-right" size={25} color="#659AC9" />
// //                                 </Pressable>
// //                             </View>
// //                         </View>
// //                     </View>
// //                 {/* </ScrollView> */}
// //                 <View style={styles.logoutsection}>
// //                         <View style={styles.firstsection}>
// //                             <MaterialCommunityIcons
// //                                 onPress={() => {
// //                                     props.logout()
// //                                 }}
// //                                 style={{ fontSize: 25, marginRight: 10, color: '#A2A2A2' }}
// //                                 name="exit-to-app"
// //                                 backgroundColor="#A2A2A2"
// //                             />
// //                         </View>
// //                         <View style={styles.secondsection}>
// //                             <Pressable
// //                                 onPress={() => {
// //                                     props.logout()
// //                                 }}
// //                             >
// //                                 <Text style={styles.text}>Logout</Text>
// //                             </Pressable>
// //                         </View>
// //                         <View style={styles.thirdsection}>
// //                             <Pressable
// //                                 onPress={() => {
// //                                     props.logout()
// //                                 }}
// //                             >
// //                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#659AC9" />
// //                             </Pressable>
// //                         </View>
// //                     </View>
// //             </View>
// //         </SafeAreaView>
// //     )
// // }
// // let styles = create(ProfileStyles);

// // const mapStateToProps = (state) => ({
// //     UserDetails: state.userprofile?.userProfile,
// //     token: state.user.userData?.token,
// //     City: state.city?.cityId,
// // })

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         getProfileDetails: (token) => dispatch(Actions.getProfileDetails(token)),
// //         logout: () => dispatch(Actions.logout()),
// //     }
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { create } from '../../helpers/PlatformSpecificStyles'
// import { View, Text, Image, Pressable } from 'react-native'
// import ProfileStyles from './ProfileStyles'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Screens, navigate } from '../../helpers/Screens'
// import Actions from './ProfileAction'
// import { Dimensions } from 'react-native';
// import CreditCard from '../../staticData/svg/credit-card.svg'
// import Order from '../../staticData/svg/order.svg'
// import Location from '../../staticData/svg/location.svg'
// import Help from '../../staticData/svg/help.svg'
// import Redcash from '../../staticData/svg/Redcash.svg'

// export const ProfileScreen = (props) => {

//     let name = props?.UserDetails?.fullname

//     const windowHeight = Dimensions.get('window').height;

//     useEffect(() => {
//         props.getProfileDetails(props.token)
//     }, [])

//     let image = props?.UserDetails?.image

//     console.log(props?.UserDetails, "personal details ")

//     return (
//         <SafeAreaView style={styles.MainContainer}>
//             <View style={styles.TopNav}>
//                 <MaterialCommunityIcons
//                     onPress={(e) => { props.navigation.goBack() }}
//                     style={{ fontSize: 25, marginRight: 10 }}
//                     name="arrow-left"
//                     backgroundColor="#3b5998"
//                 />
//                 <Text style={styles.topnavtext}>My Dashboard</Text>
//             </View>
//             <View style={[styles.Body, styles.paddingClass]}>
//                 {/* <ScrollView> */}
//                 <View style={styles.userdetail}>
//                     <View style={styles.rowsection}>
//                         <View >
//                             {image != "" ?
//                                 <Image
//                                     style={{ width: 60, height: 60, borderRadius: 50,backgroundColor:'#E5184E' }}
//                                     source={{ uri: `${props.UserDetails.image}` }}
//                                 />
//                                 :
//                                 <Image
//                                     style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: 'black' }}
//                                     source={require('../../staticData/assests/head_icon.png')}
//                                 />
//                             }
//                         </View>
//                         <View>
//                             <Text style={{ fontSize: 24, color: '#0E3F6C', fontWeight: 'bold', paddingHorizontal: '4%' }}> {name ? name : 'Guest'}</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.first}>
//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <CreditCard />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.EditPERSONAL_INFO)
//                                 }}
//                             >
//                                 <Text style={styles.optiontext}>Personal info</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.EditPERSONAL_INFO)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>

//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <Order />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable onPress={() => {
//                                 navigate(Screens.MY_ORDER)
//                             }}>
//                                 <Text style={styles.optiontext}>My Orders</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.MY_ORDER)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <Redcash />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.PROFILE_ADDRESS)
//                                 }}
//                             >
//                                 <Text style={styles.optiontext}>My Family & Friends</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.ADD_ADDRESS)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <Location />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.PROFILE_ADDRESS)
//                                 }}
//                             >
//                                 <Text style={styles.optiontext}>My Addresses</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.ADD_ADDRESS)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <Redcash />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.HELP)
//                                 }}
//                             >
//                                 <Text style={styles.optiontext}>My Redcash</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.HELP)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>
//                     <View style={styles.row}>
//                         <View style={styles.firstsection}>
//                             <Help />
//                         </View>
//                         <View style={styles.secondsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.HELP)
//                                 }}
//                             >
//                                 <Text style={styles.optiontext}>Help & Support</Text>
//                             </Pressable>
//                         </View>
//                         <View style={styles.thirdsection}>
//                             <Pressable
//                                 onPress={() => {
//                                     navigate(Screens.HELP)
//                                 }}
//                             >
//                                 <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
//                             </Pressable>
//                         </View>
//                     </View>

//                 </View>
//                 {/* </ScrollView> */}
//                 <View style={styles.logoutsection}>
//                     <View style={styles.firstsection}>
//                         <MaterialCommunityIcons
//                             onPress={() => {
//                                 props.logout()
//                             }}
//                             style={{ fontSize: 25, marginRight: 10, color: '#A2A2A2' }}
//                             name="exit-to-app"
//                             backgroundColor="#A2A2A2"
//                         />
//                     </View>
//                     <View style={styles.secondsection}>
//                         <Pressable
//                             onPress={() => {
//                                 props.logout()
//                             }}
//                         >
//                             <Text style={styles.text}>Logout</Text>
//                         </Pressable>
//                     </View>
//                     <View style={styles.thirdsection}>
//                         <Pressable
//                             onPress={() => {
//                                 props.logout()
//                             }}
//                         >
//                             <MaterialCommunityIcons name="chevron-right" size={25} color="#A2A2A2" />
//                         </Pressable>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }
// let styles = create(ProfileStyles);

// const mapStateToProps = (state) => ({
//     UserDetails: state.userprofile?.userProfile,
//     token: state.user.userData?.token,
//     City: state.city?.cityId,
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProfileDetails: (token) => dispatch(Actions.getProfileDetails(token)),
//         logout: () => dispatch(Actions.logout()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { create } from '../../helpers/PlatformSpecificStyles'
import { View, Text, Image, Pressable } from 'react-native'
import ProfileStyles from './ProfileStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screens, navigate } from '../../helpers/Screens'
import Actions from './ProfileAction'
import { Dimensions } from 'react-native';
import CreditCard from '../../staticData/svg/credit-card.svg'
import Order from '../../staticData/svg/order.svg'
import Location from '../../staticData/svg/location.svg'
import Help from '../../staticData/svg/help.svg'
import Redcash from '../../staticData/svg/Redcash.svg'

export const ProfileScreen = (props) => {

    let name = props?.UserDetails?.fullname

    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        props.getProfileDetails(props.token)
    }, [])

    let image = props?.UserDetails?.image

    console.log(props?.UserDetails, "personal details ")

    return (
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.TopNav}>
                <MaterialCommunityIcons
                    onPress={(e) => { props.navigation.goBack() }}
                    style={{ fontSize: 25, marginRight: 10 }}
                    name="arrow-left"
                    backgroundColor="#3b5998"
                />
                <Text style={styles.topnavtext}>My Dashboard</Text>
            </View>
            <View style={[styles.Body, styles.paddingClass]}>
                {/* <ScrollView> */}
                <View style={styles.userdetail}>
                    <View style={styles.rowsection}>
                        <View >
                            {image != "" ?
                                <Image
                                    style={{ width: 60, height: 60, borderRadius: 50,backgroundColor:'#E5184E' }}
                                    source={{ uri: `${props.UserDetails.image}` }}
                                />
                                :
                                <Image
                                    style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: 'black' }}
                                    source={require('../../staticData/assests/head_icon.png')}
                                />
                            }
                        </View>
                        <View>
                            <Text style={{ fontSize: 24, color: '#0E3F6C', fontWeight: 'bold', paddingHorizontal: '4%' }}> {name ? name : 'Guest'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.first}>
                    <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <CreditCard />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.EditPERSONAL_INFO)
                                }}
                            >
                                <Text style={styles.optiontext}>Personal info</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.EditPERSONAL_INFO)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <Order />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable onPress={() => {
                                navigate(Screens.MY_ORDER)
                            }}>
                                <Text style={styles.optiontext}>My Orders</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.MY_ORDER)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View>
                    {/* <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <Redcash />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.UPLOAD_PRESCREPTION)
                                }}
                            >
                                <Text style={styles.optiontext}>My Prescription</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.UPLOAD_PRESCREPTION)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View> */}
                    <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <Location />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.PROFILE_ADDRESS)
                                }}
                            >
                                <Text style={styles.optiontext}>My Addresses</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.ADD_ADDRESS)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View>
                    {/* <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <Redcash />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.MY_REDCASH)
                                }}
                            >
                                <Text style={styles.optiontext}>My Redcash</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.MY_REDCASH)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View> */}
                    <View style={styles.row}>
                        <View style={styles.firstsection}>
                            <Help />
                        </View>
                        <View style={styles.secondsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.HELP)
                                }}
                            >
                                <Text style={styles.optiontext}>Help & Support</Text>
                            </Pressable>
                        </View>
                        <View style={styles.thirdsection}>
                            <Pressable
                                onPress={() => {
                                    navigate(Screens.HELP)
                                }}
                            >
                                <MaterialCommunityIcons name="chevron-right" size={25} color="#707070" />
                            </Pressable>
                        </View>
                    </View>

                </View>
                {/* </ScrollView> */}
                <View style={styles.logoutsection}>
                    <View style={styles.firstsection}>
                        <MaterialCommunityIcons
                            onPress={() => {
                                props.logout()
                            }}
                            style={{ fontSize: 25, marginRight: 10, color: '#A2A2A2' }}
                            name="exit-to-app"
                            backgroundColor="#A2A2A2"
                        />
                    </View>
                    <View style={styles.secondsection}>
                        <Pressable
                            onPress={() => {
                                props.logout()
                            }}
                        >
                            <Text style={styles.text}>Logout</Text>
                        </Pressable>
                    </View>
                    <View style={styles.thirdsection}>
                        <Pressable
                            onPress={() => {
                                props.logout()
                            }}
                        >
                            <MaterialCommunityIcons name="chevron-right" size={25} color="#A2A2A2" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
let styles = create(ProfileStyles);

const mapStateToProps = (state) => ({
    UserDetails: state.userprofile?.userProfile,
    token: state.user.userData?.token,
    City: state.city?.cityId,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileDetails: (token) => dispatch(Actions.getProfileDetails(token)),
        logout: () => dispatch(Actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)