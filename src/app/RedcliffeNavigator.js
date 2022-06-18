import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PrimarySettings from '../settings/styles/DefaultPrimarySettings';
import AppLevelSpinner from './AppLevelSpinner';
import {navigationRef, Screens, navigate} from '../helpers/Screens';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  StatusBar,
  BackHandler,
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../containers/loginScreen/LoginScreen';
import FirebaseActions from './FirebaseActions';
import MyAccountScreen from '../containers/myAccountScreen/MyAccountScreen';
import PendingScreen from '../containers/pendingPackage/PendingPackage';
import sampleHandover from '../containers/sampleHandover/sampleHandover';
import Otpverification from '../containers/otpverification/Otpverification';
import Allpackage from '../containers/Allpackage/Allpackage';
import Onboarding from '../containers/OnboardingScreen/Onboarding';
import PlanDetail from '../containers/PlanDetail/PlanDetail';
import ProfileScreen from '../containers/ProfileScreen/ProfileScreen';
import Appointment from '../containers/appointment/Appointment';
import Help from '../containers/Help/Help';
import City from '../containers/City/City';
import MainScreen from '../containers/HomeScreen/MainScreen';
import EditProfile from '../containers/EditProfile/EditProfile';
import Booking from '../containers/Booking/Booking/';
import {connect} from 'react-redux';
import PatientDetails from '../containers/PatientDetails/PatientDetails';
import UpdateAddress from '../containers/UpdateAddress/UpdateAddress';
import AddAddress from '../containers/AddAddress/AddAddress';
import OrderReview from '../containers/OrderReview/OrderReview';
import AddSlot from '../containers/AddSlot/AddSlot';
import MyCart from '../containers/OrderReview/MyCart';
import PersonalInfo from '../containers/PersonalInfo/PersonalInfo';
import EditPersonalinfo from '../containers/EditPersonalInfo/EditPersonalinfo';
import MyOrder from '../containers/MyOrder/MyOrder';
import MyFamilyFriends from '../containers/MyFamily&Friends/MyFamily&Friends';
import MyAddress from '../containers/MyAddresses/MyAddress';
import UserAddAddress from '../containers/UserAddAddress/UserAddAddress';
import EditAddress from '../containers/EditAddress/EditAddress';
import TermsAndCondition from '../containers/TermsAndCondition/TermsAndCondition';
import TrackingAnimationActivity from '../containers/Tracking/Tracking';
import PhleboDetails from '../containers/Booking/PhleboDetails';
import OrderConfirmed from '../containers/OrderConfirmed/OrderConfirmed';
import UploadPrescreption from '../containers/UploadPrescreption/UploadPrescreption';
import ProfileAddress from '../containers/AddAddress/ProfileAddress';
import ProfileUserAddAddress from '../containers/UserAddAddress/ProfileUserAddAddress';
import ProfileEditAddress from '../containers/EditAddress/ProfileEditAddress';
import BlueHome from '../staticData/svg/home.svg'
import BlueHeart from '../staticData/svg/cardiogram.svg'
import GrayHeart from '../staticData/svg/GrayHeart.svg'
import BlueUser from '../staticData/svg/user.svg'
import GreyUser from '../staticData/svg/GrayUser.svg'
import GrayHome from '../staticData/svg/GrayHome.svg'
import RedCash from '../containers/RedCash/RedCash';

function RenderIcon(props) {
  let customColor = props.navigation.focused
    ? PrimarySettings.primaryColor
    : PrimarySettings.grayColors._500;
  return (
    <AntIcon name={props.iconName} style={{color: customColor}} size={20} />
  );
}

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const pendingStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: PrimarySettings.primaryColor,
      },
      headerTitleStyle: {
        color: PrimarySettings.white,
      },
    }}>
    <Stack.Screen
      name={'PendingHome'}
      component={PendingScreen}
      options={{
        headerTitle: 'Pending samples',
      }}
    />
  </Stack.Navigator>
);

const Tabs = props => {
  useEffect(() => {
    const backAction = () => {
      if (props.navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <BottomTabs.Navigator
      screenOptions={{
        showIcon: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: PrimarySettings.primaryColor,
        tabBarInactiveTintColor: PrimarySettings.grayColors._700,
        style: {
          borderRadius: 5,
          height: 50,
        },
      }}
      >
      <BottomTabs.Screen
        name={Screens.MAINSCREEN}
        component={MainScreen}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused}) => (
              <View>
                {focused ? (
                  <View>
                    <BlueHome />
                  </View>
                ) : (
                  <View>
                    <GrayHome />
                  </View>
                )}
              </View>
            ),
            tabBarLabel: 'Home',
            headerShown: false,
          };
        }}
      />

      <BottomTabs.Screen
        name={Screens.ALLPACKAGE}
        component={Allpackage}
        listeners={{
          tabPress: e => {
            navigate(Screens.ALLPACKAGE, {
              search: '',
              from: 'notmainpage',
              best: false,
            });
          },
        }}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused}) => (
              <View>
                {focused ? (
                  <View>
                    <BlueHeart />
                  </View>
                ) : (
                  <View>
                    <GrayHeart />
                  </View>
                )}
              </View>
            ),
            tabBarLabel: 'All Packages',
            headerShown: false,
          };
        }}
      />

      <BottomTabs.Screen
        name={Screens.PROFILESCREEN}
        component={ProfileScreen}
        options={({navigation}) => {
          return {
            tabBarIcon: ({focused}) => (
              <View>
                {focused ? (
                  <View>
                    <BlueUser />
                  </View>
                ) : (
                  <View>
                    <GreyUser />
                  </View>
                )}
              </View>
            ),
            tabBarLabel: 'My Profile',
            headerShown: false,
          };
        }}
      />
    </BottomTabs.Navigator>
  );
};

const style = StyleSheet.create({});

const RedCliffeStack = ({token}) => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      headerBackTitleVisible: false,
    }}
    initialRouteName={token ? Screens.TAB : Screens.ONBOARD_SCREEN}
    >
    <Stack.Screen
      name={Screens.ONBOARD_SCREEN}
      component={Onboarding}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.LOGIN_SCREEN}
      component={LoginScreen}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.OTP_VERIFICATION}
      component={Otpverification}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.CITY}
      component={City}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.TAB}
      component={Tabs}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PERSONAL_INFO}
      component={PersonalInfo}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.MYFAMILY_FRIENDS}
      component={MyFamilyFriends}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.EditPERSONAL_INFO}
      component={EditPersonalinfo}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.MY_ORDER}
      component={MyOrder}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.EDITPROFILE}
      component={EditProfile}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.HELP}
      component={Help}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.APPOINTMENT}
      component={Appointment}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PLAN_DETAIL}
      component={PlanDetail}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.MY_CART}
      component={MyCart}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PATIENT_DETAILS}
      component={PatientDetails}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.ADD_ADDRESS}
      component={AddAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.UPDATE_ADDRESS}
      component={UpdateAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.ADD_SLOT}
      component={AddSlot}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.ORDER_REVIEW}
      component={OrderReview}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.ORDER_CONFIRMED}
      component={OrderConfirmed}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.BOOKING}
      component={Booking}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.MY_ADDRESS}
      component={MyAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.USERADD_ADDRESS}
      component={UserAddAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.EDIT_ADDRESS}
      component={EditAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.TERMS_CONDITION}
      component={TermsAndCondition}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PHLEBODETAILS}
      component={PhleboDetails}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.TRACKING}
      component={TrackingAnimationActivity}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.UPLOAD_PRESCREPTION}
      component={UploadPrescreption}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PROFILE_USER_ADDADDRESS}
      component={ProfileUserAddAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    
    <Stack.Screen
      name={Screens.PROFILE_EDIT_ADDADDRESS}
      component={ProfileEditAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    <Stack.Screen
      name={Screens.PROFILE_ADDRESS}
      component={ProfileAddress}
      options={{headerMode: 'none', headerShown: false}}
    />
    
    <Stack.Screen
      name={Screens.MY_REDCASH}
      component={RedCash}
      options={{headerMode: 'none', headerShown: false}}
    />
  </Stack.Navigator>
);

const RedcliffeNavigator = props => {
  return (
    <>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        translucent={true}
      />
      <NavigationContainer
        onStateChange={() =>
          FirebaseActions.trackScreenView(
            navigationRef.current.getCurrentRoute().name,
          )
        }
        ref={navigationRef}>
        <RedCliffeStack token={props.token} />
      </NavigationContainer>
      <AppLevelSpinner />
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  token: state?.user?.userData?.token,
});

export default connect(mapStateToProps)(RedcliffeNavigator);
