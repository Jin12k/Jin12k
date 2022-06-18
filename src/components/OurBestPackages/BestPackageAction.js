import Api from '../../helpers/api';
import Locations from '../../helpers/locations';
import { resetScreen, Screens } from '../../helpers/Screens';
import SpinnerActions from '../spinner/SpinnerActions';
import Constants from './BestPackageConstants';

const fetchBestPackages = ( token, disableSpinner,cityId="") => {

    console.log(cityId , "best package cityid")

    const queryParam = {
        best: true,
        plan: 'true',
        city_id: cityId,
    }

    return function (dispatch) {

        const successCall = (response) => {
            disableSpinner();
            dispatch({
                type: Constants.ACTIONS.SAVE_BEST_PACKAGE_LIST,
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
       
        Api.doGet(Locations.PACKAGES, queryParam, successCall, errorCall, token);
    }
}

const fetchPackages = ( token, disableSpinner,cityId="",search="") => {



    const queryParam = {
        code:search,
        city_id: cityId,
    }

    return function (dispatch) {

        const successCall = (response) => {
            disableSpinner();
            dispatch({
                type: Constants.ACTIONS.SAVE_MAIN_PACKAGE_LIST,
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
       
        Api.doGet(Locations.PACKAGES, queryParam, successCall, errorCall, token);
    }
}

const setPackages = ( item ) => {


    return function (dispatch) {

            // disableSpinner();
            dispatch({
                type: Constants.ACTIONS.SAVE_MAIN_PACKAGE_LIST,
                data: item
            });
    }
}

const postPackageToCart = (packageId,token) => {

    const queryParam = {
        package:packageId,
    }
    return function (dispatch) {

        const successCall = (response) => {
            console.log(response)
            // dispatch({
            //     type: Constants.ACTIONS.GET_MYCART,
            //     data: response.results
            // });
        };

        const errorCall = (errorResponse) => {

            console.log(errorResponse)

        };
       
        Api.doPost(Locations.CART, queryParam, successCall, errorCall, token);
    }
}





export default {
    setPackages,
    postPackageToCart,
    fetchBestPackages,
    fetchPackages,
    showPackageModal: showMessage => {
        return { type: Constants.ACTIONS.OPEN_PACKAGE_MODAL, showMessage: showMessage };
    },
    hidePackageModal: () => {
        return { type: Constants.ACTIONS.CLOSE_PACKAGE_MODAL };
    },
}