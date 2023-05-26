//리액트 라이브러리 사용

//리액트 : 웹프론트엔드
//리액트 네이티브 : 크로스 플랫폼
//이 시스템은 리액트에서 만듬 

import React,{Component} from 'react' //여기는 웹밖에 없다
import {Button, Image, StyleSheet, Text, View} from 'react-native'

//리액트 네이티브에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있다. 
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업을 하는 메소드 

    //멤버메소드 만들때는 function쓰는게 아니다.    
    render(){//상속받은 Render에는 아무것도 안써있음. 내가 원하는 함수를 쓰면된다. 
        //이 메소드 안에서 JSX(javaScript+xml)언어로 뷰를 설계하고 이를 return해준다. 
        //여러개 리턴하려면 () 소괄호를 써서 쓴다. 

        let name = "혜영" //지역변수
        let btnTitle = "click me"

        return (

            // <Text>Hello World</Text>
            // <Text>반가워여</Text>
            // 컴포넌트는 1개의 컴포넌트만 리턴할 수 있음.
            //그래서 ViewGroup을 사용해야한다. 

            //JSX는 xml안에서도 JS의 변수, 함수 사용이 가능
            //{} 변수는 중괄호 안에 넣는다. 
            //XMl 안에서 {}는 JS문법을 쓰는 영역
            //스타일 속성을 인라인으로 적용하기  - 여러개 넣으니까 객체로 넣어줘야한다. 
            <View style={style.root}>
                <Text style={style.titleText}>hello {name}</Text> 
                <Text style={style.text}>nice</Text>
                 {/* Button Component는 스타일속성이 존재하지 않는다. */}

                <View style={{margin:16}}> 
                {/* 이 자리에서 바로 리터럴 객체를 만들기 */}
                    <Button title={btnTitle}></Button>
                </View>

               <Image source={require('./image/winter3.jpg')} style={style.img}></Image> 
               {/* source는 객체를 준거임 */}

            </View> 
        )
        //<Text> : 꺽쇄로 객체를 만든것이다. 그러니까 임포트해줬어야했다.  // 'react' 는 웹이다.  'react' 가져오는게 아니다. 
        //리턴하면 React 색깔이 진해진다. 썼다는뜻

    }//render()의 마지막

}//MyApp class

//스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체를 만들기
const style= StyleSheet.create({   // const style = {} -> 리터럴객체로 만들면 스타일인지 데이터인지 헷갈려 이렇게 쓰지말자     
    root:{
        flex:1,
        backgroundColor:'#FFD9EC',
        padding:16
    },

    titleText:{
        fontSize:20,
        fontWeight:'bold',
        margin:16,
        color:'red'
    },

    text:{
        margin:16
    },

    img : { //이미지입장에서 나와 다른친구들은? Text,Button,...
        flex : 1,
        marginTop : 8,
        width : null,
        resizeMode:'contain'
    }

})

//스타일 객체 적용 - 스타일 속성값은 CSS를 기반으로 제작되었음
//리액트네이티브는 기본 플렉스이다. 위에서 아래로 배치된다. 
//기본 플렉스의 방향성은 컬럼방향이다. 
//RN는 기본적으로 display:flex가 적용되어 있음. 
//기본 배치방향{flex-direction}이 column[세로] 방향임.
//기본적으로 컴포넌트의 height는 wrap이다.  

const textStyle = {
    //{}라는것은 자바스크립트의 리터럴객체 , 세미클론아님
    color : 'red',
    fontSize : 20, //기본 단위는 dp이다. 
    fontWeight : 'bold',
    margin : 16
}

const rootStyle = {
    padding : 16,
    backgroundColor : '#FFD9EC',
    //height : '100%'
    flex : 1,  //안드로이드의 weight과 비슷한 속성, 0만 아니라면 view 혼자 다 먹게된다. 단 RN에서는 flex-grow를 flex로만 쓴다. 
    
}

//중간에 있는 글씨 스타일 만들기
const plainTextStyle={
    margin : 8,
    color : '#8041D9',
    fontSize : 42
}

//버튼의 스타일 객체 만들기, 버튼 컴포넌트는 스타일링 불가!
const btnStyle={
    margin : 80
}

//MyApp class를 다른 .js에서 사용 할 수 있도록 내보내기
export default MyApp
