import React, { useState, useRef } from 'react'

export default function App() {

    const [list, setList] = useState(["aa", "bb", "cc"])
    const mytext = useRef() // React.createRef()
    // 同样可以保存之前的值

    const handleAdd = () => {
        setList([...list, mytext.current.value])
        mytext.current.value = ""
    }

    const handleDel = (index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }
    return (
        <div>
            <input ref={mytext} />
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>
                            {item}
                            <button onClick={() => handleDel(index)}>del</button>
                        </li>
                    )
                }
            </ul>

            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
