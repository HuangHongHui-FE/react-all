import React, { useState, useEffect } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'
export default function Cinemas(props) {

    const [cityName] = useState(store.getState().CityReducer.cityName)

    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)


    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            //去后台取数据
            // actionCreator 里写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("store 缓存")
        }
        //订阅
        store.subscribe(() => {
            console.log("cinema 中订阅", store.getState().CinemaListReducer.list)
            setCinemaList(store.getState().CinemaListReducer.list)
        })
    }, [])

    return (
        <div>
            <div onClick={() => {
                props.history.push(`/city`)
            }}>{cityName}</div>
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
