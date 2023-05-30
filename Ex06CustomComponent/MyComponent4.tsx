import React, { Component } from "react";
import { View, Text, Button } from "react-native";

type Props = {
    title: String,
    aaa: () => void, //함수의 타입 : 파라미터없고, 리턴값도 없는 함수 
    color: string
}

//props안주고 그냥 기본으로 쓰고싶을때는? 
//정적변수로 props가 전달되지 않을때의 기본값 지정 가능
//정적 타입들의 적용은 앱을 다시 실행해야 올바르게 적용됨
static defaultProps = {
 title:'untitle', 
 color:'red',
 aaa:()=>{} //aaa는 빈 함수
}

export default class MyComponent4 extends Component<Props>{
    render(): JSX.Element {
        return (
            <View style={{ margin: 16 }}>
                <Button onPress={this.props.aaa} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}

