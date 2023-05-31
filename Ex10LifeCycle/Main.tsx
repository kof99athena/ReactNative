import React,{Component} from "react";
import {View,Text,Button,StyleSheet} from "react-native";

type Props = {} //빈타입으로 만든다. 

export default class Main extends Component<Props>{
    //모든 컴포넌트의 기본 LifeCycle method
    //예전에는 6개였지만 지금은 점점 줄어듬-> 4개
    
    //1.생성자
    constructor(props:Props){
        super(props) //JS는 부모생성자의 호출을 반드시 명시적으로 해야함
        //아직 화면이 렌더링되기 전이기에 화면에 무엇인가를 출력할 수 없음. 
        //그래서 log 기록 남기기

        console.log('constructor..........')

    }

    //2. 화면에 보여지기 전에 이 컴포넌트가 화면에 연결되기 직전에 호출
    // componentWillmount(): void { //deprecated
        
    // }
    //화면 보이기전에 무엇인가 하고싶다면..?
    // UNSAFE_componentWillMount(): void {
        //UNSAFE_componentWillMount : 하지만 이것도 deprecated니까 안쓰는게 좋다 
    // }

    //3. 화면에 그려내는 메소드 : 렌더는 JSX.Element를 리턴하게 되어있다.
    render(): JSX.Element {
        console.log('render.........')
        return(
            <View style={style.root}>
                <Text style={style.title}>Component Lifecycle method</Text>
                <Button title='button' onPress={()=>this.setState({data:"hello"})}></Button>
            </View>
        )
        //리턴이 끝나면 함수는 아무것도 실행하지 않는다. 로그는 위에 남기자
    }

    //4. 화면이 그려진 후 딱 1번 호출되는 메소드
    componentDidMount(): void {
        //resume같이 매번 호출되는건 아님.
        console.log('component did mount...')
        //보통은 이곳에서 서버로딩 작업 등을 수행한다.
    }

    //5. render() 메소드가 호출된 후 항상 호출되는 메소드 (즉, 화면이 갱신 될 때 마다 실행)
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('component did update...')
        //여기에서 작업을 한다
    }

    //6. 컴포넌트가 종료될때 호출되는 메소드
    componentWillUnmount(): void {
        console.log('conponent will unmount...')
    }

}

const style=StyleSheet.create({
    root:{
        flex:1,padding:8
    },
    title:{
        fontSize:16,color:'black'
    }
})