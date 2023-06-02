import React from "react";
import {View, Text, StyleSheet} from 'react-native';

//Navigator의 screen은 props 객체를 전달받음 - 그 타입을 지정
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'; 
import { BottomTabScreenList } from "../Main";
type ThirdProps = BottomTabScreenProps<BottomTabScreenList,'Third'>
//<내가 무슨타입인지, '이름'>

export default function ThirdTab(props:ThirdProps){ //props 객체 : { navigation, route }
    return(
        <View style={style.root}>
            <Text style={style.text}>Third Tab</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{ flex:1, padding:8, justifyContent:'center', alignItems:'center'},
    text:{ padding:8, color:'black' },

})