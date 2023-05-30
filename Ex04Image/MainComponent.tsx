import React,{Component} from "react";
import {View, Image, StyleSheet, StatusBar, TouchableHighlight, useWindowDimensions, Alert, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground} from "react-native";

export default class MainComponent extends Component{

    //리액트 네이트브에서 화면 갱신에 영향을 주는 아주 특별한 멤버변수
    //메인화면의 상태값들
    state:React.ComponentState = {
        //img가 경로를 갖고있으면 안된다. 객체로서 경로를 갖고있다. 
        img:require('./Image/macha.jpg'),
        img2:require('./Image/img_winter1.jpg'),
        imgArr:[
            require('./Image/img_winter1.jpg'),
            require('./Image/macha.jpg'),
            require('./Image/hotel1.jpg'),
            require('./Image/blue.jpg'),
            {uri:'https://cdn.pixabay.com/photo/2023/05/21/11/54/deer-8008410_1280.jpg'},
        ],
        imgNum: 0,

    }


    render(): JSX.Element {
        return(  
            
    //1. 그림이미지. 그림이미지 소스는 require()라는 함수를 이용 - 별도의 스타일이 없으면 원본사이즈대로 
    // <View style={style.root}>
    //     <Image source={require('./Image/blue.jpg')}></Image>
    // </View> 
        

    //2. 그림이미지를 네트워크 URL을 통해 가져오기  - uri 속성을 가진 객체를 지정해야만한다. 
    //네트워크 이미지는 사이즈를 지정하지 않으면 보여주지못함. 스타일 속성이 필수이다. 
    // <View style={style.root}>
    //     <Image style={{width:200,height:200}} source={{
    //         //리터럴 객체 만들기. uri속성을 갖고 있어야한다. 
    //         uri:'https://cdn.pixabay.com/photo/2023/03/28/08/40/flower-7882645_1280.jpg'
    //     }}></Image>
    //     {/* 이 작업을스레드 안해도 해준다. 인터넷 퍼미션도 다 기본이다. */}
    // </View>

    //3. 버튼 클릭으로 이미지 변경은 이미 해봤음. 그래서 이미지를 클릭했을때 이미지변경
    // <View style={style.root}>
    //     {/* RN의 이미지는 기본으로 클릭이 되지 않는다. 클릭이 될 수 있는 컴포넌트가 정해져있다. Button,Text,TouchableXXX .... */}
    //     {/* 특정 컴포넌트를 클릭하고 싶으면, TouchableXXX로 감싸서 만듦. */}
    //     <TouchableHighlight onPress={this.clickImage} style={{padding:4}}>
    //         <Image source={this.state.img} style={{width:200,height:200}}></Image>
    //     </TouchableHighlight>

    //     <TouchableOpacity onPress={this.clickImage2} style={{padding:4, width:20}}>
    //         <Image source={this.state.img2} style={{width:200,height:200}}></Image>
    //     </TouchableOpacity>

    //         {/* 안드로이드에서만 적용되는 TouchableXXX */}
    //     <TouchableNativeFeedback onPress={this.clickImage3}>
    //         {/* 단, 뷰그룹을 가지고 있어야 효과가 적용된다.  */}
    //         <View style={{width:310,height:200,backgroundColor:'lightblue', alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:8}}>
    //             <Text style={{color:'pink',fontWeight:'bold',marginBottom:16}}>Moana</Text>
    //             <Image style={{width:300,height:150}} source={this.state.imgArr[this.state.imgNum]}></Image>
    //         </View>
    //     </TouchableNativeFeedback>
    // </View>

    //4. 이미지가 많으면 스크롤이 필요함. 스크롤뷰와 함께쓴다. 
    // <ScrollView style={style.root}>
    //     <Image source={this.state.imgArr[0]} style={style.img}></Image>
    //     <Image source={this.state.imgArr[1]} style={style.img}></Image>
    //     <Image source={this.state.imgArr[2]} style={style.img}></Image>
    //     <Image source={this.state.imgArr[3]} style={style.img}></Image>
    //     <Image source={this.state.imgArr[4]} style={style.img}></Image>
    // </ScrollView>

    //5. 배경을 이미지로 하고싶을때??? - CSS의 background-image
    //backgroung-image는 존재하지않는다.. 그러면 어케하지? : ImageBackground라는 컴포넌트를 사용한다
    <View style={{flex:1}}>
        <ImageBackground source={this.state.imgArr[4]} style={{width:'100%',height:'100%'}} >
            <Text style={{color:'white',fontWeight:'bold',fontSize:40,margin:16}}>Image Background</Text>
        </ImageBackground>
    </View>

        )//return
      
    }//render

clickImage3= ()=>{
    let num:Number = this.state.imgNum
    num++
    if(num>4) num=0
    this.setState({imgNum: num})
}

//이미지 눌렀을때 반응하는 함수
clickImage= ()=>{
    //이미지 컴포넌트가 보여주는 아주 특별한 변수 state에 값을 변경하면 화면이 자동 갱신된다.
    //state는 대입으로 바꾸는게 아니라 setState로 변경한다. State는 객체이므로 객체로 받는다.  
    this.setState({img:require('./Image/hotel1.jpg')})
}

clickImage2= ()=> this.setState({img2:require('./Image/img_winter3.jpg')}) 
    

}//Main



//스타일시트 객체를 만들자
const style = StyleSheet.create({
    root:{flex:1,},
    img:{width:300,height:200,resizeMode:'cover'}
})

