import React,{useState} from 'react'

export default function App() {

    const [count, setcount] = useState(0)
    //useState 记忆函数， 记住状态

    var mycount = 0 

    return (
        <div>
            <button onClick={()=>{
                setcount(count+1)
                mycount++
            }}>add</button>
            {count}-{mycount}
        </div>
    )
}
