import Api from '../../helpers/api';
import Locations from '../../helpers/locations';
import { resetScreen, Screens,navigate } from '../../helpers/Screens';
import SpinnerActions from '../../components/spinner/SpinnerActions';
import Constants from './RedCashConstants'

const getRedCashDetails = (token) => {

    console.log(token)
    return function (dispatch) {

        dispatch(SpinnerActions.showSpinner());
        const successCall = (response) => {      
            dispatch(SpinnerActions.hideSpinner());
            dispatch({
                type: Constants.ACTIONS.GET_REDCASH_DETAILS,
                data: response
            });
           console.log(response , "red cash response")
        };
        const errorCall = (errorResponse) => {
            console.log(errorResponse)
            dispatch(SpinnerActions.hideSpinner());
            // if (errorResponse.status === 401 || errorResponse.status === 403) {
            //     dispatch({
            //         type: Constants.ACTIONS.CLEAR_DATA
            //     });
            //     resetScreen(Screens.LOGIN_SCREEN)
            // }
        }
        Api.doGet(Locations.REDCASHDETAILS, {}, successCall, errorCall,token);
    }
}

export default {
    getRedCashDetails,
}