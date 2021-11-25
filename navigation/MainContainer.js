import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
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
                    showLabel: false,
                    style: {
                        paddingBottom: 10,
                        padding: 10,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        height: 70
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
                                    tintColor: focused ? '#c90e0e' : 'grey'
                                }}
                            />
                            <Text style={{color: focused ? '#c90e0e' : 'grey'}}>HOME</Text>
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
                                    tintColor: focused ? '#c90e0e' : 'grey'
                                }}
                            />
                            <Text style={{color: focused ? '#c90e0e' : 'grey'}}>UNIQUE</Text>
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
                                    tintColor: focused ? '#c90e0e' : 'grey'
                                }}
                            />
                            <Text style={{color: focused ? '#c90e0e' : 'grey'}}>ABOUT</Text>
                        </View>
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}