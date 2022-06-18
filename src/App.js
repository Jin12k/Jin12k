import React, {useState, useEffect } from 'react'
import { getConfiguredStore, getConfiguredPersistorStore } from './app/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import RedcliffeNavigator from './app/RedcliffeNavigator';
import SplashScreen from 'react-native-splash-screen'
import messaging from '@react-native-firebase/messaging';

const persistor = getConfiguredPersistorStore();
const store = getConfiguredStore();
const App = () => {
  const [fcm, setfcm] = useState("")
  useEffect(()=>{
  SplashScreen.hide();
  requestUserPermission();
  },[]);
console.log("fcm token",fcm)
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
        getFcmToken()
        console.log('Authorization status:', authStatus);
    } else {
        console.log("fcm token error")
    }
    messaging().onNotificationOpenedApp(async remoteMessage => {
        console.log('Notification Opened', remoteMessage);
    });
}

const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
        setfcm(fcmToken)

    } else {
        console.log("Failed, No token received");
    }
}
  
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}>
        <RedcliffeNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
