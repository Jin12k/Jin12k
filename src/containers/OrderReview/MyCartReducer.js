import Constants from './MyCartConstant';
import { REHYDRATE } from 'redux-persist';

let initialState = {
    coupons: [],
    priceObj: {},
    bookingResponse: {}
};

export default function MycartReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case REHYDRATE:
            newState = action.payload?.user ?
                action.payload.user : newState;
            break;
        case Constants.ACTIONS.GET_COUPON:
            newState.coupons = action.data;
            break;
            RAZORPAY_SUCESS
        case Constants.ACTIONS.BOOKING_SUCCESS:
            newState.bookingResponse = action.data;
            break;
        case Constants.ACTIONS.RAZORPAY_SUCESS:
            newState.bookingResponse = action.data;
            break;
        case Constants.ACTIONS.CLEAR_BOOKING_RESPONSE:
            newState.bookingResponse = {};
            break;
        case Constants.ACTIONS.SET_PRICE_OBJ:
            newState.priceObj = action.data;
        default:
            break;
    }
    return newState;
}