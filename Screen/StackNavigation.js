import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HalamanAwal from './HalamanAwal';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import SuksesLogin from './SuksesLogin';
import Home from './Home';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HalamanAwal"
                component={HalamanAwal}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SuksesLogin"
                component={SuksesLogin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export {AppStack};