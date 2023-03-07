import React, { useReducer } from 'react'

function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state
    }
}

export default function Demo(props) {
    const [count, dispatch] = useReducer(reducer, 0)

    return <div>
        <span>{count}</span>
        <button onClick={() => dispatch({type: 'increment'})}>+ 1</button>
        <button onClick={() => dispatch({type: 'decrement'})}>- 1</button>
    </div>
}
