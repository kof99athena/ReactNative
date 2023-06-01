import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import { StackScreenList } from '../Main';

type SecondProps = StackScreenProps<StackScreenList,'Second'>



export default function SecondComponent(props:SecondProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>Second</Text>
            {/* 이전화며으로 돌아가는 버튼 */}
            <Button title='back to the home screen' onPress={()=>props.navigation.navigate('Home')}></Button>
        
            {/* 이전화면으로 돌아가는 버튼 */}
            <Button title='go back' color='blue' onPress={()=>props.navigation.goBack()}></Button>

            {/* navigate()로 데이터를 전달받았다면... */}
            {/* props의 route라는 객체에게 파라미터값으로 전달 받을수있음 : route가 데이터를 갖고있다.  */}
            <Text style={{padding:16,color:'black',fontWeight:'bold'}}>{props.route.params?.name},{props.route.params?.age}</Text>

            <Button title='제목줄 변경' onPress={()=>props.navigation.setOptions({title:'Second!!!!!!!!'})}></Button>

        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1,padding:8},
    text:{padding:8, color:'black'}
})