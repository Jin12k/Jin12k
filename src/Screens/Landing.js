import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import MainScreen from '../Images/svg/MainScreen.svg'
const { height, width } = Dimensions.get('window')

const App = (props) => {
    return (
        <SafeAreaView style={styles.safeCon}>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Image source={require('../Images/Agc.png')}
                        resizeMode='contain'
                        style={styles.imgStyle} />
                </View>
                <View style={styles.scrollCon}>

                    <ScrollView>

                        <View style={styles.imgContainer}>
                            <Image source={require('../Images/Bgcs.png')}
                                resizeMode='stretch'
                                style={styles.imgStyles}
                            />
                        </View>
                        <View style={styles.loremContainer}>
                            <Text style={styles.txtLorem}>Lorem ipsum dolor sit amet, consectetur</Text><Text style={styles.txtLorem}> adipiscing elit</Text>
                        </View>
                        <View style={styles.regsContainer}>
                            <TouchableOpacity style={styles.regContainer}>
                                <Text style={styles.regTxt}>➞</Text>
                                <Text style={styles.regTxt}>register</Text>
                            </TouchableOpacity>
                            <Text style={styles.regTxts}>me as a collector</Text>

                        </View>
                        <TouchableOpacity activeOpacity={0.7}
                            style={styles.trackContainer}>
                            <Text style={styles.trackTxt}>➞</Text>
                            <Text style={styles.trackTxt}>track my application</Text>
                        </TouchableOpacity>
                        <View style={styles.imgCon}>
                            <Image source={require('../Images/group.png')}
                                resizeMode='contain'
                                style={styles.imgStyle} />
                        </View>
                        <View style={styles.ipsumContainer}>
                            <Text style={styles.regTxts}>lorem ipsum{'\n'}
                                is used</Text>
                        </View>
                        <Text style={styles.regTxts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
                        <View style={styles.ipsumContainer}>
                        </View>
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView >
    )
}

export default App

const styles = StyleSheet.create({
    mainContainer: {
        height: height / 1,
        width: width / 1,
        backgroundColor: '#FFFFFF'
    },
    scrollCon: {
        height: height / 1.18,
        width: width / 1,
        // backgroundColor: 'cyan'
    },

    safeCon: {
        height: height / 1,
        width: width / 1,

    },
    topContainer: {
        height: height / 8,
        width: width / 1.1,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignSelf: 'center',
        // alignItems: 'center'
    },
    imgStyle: {
        height: 90,
        width: 150
    },
    imgContainer: {
        height: height / 4,
        width: width / 1.1,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    imgStyles: {
        height: height / 4,
        width: width / 1
    },
    txtLorem: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        // fontWeight: '300'
        fontFamily: 'Barlow-ExtraLight'
    },
    loremContainer: {
        height: height / 10,
        width: width / 1.1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'cyan'
    },
    regsContainer: {
        height: height / 10,
        width: width / 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'cyan',
        flexDirection: 'row'
    },
    regContainer: {
        height: height / 17,
        width: width / 3,
        backgroundColor: 'red',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    regTxt: {
        color: '#FFFFFF',
        fontSize: height / 35,
        padding: 5,
        fontFamily: 'BarlowCondensed-ExtraLight'
        // fontWeight: '300'
    },
    regTxts: {
        color: 'rgb(26,26,26)',
        fontSize: height / 35,
        padding: 5,
        fontFamily: 'BarlowCondensed-ExtraLight'
    },
    trackContainer: {
        height: height / 14,
        width: width / 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'cyan',
        flexDirection: 'row'
    },
    trackTxt: {
        color: 'rgb(87, 123, 223)',
        fontSize: 24,
        fontFamily: 'BarlowCondensed-ExtraLight',
        padding: 5,
        // fontWeight: '300'
    },
    imgCon: {
        height: height / 6,
        width: width / 1,
        alignSelf: 'center',
        // backgroundColor: 'cyan',
        justifyContent: 'flex-end'
    },
    ipsumContainer: {
        height: height / 8,
        width: width / 1.2,
        // backgroundColor: 'cyan',
        alignSelf: 'center',
        justifyContent: 'center'
    },
})