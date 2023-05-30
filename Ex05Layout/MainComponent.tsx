import React,{Component} from "react";
import {View} from 'react-native';

export default class MainComponent extends Component{
    render() : JSX.Element{
        return(
            //여러개의 컴포넌트를 배치하려면 큰 뷰 그룹이 있어야한다. return은 1개의 컴포넌트만 가능하다. 
            
            //1. 3개의 자식뷰 배치하기
            // <View>
            //     {/* 뷰의 사이즈는 width나 height에 숫자나 %를 사용함. 기본단위는 dp이다 */}
            //     <View style={{width:50,height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:100,height:100, backgroundColor:'green'}}></View>
            //     <View style={{width:'70%',height:150, backgroundColor:'blue'}}></View>
            // </View> 

            //2. 3개의 자식뷰 높이를 수치값을 주면 해상도에 대응하기 어렵다. 
            // 그래서 비율로 높이값을 지정하는것은 권장한다. RN에서는 flex 레이아웃을 권장함. 
            // 화면의 높이를 3분할하여 1:2:4가 되도록..
            // 흔히 실수함..!! : 최상위 뷰의 높이의 기본값은 wrap이다. 부모사이즈가 없다는뜻.
            // 그상태에서 flex를 줘봤자 소용없다. 그래서 부모 View의 height가 필요하다

            //화면 전체를 사용하려면 View의 높이는 수치값을 알기 어려움. 그래서 flex로 높이를 지정하길 권장한다. {flex:!} 

            // <View style={{flex:1}}>
            //     {/* 바깥 {}는 자바스크립트, 안의 {}는 객체라는뜻 */}
            //     <View style={{flex:1,backgroundColor:'red'}}></View>
            //     <View style={{flex:2,backgroundColor:'green'}}></View>
            //     <View style={{flex:4,backgroundColor:'blue'}}></View>
            // </View>

            //3. RN의 flex스타일의 기본 배치방향은 column방향(세로). 배치방향을 변경하여 배치해보기 - 가로배치(row배치)해보기
            //가로방향으로 1:2:4의 비율로 너비를 지정
            //flex 스타일의 정렬 중 배치방향의 교차축 정렬align-items의 기본값이 stretch여서 100% 높이값으로 보여짐 

            // <View style={{flex:1,flexDirection:'row'}}>
            //     <View style={{flex:1,backgroundColor:'red'}}></View>
            //     <View style={{flex:2,backgroundColor:'green'}}></View>
            //     <View style={{flex:4,backgroundColor:'blue'}}></View>
            // </View>

            //4-1. 자식뷰들의 높이와 너비를 개별 지정하여 배치 정렬해보기
            //justifyContent : 배치방향과 같은 축의 정렬 
            //alignItems : 배치방향과 교차 축의 정렬
            //flex-end : end인 이유는? reverse가 존재해서. 
            //space-around : 둘러싼 간격이 있다. 그래서 가운데 너비가 더 커보인다. 
            //space-evenly: 간격 크기가 어디든 다 같다. 
            //stretch - 남은공간만큼 뷰의 크기를 차지한다. 단, width나 height가 없어야한다. 

            // <View style={{flex:1, flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
            //     <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'aqua'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'pink'}}></View>
            // </View>

            //4-2. 가로배치일때의 정렬
            //alignItems: 자식뷰를 건드릴때
            //alignSelf : 본인위치 
            // <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}}>
            //     <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'aqua',alignSelf:'flex-end'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'pink'}}></View>
            //     {/* 자식중에서 1개만 다른 정렬을 하고싶을때...justifySelf, alignSelf */}
            // </View>

            //5. 자식뷰들의 너비나 높이를 하나만 주고 나머지는 flex로 비율로 크기 지정
            // <View style={{flex:1,flexDirection:'column'}}>
            //     <View style={{height:50,backgroundColor:'red'}}></View>
            //     {/* 이 남은 공간은 1:2의 높이로 높이값을 지정 */}
            //     <View style={{flex:1,backgroundColor:'green'}}></View>
            //     <View style={{flex:2,backgroundColor:'blue'}}></View>
            // </View>

            //6.중첩구조배치 수직/수평의 중첩 : 배치가 겹치지 않음
            //뷰들이 겹치려면 어떻게 해야할까? flex스타일은 뷰의겹침을 허용하지 않음. 
            //뷰를 겹치려면 ..???? position 속성을 이용. RN의 모든 컴포넌트는 기본 position : relative임
            //position속성을 absolute로 하면 뷰의 포지션을 직접 지정하기에 뷰를 겹칠 수 있음.
            //또한 부모뷰가 relative여서 부모뷰의 좌상단을 기준으로 배치함
            <View style={{flex:1,flexDirection:'column'}}>
                {/* 크게 영역을 수직으로 2분할 {1:2 비율} */}

                {/* 6-1 상단 1의 영역 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 이 안에서 다시 좌우분할 {2:1}*/}
                    <View style={{flex:2, backgroundColor:'red'}}>
                        {/* 이곳에 절대배치해보자. 뷰를 겹치게 해보자 */}
                        <View style={{width:50,height:50,backgroundColor:'black',left:10,top:10, position:"absolute"}}></View>
                        <View style={{width:50,height:50,backgroundColor:'white',left:30,top:30, position:"absolute"}}></View>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1,backgroundColor:'yellow'}}></View>
                        <View style={{flex:3,backgroundColor:'blue'}}></View>
                    </View> 
                </View>

                {/* 6-2 상단 2의 영역 */}
                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 1:2 분할 */}
                    <View style={{flex:1,backgroundColor:'green'}}></View>
                    <View style={{flex:2}}>
                        <View style={{flex:1,backgroundColor:'gray'}}></View>
                        <View style={{flex:3,backgroundColor:'pink'}}>
                            {/* 이곳에 절대배치해보자. 뷰를 겹치게 해보자 */}
                        <View style={{width:50,height:50,backgroundColor:'black',left:10,top:10, position:"absolute"}}></View>
                        <View style={{width:50,height:50,backgroundColor:'white',left:30,top:30, position:"absolute"}}></View>
                        </View>
                    </View>
                </View>

                {/* 절대 위치 지정 */}
                <View style={{width:100,height:100, backgroundColor:'aqua',position:'absolute', bottom:50,left:90, borderRadius:50}}></View>


            </View>
        )
    }
}