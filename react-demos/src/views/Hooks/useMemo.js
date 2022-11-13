import{ useMemo, useState } from 'react';
// import {ReactDOM} from 'react-dom'
// import * as ReactDOM from 'react-dom';
export default function Demo() {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(true)
    function click() {
        setCount(count + 1)
    }
    const result = useMemo(() => {
        console.log(1)
        return count * 2
    }, [count])
    return <div>
        <span>{count} = {result}</span>
        <span>{bool ? '真': '假'}</span>
        <button onClick={click}>+ 1</button>
        <button onClick={() => setBool(!bool)}>切换真假</button>
    </div>
}
