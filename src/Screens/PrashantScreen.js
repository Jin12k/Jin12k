import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen');
const PrashantScreen = () => {
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

                </View>




                <View style={styles.conTainer}>
                    <View style={styles.designCon}>
                        <View style={styles.imgContainer}>
                            <Image
                                source={require('../assets/images/pic2.jpg')}
                                style={styles.imgSizes}
                                resizeMode="contain"
                            />
                        </View>
                        <View>
                            <View style={styles.redFour}>
                                <Text style={styles.fourTxt}> FAQs</Text>

                            </View>
                            <View style={styles.redFour}>
                                <Text style={styles.fiveTxt}>Last updated April 2020</Text>

                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.secTitle}>
                    <Text style={styles.secTxt}>GoTeeOff Platform General Queries:</Text>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  1. What is the GoTeeOff platform?</Text>
                    </View>
                </View>
                <View style={styles.paraCon}>
                    <Text style={styles.paraTxt}> What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.
                    </Text>

                    <Text>
                        If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.
                    </Text>
                    <Text>
                        If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.
                    </Text>
                </View>

                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  2. What is the GoTeeOff station Contain?</Text>
                    </View>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  3. What is the GoTeeOff platform?</Text>
                    </View>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  4. What is the headCon GoTeeOff platform?</Text>
                    </View>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  5. What is the GoTeeOff platform?</Text>
                    </View>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  6. What is the GoTeeOff platform?</Text>
                    </View>
                </View>
                <View style={styles.contentHead}>
                    <View style={styles.headCon}>
                        <Text style={styles.headTxt}>  1. What is the GoTeeOff platform?</Text>
                    </View>
                </View>

            </ScrollView >
        </SafeAreaView >
    )
}

export default PrashantScreen

const styles = StyleSheet.create({
    mainContainer: {
        height: height / 0.90,
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
        // backgroundColor:'red',
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

    imgContainer: {
        // backgroundColor:'red',
        height: height / 13,
        width: width / 7,
    },

    imgSizes: {
        height: height / 15,
        width: width / 8,
        borderRadius: 50,
        

    },

    secTitle: {
        height: height / 12,
        width: width * 0.89,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    secTxt: {
        fontSize: width / 20,
        color: 'green',


    },



    designCon: {
        //backgroundColor: 'red',
        height: height / 8,
        width: width * 0.94,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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
        fontSize: height / 40,

        fontWeight: 'bold',
        alignSelf: 'center',
    },
    fiveTxt: {
        alignSelf: 'center',

    },

    
    cyanTxt: {
        color: 'cyan',
    },
    conTainer: {
        // backgroundColor:'red',
        height: height / 11,
        width: width / 1,
    },

    contentHead: {
        // backgroundColor: 'cyan',
        height: height / 15,
        justifyContent: 'center'
    },
    headCon: {
        backgroundColor: 'lightgreen',
        width: width / 1.09,
        height: height / 17,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    headTxt: {
        fontWeight: 'bold'
    },

    paraCon: {
        width: width / 1.1,
        // backgroundColor: 'cyan',
        alignSelf: 'center'
    }


})
