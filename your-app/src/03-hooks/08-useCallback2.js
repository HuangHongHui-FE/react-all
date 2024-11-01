import React,{useState,useCallback} from 'react'

export default function App() {
    const [myname, setname] = useState("kerwin")
    const [text, settext] = useState("")
    const [list,setList] = useState(["aa","bb","cc"])

    const handleChange = useCallback(
        (evt)=>{
            settext(evt.target.value)
        },
        []
    )

    const handleAdd = useCallback(
        ()=>{
            setList([...list,text])
            settext("")
        },
        [text,list]
    )

    const handleDel = useCallback(
        (index)=>{
            var newlist = [...list]
            newlist.splice(index,1)
            setList(newlist)
        },
        [list]
    )
    return (
        <div>
            {myname} - <button onClick={()=>{
                setname("xiaomng")
            }}>change-myname</button>

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
