import React,{Component} from "react"
import {Image} from "react-native"
import { NavigationContainer } from "@react-navigation/native"

//BottomTabNavigator를 만들어내는 기능함수 import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import FirstTab from "./screen_bottomtab/FirstTab";
import SecondTab from "./screen_bottomtab/SecondTab";
import ThirdTab from "./screen_bottomtab/ThirdTab";


//BottomTabNavigator에 등록할 screen 컴포넌트 리스트 타입
export type BottomTabScreenList = {
    First : undefined,
    Second : undefined,
    Third : undefined,
}

//BottomTabNavigator 객체 생성
const BottomTab = createBottomTabNavigator<BottomTabScreenList>()

//Tab에서 보여줄화면 Screen 컴포넌트3개 import

export default function Main() : JSX.Element{
    return(
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="Second"
                screenOptions={{
                    tabBarActiveTintColor:'white',
                    tabBarInactiveTintColor:'gray',
                    tabBarActiveBackgroundColor:'pink',
                    tabBarShowLabel:true,
                    tabBarLabelPosition:'below-icon'
                }}>
                <BottomTab.Screen 
                 name='First' 
                 component={FirstTab}
                 options={{
                    tabBarLabel:'첫번째',tabBarIcon:()=>{return <Image source={require('./icon/cat4.png')}></Image>}
                 }}></BottomTab.Screen>
                <BottomTab.Screen 
                name='Second' 
                component={SecondTab}
                ></BottomTab.Screen>
                <BottomTab.Screen 
                name='Third' 
                component={ThirdTab}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}