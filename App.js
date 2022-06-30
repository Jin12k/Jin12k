// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import Api from './pages/Api'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home Page' }} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }} />
            <Stack.Screen
                name="Api"
                component={Api}
                options={{ title: 'Api Screen' }} />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Setting Page' }} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }} />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Hello' }} />
            <Stack.Screen
                name="red"
                component={Api}
                options={{ title: 'none' }} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: '#42f44b',
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="SettingsStack"
                    component={SettingsStack}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="airplane-settings"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />

                <Tab.Screen
                    name="Details Stack"
                    component={DetailsScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign
                                name="profile"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;
