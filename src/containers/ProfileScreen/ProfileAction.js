import Api from '../../helpers/api';
import Locations from '../../helpers/locations';
import { resetScreen, Screens,navigate } from '../../helpers/Screens';
import SpinnerActions from '../../components/spinner/SpinnerActions';
import Constants from './ProfileConstants'

const getProfileDetails = (token) => {

    return function (dispatch) {

        dispatch(SpinnerActions.showSpinner());
        const successCall = (response) => {      
            dispatch(SpinnerActions.hideSpinner());
            dispatch({
                type: Constants.ACTIONS.GET_PROFILE_DETAILS,
                data: response.profile
                
            });
           console.log(response)
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
        Api.doGet(Locations.USER, {}, successCall, errorCall,token);
    }
}

const getRiskArea = () => {

    return function (dispatch) {

        dispatch(SpinnerActions.showSpinner());
        const successCall = (response) => {      
            dispatch(SpinnerActions.hideSpinner());
            dispatch({
                type: Constants.ACTIONS.GET_RISK_AREA,
                data: response.results    
            });
            console.log(response.results , "risk area action response asdfghjkl")
        };
        const errorCall = (errorResponse) => {
            console.log(errorResponse , "risk area error")
            dispatch(SpinnerActions.hideSpinner());
        }
        Api.doGet(Locations.RSIKAREA, {}, successCall, errorCall,{});
    }
}


const logout = () => {

    return function (dispatch) {

        // dispatch(SpinnerActions.showSpinner());
        dispatch(SpinnerActions.hideSpinner());
        dispatch({
            type: Constants.ACTIONS.CLEAR_DATA,
            
        });
        navigate(Screens.LOGIN_SCREEN)
        // const successCall = (response) => {      
           
        // };
        // const errorCall = (errorResponse) => {
        //     dispatch(SpinnerActions.hideSpinner());
        //     // if (errorResponse.status === 401 || errorResponse.status === 403) {
        //     //     dispatch({
        //     //         type: Constants.ACTIONS.CLEAR_DATA
        //     //     });
        //     //     resetScreen(Screens.LOGIN_SCREEN)
        //     // }

        // }
    }
}

export default {
    getProfileDetails,
    logout,
    getRiskArea
}