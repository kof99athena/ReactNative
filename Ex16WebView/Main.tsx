// 웹뷰도 라이브러리이다.
//$ npm install react-native-webview@^12.1.0

import React from 'react'
import {View,Button} from 'react-native'
import WebView from 'react-native-webview'

export default function Main():JSX.Element{
    return(
        <View style={{flex:1}}>
            {/* 웹뷰의 기본 height값은 flex:1로 설정되어 있음 */}
            <WebView source={{uri:'https://reactnative.dev/docs/0.61/webview'}}></WebView>
            <Button title='dddd'></Button>

            {/* 한화면에 여러개의 웹뷰가 존재할수있음. */}
            {/* 억지로 높이를 지정하고 싶다면 */}
            <View style={{height:200}}>
                <WebView source={{uri:'https://reactnative.dev/docs/0.61/webview'}}></WebView>
            </View>

            <WebView source={{uri:'http://mrhicock.dothome.co.kr/'}}></WebView>
            <WebView source={{uri:'http://mrhi2023.dothome.co.kr/03_kakaoMapAPI.html'}}></WebView>
        </View>
    )
}