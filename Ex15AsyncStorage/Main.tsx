// AsyncStorage Library : Android의 SharedPreferences와 비슷한 기능 

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react"; //컴포넌트 상속 안받음 왜? functional함수로 만들거니까
import {View,Text,TextInput, Button, StyleSheet,Alert} from 'react-native';

export default function Main() : JSX.Element{
    //TextInput 요소의 글씨가 변경될때마다 저장하는 state 변수
    const [inputText, setInputText] = useState<string>("") //useState할때만 사용가능

    const [data, setData] = useState<string>('result')


    const changeText = (value : string)=>{
        setInputText(value)
    }

    //load data from local storage method
    const loadData = async()=>{
        //비동기로 AsyncStorage의 "Data"라는 키의 value값을 읽어오기
        //async - await 문법으로 비동기작업을 동기작업처럼 처리
        let value = await AsyncStorage.getItem("Data") //이친구의 자료형은 string? 이다
        if(value!=null) setData(value)
        
    }


    //saveData 함수는 리턴되기전에 만든다. 
    //save data to local storage method
    const saveData = ()=>{
        //TextInput요소에 써있는 글씨를 AsyncStorage에 저장. 
        //[키,밸류] 쌍으로 저장함 sharedPreference와 똑같음
        //(키, 밸류, 저장되면 리턴하는 콜백함수)
        
        //TextInput 요소의 글씨가 변경될때마다 저장하는 state 변수 : inputText
        //비동기 작업이기에 promiss문법인 .then() 메소드를 사용

        AsyncStorage.setItem("Data",inputText).then(()=>Alert.alert('데이터 저장 성공'))
        setInputText("")
    }
    
    return(
        <View style={style.root}>
            {/* 저장할 데이터를 입력할 컴포넌트 */}
            <TextInput
                style={style.textInput}
                onChangeText={changeText}
                value={inputText}
                placeholder="Enter Some Text Here"></TextInput>
            <Button title='save data' onPress={saveData}></Button>
            <View style={{marginTop:16}}></View>
            <Button title='load data' color="orange" onPress={loadData}></Button>
            <Text  style={style.text}>{data}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    root:{flex:1,padding:16},
    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16,
    },
    text:{
        fontSize:24
    }
})