
// import DefaultSetting from '../../settings/styles/DefaultPrimarySettings';
// import { Dimensions, StatusBar } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const { height, width } = Dimensions.get('screen');

// export default {
//     mainContainer: {
//         height: height / 1.1,
//         width: width / 1,
//         backgroundColor: '#FFFFFF',
//     },
//     secCon: {
//         height: height / 13,
//         width: width / 1,
//         backgroundColor: '#F5F5F5',
//         flexDirection: 'row',
//         // backgroundColor: 'green'
//     },
//     arrowCon: {
//         height: height / 13,
//         width: width / 7,
//         // backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         padding: 10,
//     },
//     arrowTxt: {
//         fontSize: height / 25,
//         color: '#707070',
//         fontWeight: 'bold',
//         // backgroundColor:'red',
//     },
//     headCon: {
//         height: height / 13,
//         width: width / 2,
//         // backgroundColor: 'blue',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     txtHead: {
//         color: '#707070',
//         // backgroundColor: '#707070',
//         fontSize: height / 45,
//         fontWeight: 'bold',
//         width: width / 2.1
//     },
//     testingCon: {
//         height: height / 9,
//         width: width / 1.14,
//         // backgroundColor: 'cyan',
//         alignSelf: 'center',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     testingTxt: {
//         color: '#707070',
//         fontSize: height / 57,
//     },
//     popularCon: {
//         height: height / 7,
//         width: width / 1.14,
//         // backgroundColor: 'cyan',
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     popularTxt: {
//         fontSize: height / 54,
//         color: '#A7A7A7',
//     },
//     InputCon: {
//         height: height / 5,
//         width: width / 1.15,
//         backgroundColor: '#F5F5F5',
//         alignSelf: 'center',
//         borderRadius: 5,

//     },
//     informCon: {
//         height: height / 20,
//         width: width / 1.2,
//         alignSelf: 'center',
//         // backgroundColor : 'red',
//         justifyContent: 'center',
//         marginLeft: 30,
//     },
//     informTxt: {
//         color: '#0E3F6C',
//         fontSize: height / 60,
//         fontWeight: 'bold',
//     },

//     inputField: {
//         height: height / 13.5,
//         width: width / 1.3,
//         alignSelf: 'center',
//         // backgroundColor : 'green',
//         // justifyContent: 'center',
//     },
//     inputFieldStyle: {
//         height: height / 14,
//         width: width / 1.42,
//         alignSelf: 'center',
//         // backgroundColor : 'green',
//         // justifyContent: 'center',
//     },
//     inputFieldStyl: {
//         height: height / 14,
//         width: width / 1.42,
//         alignSelf: 'center',
//     },
//     txtInput: {
//         height: height / 20,
//         width: width / 1.3,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 0.3,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//     },
//     txtInputCon: {
//         height: height / 18,
//         width: width / 1.42,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 2,
//         borderColor: '#F5F5F5',
//         borderRadius: 9,
//         paddingHorizontal: 19,
//         alignSelf: 'center',
//         fontSize: 12
//     },
//     txtUpload: {
//         height: height / 20,
//         width: width / 1.3,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     InputCons: {
//         height: height / 2.6,
//         width: width / 1.15,
//         backgroundColor: '#F5F5F5',
//         alignSelf: 'center',
//         borderRadius: 5,
//     },
//     spaceGap: {
//         height: height / 2.3,
//         width: width / 1,
//         // backgroundColor: 'red',
//         justifyContent: 'center',
//     },
//     txtInputs: {
//         height: height / 20,
//         width: width / 3,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//     },
//     genderCon: {
//         height: height / 20,
//         width: width / 3,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         justifyContent: 'space-around',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     inputFields: {
//         height: height / 13,
//         width: width / 1.3,
//         alignSelf: 'center',
//         // backgroundColor: 'red',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     inputFieldCon: {
//         height: height / 8.5,
//         width: width / 1.3,
//         alignSelf: 'center',
//         // backgroundColor: 'cyan',
//         flexDirection: 'row',
//         marginTop: 5
//     },
//     txtInputStyle: {
//         height: height / 10,
//         width: width / 1.3,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//     },
//     txtInputStyles: {
//         height: height / 10,
//         width: width / 1.42,
//         backgroundColor: '#FFFFFF',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         padding: 10,
//         alignItems: 'flex-end',
//     },
//     txts: {
//         height: height / 13,
//         width: width / 1.5,
//         color: '#A7A7A7',
//         fontSize: 14,
//         // backgroundColor: 'lightblue',
//         // paddingTop:5
//     },
//     InputContainer: {
//         height: height / 7.6,
//         width: width / 1.15,
//         backgroundColor: '#F5F5F5',
//         alignSelf: 'center',
//         borderRadius: 5,
//     },
//     valid: {

//         // height: height / 13.5,
//         // width: width / 2.5,
//         // backgroundColor: 'red'
//     },
//     txtStyle: {
//         height: height / 20,
//         width: width / 1.3,
//         // backgroundColor: 'yellow',
//         borderWidth: 1,
//         borderColor: '#E3E3E3',
//         borderRadius: 5,
//         justifyContent: 'center',
//     },
//     spaceGaping: {
//         height: height / 6.4,
//         width: width / 1,
//         // backgroundColor: 'blue',
//     },
//     spaceGaps: {
//         height: height / 14,
//         width: width / 1.16,
//         // backgroundColor: 'blue',
//         justifyContent: 'center',
//     },
//     btnCon: {
//         height: height / 16,
//         width: width / 1.29,
//         backgroundColor: '#E5184E',
//         alignSelf: 'center',
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     btnTxt: {
//         color: '#FFFFFF',
//         fontSize: height / 49,
//         fontWeight: 'bold',
//     },
//     inputUpload: {
//         height: height / 15,
//         width: width / 1.3,
//         alignSelf: 'center',
//         flexDirection: 'row',

//     },
//     buttonStyle: {
//         backgroundColor: '#F5F5F5',
//         height: height / 25,
//         width: width / 3.3,
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         borderRadius: 3,
//         flexDirection: 'row',
//         borderWidth: 0.2,
//         borderColor: '#A2A2A2'
//     },
//     textStyle: {
//         color: '#707070',
//         fontSize: height / 75,
//         width: width / 7
//     },
//     modalContainer: {
//         height: height / 1.1,
//         width: width / 1,
//         backgroundColor: '#707070A6',
//         justifyContent: 'center',
//     },
//     HeaderContainer: {
//         height: height / 1.4,
//         width: width / 1.16,
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         alignSelf: 'center',
//         borderWidth: 1,
//         borderColor: 'grey'
//     },
//     mapView: {
//         height: height / 3,
//         width: width / 1.17,
//         backgroundColor: 'lightblue',
//         borderRadius: 10,
//         alignSelf: 'center'
//     },
//     plusBox: {
//         height: height / 40,
//         width: width / 20,
//         backgroundColor: '#E5184E',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     plusTxt: {
//         height: height / 27,
//         fontSize: 20,
//         color: 'white',
//         fontWeight: 'bold',
//         top: 1.5,
        
//     },
//     txtDirection: {
        
//         height: height / 21,
//         width: width / 2.3,
//         borderColor: '#E3E3E3',
//         justifyContent: 'center',
//         paddingHorizontal: 5,
//         // backgroundColor:'cyan',
//         justifyContent: 'center'
//     },
//     txtFile: {
//         height: height / 34,
//         width: width / 2.3,
//         // backgroundColor: 'cyan',
//         justifyContent: 'center',
//         alignItems: 'center'

//     },
//     InputContext: {
//         height: height / 4.3,
//         width: width / 1.3,
//         backgroundColor: '#F5F5F5',
//         alignSelf: 'center',
//         borderRadius: 5,
//         justifyContent: 'center'
//     },
//     informContent: {
//         height: height / 38,
//         width: width / 1.45,
//         alignSelf: 'center',
//         // backgroundColor : 'red',
//         // justifyContent: 'flex-end',
//         paddingHorizontal: 2,
//     },
//     space: {
//         height: height / 3.5,
//         width: width / 1.17,
//         justifyContent: 'center',
//         // backgroundColor : 'red',
//     },
//     iconSize: {
//         fontSize: height / 53,
//         color: '#A7A7A7',
//         // backgroundColor: 'cyan'
//     },
//     iconSizes: {
//         fontSize: height / 55,
//         color: '#A7A7A7',
//     },
//     conatiner: {
//         height: height / 10,
//         // backgroundColor: 'red',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     arrowContainer: {
//         height: height / 30,
//         width: width / 15,
//         backgroundColor: '#E3E3E3',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     opacity: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 10,
//         backgroundColor: '#FFFFFF',
//         height: height / 21,
//         borderRadius: 5,
//         width: width / 1.3,
//     },
//     iconStyle: {
//         color: '#C1272D',
//         fontSize: height / 45,
//     },
//     rightArrow: {
//         flexDirection: 'row',
//         height: height / 14,
//         width: width / 2,
//         // backgroundColor: 'blue',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     icons: {
//         color: '#FFFFFF',
//         fontSize: height / 45,
//     },
//     containers: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     map: {
//         width: Dimensions.get("window").width / 1.17,
//         height: Dimensions.get("window").height / 2.5,
//         // height: height / 3,
//         // width: width / 1.17,
//         backgroundColor: 'lightblue',
//         borderRadius: 10,
//         alignSelf: 'center',
//     },
//     gender: {
//         bottom: 85,
//         height: height / 11,
//         backgroundColor: '#FFFFFF',
//         width: width / 3,
//         alignSelf: 'flex-end',
//         right: 20,
//         borderWidth: 0.5,
//         zIndex: 3,
//         borderColor: '#707070',
//         justifyContent: 'space-evenly'
//     },

//     genTxt: {
//         fontSize: 18,
//         color: '#A7A7A7',
//         paddingHorizontal: 10
//     },
//     scroll: {
//         height: height / 15,
//         // backgroundColor: 'red'
//     },
//     redCon:
//     {
//         height: height * 0.02,
//         width: width / 1.4,
//         alignSelf: 'center'

//     },
//     redCons:
//     {
//         height: height * 0.02,
//         width: width / 2.5,
//         paddingHorizontal: 10

//     },
//     redTxt:
//     {
//         color: 'red',
//         fontSize: 13,
//     },

//     // testing
    
//     button: {
//         backgroundColor: 'cyan',
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2
//     },
//     buttonOpen: {
//         backgroundColor: "#F194FF",
        
//     },
//     buttonClose: {
//         backgroundColor: "#2196F3",
//     },
//     textStyle: {
//         color: "#707070",
//         fontWeight: "700",
//         textAlign: "center",
//         // fontSize: 12
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         // marginTop: 22
//         backgroundColor: '#707070A6'
//     },
//     modalView: {
//         height: height/5.5,
//         width: width/ 1.15,
//         backgroundColor: '#FFFFFF',
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         shadowOffset: {
//                 width: 0,
//                 height: 2,
//             },
//                borderRadius: 5,
//     },

    
//     modalText: {
//         color: '#707070',
//         fontSize: 12,
//         fontFamily: 'Jost-Bold'
//     },


// };

import DefaultSetting from '../../settings/styles/DefaultPrimarySettings';
import { Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const { height, width } = Dimensions.get('screen');

export default {
    mainContainer: {
        height: height / 1.1,
        width: width / 1,
        backgroundColor: '#FFFFFF',
    },
    secCon: {
        height: height / 13,
        width: width / 1,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    arrowCon: {
        height: height / 13,
        width: width / 7,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
    },
    arrowTxt: {
        fontSize: height / 25,
        color: '#707070',
        fontWeight: 'bold',
        // backgroundColor:'red',
    },
    headCon: {
        height: height / 13,
        width: width / 2,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtHead: {
        color: '#707070',
        // backgroundColor: '#707070',
        fontSize: height / 45,
        fontWeight: 'bold',
        width: width / 2.1
    },
    testingCon: {
        height: height / 9,
        width: width / 1.14,
        // backgroundColor: 'cyan',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    testingTxt: {
        color: '#707070',
        fontSize: height / 57,
    },
    popularCon: {
        height: height / 7,
        width: width / 1.14,
        // backgroundColor: 'cyan',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popularTxt: {
        fontSize: height / 54,
        color: '#A7A7A7',
    },
    InputCon: {
        height: height / 5,
        width: width / 1.15,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderRadius: 5,

    },
    informCon: {
        height: height / 20,
        width: width / 1.2,
        alignSelf: 'center',
        // backgroundColor : 'red',
        justifyContent: 'center',
        marginLeft: 30,
    },
    informTxt: {
        color: '#0E3F6C',
        fontSize: height / 60,
        fontWeight: 'bold',
    },

    inputField: {
        height: height / 13.5,
        width: width / 1.3,
        alignSelf: 'center',
        // backgroundColor : 'green',
        // justifyContent: 'center',
    },
    inputFieldStyle: {
        height: height / 14,
        width: width / 1.42,
        alignSelf: 'center',
        // backgroundColor : 'green',
        // justifyContent: 'center',
    },
    inputFieldStyl: {
        height: height / 14,
        width: width / 1.42,
        alignSelf: 'center',
    },
    txtInput: {
        height: height / 20,
        width: width / 1.3,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.3,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    txtInputCon: {
        height: height / 18,
        width: width / 1.42,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#F5F5F5',
        borderRadius: 9,
        paddingHorizontal: 19,
        alignSelf: 'center',
        fontSize: 12
    },
    txtUpload: {
        height: height / 20,
        width: width / 1.3,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    InputCons: {
        height: height / 2.6,
        width: width / 1.15,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderRadius: 5,
    },
    spaceGap: {
        height: height / 2.3,
        width: width / 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
    },
    txtInputs: {
        height: height / 20,
        width: width / 3,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    genderCon: {
        height: height / 20,
        width: width / 3,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputFields: {
        height: height / 13,
        width: width / 1.3,
        alignSelf: 'center',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputFieldCon: {
        height: height / 8.5,
        width: width / 1.3,
        alignSelf: 'center',
        // backgroundColor: 'cyan',
        flexDirection: 'row',
        marginTop: 5
    },
    txtInputStyle: {
        height: height / 10,
        width: width / 1.3,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    txtInputStyles: {
        height: height / 10,
        width: width / 1.3,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        // padding: 10,
        // alignItems: 'flex-end',
    },
    txts: {
        height: height / 13,
        width: width / 1.5,
        color: '#A7A7A7',
        fontSize: 14,
        // backgroundColor: 'lightblue',
        // paddingTop:5
    },
    InputContainer: {
        height: height / 7.6,
        width: width / 1.15,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderRadius: 5,
    },
    valid: {

        // height: height / 13.5,
        // width: width / 2.5,
        // backgroundColor: 'red'
    },
    txtStyle: {
        height: height / 20,
        width: width / 1.3,
        // backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 5,
        justifyContent: 'center',
    },
    spaceGaping: {
        height: height / 6.4,
        width: width / 1,
        // backgroundColor: 'blue',
    },
    spaceGaps: {
        height: height / 14,
        width: width / 1.16,
        // backgroundColor: 'blue',
        justifyContent: 'center',
    },
    btnCon: {
        height: height / 16,
        width: width / 1.29,
        backgroundColor: '#E5184E',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnTxt: {
        color: '#FFFFFF',
        fontSize: height / 49,
        fontWeight: 'bold',
    },
    inputUpload: {
        height: height / 15,
        width: width / 1.3,
        alignSelf: 'center',
        flexDirection: 'row',

    },
    buttonStyle: {
        backgroundColor: '#F5F5F5',
        height: height / 25,
        width: width / 3.3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 3,
        flexDirection: 'row',
        borderWidth: 0.2,
        borderColor: '#A2A2A2'
    },
    textStyle: {
        color: '#707070',
        fontSize: height / 75,
        width: width / 7
    },
    modalContainer: {
        height: height / 1.1,
        width: width / 1,
        backgroundColor: '#707070A6',
        justifyContent: 'center',
    },
    HeaderContainer: {
        height: height / 1.4,
        width: width / 1.16,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'grey'
    },
    mapView: {
        height: height / 3,
        width: width / 1.17,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignSelf: 'center'
    },
    plusBox: {
        height: height / 40,
        width: width / 20,
        backgroundColor: '#E5184E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusTxt: {
        height: height / 27,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        top: 1.5,
        
    },
    txtDirection: {
        
        height: height / 25,
        width: width / 2.3,
        borderColor: '#E3E3E3',
        justifyContent: 'center',
        paddingHorizontal: 5,
        // backgroundColor:'cyan',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    txtFile: {
        height: height / 34,
        width: width / 2.3,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center'

    },
    InputContext: {
        height: height / 4.3,
        width: width / 1.3,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    informContent: {
        height: height / 38,
        width: width / 1.45,
        alignSelf: 'center',
        // backgroundColor : 'red',
        // justifyContent: 'flex-end',
        paddingHorizontal: 2,
    },
    space: {
        height: height / 3.5,
        width: width / 1.17,
        justifyContent: 'center',
        // backgroundColor : 'red',
    },
    iconSize: {
        fontSize: height / 53,
        color: '#A7A7A7',
        // backgroundColor: 'cyan'
    },
    iconSizes: {
        fontSize: height / 55,
        color: '#A7A7A7',
    },
    conatiner: {
        height: height / 10,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowContainer: {
        height: height / 30,
        width: width / 15,
        backgroundColor: '#E3E3E3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF',
        height: height / 21,
        borderRadius: 5,
        width: width / 1.3,
    },
    iconStyle: {
        color: '#C1272D',
        fontSize: height / 45,
    },
    rightArrow: {
        flexDirection: 'row',
        height: height / 14,
        width: width / 2,
        // backgroundColor: 'blue',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icons: {
        color: '#FFFFFF',
        fontSize: height / 45,
    },
    containers: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: Dimensions.get("window").width / 1.17,
        height: Dimensions.get("window").height / 2.5,
        // height: height / 3,
        // width: width / 1.17,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignSelf: 'center',
    },
    gender: {
        bottom: 85,
        height: height / 11,
        backgroundColor: '#FFFFFF',
        width: width / 3,
        alignSelf: 'flex-end',
        right: 20,
        borderWidth: 0.5,
        zIndex: 3,
        borderColor: '#707070',
        justifyContent: 'space-evenly'
    },

    genTxt: {
        fontSize: 18,
        color: '#A7A7A7',
        paddingHorizontal: 10
    },
    scroll: {
        height: height / 15,
        // backgroundColor: 'red'
    },
    redCon:
    {
        height: height * 0.02,
        width: width / 1.4,
        alignSelf: 'center'

    },
    redCons:
    {
        height: height * 0.02,
        width: width / 2.5,
        paddingHorizontal: 10

    },
    redTxt:
    {
        color: 'red',
        fontSize: 13,
    },

    // testing
    
    button: {
        backgroundColor: 'cyan',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
        
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#707070",
        fontWeight: "700",
        textAlign: "center",
        // fontSize: 12
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
        backgroundColor: '#707070A6'
    },
    modalView: {
        height: height/5.5,
        width: width/ 1.15,
        backgroundColor: '#FFFFFF',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {
                width: 0,
                height: 2,
            },
               borderRadius: 5,
    },

    
    modalText: {
        color: '#707070',
        fontSize: 12,
        fontFamily: 'Jost-Bold'
    },


};