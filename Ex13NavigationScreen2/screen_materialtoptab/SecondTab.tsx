import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import { MaterialTopTabScreenProps } from '@react-navigation/material-bottom-tabs'
import {TopTabScreenList} from '../'

export default function SecondTab(props:):JSX.Element{
    return (
        <View style={style.root}>
            <Text style={style.text}>Tab#1</Text>
        </View>
    )
}
const style = StyleSheet.create({
    root:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{padding:8, color:'black', fontWeight:'bold'},
})