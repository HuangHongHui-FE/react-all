import  React, {useState, useEffect, useRef} from 'react'

function Demo() {
    const [count, setCount] = useState(0)
    // let timer = null
    let timer = useRef()
    useEffect(() => {
        timer.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [])
    const stopCount = () => {
        console.log(timer)
        clearInterval(timer.current)
    }
    return <div>
        {count}
        <button onClick={stopCount}>停止</button>
    </div>
}


function Demo2() {
    const username = useRef();
    const refBtn = function(name){
        console.log(name)
    }
    return <div>
        <button ref={username} onClick={(username) => refBtn(username)}>resetCount</button>

    </div>
}


export default Demo;


