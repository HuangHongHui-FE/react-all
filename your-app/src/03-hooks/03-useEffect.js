import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function App() {
    const [list, setlist] = useState([])

    useEffect(()=>{
        axios.get("/test.json").then(res=>{
            console.log(res.data)
            setlist(res.data.data.films)  // 会让整个app都执行一遍
        })
    },[]) // 传空数组， 就会只执行一遍

    return (
        <div>
            app
            {
                list.map(item=>
                <li key={item.filmId}>{item.name}</li>    
                )
            }
        </div>
    )
}
