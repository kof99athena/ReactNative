import React,{Component} from "react";
import {View,Text,StyleSheet,FlatList, ListRenderItemInfo, TouchableOpacity, Alert, Image} from "react-native";

export default class Main extends Component{
    //RN에서는 ListView의 역할을 하는 컴포넌트 2가지 종류가 있음.
    //1. 거의 90%는 FlatList를 쓴다. : 일반적인 리스트뷰
    //그리고 SectionList : 섹션에 따라 구분지어서 리스트할 때 사용
    
    //1. 먼저 FlatList에서 사용할 대량의 데이터 배열 준비 - 데이터변경에 실시간 대응을 위해 state를 사용하자
    state:React.ComponentState = {
        //일단 간단한 string 문자열 배열, 객체의 멤버변수를 만드려면 자료형을 적지 않는다. 
        datas:["apple","orange","banana","peach","orange","banana","peach","orange","banana","peach","orange","banana","peach"],
        
        //또다른데이터! 텍스트2개, 이미지1개 아이템 뷰 데이터들
        items:[
      {name:'sam',message:'Hello wolrd',img:{uri:'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'}},
      {name:'sam',message:'Hello wolrd',img:{uri:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg'}},
      {name:'kim',message:'Hello ',img:{uri:'https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_640.jpg'}},
      {name:'sam',message:'wolrd',img:{uri:'https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_640.jpg'}},
      {name:'ahn',message:'Hello wolrd',img:{uri:'https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_640.jpg'}},
      {name:'tom',message:'Hello android',img:{uri:'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_640.jpg'}},
      {name:'web',message:'Hello ios',img:require('./image/sleepcat.gif')},
      {name:'ahn',message:'Hello wolrd',img:{uri:'https://cdn.pixabay.com/animation/2023/01/24/08/28/08-28-15-16_512.gif'}},
      {name:'tom',message:'Hello android',img:{uri:'https://cdn.pixabay.com/animation/2022/07/29/10/29/10-29-00-31_512.gif'}},
    ]

    }


    render():JSX.Element{
        return(
            <View style={style.root}>
                <Text style={style.title}>Flat list</Text>
                {/* 2. FlatList : 아주 기본적인 ListView */}
                {/* 필수속성(property) 2개 : 데이터와 renderItem */}
                {/* 데이터 : FlatList가 보여줄 대량의 데이터들 지정 */}

                {/* renderItem : 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정, map안에 넣어야할걸 여기다가 넣어라. */}
                {/* map과 다르게 파라미터가 1개이다. obj :렌더링할 아이템정보 객체  */}
                {/* <FlatList
                data={this.state.datas} renderItem={(obj:ListRenderItemInfo<any>)=>{
                    return <Text>{obj.index} : {obj.item}</Text>
                }}></FlatList> */}

                {/* 위 renderItem의 obj 파라미터 객체를 구조분해할당 */}
                {/* <FlatList
                data={this.state.datas} 
                renderItem={({item,index})=>{ //구조분해할당 obj 객체의 index, item멤버를 뽑아오는것
                    return <Text>{index} : {item}</Text>
                }}></FlatList> */}

                {/* 아이템뷰의 클릭이벤트 처리 */}
                {/* <FlatList
                data={this.state.datas} 
                //구조분해할당 obj 객체의 index, item멤버를 뽑아오는것, 한줄이면 {}도 없애고 리턴값도 지울수있다.
                //파라미터에 {}있으면 무조건 구조분해할당임
                //화살표함수로 {}안에 바로 함수 만들수있다.
                renderItem={({item,index})=> 
                <TouchableOpacity style={style.itemView} onPress={()=>Alert.alert(item)}>
                    <Text>index : {index}</Text>
                    <Text>data : {item}</Text>
                </TouchableOpacity>}>
                </FlatList> */}

                 {/* 2.텍스트 2개, 이미지 1개짜리 아이템 뷰 모양 */}
                 <FlatList
                    data={this.state.items}
                    renderItem={({item,index})=>
                    <TouchableOpacity style={style.item} onPress={()=>this.showAlert(item,index)}>
                        <Image source={item.img} style={style.itemImg}></Image>
                        <View style={{flexDirection:"column"}}>
                            <Text style={style.itemName}>{item.name}</Text>
                            <Text style={style.itemMessage}>{item.message}</Text>
                        </View>
                    </TouchableOpacity>
                        
                    }>
                 </FlatList>
            
            </View>
        )
        
    }
    showAlert= (item:any,index:number)=>{
        Alert.alert(item.name+" : "+index)
    }
}
const style = StyleSheet.create({
    root:{flex:1, padding:16},
    title:{
        fontSize:20,
        color:'pink',
        fontWeight:'bold',
        alignSelf:'center'
       },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        margin:8,
        padding:8
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
        color:'red'
    }

})