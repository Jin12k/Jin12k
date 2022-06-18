import SpinnerAction from '../../components/spinner/SpinnerActions';
import Api from '../../helpers/api';
import Locations from '../../helpers/locations';
import Constants from './LoginConstants';
import { Screens, resetScreen,navigate } from '../../helpers/Screens';
import { useNavigation } from '@react-navigation/native';
import jwt_decode from "jwt-decode";

const doLogin = (mobileNumber) => {

    
    const userCredentials = {
        phone_number: mobileNumber,
    }

    return function (dispatch) {
        dispatch(SpinnerAction.showSpinner());
        let loginSuccess = (response) => {
            dispatch(SpinnerAction.hideSpinner());
                dispatch({
                    type: Constants.ACTIONS.SAVE_PHONE_NUMBER,
                    payload: response
                });
                console.log(response, "response from login action ")
                navigate(Screens.OTP_VERIFICATION)
        };

        let errorCallback = (errorResponse) => {
            dispatch(SpinnerAction.hideSpinner());
            
            console.log(errorResponse)
        };
        Api.doPost(Locations.LOGIN, userCredentials, loginSuccess, errorCallback);
    }

}
 
export default {
    doLogin,
}