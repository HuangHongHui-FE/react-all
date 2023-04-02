// useCallBack的作用不是阻止函数创建，而是在依赖不变的情况下返回旧函数地址（保持地址不变）。
// useCallBack需要配合React.memo使用
import {useCallBack,memo} from 'react';
/**父组件**/
const Parent = () => {
    const [parentState,setParentState] = useState(0);  //父组件的state
    
    //需要传入子组件的函数
    //只有这里和上一个示例不一样！！!!
    const toChildFun = useCallBack(() => {
        console.log("需要传入子组件的函数");
    },[])
    
    return <>
        <Button onClick={() => setParentState(val => val+1)}>
              点击我改变父组件中与Child组件无关的state
          </Button>
          //将父组件的函数传入子组件
          <Child fun={toChildFun}></Child>
    </>
}

/**被memo保护的子组件**/
const Child = memo(() => {
    consolo.log("我被打印了就说明子组件重新构建了")  // 这样就不会重新构建了
    return <></>
})
