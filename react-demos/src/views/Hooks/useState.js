import React, { useState } from 'react'

export default function Demo(props) {
    const [count, setCount] = useState(() => {
        return props.count || 0
    })
    function click () {
        // setCount(count + 1)
        setCount(count => {
            const newCount = count + 1
            // 因为异步，所以写在这里
            document.title = newCount
            return newCount
        })
        // setCount异步 拿不到最新的newCount
        // document.title = newCount
    }
    return <div>
        <span>{count}</span>
        <button onClick={click}>+ 1</button>
    </div>
}
