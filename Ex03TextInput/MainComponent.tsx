import React,{Component} from "react";
import {View, Text, TextInput, StyleSheet, Button, Alert, PermissionsAndroid} from "react-native";

export default class MainComponent extends Component{

    //화면갱신에 영향을 주는 아주 특별한 멤버변수
    state : React.ComponentState={
        message:"",
        msg:"안녕",
        text:"result"
    }
    
    //화면에 영향이 없는 일반 변수
    inputValue=""

    //이걸만들면서 export까지한것이다.
    render() : JSX.Element{
        //JSX.Element 이건 함수의 리턴값이다. 리턴값을 줘야한다.
        return(
            <View style={style.root}>
                {/* TextInput은 스타일이 없으면 아무것도 그리지 않는다. */}
                <TextInput onChangeText={this.changeText} style={style.textInput}></TextInput>

                {/* TextInput에 글씨를 작성할때마다 그 글씨를 보여주는 TextView */}
                <Text style={style.text}>{this.state.message}</Text>
                
                {/* 2번째실습. TextInput에 의한 Input의 입력에 사용한 소프트키보드의 [완료]버튼 눌렀을때 글씨보여주기 */}
                <TextInput onSubmitEditing={this.submitText} style={style.textInput}></TextInput>
                <Text style={style.text}>{this.state.msg}</Text>

                {/* 3번째 실습. 버튼 클릭 했을때 써있는 글씨를 Textview에 보여주기 */}
                {/* 기존 GUI와 방법론이 완전 다름.. */}
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.aaa} style={style.textInput}></TextInput>
                <Button onPress={this.clickBtn} title="작성 완료"></Button>
                <Text style={style.text}>{this.state.text}</Text>

            </View>
        )
    }


//버튼 클릭 이벤트 - 일반변수값을 Textview가 보여주는 특별한 변수에 대입
clickBtn=()=> this.setState({text:this.inputValue})


//TextInput 컴포넌트 글씨가 변경될때마다 반응하는 메소드
aaa=(value:string)=>{
    //일반변수에 저장하자.위에다가 적어
    this.inputValue = value

}

//소프트키보드의 완료버튼을 클릭했을때 반응하기
submitText=(event : any)=>{ //얘는 파라미터로 String이 아니라 이벤트객체가 전달된다. 
    let value = event.nativeEvent.text
    this.setState({msg:value})
}


//글씨 변경때마다 반응하는 콜백메소드 - 파라미터로 써 있는 글씨가 전달됨. 
changeText = ( value:String )=>{
    //텍스트 컴포넌트가 보여주는 state변수값을 변경 
    this.setState({message:value})
}
    

}//MainComponent class



//스타일 객체를 만들자
const style= StyleSheet.create({
    root : {
        flex :1 ,
        padding: 16
    },

    textInput : {
        borderWidth:2,
        borderColor:'#1DDB16',
        borderRadius:4,
        paddingLeft:16,
        paddingRight:16
    },

    text : {
        marginTop:8,
        fontWeight:'bold',
        color:'black',
        paddingLeft:16,
        paddingRight:16,
        fontSize:20
    
    }


})