import React, { useState, useCallBack } from 'react';
import AUseCallbackTestChild from '../components/05-AUseCallbackTestChild';

/**父组件**/
const UseCallBackTest = () => {
  const [parentState, setParentState] = useState(0);

  //需要传入子组件的函数
  const toChildFun = useCallBack(() => {
    console.log('需要传入子组件的函数');
  }, []);

  // const toChildFun = () => {
  //   console.log('需要传入子组件的函数');
  // };

  return (
    <>
      <button onClick={() => setParentState((val) => val + 1)}>
        点击我改变父组件中与Child组件无关的state
      </button>
      <div>{parentState}</div>
      {/* //将父组件的函数传入子组件 */}
      <AUseCallbackTestChild fun={toChildFun}></AUseCallbackTestChild>
    </>
  );
};

export default UseCallBackTest;
