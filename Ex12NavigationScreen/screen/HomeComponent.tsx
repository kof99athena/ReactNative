import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native';

//StackNavigator에서 사용할 props의 타입을 import하기
import { StackScreenProps } from '@react-navigation/stack'; 

import { StackScreenList } from '../Main';

//StackNavigator에서 사용할 props 타입을 지정 : <>제네릭으로 스크린리스트 타입을 지정한다. 현재 스크린의 이름을 지정함.
type HomeProps= StackScreenProps<StackScreenList,"Home">


//StackNavigator의 Screen으로 등록된 컴포넌트는 props를 받음
export default function HomeComponent(props : HomeProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>Home</Text>
            
            {/* SecondComponent로 이동하기 위한 버튼 */}
            <Button title='go Second' onPress={()=>props.navigation.navigate('Second')}></Button>
            {/* navigation은 화면을 전환해주는 녀석 */}

            {/* second화면으로 이동하면서 Home화면 종료  - finish*/}
            <Button title='화면 부시고 세컨드로 가기' color='pink' onPress={()=>props.navigation.replace('Second')}></Button>

            {/* second화면으로 넘어가면서 데이터를 전달해보기 [android의 Intent에서 사용하는 Extra data]*/}
            <Button title='go Second with data' color='black' onPress={()=>props.navigation.navigate('Second',{name:'sam',age:20})}></Button>

        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1,padding:8},
    text:{padding:8, color:'black'}
})