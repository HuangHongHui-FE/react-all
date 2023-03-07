import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() //创建context对象

export default function App() {
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            setfilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            call: "打电话",
            sms: "短信",
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }}>
            <div>
                {
                    filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }

                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

/*受控组件*/
function FilmItem(props) {
    let { name, poster, grade, synopsis } = props

    const value = useContext(GlobalContext)  // 直接就取到了生产者的value，不用再加一层
    console.log(value)
    
    return <div className="filmitem" onClick={() => {
        value.changeInfo(synopsis)
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
    </div>
}

function FilmDetail() {
    const value = useContext(GlobalContext)
    return <div className="filmdetail">
        detail-{value.info}
    </div>
}

