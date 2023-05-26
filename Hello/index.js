/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//앱등록객체  : AppRegistry
//static 함수로 만들어져있는걸 가져온다.
//안드로이드 스튜디오 : 안드로이드는 액티비티안에 뷰를 배치한다. 
//RN : 액티비티나 뷰나 다 컴포넌트로 부른다. 
//컴포넌트안에 다른 컴포넌트가 들어간다. 

//() => App이 콜백함수로 받은 녀석을 리턴받는다. 
//APP이 뭘 리턴했지? 
