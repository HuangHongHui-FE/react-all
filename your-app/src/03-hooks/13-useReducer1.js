import React, { useReducer } from 'react'

//处理函数
const reducer = (prevState, action) => {
    
    console.log("reduercer", prevState, action)
    let newstate = { ...prevState }  // 注意要新复制一份
    switch (action.type) {
        case "kerwin-minus":
            newstate.count--
            return newstate

        case "kerwin-add":
            newstate.count++
            return newstate

        default:
            return prevState
    }
}


// 外部的对象
const intialState = {
    count: 0
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)  // 注意这两个参数

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "kerwin-minus"
                })
            }}>-</button>

            {state.count}
            
            <button onClick={() => {
                dispatch({
                    type: "kerwin-add"
                })
            }}>+</button>
        </div>
    )
}
