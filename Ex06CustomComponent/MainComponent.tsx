import React,{Component} from "react";
import {View,Text,StyleSheet,Button,Alert} from "react-native";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import MyComponentA from "./MyComponentA";
import MyComponentB from "./MyComponentB";



export default class MainComponent extends Component{
    render() : JSX.Element{
        return(
            //1. 나만의 Component를 만들어서 사용해보기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* 나만의 컴포넌트 사용하기 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            //이런식으로 header, body, Nav등을 영역별로 나누어 작성할 수 있음.

            //그런데 이런식이면 매번 글씨가 'hello sam'임....
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* 나만의 컴포넌트 사용하기 */}
            //     <MyComponent2 name='robin'></MyComponent2>
            //     <MyComponent2 name='kim'></MyComponent2>
            // </View>

        //3. 별도의 .tsx 파일에 나만의 컴포넌트를 만들고 사용해보기
        // <View style={style.root}>
        //     <Text>Hello RN</Text>
        //     {/* 나만의 컴포넌트 사용하기 */}
        //     {/* MyComponent3 사용 */}
        //     <MyComponent3 aaa={this.clickBtn} title='press'></MyComponent3>
        //     <MyComponent3 aaa={this.clickBtn2} title='clickme'></MyComponent3>
        // </View>

        //4. 커스텀 컴포넌트 사용할때 혹시 props 중 일부를 전달하지 않으면?? 
        //    <View style={style.root}>
        //     <Text>Hello RN</Text>
        //     {/* 나만의 컴포넌트 사용하기 */}
        //     {/* MyComponent4 사용 */}
        //     <MyComponent4></MyComponent4>
        //     <MyComponent4 title='press'></MyComponent4>
            
        // </View>

        //5. 여러속성을 한번에 저장하기
        //         <View style={style.root}>
        //     <Text>Hello RN</Text>
        //     {/* 나만의 컴포넌트 사용하기 */}
        //     {/* MyComponent5 사용 */}
        //     <MyComponent5 title='click me' color='pink' onPress={()=>Alert.alert('clicked button')}></MyComponent5>
       
            
        // // </View>

        //6. 컴포넌트간의 데이터 제어
        <View style={style.root}>
            <MyComponentA msg={this.state.message}></MyComponentA>
            <MyComponentB onPress={this.changeMessage}></MyComponentB>
        </View>

        )
    }
    //6번 실습에서 사용할 변수 - 아주 특별한 변수
    state={
        message:"Hello world"
    }

    changeMessage = ()=>{
        this.setState({message:"Nice to meet you"})
    }

    clickBtn= ()=>{
        Alert.alert('button click')
    }

    clickBtn2= ()=>{
        Alert.alert('button2222 click')
    }
}//MainComponent





//2. CustomComponent에 속성(property) 값을 전달. 
//MyComponent2의 속성(property)값들의 타입을 지정
type Props={
   name:string,
}
//속성으로 전달될 값들의 타입을 <>으로 지정
class MyComponent2 extends Component<Props>{
    render() : JSX.Element{
        return(
            <View style={{margin:16}}>
                {/* 컴포넌트를 사용할때 속성(property)으로 전달된 값은 컴포넌트의 아주 특별한 멤버변수에 자동으로 
                추가되어있다. [props (프로퍼티스)]  -> 속성값을 어디 대입한것도 아닌데 들어가있다. 특별하다
                컴포넌트에 전달된 속성값을 가지는 변수. 화면이 갱신됨.read-only 무조건 받은거는 수정이 불가하게 해둠
                
                  state는 상태값을 관리하는 애임. */}
                <Text style={{marginBottom:8, color:'black'}}>Hello {this.props.name}</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}

//1. Custom Component를 만들기 
//그냥 내 컴포넌트 만드는거임 특별한게 아님
class MyComponent extends Component{
    render() : JSX.Element{
        return(
            <View style={{margin:16}}>
                <Text style={{marginBottom:8, color:'black'}}>Hello sam</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}


const style = StyleSheet.create({
    root : {flex:1}
})