import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import UniqueScreen from './screen/UniqueScreen';

const homeName = 'Home';
const profileName = 'Profile';
const uniqueName = 'Unique';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                tabBarOptions={{
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        height: 90
                    }
                }}
            >

                <Tab.Screen name={homeName} component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('../assets/icon/home.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#2279e2' : 'grey'
                                }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name={uniqueName} component={UniqueScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('../assets/icon/unique.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#2279e2' : 'grey'
                                }}
                            />
                        </View>
                    )
                }}/>
                <Tab.Screen name={profileName} component={ProfileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('../assets/icon/about.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#2279e2' : 'grey'
                                }}
                            />
                        </View>
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}