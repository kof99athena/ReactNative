// React native는 사진앱 or 카메라앱을 실행하는 기능이 없음
// 그래서 라이브러리를 사용 : react-native-image-picker
// ## 라이브러리가 외부저장소 사용에 대한 퍼미션을 알아서 처리하기에 별도의 추가작업 필요없음

import React, { useState } from 'react'
import {View, Text, Image, Button, Alert, StyleSheet, ImageURISource} from 'react-native'

//이미지피커 라이브러리 기능 메소드 import
import { launchCamera,launchImageLibrary,CameraOptions,ImagePickerResponse,ImageLibraryOptions,Asset } from 'react-native-image-picker'



export default function Main() : JSX.Element{
    //화면갱신에 영향을 주는 아주 특별한 변수 : statee
    //여긴 일반클래스가 아니라 functional클래스이다. -> functional클래스 단점 : Component를 상속받지 않음..ㅠ
    //그래서 state변수를 만들수있는 함수 : useState()로 써야한다!

    const [img,setImg] = useState<ImageURISource>({uri:'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_640.jpg'})

    //카메라앱을 실행하는 기능 화살표 함수 
    const showCamera = ()=>{
        //1. 옵션객체
        const options : CameraOptions ={
            mediaType:'photo',
            cameraType:'back',
            saveToPhotos:true,
            quality:1,
            videoQuality:'high'
        }
        launchCamera(options,(response:ImagePickerResponse)=>{
            if(response.didCancel) Alert.alert('촬영취소')
            else if(response.errorMessage) Alert.alert('Error : '+response.errorMessage)
            else{
                //여기까지온거는 이미지가 잘 촬영된것임.
                //촬영된 이미지는 response 객체의 assets라는 속성으로 전달됨
                if(response.assets != null){
                    //선택된 이미지 객체를 이미지뷰가 보여주는 img에 저장
                    //선택된 이미지의 uri경로를 얻어오기

                    const uri = response.assets[0].uri

                    const source = {uri : uri}
                    setImg(source)

                }
        
            }
        })
    }

    //사진앱을 실행하는 기능 화살표 함수
    const showPhoto = async()=>{
        //옵션객체 
        const options:ImageLibraryOptions={
            mediaType: 'photo',
            selectionLimit:5
        }

        //ES7의 새로운 문법 : async-await문법 [callback 비동기작업을 동기작업처럼 ]

        const response= await launchImageLibrary(options)
        if(response.didCancel) Alert.alert('취소')
        else if(response.errorMessage) Alert.alert(response.errorMessage)
        else{
            const uris : Asset[] = []
            response.assets?.forEach((value)=>uris.push(value))

            //원래는 FlatList로 이미지들을 보여줘야하지만.. 시간상
            //첫번째 이미지만 보여주기
            setImg(uris[0])
        }
    }


    return(
        <View style={style.root}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button title='show camera app' onPress={showCamera}></Button>
                <Button title='show photo app' color='green' onPress={showPhoto}></Button>
            </View>
            <Text style={style.text}>{img.uri}</Text>
            <Image source={img} style={style.img}></Image>
        </View>
        
    )
}

const style = StyleSheet.create({
    root:{flex:1,padding:16},
    text:{padding:8,color:'black'},
    img:{marginTop:8, flex:1}
})
