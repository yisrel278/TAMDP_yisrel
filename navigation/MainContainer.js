import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';

const homeName = 'Home';
const profileName = 'Profile';
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
/*            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === profileName) {
                        iconName = focused ? 'profile' : 'profile-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}/>
                },
            })}
            >

            tabBarOptions={{
                activeTintColor: '#8888ff',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottonm: 10, fontSize: 10 },
                style: { padding: 10, height: 70 }
            }}*/>

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}