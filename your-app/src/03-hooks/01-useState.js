import React,{useState} from 'react'

export default function App() {

    const [name,setName] = useState("kerwin")
    const [age, setage] = useState(100)
    return (
        <div>
            <button onClick={()=>{
                setName("xiaoming")  //这样，小明就会替代kerwin
                setage(18)
            }}>click</button>
            app-{name}-{age}
        </div>
    )
}
