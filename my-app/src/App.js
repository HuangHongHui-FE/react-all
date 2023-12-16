// import Header from './views/01-Header.jsx'
// import MapTest from './views/02-MapTest.jsx'
// import LodashTest from './views/03-LodashTest.jsx'
// import AUseCallbackTest from './views/04-AUseCallbackTest'
// import AUseReducerText from './views/06-AUseReducerTest';
// import AUseReducerText2 from "./views/06-AUseReducerTest2";
// import ZdyHooksTest1 from "./views/07-ZdyHooksTest1";
// import UseStateTest from "./views/08-UseStateTest";
// import UseStateTest from "./views/09-SetStateTest1";
// import PageTokenTest from "./views/10-PageTokenTest";
import AuseEventTest from './views/11-AuseEventTest';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <MapTest></MapTest> */}
      {/* <LodashTest></LodashTest> */}
      {/* <AUseCallbackTest></AUseCallbackTest> */}
      {/* <AUseReducerText></AUseReducerText> */}
      {/* <AUseReducerText2></AUseReducerText2> */}

      {/* 测试自定义hooks，在组件状态改变时会不会重新请求 */}
      {/* <ZdyHooksTest1></ZdyHooksTest1> */}

      {/* 测试useState   set对象值会不会重新渲染页面 */}
      {/* <UseStateTest></UseStateTest> */}

      {/* 测试obj状态更新 */}
      {/* <UseStateTest></UseStateTest> */}

      {/* <PageTokenTest></PageTokenTest> */}

      {/* useEvent */}
      <AuseEventTest />
    </div>
  );
}

export default App;
