import React,{Component} from "react";
import {View,Text,Button} from "react-native";

type Props = {
    onPress : ()=>void
}

export default class MyComponentB extends Component<Props>{
    render() : JSX.Element{
        return(
            <View style={{margin:8}}>
                <Button onPress={this.props.onPress} color='red' title='아무노래'></Button>
            </View>
        )
    }
}


