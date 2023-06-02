import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {Image} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

export type TopTabScreenList= {
    one: undefined,     //실제 컴포넌트명과 전혀 다른 name을 화면이름으로 지정해도 됨
    two: undefined,
    three: undefined
}

const TopTab= createMaterialTopTabNavigator<TopTabScreenList>()

// 탭에 의해 전화될 화면들 제작 및 import
import FirstTab from './screen_materialtoptab/FirstTab'
import SecondTab from './screen_materialtoptab/SecondTab'
import ThirdTab from './screen_materialtoptab/ThirdTab'

export default function MainMaterialToptab():JSX.Element{
    return (
        <NavigationContainer>
            <TopTab.Navigator
            initialRouteName='two'
            tabBarposition='top'
            screenOptions={{
                swipeEnable:true,
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                tabBarIndicatorStyle:{
                    backgroundColor:'green',
                    height:8},
                tabBarShowIcon:true
            }}>
                <TopTab.Screen name='one' component={FirstTab}></TopTab.Screen>
                <TopTab.Screen 
                name='two' 
                component={SecondTab}
                options={{
                    tabBarLabel:'두번째',
                    tabBarIcon:()=><Image source={require('./icon/cat5.png')}></Image>,
                    tabBarShowLabel:false
                }}></TopTab.Screen>
                <TopTab.Screen name='three' component={ThirdTab}></TopTab.Screen>
            </TopTab.Navigator>
        </NavigationContainer>
    )
}