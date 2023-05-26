//## 타입스크립트는 JavaScript + static typed (타입이 명시된다.)

import React,{Component} from "react"
import {View, Text, Button, StyleSheet, VirtualizedList, Alert, Image} from 'react-native'

class MainComponent extends Component{
    //멤버변수 - property 
    message : string = "Hello react native" //자동추론기능 있지만 직접써보자

    //화면갱신에 영향을 주는 아주 특별한 멤버변수(속성) : state
    state : React.ComponentState = { //화면에는 여러가지 변수들이 필요하다. 그래서 무조건 {객체}로 만들어야한다
        //state는 객체 참조변수
        msg : "Hello RN", //여기서는 자료형주는거 아님
        img : require('./image/ms17.png')
    } 

    render(): JSX.Element { 
        return(
            <View style={style.root}>
                <Button title="안녕" onPress={clickBtnFunction2}></Button>
                {/* ()는 호출문, 바로 쓰면 안되고 */}
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정가능 */}

                <Button title="안녀엉" color='orange' onPress={()=>{Alert.alert('버튼')}}></Button>
                {/* 하지만 ! 버튼 콜백용 메소드는 전역보다 이 컴포넌트 클래스의 멤버로 존재하는것을 권장함 */}

                <Button title="눌러줏요" color='green' onPress={this.clickBtn}></Button>
                {/* JS언어는 class안에서 멤버접근은 (메소드는 변수든) 반드시 this 키워드랑 같이 있어야한다.  */}

                {/* 버튼 클릭 시에 Text Component의 글씨를 변경 */}
                <View style={{margin:8}}>
                    <Button title="change text" onPress={this.changeText2}></Button>

                    {/* 화면은 규격을 만드는거지 데이터를 직접 넣는게 아니다 */}
                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면... 글씨가 별도의 변수로 저장되어있어야한다. 멤버변수로 만들어보기 */}

                    <Text style={style.text}>{this.message}</Text>
                </View>


                <View style={{margin:8}}>
                    <Button title="change text" onPress={this.changeMsg} color='black'></Button>

                    {/* 화면은 규격을 만드는거지 데이터를 직접 넣는게 아니다 */}
                    {/* Text 컴포넌트의 글씨가 변경되고자 한다면... 글씨가 별도의 변수로 저장되어있어야한다. 멤버변수로 만들어보기 */}

                    <Text style={style.text}>{this.state.msg}</Text>
                </View>

                <Button onPress={this.changeImg} title="이미지 변경" color='red'></Button>
                <Image source={this.state.img} style={style.img}></Image>
                {/* 이미지는 이미지 객체를 넣는것이다. 경로를 바로 넣는게 아니다. */}
                {/* require안에는 변수가 들어갈수없다. require(변수) */}


            </View>
        )


    }//render()

    changeImg=()=>{
        this.setState({img:require('./image/ms21.png')})
    }

    changeMsg=()=>{
        //화면에 영향을 미치는 아주 특별한 변수 state의 값을 변경
        //this.state.msg="ghibili" 이렇게하면 안돼 이러면 msg를 바꾼것이다. state를 바꿔야함
        
        //자동화면 갱신이 되려면 반드시 setState() 메소드로 변경해야만함.
        this.setState({msg:"Nice to meet you"}) //state는 객체이다. 여기서도 객체로 넣어줘야한다 
        //여기서 this는 Component class
    }


    //멤버메소드 - 버튼 콜백메소드
    changeText2 = ()=>{
        this.message="Nice to meet you"
        //변수값이 바뀌어도 화면 갱신은 자동으로 이루어지지 않는다. 
        //억지로 화면을 다시 그려내는 [render()를 재호출]하는 기능 forceUpdate() : 하지만 이건 전체를 다 랜더링한다 좋은 방법이아님.        
        this.forceUpdate()

        //그래서 화면갱신에 영향을 주는 아주 특별한 변수로 만들어서 사용하기 , 안드로이드에서는 observable이라한다.
        //그 변수는 모든 Component가 기본으로 가지고 있는 변수임.
        //그 변수명 : state
    }


    changeText(){
        //TextComponent가 보여주는 값을 가진 message 멤버변수의 값 변경
        this.message="nice to meet you"
        //이 함수안에서 this.message는 누구일까요? 이 changeText라는 함수의 멤버변수로 this.message를 해독한다. 
        //MainComponent의 멤버 message로 인식하지 못한다. 
        //이를 해결하기 위해 별도의 객체로 인식되지 않는 함수 표기법 : 화살표 함수를 콜백메소드로 사용해야함. 
    }


    //멤버메소드 버튼 콜백메소드
    //class안에서는 functon이나 let은 멤버로 사용 못한다
    clickBtn(){
        Alert.alert('버튼 clicked')
    }

    


}//MainComponent




//전역의 위치
//1)선언적 함수를 만들기
function clickBtnFunction(){
    //경고창 
    Alert.alert('press button')
}

//2)익명함수 
let clickBtnFunction2 = function(){
    Alert.alert('Pressed Button2')
}

//3) 화살표 함수
let clickBtnFunction3= ()=> Alert.alert('pressed button ->>')


const style=StyleSheet.create({
    root : {
        flex :1,
        padding:16,
    },

    text : {
        color:'black',
        padding : 8
    },
    img : {
        flex:1,
        width:'100%' //tsx에서는 null이 안먹힌다. 
    }
})
export default MainComponent 