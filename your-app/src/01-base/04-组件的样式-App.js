
import React, { Component } from 'react'
import './css/04-index.css' //导入 css模块，  webpack的支持。


export default class App extends Component {
    render() {
        var myname = "kerwin"

        var obj = {
            backgroundColor:"yellow",
            fontSize:"30px"  // 驼峰写法
        }

        return (
            <div>
                {10+20}-{myname}

                {10>20?'aaa':'bbb'}

                <div style={obj}>11111111111</div>
                <div style={{background:"red"}}>2222222222</div>

                {/* 111注释 */}

                <div className="active">3333333333333333333333</div>
                <div id="myapp">5555555555555555</div>

                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
            </div>
        )
    }
}
