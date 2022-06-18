import Api from '../../helpers/api';
import Locations from '../../helpers/locations';
import { resetScreen, Screens, navigate } from '../../helpers/Screens';
import SpinnerActions from '../../components/spinner/SpinnerActions';
import Constants from './MyCartConstant';
import {ToastAndroid} from 'react-native'
import { validatePathConfig } from '@react-navigation/core';

const fetchcoupon = ( token,cityId="" , value) => {

    return function (dispatch) {
        console.log(value)
        const queryParam = {
            code: `${value}`,
        }

        const successCall = (response) => {
            // disableSpinner();
            console.log(response , "all coupons ")
            dispatch({
                type: Constants.ACTIONS.GET_COUPON,
                data: response.results
            });
        };

        const errorCall = (errorResponse) => {
            disableSpinner();
            // resetScreen(Screens.LOGIN_SCREEN);
            // dispatch({
            //     type: Constants.ACTIONS.CLEAR_DATA,
            // });
        };
        Api.doGet(Locations.COUPON, queryParam, successCall, errorCall, token);
    }
}

const setPriceObj = (offer , Discount) => {
        const body = {
            offerPrice : offer,
            discount : Discount
        }
    return function (dispatch) {
            dispatch({
                type: Constants.ACTIONS.SET_PRICE_OBJ,
                data: body
            }); 
    }
}

const createBooking = ( body ,token) => {
    return function (dispatch) {
        const successCall = (response) => {
            console.log(response,"Here is the response")
            dispatch({
                type: Constants.ACTIONS.BOOKING_SUCCESS,
                data: response
            });
            if(response){
                navigate(Screens.ORDER_CONFIRMED)
            } 
        };
        const errorCall = (errorResponse) => {
            console.log(errorResponse)
            alert(JSON.stringify(errorResponse?.error))
        };
        Api.doPost(Locations.CREATE_BOOKING, body, successCall, errorCall, token);
    }
}

const clearBooking = () => {
    return function (dispatch) {
        dispatch({
            type: Constants.ACTIONS.CLEAR_BOOKING_RESPONSE
        });   
    }
}

const createBookingwithrazorpay = ( body ,token) => {
    return function (dispatch) {
        const successCall = (response) => {
            console.log(response,"Here is the response")
            dispatch({
                type: Constants.ACTIONS.RAZORPAY_SUCESS,
                data: response
            });
            
            // if(response){
            //     var options = {
            //       description: `Credits towards ${props.User.customer_name}`,
            //       image:
            //         'https://redcliffelabsbackend.s3.amazonaws.com/media/gallary-file/None/442637fd-61f4-445b-9cb1-2df9254fe064.png',
            //       currency: 'INR',
            //       notes: { bookingid: props?.booking?.pk },
            //       // testing =  rzp_test_kBEHIT9OH5OYyo
            //       // live = rzp_live_sDovuuBgCu9dw3
            //       key: 'rzp_test_kBEHIT9OH5OYyo', // Your api key
            //       amount: `${props.booking.discounted_price.final_total_price * 100
            //         }`,
            //       name: 'Redcliffe Labs',
            //       prefill: {
            //         email: `${props.User.customer_email}`,
            //         contact: `${props.User.customer_phonenumber}`,
            //         name: 'Razorpay Software',
            //       },
            //       theme: { color: '#09406b' },
            //     };
            //     RazorpayCheckout.open(options)
            //       .then(data => {
            //         // handle success
            //         // alert(`Payment done successfully`);
            //         const body = {
            //           paymentid: data?.razorpay_payment_id,
            //           bookingid: props?.booking?.pk,
            //         };
            //         props?.updatePaymentInfo(body, props?.token);
            //         setTimeout(() => {
            //           props?.getCart(props.city?.id, props?.token)
            //           navigate(Screens.ORDER_CONFIRMED)
            //         }, 200);
            //         setDisable(true)
            //       })
            //       .catch(error => {
            //         // handle failure
            //         alert(`Payment failure try again`);
            //       });
            //   }
        };
        const errorCall = (errorResponse) => {
            console.log(errorResponse)
            alert(JSON.stringify(errorResponse?.error))
        };
        Api.doPost(Locations.CREATE_BOOKING, body, successCall, errorCall, token);
    }
}



const removePackCart = (Id,token) => {
    console.log(Id,token , "PACKAGE ID   AND  TOKEN ")
   const location = `${Locations.CART}${Id}/`
    return function (dispatch) {
        const successCall = (response) => {
            console.log("succes", response)
        };
        const errorCall = (errorResponse) => {
            console.log(errorResponse,"Cart error")
        };
        Api.doDel(location, {}, successCall, errorCall, token);
    }
}

const updatePaymentInfo = ( body ,token) => {

    console.log(body,token,"Payment info")

    return function (dispatch) {
        const successCall = (response) => {
            console.log(response,"Here is the response")
        };

        const errorCall = (errorResponse) => {

            console.log(errorResponse)
            
            // resetScreen(Screens.LOGIN_SCREEN);
            // dispatch({
            //     type: Constants.ACTIONS.CLEAR_DATA,
            // });
        };
        Api.doPost(Locations.PAYMENT, body, successCall, errorCall, token);
    }
}


  
export default {
    fetchcoupon,
    setPriceObj,
    createBooking,
    createBookingwithrazorpay,
    removePackCart,
    updatePaymentInfo,
    clearBooking
}