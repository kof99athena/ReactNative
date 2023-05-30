import React,{Component} from "react";
import {View,Text,Button} from "react-native";

type Props = {
    title:String,
    aaa:()=>void //함수의 타입 : 파라미터없고, 리턴값도 없는 함수 
}

export default class MyComponent3 extends Component<Props>{
    render(): JSX.Element {
        return(
            <View style={{margin:16}}>
               <Button onPress={this.props.aaa} title={this.props.title}></Button>
            </View>
        )
    }
}

