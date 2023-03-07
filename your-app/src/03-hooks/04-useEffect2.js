
import React, { useState, useEffect } from 'react'

export default function App() {
    const [name, setname] = useState("kerwin")

    useEffect(() => {
        setname(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    // 第一次执行一次， 之后name（依赖）更新也会执行, 如果填[]后面就不会再执行

    console.log('11')
    return (
        <div>
            app-{name}

            <button onClick={() => {
                setname("xiaoming")
            }}>click</button>
        </div>
    )
}
