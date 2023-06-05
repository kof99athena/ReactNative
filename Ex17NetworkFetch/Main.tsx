import React, { useState } from "react";
import {View, Text, Button, StyleSheet, ScrollView, Alert} from "react-native"

export default function Main() : JSX.Element{

    const [message,setMessage] = useState<string>('message,,,,') //훅 기술을 이용하여 텍스트 값을 바꾸는 작업!

    //영화정보 1개의 타입
    type movieInfo={
        id:string,
        title:string,
        releaseYear:string
    }

    //RN개발자 사이트의 movies.json파일 응답객체 정보
    type MoviesResponse = {
        title?:string,
        description?:string,
        movies?:movieInfo[]
    }

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>({title:'',description:'',movies:[]})

    //JS는 함수안에 함수 잇어도 된다. 
    const fetchData = ()=>{
        console.log('fetch start...')
        
        //1. JavaScript의 네트워크 작업 객체  : XMLHttpRequest
        // const xhr = new XMLHttpRequest()

        // //서버의 응답결과를 받을때 반응하는 콜백메소드를 등록, 반드시 open,send보다 먼저써야한다. 
        // xhr.onreadystatechange = ()=>{
        //     //서버의 응답을 여러개 올 수 있음.
        //     if( xhr.readyState==4 && xhr.status==200 ){
        //         Alert.alert('응답완료')
        //         setMessage(xhr.responseText)
        //     }
        // }

        // xhr.open('GET','http://webtoast2023.dothome.co.kr/index.html',true) //네트워크 작업은 비동기 작업으로 한다.
        // xhr.send()

        //이걸 쉽게 쓰는 방법이잇당 fetch library! 

        //2. fetch() 함수 - JS에 기본 내장된 네트워크 통신 라이브러리
        //프로미스 문법 promiss.then()
        // fetch('http://webtoast2023.dothome.co.kr/index.html').then((response:Response)=>{
        //     Alert.alert(response.status.toString()) //결과 200이면 오케
        // })

        // fetch('http://webtoast2023.dothome.co.kr/index.html')
        // .then((response:Response)=>{
        //     //응답객체에게 응답결과를 글씨로 바꿔달라고 요청 - 비동기 작업
        //     return response.text()
        // }).then((text:string)=>{
        //     setMessage(text)
        // }).catch((error)=>{ //위 작업 중 하나에서 에러 발생하면 실행되는 영역
        //     Alert.alert(error)
        // })

        //위 then()메소드의 파라미터 화살표 함수의 축약표현
        //fetch('http://mrhi2023.dothome.co.kr').then(response=>response.text()).then(text=>setMessage(text))

        //3. openAPI 가져오기 
        //fetch('https://reactnative.dev/movies.json').then(res=>res.text()).then(text=>setMessage(text))

        //json파싱해보기
        fetch('https://reactnative.dev/movies.json')
        .then(res=>res.json())
        .then(obj=>setMoviesResponse(obj)) 


        //HTTP REQUEST METHOD .. fetch
        let name = "sam"
        let message = "HEllo"
        fetch('http://mrhi2023.dothome.co.kr/aaa.php?name=${name}&msg=${message}')
        .then(res=>res.text())
        .then(text=>setMessage(text))

        //POST 방식
        fetch('http://mrhi2023.dothome.co.kr/bbb.php',{
            method : 'POST',
            headers: {'Content-type':'application/x-www-form-urlecoded'},
            body : `name=${name}&msg=${message}`
        })
        .then(res=>res.text())
        .then(text=>setMessage(text))

        //3) POST로 보낼 데이터가 객체일때는 그냥 json 문자열로 변환하여 서버로 보냄. 
        let person={name:'robin', age:20, address:'seoul'}
        fetch('http://mrhi2023.dothome.co.kr/ccc.php',{
            method: 'POST',
            headers: {'Content-type':'application/json'}, //보낼데이터가 json
            body : JSON.stringify(person) //object--> json
        })
        .then(res=>res.json).then(obj=>Alert.alert('하이'))

    }

    return(
        <View style={style.root}>
            <Button title='fetch data from network' onPress={()=>fetchData()} ></Button>

            <ScrollView style={style.container}>
                <Text style={style.text}>{message}</Text>
            </ScrollView>

            {/* 영화정보 리스트 */}
            <View style={{flex:1,marginTop:16}}>
                <Text style={{color:'black',fontWeight:'bold'}}>{moviesResponse.title}</Text>

                {/* 영화정보는 여러개임.. FlatList 컴포넌트 써야 하지만 */}
               
                {
                    moviesResponse.movies.map( (movie:MovieInfo, index:number) =>{

                        return (
                            <View key={index}>
                                <Text> {movie.id} </Text>
                                <Text> {movie.title} </Text>
                                <Text> {movie.releaseYear} </Text>
                            </View>
                        )
                    })
                }
            
            </View>

        </View>
    )
}
const style=StyleSheet.create({
    root:{ flex:1, padding:16 },
    container:{marginTop:16},
    text:{fontSize:24}
})