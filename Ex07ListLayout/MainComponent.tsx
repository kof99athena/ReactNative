import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class MainComponent extends Component{
    
    render(): JSX.Element {

        // 앱을 개발하면서 가장 많은 제작 빈도를 가진 리스트 형태의 레이아웃 만들어보기
        // 우선 RN에서 제공하는 ListView용 컴포넌트를 사용하지 않고 리스트형태 만들어보기

        //1) 실습에서 사용할 const 변수 : JSX컴포넌트 객체를 변수에 저장
        const aaa:JSX.Element= <Text>Nice</Text>

        //2) 실습 - 변수 하나에 여러개의 컴포넌트 저장하기 위해 큰 뷰그룹 사용
        const bbb:JSX.Element= <View style={{marginTop:8}}>
                                    <Text>Hello React Native</Text>
                                    <Button title='button'></Button>
                               </View>

        //5) 실습 - 배열의 요소로 JSX 컴포넌트 저장
        //자료형이 같으면 하나만써도 된다. 
        const arr : JSX.Element[]  = [aaa,bbb,bbb]

        //6) 실습 - 리스트형태로 보여줄 대량의 데이터 배열
        let datas:string[] = ["aaa","bbb","ccc","ddd","bbb","ccc","ddd","bbb","ccc","ddd"]


        return (
            <View style={style.root}>
                <Text style={style.title}>List Layout Test</Text>

                {/* 1. 변수에 JSX문법을 사용한 컴포넌트를 저장한 후에 사용할 수 있음 */}
                { aaa }

                {/* 변수에 저장되어 있으니 여러번 사용가능 */}
                { aaa }
                {/* { aaa } */}

                {/* 2. 변수하나에 여러개의 컴포넌트를 넣어서 사용하기 */}
                { bbb }
                {/* { bbb } */}

                {/* 3. 함수를 호출하여 JSX 컴포넌트를 리턴받아 사용하기 */}
                {this.showItemView()}

                {/* 4. 함수를 호출하면서 파라미터를 전달 */}
                {this.showItemView2("b",'first','blue')}
                {/* {this.showItemView2("b",'first','orange')} */}

                {/* 5. 배열변수에 JSX컴포넌트들을 요소로 넣어 사용하기 */}
                {/* JS는 배열을 출력하면 자동으로 요소값을 나열함 */}
                {/* {arr} */}

                {/* 6. 실제 앱개발과정에서는 대량의 데이터가 JSX컴포넌트이기보다는 일반 데이터인 경우가 더 많다. */}
                {/* {datas} 이러면 에러 - 일반 string 데이터는 컴포넌트가 아니니까 */}
                {/* 배열의 map() 메소드를 이용하여 JSX컴포넌트를 요소로 가지는 새로운 배열을 만들어서 리턴하여 보여주기 */}

                {datas.map(function(value,index,array){
                    // 배열의 요소만큼 출력된다. 
                    return(
                        <View key={index} style={style.itemView}>
                            <Text>{value}</Text>
                        </View>
                    )
                })
                }                
                

                {/* 배열의 .map()를 이용했을때의 단점 */}
                {/* key 속성을 개발젹으로 지정해야하는것 */}
                {/* 개수가 많을때 자동스크롤 되지 않는다. */}
                {/* 가로스크롤이나 스크롤바 제어 등 리스트뷰에서의 기능이 없음 */}
                {/* RN에서는 리스트뷰용 컴포넌트를 별도로 제공함 */}
            </View>
        )        
    }

    //4)실습에서 사용할 메소드
    showItemView2(name:string,btnTitle:string,btnColor:string):JSX.Element{
        return(
            <View style={{marginTop:16}}>
            <Text>Nice {name}</Text>
            <Button title={btnTitle} color={btnColor}></Button>
        </View>
        )
    }

    //3)실습에서 사용할 메소드
    showItemView():JSX.Element{
        return(
            <View style={{marginTop:16}}>
                <Text>Nice world</Text>
                <Button title='press me'></Button>
            </View>
        )//함수를 실행하면 뷰 덩어리가 리턴됨
    }

}//render

//스타일스트 객체
const style= StyleSheet.create({
    root:{ flex:1, padding:16, },
    title:{ fontSize:24, fontWeight:'bold', color:'black'},
    itemView:{ padding:16, margin:8, borderWidth:2, borderRadius:8}
})