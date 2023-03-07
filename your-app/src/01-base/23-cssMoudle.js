import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import style from './css/23-Film.module.css'

console.log(style)
export default class Films extends Component {
    render() {
        return (
            // 注意这里的className设置
            <div className={style.film + " aaaa"}>
                <div style={{height:"200px",background:"yellow"}}>大轮播</div>

                <ul>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon" activeClassName={style.kerwinactive}>即将上映</NavLink>
                    </li>
                </ul>

            </div>
        )
    }
}
