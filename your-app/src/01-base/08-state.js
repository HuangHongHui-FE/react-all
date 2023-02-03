import React, { Component } from 'react'

export default class App extends Component {
    a = 1
    state = {
        mytext: "收藏",
        myShow: true
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>

                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow
                    })

                    if (this.state.myShow) {
                        console.log("已收藏")
                    } else {
                        console.log("已取消收藏")
                    }
                }}>{this.state.myShow ? '收藏' : "取消收藏"}</button>
            </div>
        )
    }
}
