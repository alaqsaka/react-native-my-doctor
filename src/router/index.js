import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { GetStarted, Splash, Register, Login, UploadPhoto, Doctor, Hospitals, Messages } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospitals" component={Hospitals}/>
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen 
                name='Splash' 
                component={Splash} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='GetStarted' 
                component={GetStarted}  
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Register' 
                component={Register}  
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Login' 
                component={Login}  
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='UploadPhoto' 
                component={UploadPhoto}  
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router;