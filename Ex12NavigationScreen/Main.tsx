//리액트 네이티브는 기본적으로 Screen(화면) 전환 기능를 제공하지 않기에 Library를 사용해야함
//가장 유명한 화면전환 라이브러리 : react navigation 사이트가서 참고하기 
//package.json파일안의 디펜던시스에서 확인가능 

//(1)기본 필수 라이브러리 추가 @react-navigation/native
//(2)추가 라이브러리 react-native-screens, react-native-safe-area-context

//Main 컴포넌트 만들기, 컴포넌트 상속안받을거임 
import React from "react";
import {Button,Image} from 'react-native';

//1. 가장 먼저 Navigatior들을 감싸는 최상위 Container컴포넌트가 있어야함
import { NavigationContainer } from "@react-navigation/native";

//3.
import { createStackNavigator } from "@react-navigation/stack";

//Stack Navigator에 의해 전환될 화면 스크린 컴포넌트들 import
import HomeComponent from "./screen/HomeComponent";
import SecondComponent from "./screen/SecondComponent";

//Main.tsx에서 만든 StackNaigator의 스크린 리스트 타입이 필요함 


//typescript에서는 스크린 리스트를 타입으로 지정해줄 것을 권장함.
export type StackScreenList = {
    Home : undefined, //화면명(root명) : 전환할때 전달할 파라미터의 자료형
    Second : undefined | {name:string,age:number}, // 즉 or 연산자로 타입 여러개를 지정가능 
    //화면을 2개 만들것이다.
}

const Stack = createStackNavigator<StackScreenList>()

//2. 화면 전환 방법을 결정하는 Navigator의 종류가 여러개....
//Stack, Drawer, BottomTab, MaterialBottomTab, MaterialTobTab
//각 네비게이터를 사용할대 마다 전용 라이브러리 추가로 설치해야함

//이중에서 가장 기본인 StackNavigator 사용해보기 - 라이브러리 설치

export default function Main() : JSX.Element{
    
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'pink'},
            headerTintColor:'white',headerTitleAlign:'center'}}>
                  {/* screenOptions : 값이 하나가 아닌까 {} 객체로 만들어서 넣어준다.   */}
                {/* 빨간애 */}
                <Stack.Screen 
                    options={{title:'길고양이',
                    headerTintColor:'yellow',
                    headerRight:()=>{return <Button title='버튼'></Button>},
                    headerLeft:()=><Image source={require('./Image/cat2.gif')} style={{width:100,height:100}}></Image>}}
                    
                    name='Home' 
                    component={HomeComponent}></Stack.Screen>
                <Stack.Screen 
                    name='Second' 
                    component={SecondComponent}></Stack.Screen>
                {/* Second화면은 불러야 나온다.  */}
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}