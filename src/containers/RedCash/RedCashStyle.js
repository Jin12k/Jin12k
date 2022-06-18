import DefaultSetting from '../../settings/styles/DefaultPrimarySettings';
import { Dimensions, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default {
    mainContainer: {
        height: height / 1,
        width: width / 1,
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',

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
    boxSpace: {
        height: height / 3.5,
        width: width / 1,
        alignItems: 'center'
    },
    boxCon: {
        height: height / 4.57,
        width: width / 1.08,
        // backgroundColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        // justifyContent: 'center'

    },
    headDirect: {
        height: height / 18,
        width: width / 1.08,
        // backgroundColor: 'blue',
        flexDirection: 'row'
    },
    headDirects: {
        height: height / 25,
        width: width / 1.08,
        // backgroundColor: 'blue',
        flexDirection: 'row'
    },
    titleCon: {
        height: height / 17,
        width: width / 7.6,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3
    },
    titleCons: {
        height: height / 25,
        width: width / 7.6,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2
    },
    headTxt: {
        fontSize: 12,
        color: '#707070'
    },
    headTxts: {
        fontSize: 10,
        color: '#707070'
    },
    redCashCon: {
        height: height / 10,
        width: width / 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'blue',
    },
    txtDirect: {
        height: height / 18,
        width: width / 1.08,
        // backgroundColor: 'pink',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: '#707070',
        shadowOpacity: 5

    },
    priceCon: {
        height: height / 18,
        width: width / 3.5,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fontSize: {
        fontSize: 16,
        color: '#0E3F6C',
        fontWeight: 'bold'
    },
    txtPrice: {
        fontSize: 14,
        fontWeight: '500',
        color: '#707070'
    }
}