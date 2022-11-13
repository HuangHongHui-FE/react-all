import { useState, useCallback, memo } from 'react';

const Demo = memo(Children)

function App() {
  const [count, setCount] = useState(0)
//   const resetCount = () => {
//     setCount(0)
//   }
  // 使用useCallback优化，当setCount发生变化的时候才会重新得到一个函数实例
  const resetCount = useCallback(() => setCount(0), [setCount])
  return (
    <div className="App">
      <Demo resetCount={resetCount}></Demo>
      {count}
      <button onClick={() => setCount(count + 1)}>+ 1 父组件</button>
    </div>
  );
}

function Children(props) {
    console.log('子组件更新了')
    return <div>
        <button onClick={props.resetCount}>resetCount</button>
    </div>
}


export default App;
