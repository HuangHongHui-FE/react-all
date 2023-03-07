import React,{useState} from 'react'

export default function App() {

    const [text, settext] = useState("")
    const [list, setList] = useState(["aa","bb","cc"])

    const handleChange = (evt)=>{
        settext(evt.target.value)
    }

    const handleAdd = ()=>{
        setList([...list, text])  // 注意这个方法
        //情况
        settext("")
    }

    const handleDel = (index)=>{
        var newlist = [...list]
        newlist.splice(index,1)
        setList(newlist)
    }
    return (
        <div>
            <input onChange={handleChange}  value={text}/>
            <button onClick={handleAdd}>add</button>
            <ul>
            {
                list.map((item,index)=>
                <li key={item}>
                    {item}
                    <button onClick={()=>handleDel(index)}>del</button>
                </li>
                )
            }
            </ul>

            {!list.length  && <div>暂无待办事项</div>}
        </div>
    )
}
