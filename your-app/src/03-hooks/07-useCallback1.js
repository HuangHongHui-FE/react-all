import { useCallBack, memo } from 'react';

/**父组件**/
const Parent = () => {
    const [parentState, setParentState] = useState(0);  //父组件的state

    //需要传入子组件的函数
    const toChildFun = () => {
        console.log("需要传入子组件的函数");
    }
    return <div>
        <Button onClick={() => setParentState(val => val + 1)}>
            点击我改变父组件中与Child组件无关的state
        </Button>
          {/* //将父组件的函数传入子组件 */}
        <Child fun={toChildFun}></Child>
    </div>
}

/**被memo保护的子组件**/
const Child = memo(() => {
    consolo.log("我被打印了就说明子组件重新构建了")
    return (
        <div></div>
    )
})