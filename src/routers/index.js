import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//import screens
import Intro from '../screens/Intro'
import Register from '../screens/Register'
import Verification from '../screens/Verification'
import LandingPage from "../screens/LandingPage"
import ChatList from "../screens/ChatList"
import ChatDetail from "../screens/ChatDetail"
import MyProfile from "../screens/MyProfile"
import ContactProfile from "../screens/ContactProfile"

import { verifAction } from '../redux/action/verification';

import { DrawerContent } from '../components/DrawerStyles'


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={LandingPage} />
        </Drawer.Navigator>
    );
}

const Route = () => {
    const verification = useSelector(state => state.verification.isCode)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Your Phone',
                        headerStyle: {
                            backgroundColor: '#421908',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
                <Stack.Screen name="LandingPage" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="ChatDetail" component={ChatDetail} options={{ headerShown: false }} />
                <Stack.Screen name="ContactProfile" component={ContactProfile} options={{ headerShown: false }} />
                <Stack.Screen name="ChatList" component={ChatList} options={{ headerShown: false }} />
                <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route