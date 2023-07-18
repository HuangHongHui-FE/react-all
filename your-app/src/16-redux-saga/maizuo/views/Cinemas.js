import React, { useState, useEffect } from 'react'
import store from '../redux/store'
export default function Cinemas(props) {
    const [cityName] = useState(store.getState().CityReducer.cityName)
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            //去后台取数据
            store.dispatch({
                type: "get-cinemalist"
            })
        } else {
            console.log("store 缓存")
        }
        //订阅
        var unsubscribe = store.subscribe(() => {
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        return () => {
            //取消订阅？
            unsubscribe()
        }
    }, [])

    return (
        <div>
            <div style={{ overflow: "hidden" }}>
                <div onClick={() => {
                    props.history.push(`/city`)
                }} style={{ float: "left" }}>{cityName}</div>
                <div style={{ float: "right" }} onClick={() => {
                    props.history.push(`/cinemas/search`)
                }}>搜索</div>
            </div>
            {
                cinemaList.map(item =>
                    <dl key={item.cinemaId} style={{ padding: "10px" }}>
                        <dt>{item.name}</dt>
                        <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
                    </dl>
                )
            }
        </div>
    )
}
