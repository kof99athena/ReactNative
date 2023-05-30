import React,{Component} from "react";
import {View,Text,Button} from "react-native";

type Props = {
    msg : string
}

export default class MyComponentA extends Component<Props>{
    render() : JSX.Element{
        return(
            <View style={{margin:8}}>
                <Text style={{color:'black'}}>{this.props.msg}</Text>
            </View>
        )
    }
}


