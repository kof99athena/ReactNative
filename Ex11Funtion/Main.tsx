import React,{Component, useEffect, useState} from 'react';
import {View,StyleSheet,Text, ToastAndroid, Button} from 'react-native';

export default class Main extends Component{
    render() : JSX.Element{
        return(
            <View style={style.root}>
                    {/* 새로운 Custom Component 제작 방법 */}
                    {/* 1. class Component : Component class를 상속해서 만드는 일반적인  */}
                    <MyComponent></MyComponent>

                    {/* 2. 함수형 컴포넌트 만들기 */}
                    {/* JS에서는 함수를 객체처럼 볼수있다. */}
                    {/* JS에서는 함수를 가지고 클래스를 만들었다.  */}
                    {/* 마치 함수를 객체인것처럼 사용할수있다. */}
                    <MyComponent2></MyComponent2>
                    {/* 즉, 간단한 콘텐츠를 화면에 보여주고자할때 간결하게 작성할 수 있는 컴포넌트임 */}
                    {/* 단, Component를 상속받지 않았기에 .. 생성자, state, props도 없다.  */}

                    {/* 3. 대신에 props(속성)은 전달 받는 것이 가능함 */}
                    {/* 3.1) props를 받는 일반적인 class component */}
                    <MyComponent3 data="apple"></MyComponent3>

                    {/* 3.2 props를 받는 functional component */}
                    <MyComponent4 data='Orange'></MyComponent4>

                    {/* 3.3 여려개의 속성을 받아보기 */}
                    <Mycomponent5 data='Peach' title='Hyeyoung'></Mycomponent5>

                    {/* 3.4 여러개의 속성을 구조분해할당으로 받기 */}
                    <Mycomponent6 data='fruit' title='banana'></Mycomponent6>
                    
                    {/* 4. 컴포넌트 간의 데이터 제어 */}
                    <AAA onPress={this.ChangeText}></AAA>
                    <BBB msg={this.state.msg}></BBB>

                    {/* 결론적으로 functional component는 class component에 비해 코딩이 간결하다 */}
                    {/* 코딩이 간결하여 편하지만 state가 없기에 단순한 화면 컴포넌트용으로 적합하였음. */}
                    {/* 하지만, 현재는 functional component의 간결한 코딩이 더 선호하여 */}
                    {/* state가 없다는 단점을 보완하기 위한 Hook 기능이라는 개념이 새로이 등장 */}

                    {/* 5. functional component의 Hook 실습 */}
                    {/* 이걸 기점으로 class형 컴포넌트는 쓸 일이 없다. */}
                    <MyComponent7></MyComponent7>


            </View>
        )
    }//render

    //4. 아주특별한 화면갱신에 영향주는 변수 만들기
    state : React.ComponentState = {msg:"Hello"}
    ChangeText=()=>this.setState({msg:"Nice to meet you"})


}//Main

//5. functional Component Hook...
//함수형에서 state를 사용할 수 있도록 만드는 문법 : useState 



function MyComponent7() : JSX.Element{
    //함수형 컴포넌트는 state가 없음 ,setState()가 없음
    //여긴 지역변수니까 let이 필요하다
    //msg라는 특별한 변수 (state능력을 받은)와 값을 변경하는 setMsg() 메소드를 만들기
    let [msg,setMsg] = useState<string>('Hello')
    const [age,setAge] = useState(0)

    //함수형 컴포넌트는 라이플사이클 메소드도 없음
    //화면을 갱신할때 자동호출되던 componentDidUpdate, componentDidMount 메소드를 대체하는 함수
    //화면이 처음 시작할때와 state변경으로 인해 화면이 갱신될때마다 호출되는 기능을 만들고싶을때 
    //ex. 서버에서 데이터를 읽어오거나.. DB작업등을 할때 : useEffect 
    useEffect(()=>{
        console.log('useEffect Call.....')  
    })
    


    return(
        <View style={{padding:16}}>
            <Text style={style.text}>{msg}</Text>
            <Button title='button' onPress={()=>setMsg('Good')}></Button>

            <Text style={style.text}>{age}</Text>
            <Button title='버튼' onPress={()=>{setAge(age+1)}}></Button>
        </View>
    )
    //리턴 다음에는 아무것도 실행되지 않는다. 
}



//4. 컴포넌트들간의 데이터 제어 - 직접 참조는 불가능
//4.1 버튼을 가진 컴포넌트 
type AaaProps={onPress:()=>void}
const AAA = (props:AaaProps)=>{
    return(
        <View style={{padding:16}}>
            <Button title='change' onPress={props.onPress}></Button>
        </View>
    )
}

//4.2 버튼에 의해 변경될 글씨를 보여주는 함수형 컴포넌트
type BbbProps={msg:string}
const BBB = (props:BbbProps)=>{
    return(
        <View style={{padding:8}}>
            <Text style={style.text}>message : {props.msg}</Text>
        </View>
    )
}

//3.3 여러개 프로퍼티 받기 
type Props2={
    data : string,
    title : string
}


//3.4 객체의 멤버를 쪽 뽑을때 구조분해할당이라고 한다. 
function Mycomponent6({data,title}:Props2){
    return(
        <View>
            <Text style={style.text}>MyComponent6 data : {data}</Text>
            <Text style={style.text}>MyComponent6 data : {title}</Text>
        </View>
    )
}

function Mycomponent5(props:Props2){
    return(
        <View>
            <Text style={style.text}>MyComponent5 data : {props.data}</Text>
            <Text style={style.text}>MyComponent5 data : {props.title}</Text>
        </View>
    )
}


type Props={data:string} //프로퍼티 자료형
//3.2 props를 받는 functional Component
function MyComponent4(props:Props){ //태그문의 속성으로 지정한 값들은 파라미터로 전달된다. 
    //render()가 필요없다
    return(
        <View>
            <Text style={style.text}>My Component4 : {props.data}</Text>
        </View>
    )
}


//3.1 props를 받는 class Component
//Props의 타입을 지정하자
class MyComponent3 extends Component<Props>{
    render() : JSX.Element{
        return(
            <View>
                <Text style={style.text}>My Component2 : {this.props.data}</Text>
            </View>
        )
    }
}

//3.2 props를 받는 functional component


//2.1 함수형 컴포넌트를 익명함수형태로 만들수있도 있음.
//리턴값 명시 가능 : JSX.Element
// const MyComponent2 = function() : JSX.Element{
//     return (
//         <View>
//             <Text style={style.text}>Hello My Componen2</Text>
//         </View>
//     )
// }

//2.2 화살표 함수 형태로 함수형 컴포넌트를 설계
const MyComponent2 = ():JSX.Element=>{
    //생성자는 존재하지 않음
    //constructor(){}

    //화면갱신에 영향을 주는 아주 특별한 변수 state도 없음
    //state는 Component의 기본멤버이다. Component를 상속받지 않아서 없다.
    //컴포넌트 사용하는 태그문에서 전달한 프로퍼티(속성)들 가진 props라는 특별한 변수도 없음

    return (
        <View>
            <Text style={style.text}>Hello My Componen2</Text>
        </View>
    )
}

//2.2는 축약형으로도 가능하다
//const MyComponent2 = ():JSX.Element=><View><Text style={style.text}>Hello My Componen2</Text></View>
    




// //2)Funtional component
// function MyComponent2() : JSX.Element{
// }

//1) 일반적인 컴포넌트
class MyComponent extends Component{
    render() : JSX.Element{
        return(
            <View>
                <Text style={style.text}>Hello My Component</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    root:{
        flex:1,padding:8
    },
    text:{
        fontSize:20, color:'pink',padding:8
    }
})